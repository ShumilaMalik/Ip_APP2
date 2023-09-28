import React, { useState } from 'react';

function App() {
  const [ip, setIp] = useState('');
  const [data, setData] = useState(null);

  const fetchIpInfo = async () => {
    const response = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await response.json();
    setData(data);
  };

  return (
    <div className="App">
      <input
        value={ip}
        onChange={e => setIp(e.target.value)}
        placeholder="IP-Adresse eingeben"
      />
      <button onClick={fetchIpInfo}>Suchen</button>
      {data && (
        <div>
          <p>Stadt: {data.city}</p>
          <p>Region: {data.regionName}</p>
          // Zeige hier weitere gewünschte Daten an.
        </div>
      )}
    </div>
  );
}

export default App;