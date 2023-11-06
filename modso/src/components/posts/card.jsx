    import React from 'react';

    import { useState } from 'react';

    const Card = ({ product }) => {
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [showModalBuy, setShowModalBuy] = useState(false);

        const openModal = () => {
            setIsModalOpen(true);
        };

        const closeModal = () => {
            setIsModalOpen(false);
        };

        const openModalBuy = () => {
            setShowModalBuy(true);
        };

        const closeModalBuy = () => {
            setShowModalBuy(false);
        };

        return (
            <>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-secondary-100 dark:border-gray-700 relative">
                    <img
                        className="rounded-t-lg h-64 w-full object-cover cursor-pointer"
                        src={product.img}
                        alt=""
                        onClick={openModal}
                    />

                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                            {product.item}
                        </h5>
                        <div className="grid grid-cols-2 gap-4">
                            <p className="mb-3 font-normal text-black-700 dark:text-black-400 text-lg">
                                ${product.price}
                            </p>
                            <p className="mb-3 font-normal text-black-700 dark:text-gray-500 text-right">
                                {product.categoria}
                            </p>
                        </div>
                        <button className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-full absolute -bottom-3 -right-4" onClick={openModalBuy}>
                            Comprar
                        </button>
                    </div>
                </div>

                {isModalOpen && (
                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div
                                className="fixed inset-0 transition-opacity"
                                aria-hidden="true"
                                onClick={closeModal}
                            >
                                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>

                            <span
                                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                                aria-hidden="true"
                            ></span>

                            <div
                                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="modal-headline"
                            >
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <img
                                        className="rounded-lg w-full h-full object-cover"
                                        src={product.img}
                                        alt=""
                                    />
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-500 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={closeModal}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {showModalBuy && (
                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div
                                className="fixed inset-0 transition-opacity"
                                aria-hidden="true"
                                onClick={closeModalBuy}
                            >
                                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>

                            <span
                                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                                aria-hidden="true"
                            ></span>

                            <div
                                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="modal-headline"
                            >
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <img
                                        className="rounded-lg w-full h-full object-cover"
                                        src={product.img}
                                        alt=""
                                    />
                                    <br/><p> Prenda: {product.item}</p><br/>
                                    <p> Vendedor: {product.contactName}</p><br />
                                    <p> Costo: ${product.price}</p><br />
                                    <p> Telefono: {product.contactNumber}</p><br />
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-500 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={closeModalBuy}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </>
        );
    };

export default Card;
