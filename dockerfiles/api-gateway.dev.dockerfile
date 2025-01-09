FROM nginx:1.19-alpine

COPY conf/nginx.dev.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]