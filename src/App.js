import logo from './logo.svg';
import './App.css';
import MainPage from './Components/MainPage';
import React, { useEffect, useState } from 'react';
const title = `
Text to Ascii
`
const titleStyle = {
  height: 75,
  position: 'absolute',
  bottom: 0,
}

function App() {
  const [positions, setPositions] = useState([]);
  const randomWidths = Array.from({ length: 50 }, () => Math.floor(Math.random() * (7 - 5 + 1) + 1));
  const starsText = [ "✶", '✧˖°.', '✩₊'];

  useEffect(() => {
    // Calculate random positions for three images
    const newPositions = Array.from({ length: 105 }, () => ({
      left: Math.random() * 90 + '%', // Random left position within 90% of the container width
      top: Math.random() * 90 + '%', // Random top position within 90% of the container height
      src: starsText[Math.floor(Math.random() * 3)],
      width: Math.floor(Math.random() * (23 - 5 + 1) + 1)
    }));
    setPositions(newPositions);
  }, []);
  return (
    <div style={{
      background: 'var(--app-background)',
      color: 'var(--font-color)', maxHeight: '100vh', minHeight: '100vh', width: '100vw', padding: 0, margin: 0, overflow: 'hidden'}} className="App">
      {positions.map((pos, index) => (
        <div
          key={index}
          // src={ pos.src }
        className={"drift " + (index % 2 === 0 ? 'image' : 'image2')}
          style={{ position: 'absolute', left: pos.left, top: pos.top, fontSize: pos.width }}
          alt={`Drifting Image ${index + 1}`}
        >{pos.src}</div>
      ))}
      <img
          style={{ position: 'absolute', left: '70%', top: '20%', height: 290 }}
          src={  '/globe.png' }
          className="rotating-image"
        />
      <img
          style={{ position: 'absolute', left: '15%', top: '45%', height: 220 }}
          src={  '/globe.png' }
          className="rotating-image2"
        />

{/* <img
          style={{ position: 'absolute', left: '5%', top: '10%', height: 250, opacity: 0.6 }}
          src={  '/moon.png' }
        /> */}




     {/* <pre id="asciiOutput">
       {title}
     </pre> */}
      <MainPage/>

    </div>
  );
}

export default App;
