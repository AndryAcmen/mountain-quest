# ---------- Stage 1: build ----------
FROM node:22-alpine AS builder

WORKDIR /app

# Install deps (use npm because package-lock.json is committed)
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source and build
COPY . .

# Vite build produces dist/client (static assets) and dist/server (Worker bundle).
# We then invoke the Worker's fetch() once from Node to prerender / into
# dist/client/index.html so the result can be served as a plain static SPA.
RUN npm run build && npm run prerender

# ---------- Stage 2: runtime (Nginx) ----------
FROM nginx:1.27-alpine AS runtime

# Replace default Nginx site with our SPA config
RUN rm /etc/nginx/conf.d/default.conf
COPY deploy/nginx.conf /etc/nginx/conf.d/app.conf

# Copy built static assets only — no Node, no Worker, no Wrangler in runtime
COPY --from=builder /app/dist/client /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
