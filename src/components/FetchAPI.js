import React, { useEffect, useState } from 'react';


const FetchAPI = () => {
    const [galleryData, setGalleryData] = useState([]);
    const [price, setPrice] = useState({})
    const [title, setTitle] = useState()
    const [propsVal, setPropsVal] = useState([]);
    const [skus , setSkus] = useState([])
    useEffect(() => {
        fetch(`https://moveon-api-server.sbox.ali2bd.net/api/v1/customer/dummy-product`)
        .then((response) => response.json())
        .then((res) => {
        
                setGalleryData(res.gallery)
                setPrice(res.price)
                setTitle(res.title)
                setSkus(res.variation.skus)
                setPropsVal(res.variation.props )
                
        })
        .catch((err) => {
         console.log(err.message);
        });
       }, []);

    return {
        galleryData,
        price,
        title,
        propsVal,
        skus,
    }
   
};

export default FetchAPI;