FROM node:14.15.0-alpine AS builder
WORKDIR /app/dist/docker-angular

RUN npm install
RUN npm run build --prod 

COPY . .

EXPOSE 4200/tcp

FROM nginx:alpine
COPY --from=builder /app/dist/docker-angular /usr/share/nginx/html
