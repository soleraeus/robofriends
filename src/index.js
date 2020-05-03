import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import {robots} from './robots'

ReactDOM.render(
  <React.StrictMode>
    <section className='gallery'>
      {robots.map((value) =>{
        return <Card key={value.id} name={value.name} email={value.email} username={value.username} />
      })
      }
    </section>
    <footer>
      <p>This is my footer yo!</p>
    </footer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
