docker run --name postgresdb -e POSTGRES_PASSWORD=123456 -d postgres

docker run --link postgresdb:db -p 8080:8080 adminer