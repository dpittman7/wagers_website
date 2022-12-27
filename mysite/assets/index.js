import React from 'react';
import ReactDOM from "react-dom";
import { Header, Footer} from './javascript/Components.jsx'
import './styles/master.css';


function App(){
  return (
    
    <section>
      <Header />
      <Footer />
    </section>
  );
}

ReactDOM.render(
  <App />,document.getElementById('root')
);