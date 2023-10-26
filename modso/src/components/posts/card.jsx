import React from 'react';

const Card = ({ product }) => {
    return (
        <>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-secondary-100 dark:border-gray-700 relative">
                <img class="rounded-t-lg h-64 w-full object-cover" src={product.img} alt="" />
                <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{product.item}</h5>
                    <div class="grid grid-cols-2 gap-4">
                        <p class="mb-3 font-normal text-black-700 dark:text-black-400 text-lg">${product.price}</p>
                        <p class="mb-3 font-normal text-black-700 dark:text-gray-500 text-right">{product.categoria}</p>
                    </div>
                    <button class="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-full absolute -bottom-3 -right-4">
                        Buy Now
                    </button>
                </div>
            </div>
        </>
    );
};

export default Card;
