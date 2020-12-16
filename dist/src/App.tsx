import React from 'react';
import './App.css';
import InboxScreen from './components/InputScreen';
import { store } from './store/taskSlice';
import { Provider } from 'react-redux';


function App() {
  
  return (
    <div className="App">
      <Provider store={store}>
      <InboxScreen />
    </Provider>
    </div>
  );
}

export default App;
