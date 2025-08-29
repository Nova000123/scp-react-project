import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import SCPList from './components/SCPList';
import SCPDetail from './components/SCPDetail';
import scpDataJson from './data/scpData.json'; // ← Rename the import
import './App.css';

function App() {
  const [selectedSCP, setSelectedSCP] = useState(null);
  // Use the imported JSON data directly - no fetching needed!
  const [data] = useState(scpDataJson); // ← Use the renamed import

  const handleSelectSCP = (scp) => {
    setSelectedSCP(scp);
    if (window.innerWidth <= 968) {
      window.scrollTo(0, 0);
    }
  };

  const handleBackToList = () => {
    setSelectedSCP(null);
  };

  const handleHomeClick = () => {
    setSelectedSCP(null);
  };

  return (
    <div className="App">
      <Header onHomeClick={handleHomeClick} />
      <div className="app-content">
        <Navigation 
          onSelectSCP={handleSelectSCP} 
          currentSCP={selectedSCP} 
          scpData={data} // ← Pass the data
        />
        <main className="main-content">
          {selectedSCP ? (
            <SCPDetail scp={selectedSCP} onBack={handleBackToList} />
          ) : (
            <SCPList onSelectSCP={handleSelectSCP} scpData={data} /> // ← Pass the data
          )}
        </main>
      </div>
    </div>
  );
}

export default App;