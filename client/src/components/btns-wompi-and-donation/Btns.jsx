import React from 'react';
import { Link } from 'react-router-dom';

function Btns() {
    return (
        <Link to='/DonationPay' className='mt-12 flex items-center fixed z-40 top-40 right-10'>
            <div className='flex gap-2 items-center rounded-3xl bg-btn-back px-5 py-3 border-r'>
                <p className='text-xl font-bold text-white'>Donar</p>
                <box-icon name='heart' type='solid' color='#f3f3f3'></box-icon>
            </div>
           
        </Link>
    );
}

export default Btns;
