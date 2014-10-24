FROM ubuntu:14.04

RUN apt-get update && apt-get install -y nodejs npm
ADD app app
RUN cd /app && npm install

EXPOSE 3000

CMD ["nodejs", "/app"]
