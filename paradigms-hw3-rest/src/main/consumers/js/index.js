const axios = require('axios');

// URL of the remote server
const serverUrl = "http://localhost:8080/rat";

// Endpoints for interacting with the remote server
const endpoints = {
  // Endpoint for listing processes running on the server
  listProcesses: serverUrl + "/processes",
  // Endpoint for fetching a screenshot from the server
  screenshot: serverUrl + "/screenshot",
  // Endpoint for rebooting the server
  reboot: serverUrl + "/reboot"
};

// Function for handling errors that occur while accessing an endpoint
const handleError = (err, endpoint) => {
  console.log(`An error occurred while trying to access ${endpoint}.`);
  console.log(err);
};

// Fetch the list of processes running on the remote server
axios.get(endpoints.listProcesses)
  .then((response) => {
    console.log("The processes running on the remote server are:");
    response.data.forEach(proc => console.log(proc));
  })
  .catch(err => handleError(err, "listProcesses"));

// Fetch a screenshot from the remote server and save it to a file
axios.get(endpoints.screenshot, { responseType: 'arraybuffer' })
  .then((response) => {
    console.log("The screenshot file encoded in base64 is:");
    console.log(Buffer.from(response.data, 'binary').toString('base64'));
    require("fs").writeFile("output.png", response.data, 'binary', function(err) {
      if (err) {
        console.log("An error occurred while trying to write the file.");
        console.log(err);
      }
    });
  })
  .catch(err => handleError(err, "screenshot"));

// Reboot the remote server
axios.get(endpoints.reboot)
    .then((response) => {
    if (response.data) {
      console.log("The remote server is successfully rebooting!");
    } else {
      console.log("The remote server has not successfully rebooted!");
    }
  })
  .catch(err => handleError(err, "reboot"));
