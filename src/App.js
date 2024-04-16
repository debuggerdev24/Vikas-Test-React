import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Corousal from './Corousal';

function App() {
  const [images, setImages] = useState([]);

  const fetchImages=async()=>{
    const response = await fetch("https://run.mocky.io/v3/ef665b8b-a425-43da-aedb-423db690ca28" , { method:"GET" })
    const imagesList = await response.json()
    setImages(imagesList);
  }

  useEffect(()=>{
    fetchImages()
  },[])

  return (
    <div className="App">
      <h1>Corousal</h1>

      <Corousal arr={images} defaultIndex={1} timeInterval={4000} />
    </div>
  );
}

export default App;
