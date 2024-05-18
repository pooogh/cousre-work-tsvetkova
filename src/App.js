// import './components/header/header-styles.css';
// import './App.css';
import Header from './components/header/header';
import MainList from './components/main/main';
import { dataForList, dataForButtons } from './content/mainData';
import Button from './components/button/button';
import { useState } from 'react';


function App() {
  const [contentFromButton, setNewContent] = useState('About us');

  // let contentFromButton = 'About us';
  const handleClick = (prop) => {
    console.log(prop);
    setNewContent(prop);
  }
  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <dl>
            {dataForList.map((item) => <MainList {...item} />)}
          </dl>
        </section>
        <section>
          <h3>All buttons</h3>
          <Button onClick={() => handleClick('prop1')}>Item 1</Button>
          <Button onClick={() => handleClick('prop2')}>Item 2</Button>
          <Button onClick={() => handleClick('prop3')}>Item 3</Button>
          <p>{dataForButtons[contentFromButton]}</p>
        </section>
      </main>
    </div>
  );
}

export default App;
