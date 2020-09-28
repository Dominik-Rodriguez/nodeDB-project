const express = require('express');
const clientList = require('./controllers/clientList');
const clientPlans = require('./controllers/clientPlans');

const app = express();

app.use(express.json());

app.get('/api/client', clientList.getClients)


app.get('/api/client', clientPlans.getClientList);
app.post('/api/client', clientPlans.getClients);
app.put('/api/client/:id', clientPlans.editPlan);
app.delete('/api/client/:id', clientPlans.deleteFn);

const port = 5070;
app.listen(port, () => console.log(`Server is running on port ${port}`))