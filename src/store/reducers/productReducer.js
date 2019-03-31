const initState = {
    products : [
    {
        productId: "p101",
        productName: "from Redux",
        shortDescription: "Noizzy Box Retro XS Vintage Retro Classic Portable Bluetooth Speaker with LED Light and Display, FM Radio, Support Micro TF SD Card, USB Input, AUX Line-in (Wine Red)",
        price: 46576,
        quantity: 10,
        imageUrl:"./products/1.jpg"
    
    
    }, {
        productId: "p102",
        productName: "from Redux",
        shortDescription: "Noizzy Box Retro XS Vintage Retro Classic Portable Bluetooth Speaker with LED Light and Display, FM Radio, Support Micro TF SD Card, USB Input, AUX Line-in (Wine Red)",
        price: 2334,
        quantity: 5,
        imageUrl:"./products/1.jpg"
    }, {
        productId: "p103",
        productName: "from Redux",
        shortDescription: "Noizzy Box Retro XS Vintage Retro Classic Portable Bluetooth Speaker with LED Light and Display, FM Radio, Support Micro TF SD Card, USB Input, AUX Line-in (Wine Red)",
        price: 5657,
        quantity: 10,
        imageUrl:"./products/1.jpg"
    }, {
        productId: "p104",
        productName: "from Redux",
        shortDescription: "Noizzy Box Retro XS Vintage Retro Classic Portable Bluetooth Speaker with LED Light and Display, FM Radio, Support Micro TF SD Card, USB Input, AUX Line-in (Wine Red)",
        price: 35676,
        imageUrl:"./products/1.jpg"
    }]
};

const productReducer = (state = initState, action) => {
    return state;
}

export default productReducer