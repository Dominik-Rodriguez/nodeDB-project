// const axios = require('axios');
const clients = require('./MOCK-client-info.json.json')

module.exports = {
    getClients: (req, res) => {
        //this is to load the array of 3 clients to be displayed at one time. Once 3 are selected then the next one in the sequence will be displayed
        //until all of the clients are selected.
        const clientArr = clients;
        const {id} = req.params;
        
        res.status(200).send(clientArr);
    }
}