# api end point
List Owners:
get--->/owner
add pet:
post---> /pet
update pet:
put---> /pet

get owner and pet information
get ---> /owner/1

your can run the docker file or run it locally 

locally -> npm run dev  test->npm run test
docker file have the configuration for creating a docker image 

command for docker 

# build docker image
docker build . -t satejsarker/owner_pet

check docker images
docker images

run---
docker run -p 80080:8080 -d satejsarker/owner_pet

