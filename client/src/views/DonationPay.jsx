import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Link } from 'react-router-dom'

const stripePromise = loadStripe('pk_test_51OZbuNAJTCIGzCMLmd8lD6nH1gzydEczimTPcTeCEvUL0VjkYgy5lHi1cEl1DTSCt5r6HeCS1u5HOPOT4Suxdk7H00ks4nYiQg');

function DonationPay() {
    const [donationAmount, setDonationAmount] = useState(0)
    const [acceptedTerms, setAcceptedTerms] = useState(false)

    const handleChange = (e) => {
        setDonationAmount(e.target.value)
    };

    const handleCheckboxChange = (e) => {
        setAcceptedTerms(e.target.checked);
    };

    const handleClick = async () => {
        const stripe = await stripePromise;

        if (!Number.isNaN(parseFloat(donationAmount)) && acceptedTerms) {
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
            console.error('Monto de donación no válido o términos no aceptados');
        }
    };

    return (
        <div>
            <div className='flex rounded-xl mt-14 ml-20 mr-20  shadow-2xl justify-center '>
                <div className='w-2/5 flex flex-col gap-6 mb-14 mt-14 border-r'>
                    <p className='font-normal '>Pago a</p>
                    <h1 className='text-4xl font-bold leading-tight'>
                        Fundación<br />
                        Antivirus para la<br />
                        Deserción
                    </h1>
                    <p className='font-bold text-lg mb-48 opacity-85'>DONACIÓN ANTIVIRUS PARA LA <br /> DESERCIÓN</p>
                    <p className='text-lg opacity-85 w-80'>EN LA FUNDACIÓN ANTIVIRUS PARA LA DESERCIÓN SOMOS UNA ORGANIZACIÓN SIN ÁNIMO DE LUCRO QUE BUSCA DISMINUIR LOS NIVELES DE DESERCIÓN ESTUDIANTIL EN COLOMBIA, MEJORAR LOS NIVELES DE PERMANENCIA Y DE GRADUACIÓN, SIENDO ESTA NUESTRA MANERA DE APORTAR AL LOGRO DE UN PAÍS CON MÁS EDUCACIÓN Y CONSECUENTEMENTE CON MÁS DESARROLLO.</p>

                </div>

                <div className='flex flex-col gap-6 mt-14 pl-10'>

                <b>Concepto de Fundación Antivirus para la Deserción</b>

                <div className='flex flex-col'>

                   <select>
                    <option value="opción" disabled>Seleccione una opción</option>
                    <option value="">Donación a estudiante</option>
                    <option value="">Donación a la Fundación </option>
                    <option value="">Pago por servicio de provocación</option>
                   </select>

                


                </div>

                    <h1 className='font-bold text-3xl mb-16'>Ingresa el monto a pagar</h1>

                    <p className='text-center text-gray-700'>Monto a pagar</p>
                    <input className='w-full h-16 rounded-xl border border-gray-300 hover:border-blue-300 text-center mb-8' type="number" min="0" step="0.01" value={donationAmount} onChange={handleChange} />
                    <div className='flex items-center'>
                        <input type="checkbox" id="monthlyDonation" className="rounded border-gray-300 text-zinc-900 focus:ring-zinc-900" onChange={handleCheckboxChange} />
                        <label htmlFor="monthlyDonation" className="ml-2 text-gray-700">Permitir que el pago sea mensual según el monto mencionado</label>
                    </div>
                    <Link to="/checkout" className={`bg-zinc-900 text-yellow-400 rounded-2xl py-4 px-8 ${(!acceptedTerms || Number.isNaN(parseFloat(donationAmount))) && 'opacity-50 cursor-not-allowed'}`} onClick={handleClick} disabled={!acceptedTerms || Number.isNaN(parseFloat(donationAmount))}>Continuar</Link>
                </div>
            </div>
            <p className='ml-20'>PAGOS SEGUROS POR 
                <span className='font-bold '> Stripe</span></p>
        </div>
    );
}

export default DonationPay;
