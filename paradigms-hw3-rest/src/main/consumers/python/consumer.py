from swagger_client import RemoteAccessUtilityApi
from swagger_client.rest import ApiException

apiInstance = RemoteAccessUtilityApi()

print(apiInstance.get_processes())

print(apiInstance.screenshot())

print(apiInstance.reboot())