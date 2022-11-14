from zeep import Client
import base64
import os

rat = Client('src/main/resources/RemoteAccessUtilityService.wsdl').service

processes = rat.getProcesses()
print("The processes running on the remote server are: ")
for process in processes:
    print(process)
    
result = rat.screenshot()
f = open("screenshot.png","wb")
f.write(base64.decodebytes(bytes(result, "utf-8")))
f.close()

print("The screenshot has been successfully taken and saved under the following path: "+os.path.abspath(f.name))

rebootStatus = rat.reboot()

if rebootStatus:
    print("The remote server has been successfully rebooted.")
else: 
    print("The remote server has not been successfully rebooted.")
