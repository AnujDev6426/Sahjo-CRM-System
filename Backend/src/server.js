require('dotenv').config;
const app = require('./App.js');
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`Sahjo CRM Server running on route http://localhost:${PORT}`)
})

