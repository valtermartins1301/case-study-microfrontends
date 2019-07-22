FROM node:latest AS build

WORKDIR /build

COPY src /build/src/
COPY package.json /build/
COPY package-lock.json /build/
COPY gatsby-config.js /build/

RUN ls -lha
RUN node -v && npm -v
RUN npm install && npm run build

FROM nginx:alpine

RUN mkdir -p /www

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /build/public /www

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
