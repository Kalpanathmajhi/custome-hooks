import { useEffect, useState } from 'react';

const useProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
      }, []);
    const getProducts = async () => {
        const productList = await fetch('https://fakestoreapi.com/products');
        const productListJson = await productList.json();
        setProducts(productListJson);
      };
    
  return {products}
}

export default useProductList
