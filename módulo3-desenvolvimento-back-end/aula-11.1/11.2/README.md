# MongoDb

## Docker Compose

```shell
docker compose up mongo
docker container exec -it mongo-db bash
docker container exec -it mongo-db mongo
docker container exec -it mongo-db mongosh
```

## mongoexport

```shell
mongoexport --jsonArray --db aula-filter-operators --type=json --collection filmes --out 1-file-json/backup-filmes.json

mongoimport --jsonArray --db aula-filter-operators --collection filmes 1-file-json/filmes.json
```
