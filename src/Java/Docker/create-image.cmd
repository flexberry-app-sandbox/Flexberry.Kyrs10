docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kyrs10-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kyrs10-java/app ../../..
