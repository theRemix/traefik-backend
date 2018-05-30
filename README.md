# Traefik backends test

### Start test

```sh
docker-compose up
```

### Verify

```sh
curl localhost:8080
```

### Inspecting

```sh
docker-compose exec traefik sh
apk add --update curl
curl node-app:3000
curl localhost
```

### Debugging

make changes to `traefik.toml`

kill `docker-compose`

`docker-compose down`

`docker-compose up`
