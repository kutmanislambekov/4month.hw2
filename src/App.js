import Form from "./components/Form";
import Table from "./components/Table";
import { useState } from "react";
import axios from "axios";
import './style.css';


function App() {
  const [data,setData] = useState({});
  const [massage,setMassage]= useState('');
  const getWeather = (city, country )=>{
    const KEY = 'f4833cf990dc92ef43563c9b00da2a78';
    const APIlink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`;
    axios(APIlink )
    .then(({data})=>{
      console.log(data);
      setData(data);
      setMassage('')
    })
    .catch(()=> {
      setMassage('э нормально пиши а!');
      setData({});
    });
  }
  return (
    <div className="App">
    <Form getWeather={getWeather} />
    <Table massage={massage} data={data} />
    </div>
  );
}

export default App;
