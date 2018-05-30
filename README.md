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
```
