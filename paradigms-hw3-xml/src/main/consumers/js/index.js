var soap = require('soap');
let url = 'src/main/resources/RemoteAccessUtilityService.wsdl';

soap.createClient(url, (err, rat) => {
    
    p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                var procs = "";
                rat.getProcesses().map(proc => procs += "\n" + proc);
                resolve("The processes running on the remote server are: \n", procs);
            }
            catch{
                reject("An error occurred while trying to fetch the processes.");
            }
        }, 0);
    });
        
    p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                var result = rat.screenshot()
                console.log("The screenshot file encoded in base64 is: ");
                console.log(result);
                if (result != "") {
                    var base64Data = result.replace(/^data:image\/png;base64,/, "");
                    require("fs").writeFile("output.png", base64Data, 'base64', function(err) {
                        console.log(err);
                    });
                }

                resolve("The screenshot from the remote server in base64 is: \n", result);
            }
            catch{
                reject("An error occurred while trying to fetch the processes.");
            }
        }, 0);
    });
        
    p3 = new Promise((resolve, reject) => {
        setTimeout(() => {

            try {
                var result = rat.reboot()
                if (result)
                    resolve("The remote server is successfully rebooting!")
                else
                    resolve("The remote server has not successfully rebooted!")
            }
            catch {
                reject("An error occurred while trying to fetch the processes.");
            }

        }, 0);
    });

    p1.then(result => console.log(result)).catch(err => console.log(err));
    p2.then(result => console.log(result)).catch(err => console.log(err));
    p3.then(result => console.log(result)).catch(err => console.log(err));

});


/*



*/