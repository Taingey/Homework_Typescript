import React, { useEffect, useState } from 'react'
import './App.css'
import RenderCard from './components/rendercard/RenderCard';

function App() {
  const [connection, setConnection] = useState(navigator.onLine);
  useEffect(() => {
    window.addEventListener("offline", handlOffline);
    window.addEventListener("online", handlonline);

    function handlOffline(){
      setConnection(false);
    }
    function handlonline() {
      setConnection(false);
    }
  }, [])
  if (!connection) {
    return (
      <div className="fixed z-20 backdrop-saturate-150 bg-black/50  h-screen w-full">
        <div className="traform flex text-3xl text-white position-absolute left-[50%] w-max right-[50%] top-[50%] align-items-center justify-center">
          <svg className="svg" viewBox="25 25 50 50">
            <circle className="circle" r="20" cy="50" cx="50"></circle>
          </svg>
        </div>
      </div>
    );
  }
  return (
    <div className=''>
      <RenderCard />
    </div>
  )
}

export default App
