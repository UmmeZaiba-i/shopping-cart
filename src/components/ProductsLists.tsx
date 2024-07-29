import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import { List, Button } from 'antd';


const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 3, name: 'Product 3', price: 300 },
];

const ProductsList: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: { id: number; name: string; price: number }) => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Products</h2>
      <List
        dataSource={products}
        renderItem={product => (
          <List.Item
            key={product.id}
            actions={[
              <Button type="primary" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </Button>,
            ]}
          >
            {product.name} - ${product.price}
          </List.Item>
        )}
        itemLayout="horizontal"
        style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '25rem' }}
      />
    </div>
  );
};

export default ProductsList;
