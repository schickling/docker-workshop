# Web server

## Dependencies

* NodeJS (https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server)
* NPM

## Install

```sh
$ cd app
$ npm install
```

## Start server (exposes port 3000)

```sh
$ cd app
$ node index.js
```

## Routes

* `/` lists all articles
* `/add` adds an article

# Database server

Use the `mongo` image:

```sh
$ docker pull mongo
```

# Linking tips

Use the `--name` and `--link` parameters.

Docs: http://docs.docker.com/userguide/dockerlinks/
