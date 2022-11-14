# swagger_client.RemoteAccessUtilityApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_processes**](RemoteAccessUtilityApi.md#get_processes) | **GET** /rat/processes | 
[**reboot**](RemoteAccessUtilityApi.md#reboot) | **GET** /rat/reboot | 
[**screenshot**](RemoteAccessUtilityApi.md#screenshot) | **GET** /rat/screenshot | 

# **get_processes**
> list[str] get_processes()



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.RemoteAccessUtilityApi()

try:
    api_response = api_instance.get_processes()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling RemoteAccessUtilityApi->get_processes: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

**list[str]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reboot**
> bool reboot()



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.RemoteAccessUtilityApi()

try:
    api_response = api_instance.reboot()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling RemoteAccessUtilityApi->reboot: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

**bool**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **screenshot**
> str screenshot()



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.RemoteAccessUtilityApi()

try:
    api_response = api_instance.screenshot()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling RemoteAccessUtilityApi->screenshot: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

