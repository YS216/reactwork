import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [hello, setHello] = useState('');

  useEffect(() => {
    axios.get('api/test')
         .then((result)=>{
             setHello(result.data);
           })
  }, []);
  return (
    <div className="App">
      서버에서 들어온 값 : {hello}
    </div>
  );
}

export default App;
