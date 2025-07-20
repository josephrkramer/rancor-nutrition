import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [randomImage, setRandomImage] = useState('');
  const images = ['/images/image1.svg', '/images/image2.svg', '/images/image3.svg'];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  }, []);

  return (
    <div className="App">
      {randomImage && <img src={randomImage} alt="Random" />}
    </div>
  );
}

export default App;
