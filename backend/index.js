const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/health', (req, res) => res.send('API is up!'));

app.listen(5000, () => console.log('Server running on port 5000 and this is now updated!!!'));
