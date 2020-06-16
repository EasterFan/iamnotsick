FROM nginx:latest

LABEL maintainer = "fan.eastor@gmail.com"
LABEL version = "1.0"
LABEL description = "front-end of lastwish"

ADD ./dist/ /usr/share/nginx/html/
ADD nginx.conf /etc/nginx/
EXPOSE 80
