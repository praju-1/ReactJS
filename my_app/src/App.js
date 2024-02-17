import { Provider } from 'react-redux';
import './App.css';
import Store from './redux/Store';
import Counter from './redux/Counter';

function App() {
  return (
    <div className="App">
      {/* redux example execution */}
      <Provider store={Store}>
        <div>
          <h1>React Counter App</h1>
          <Counter />
        </div>
      </Provider>
    </div>
  );
}

export default App;
