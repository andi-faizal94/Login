import { useSelector, useDispatch } from 'react-redux';

import './App.css';

function App() {
  const num = useSelector((state) => state.num);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INC' });
  };

  const decrement = () => {
    dispatch({ type: 'DEC' });
  };

  return (
    <div className='App'>
      <h1>Counter</h1>

      <p>{num}</p>
      <button onClick={increment}>INC</button>
      <button onClick={decrement}>DEC</button>
    </div>
  );
}

export default App;
