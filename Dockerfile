FROM node:14.21.3
MAINTAINER "Ekstep" "info@ekstep.in"
USER root
COPY src /opt/program-service/
WORKDIR /opt/program-service/
RUN npm install
CMD ["node", "app.js", "&"]
