var soap = require('soap');
let url = 'src/main/resources/RemoteAccessUtilityService.wsdl';

soap.createClient(url, (err, rat) => {
    
    p1 = new Promise(rat.getProcesses())
        .then(result => {
            console.log("The processes running on the remote server are: ")
            result.map(proc => console.log(proc))
        }).catch(err => {
            console.log("An error occurred while trying to fetch the processes.")
            console.log(err)
        });
    
    p2 = new Promise(rat.screenshot())
    .then(result => {
        console.log("The screenshot file encoded in base64 is: ")
        console.log(result)
        if (result != "") {
            var base64Data = result.replace(/^data:image\/png;base64,/, "");
            require("fs").writeFile("output.png", base64Data, 'base64', function(err) {
                console.log(err);
            });
        }
    }).catch(err => {
        console.log("An error occurred while trying to fetch the processes.")
        console.log(err)
    });

    p3 = new Promise(reboot())
    .then(result => {
        if (result)
            console.log("The remote server is successfully rebooting!")
        else
            console.log("The remote server has not successfully rebooted!")
    }).catch(err => {
        console.log("An error occurred while trying to fetch the processes.")
        console.log(err)
    });


});