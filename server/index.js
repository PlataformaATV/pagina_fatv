const stripe = require('stripe')('sk_test_51OZbuNAJTCIGzCMLciaOZtAanLwgUXSciIBhMJE514lNx1iyKpvXSxjV7HlO2T16LNtpy85lCHyYNuqxMvGVwxa10075JvlnYc');
const express = require('express');
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors())


app.post('/create-checkout-session', async (req, res) => {
    const { amount } = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Donation',
                    },
                    unit_amount: amount * 100, 
                },
                quantity: 1,
            }],
            mode: 'payment',
            success_url: 'https://tu-sitio.com/pago-completado',
            cancel_url: 'https://tu-sitio.com/pago-cancelado',
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error('Error al crear la sesión de checkout:', error);
        res.status(500).send('Error al crear la sesión de checkout');
    }
});


const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
