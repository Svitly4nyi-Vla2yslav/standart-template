import React from 'react';
import { ProductContainer } from './ProductPage.styled';
import db from './db.json';

const products = db.products;

// interface Product {
//   _id: string;
//   name: string;
//   price: number;
// }

const ProductsPage: React.FC = () => {
  // const [products, setProducts] = useState<Product[]>([]); 

  // useEffect(() => {
  //   fetch('http://localhost:5000/products')
  //     .then(response => response.json())
  //     .then(data => setProducts(data));
  // }, []);

  return (
    <ProductContainer>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </ProductContainer>
  );
};

export default ProductsPage;
