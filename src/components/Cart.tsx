import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { removeItem, updateQuantity } from '../store/cartSlice';
import { List, Button, InputNumber } from 'antd';
// import 'antd/dist/antd.css';

const Cart: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeItem(id));
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Cart</h2>
      <List
        dataSource={items}
        renderItem={(item:any) => (
          <List.Item
            key={item.id}
            actions={[
              <Button type="primary" danger onClick={() => handleRemoveFromCart(item.id)}>
                Remove
              </Button>,
              <InputNumber
                min={1}
                value={item.quantity}
                onChange={(value) => handleQuantityChange(item.id, value)}
              />
            ]}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '25rem' }}
            >
              <div>{item.name} - ${item.price} x {item.quantity}</div>
          </List.Item>
        )}
        itemLayout="horizontal"
        style={{ listStyleType: 'none' }}
      />
    </div>
  );
};

export default Cart;
