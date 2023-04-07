import { getShoppingCart } from "../utilities/fakedb";

const CartProductsLoader = async() =>{
    const loadedProduct = await fetch('products.json');
    const products = await loadedProduct.json();

    const storedCart = getShoppingCart();

    const savedCard = [];
    console.log(storedCart);
    for(const id in storedCart){
        const addedProducts = products.find(product => product.id === id)
        if(addedProducts){
            const quantity = storedCart[id]
            addedProducts.quantity = quantity;
            savedCard.push(addedProducts);
        }
    }

    return savedCard;

}

export default CartProductsLoader;