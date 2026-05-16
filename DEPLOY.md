# Деплой на VPS (Ubuntu + Nginx)

Этот проект собран на TanStack Start, но раздаётся как **обычная статика** — никакого Node, Workers или Wrangler в продакшене не нужно.

Сборка делает две вещи:
1. `vite build` — собирает `dist/client/` (хешированные ассеты) и `dist/server/` (бандл, нужный только на этапе сборки).
2. `scripts/prerender.mjs` — один раз вызывает SSR-обработчик из Node и сохраняет готовый HTML главной страницы в `dist/client/index.html`.

В итоге в `dist/client/` лежит полностью самодостаточный SPA с пререндернутой главной — отдаём через Nginx.

---

## Вариант A. Деплой через Docker (рекомендуется)

На VPS:

```bash
# 1. Установить Docker (один раз)
curl -fsSL https://get.docker.com | sh

# 2. Склонировать репозиторий
git clone <repo-url> app && cd app

# 3. Собрать и запустить
docker build -t pohod-landing .
docker run -d --name pohod-landing --restart unless-stopped -p 80:80 pohod-landing
```

Сайт будет доступен на `http://<ip-сервера>`.

Обновление после изменений:

```bash
git pull
docker build -t pohod-landing .
docker stop pohod-landing && docker rm pohod-landing
docker run -d --name pohod-landing --restart unless-stopped -p 80:80 pohod-landing
```

---

## Вариант B. Деплой без Docker (Nginx нативно)

### 1. Подготовить VPS (Ubuntu 22.04 / 24.04)

```bash
sudo apt update
sudo apt install -y nginx
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
```

### 2. Собрать проект

Можно собирать **локально** и заливать только `dist/client/` на сервер, либо собирать прямо на VPS:

```bash
git clone <repo-url> app && cd app
npm ci
npm run build
npm run prerender
```

После этого готовая статика лежит в `dist/client/`.

### 3. Положить статику и настроить Nginx

```bash
sudo mkdir -p /var/www/pohod
sudo cp -r dist/client/* /var/www/pohod/

sudo cp deploy/nginx.conf /etc/nginx/sites-available/pohod
# в конфиге root указан /usr/share/nginx/html — поменяй на /var/www/pohod,
# либо отредактируй копию заранее:
sudo sed -i 's|/usr/share/nginx/html|/var/www/pohod|' /etc/nginx/sites-available/pohod

sudo ln -sf /etc/nginx/sites-available/pohod /etc/nginx/sites-enabled/pohod
sudo rm -f /etc/nginx/sites-enabled/default

sudo nginx -t && sudo systemctl reload nginx
```

### 4. HTTPS через Let's Encrypt

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d example.com -d www.example.com
```

`certbot` сам поправит `nginx.conf` и настроит автообновление сертификата.

---

## Обновление контента

После любых правок в коде:

```bash
npm run build && npm run prerender
rsync -a --delete dist/client/ user@server:/var/www/pohod/
sudo systemctl reload nginx     # (на сервере, опционально)
```

---

## Что НЕ нужно в проде

- ❌ `wrangler` / Cloudflare Workers runtime
- ❌ Node.js процесс (Node нужен только при сборке)
- ❌ PM2 / systemd unit для приложения
- ❌ Открытые порты кроме 80/443

Раздаётся чистая статика, поэтому ресурсы VPS требуются минимальные (1 vCPU / 512 MB RAM хватит с запасом).
