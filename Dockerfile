FROM node:12.16.1

LABEL maintainer = "fan.eastor@gmail.com"
LABEL version = "1.0"
LABEL description = "front-end of lastwish"

COPY . .
RUN npm install
EXPOSE 1234
CMD ["npm","start"]
