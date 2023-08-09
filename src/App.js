import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Editor />
        <Previewer />
      </div>
    </Provider>
  );
}

export default App;
