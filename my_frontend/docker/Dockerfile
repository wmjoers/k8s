# Build Angular app
FROM node:alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

# Wrap Angular app in NGINX
FROM nginx:alpine
COPY ./docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/my_frontend /usr/share/nginx/html
EXPOSE 80