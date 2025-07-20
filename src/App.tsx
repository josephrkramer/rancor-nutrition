import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [randomImage, setRandomImage] = useState('');
  const images = ['images/cupcake.png', 'images/huckleberry.png', 'images/jogan-blossom.png', 'images/plom-bloom.png'];

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
