import logo from './logo.svg';
import './App.css';
import Title from './Title';
import Test from './Test';
import Counter from './Counter';
import LifeCycle from './LifeCycle';
import Toggle from './EventHandling/OnClick';
import Converter from './EventHandling/OnChange';
import AddForms from './AddForms';
import MyList from './MyList';
import ContactManager from './ContactManager';
import TheCounter from './Redux/Counter';
import ReduxContactManager from './Redux/ContactManager';

function App() {
  const arr = [1, 2, 3]; //just not put this array inside render :)
  const contacts = ['si A', 'si B', 'Maccaa'];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title name="Macca" />
        {/* <Test name="Macca" /> */}
        {/* <Counter /> */}
        {/* <LifeCycle counter="8" /> */}
        {/* <Toggle /> */}
        {/* <Converter /> */}
        {/* <AddForms /> */}
        
        {/* <MyList data={arr} /> */}
        {/* <ContactManager data={contacts} /> */}

        {/* <TheCounter />   */}
        {/* redux counter  */}
        {/* <ReduxContactManager /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
