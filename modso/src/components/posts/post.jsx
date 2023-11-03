import React from 'react';
import { useState } from 'react';
import { Image, Modal, Button } from 'antd';

const Post = ({ product }) => {
        const [open, setOpen] = useState(false);


        return (
        
            <><img
                srcSet={`${product.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${product.img}?w=248&fit=crop&auto=format`}
                alt={product.item}
                loading="lazy"
                className="static rounded-2xl shadow-lg" />
                <a className='invisible transition cursor-pointer group-hover:visible bg-opacity-60 rounded-2xl bg-black absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white'
                    onClick={() => setOpen(true)}>Abrir</a>
                <Modal
                        className=""
                        centered
                        open={open}
                        onOk={() => setOpen(false)}
                        onCancel={() => setOpen(false)}
                        width={1000}
                    >
                    <Image
                        src={product.img}
                        alt={product.item}
                        loading="lazy" />
                    <p>some contents...</p>
                    <p>some contents...</p>
                </Modal></>
        );
    }

            export default Post;