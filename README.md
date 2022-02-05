### Sample microservice
Here a sample microservice is created with api gateway pattern. Here api_gateway will be handle by nginx a proxy server that will send request to other services.
All the services will be running and managing by the docker

 PORT and Service : 
* 5000 => customer_service
* 5001 => employee_service
* 5002 => inventory_service
* 5002 => order_service

### Routes
* localhost/customer => customer_service
* localhost/employee => employee_service
* localhost/inventory => inventory_service
* localhost/order => order_service


### Run Command
``` docker-compose up ```
