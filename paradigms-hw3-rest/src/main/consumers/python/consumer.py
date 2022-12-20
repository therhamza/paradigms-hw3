# Import the RemoteAccessUtilityApi class from the swagger_client module
from swagger_client import RemoteAccessUtilityApi

# Import the ApiException class from the swagger_client.rest module
from swagger_client.rest import ApiException

# Create an instance of the RemoteAccessUtilityApi class
apiInstance = RemoteAccessUtilityApi()

# Call the get_processes method of the apiInstance object and print the result
print(apiInstance.get_processes())

# Call the screenshot method of the apiInstance object and print the result
print(apiInstance.screenshot())

# Call the reboot method of the apiInstance object and print the result
print(apiInstance.reboot())
