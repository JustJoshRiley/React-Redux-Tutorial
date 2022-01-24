import './App.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import Password from './Components/password';
import PasswordList from './Components/password-list';

const store = createStore(reducers)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Password/>
        <PasswordList />
      </div>
    </Provider>
  );
}

export default App;
