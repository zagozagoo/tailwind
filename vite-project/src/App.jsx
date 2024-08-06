import { useState } from 'react';
import './App.css';
import Card from './components/Card'
import Footer from './components/Footer'
import NavBar from './components/NavBar';

function App() {
  const [isCor1, setIsCor1] = useState(true);

  const toggleCor = () => {
    setIsCor1(!isCor1);
  };

  return (
    <>
        <div className='min-w-full'>
          <NavBar />
        </div>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <button
            onClick={toggleCor}
            className={`p-2 rounded ${isCor1 ? 'bg-cor1' : 'bg-cor2'}`}
          >
            {isCor1 ? 'Cor 1' : 'Cor 2'}
          </button>

          <div className="p-4 space-y-4">
            <Card
              title="A Call from the Abyss"
              description="Awash in imagination, Aya Takano’s 'A Call From the Abyss' transports us to a magical world where boundaries are limitless. Imagine: you stand amidst a vibrant sea, not of water, but of a rainbow palette teeming with fantastical creatures."
              imageUrl="https://www.singulart.com/blog/wp-content/uploads/2024/04/A-Call-from-the-Abyss.jpg"
            />
            <Card
              title="Sky is the Limit"
              description="On a deeper level, 'Sky is the Limit' delves into existential themes. It prompts us to contemplate the mysteries of the universe and humankind. Takano’s paintings depict weightless forms in celestial environments. These serve as a reminder to pause and reflect on the essence of reality, the impermanence of time, and the boundless human spirit. The artwork becomes a focal point for philosophical inquiry, inviting viewers to ponder life’s most fundamental questions as they engage with the captivating art."
              imageUrl="https://www.singulart.com/blog/wp-content/uploads/2024/04/Sky-is-the-Limit.jpg"
            />
          </div>
        </main>
        <div className='min-w-full'>
          <Footer />
        </div>
        
      </div>
    </>
    
  );
}

export default App;
