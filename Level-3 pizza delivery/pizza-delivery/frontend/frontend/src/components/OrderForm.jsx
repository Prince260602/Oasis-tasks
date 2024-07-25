// frontend/src/components/OrderForm.jsx
import { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [pizza, setPizza] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newOrder = { name, address, pizza };
      await axios.post('http://localhost:5000/api/orders', newOrder);
      setName('');
      setAddress('');
      setPizza('');
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Order Your Pizza</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
          Address:
        </label>
        <input
          type="text"
          id="address"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pizza">
          Pizza:
        </label>
        <input
          type="text"
          id="pizza"
          placeholder="Enter your favorite pizza"
          value={pizza}
          onChange={(e) => setPizza(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Place Order
      </button>
    </form>
  );
};

export default OrderForm;
