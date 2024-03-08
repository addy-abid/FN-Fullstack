import { useEffect } from 'react';
import { Footer } from './components/Footer';
// import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import './App.css';

export default function App() {
  // const [serverData, setServerData] = useState('');

  useEffect(() => {
    async function readServerData() {
      const resp = await fetch('/api/hello');
      const data = await resp.json();

      console.log('Data from server:', data);

      // setServerData(data.message);
    }

    readServerData();
  }, []);

  return (
    <>
      {/* <Nav /> */}
      <h1 className="text-3xl font-bold underline">
        <Hero />
      </h1>
      <Footer />
    </>
  );
}
