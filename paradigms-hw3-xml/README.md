# Homework: XML/SOAP Remote Access Tool Web Service

## Technology Enablers
- Web Service definition language: WSDL
    - It is an XML based definition language. It's used for describing the functionality of a SOAP based web service. WSDL files are central to testing SOAP-based services. 
- Protocol: SOAP over HTTP 
    - SOAP over HTTP is one type of binding that you can attach to a service. 
- Provider programming language: Java (JAX-WS API)
    - Java API for XML Web Services (JAX-WS) is a standardized API for creating and consuming SOAP web services.
- Consumer programming languages: Python (Zeep module)
    - Zeep is a python module which is used to inspect the WSDL document and generate the corresponding code to use the services and types in the document.

## Development Process: Java-first / Code-first
### Java Provider class
- Rat service business implementation is the following: ma.aui.sse.paradigms.integration.xs.rat.provider.RemoteAccessUtility
- There is no DTO classes as I will be transferring structures already found in Java Foundation classes.
- Provider main class creates an instance of the rat business implementation (RemoteAccessUtility class) and publishes it as a web service under `http://localhost:8080/rat` using JAX-WS Endpoint class: ma.aui.sse.paradigms.integration.xs.rat.provider.Provider

### WSDL and Java server stub code
- The code is built using the following command:
  - **./gradlew build**
- If you are looking to generate the WSDL file, generate the RemoteAccessUtilityService WSDL from ma.aui.sse.paradigms.integration.xs.provider.RemoteAccessUtility class:
  - **wsgen -wsdl -cp build/classes/java/main/ -d build/classes/java/main/ -r src/main/resources/ ma.aui.sse.paradigms.integration.xs.rat.provider.RemoteAccessUtility**
- Set the service location url within the generated src/main/resources/RemoteAccessUtilityService.wsdl to: `http://localhost:8080/rat`

- The WSDL code is already generated in my submission and can be found under: src/main/resources/RemoteAccessUtilityService.wsdl

### Running the Provider
- **./gradlew run**

### Python consumer
- Install Zeep package using pip:
  - pip install zeep
- run the consumer from the src folder:
  - python src/main/python/consumer.py

### JavaScript consumer
- Install all packages:
  - npm install
- Run the consumer:
  - npm start

## Design of the Web Service Functionalities
The web service RAT does three main functions:
- List all processes running remote server
    - If the client wants to get a list of all processes running on the remote server, they should call the procedure "getProcesses()" remotely.
    - Returns a list of strings, where each string specifies a specific process running on the remote process
- Screenshot remote server
    - If the client wants to take a screenshot of the remote system, they should call the procedure "screenshot()" remotely.
    - Returns a Base64 string representation of a png image, which is the screenshot grabbed.
- Reboot remote server
    - If the client wants to reboot the system, they should call the procedure "reboot()" remotely. 
    - Reboots remote server, and returns true or false as a status code if the rebooting is successful.
