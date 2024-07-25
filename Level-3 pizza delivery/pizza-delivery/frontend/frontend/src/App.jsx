import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';

const App = () => {
  return (
    <div>
      <h1>Pizza Delivery</h1>
      <OrderForm />
      <OrderList />
    </div>
  );
};

export default App;
