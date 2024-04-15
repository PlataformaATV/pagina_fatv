import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51OZbuNAJTCIGzCMLmd8lD6nH1gzydEczimTPcTeCEvUL0VjkYgy5lHi1cEl1DTSCt5r6HeCS1u5HOPOT4Suxdk7H00ks4nYiQg');

function Btns() {
    const [donationAmount, setDonationAmount] = useState(0);

    const handleChange = (e) => {
        setDonationAmount(e.target.value);
    };

    const handleClick = async () => {
        const stripe = await stripePromise;

        
        if (!Number.isNaN(parseFloat(donationAmount))) {
            const response = await fetch('http://localhost:3001/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: donationAmount, 
                }),
            });

            const session = await response.json();

            
            const result = await stripe.redirectToCheckout({
                sessionId: session.id,
            });

            if (result.error) {
                console.error('error al redirigir a la pagina de pago:', result.error);
            }
        } else {
            console.error(',onto de donación no valido');
        }
    };

    return (
        <div>
            <input type="number" min="0" step="0.01" value={donationAmount} onChange={handleChange} />
            <button onClick={handleClick}>Donar con Stripe</button>
        </div>
    );
}

export default Btns;
