const clientPlans = [];
let id = 1;

module.exports = {
    //this will send over the clients to be selected for their plans to be made.
    getClientList: (req, res) => {
        res.status(200).send(clientPlans);
    },

    getClients: (req, res) => {
        const {client} = req.body;
        client.id = id;
        id++;

        clientPlans.push(client);
        res.status(200).send(clientPlans);
    },

    editPlan: (req, res) => {
        const {id} = req.params;
        const {plan} = req.body;
        console.log('body', plan);
        const client = clientPlans.find(el => el.id === +id)
        client.plan = plan;
        res.status(200).send(clientPlans);
    },

    deleteFn: (req, res) => {
        const {id} = req.params;

        const index = clientPlans.findIndex(el => el.id === +id);
        clientPlans.splice(index, 1);
        res.status(200).send(clientPlans);
    }
}