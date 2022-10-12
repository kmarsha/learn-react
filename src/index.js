import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContactManager from './ContactManager';
import MyList from './MyList';
import TheCounter from './Redux/Counter';
import ReduxContactManager from './Redux/ContactManager';

const contacts = ['si A', 'si B', 'Maccaa'];

const arr = [1, 2, 3]; //just not put this array inside render :)
const el = <MyList data={arr} />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // el,
  <React.StrictMode>
    <App />
    {/* <MyList data={arr} /> */}
    {/* <ContactManager data={contacts} /> */}
    {/* <TheCounter /> */}
    {/* <ReduxContactManager /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
