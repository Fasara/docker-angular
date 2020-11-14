FROM node:14.15.0-alpine AS builder
WORKDIR /app/temp-build-dir

COPY . .

RUN npm install
RUN npm run build --prod 


EXPOSE 4200/tcp

FROM nginx:alpine
COPY --from=builder /app/temp-build-dir/dist/docker-angular /usr/share/nginx/html
