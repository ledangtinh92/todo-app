import './App.css';
import TodoApp from "./components/TodoApp";

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';

const store = createStore(rootReducer);

function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <TodoApp title></TodoApp>
        </Provider>
    </div>
  );
}

export default App;
