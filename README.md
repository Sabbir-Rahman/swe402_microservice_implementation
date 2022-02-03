### Sample microservice
Here a sample microservice is created with api gateway pattern. Here api_gateway will be handle by nginx a proxy server that will send request to other services.
All the services will be running and managing by the docker

 PORT and Service : 
* 5000 => service_a
* 5001 => service_b
* 5002 => service_c

### Routes
* localhost/a => service_a
* localhost/b => service_b
* localhost/c => service_c


### Run Command
``` docker-compose up ```
