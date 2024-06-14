/*const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;


app.use(express.json());
app.use(cors())

app.post('/create-transaction', (req, res) => {
    const { amount } = req.body;

    if (!amount) {
        return res.status(400).json({ error: 'Monto no proporcionado' });
    }

    try {

        const transactionReference = `TX-${Math.random().toString(36).substr(2, 9)}`;

        res.status(200).json({ reference: transactionReference });
    } catch (error) {
        console.error('Error al crear la transacción:', error);
        res.status(500).json({ error: 'error al crear la transacción' });
    }
});

app.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto ${PORT}`);
});


*/