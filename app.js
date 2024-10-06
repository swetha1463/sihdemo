import Head from 'next/head';
import { useState, useEffect } from 'react';

function App() {
  const [domains, setDomains] = useState([]);
  const [threats, setThreats] = useState([]);

  useEffect(() => {
    // Fetch data from Flask API
    fetch('/api/domains')
      .then(response => response.json())
      .then(data => setDomains(data));

    fetch('/api/threats')
      .then(response => response.json())
      .then(data => setThreats(data));
  }, []);

  return (
    <div>
      <Head>
        <title>GoDomain</title>
      </Head>
      <h1>Domains:</h1>
      <ul>
        {domains.map(domain => (
          <li key={domain.id}>{domain.name}</li>
        ))}
      </ul>
      <h1>Threats:</h1>
      <ul>
        {threats.map(threat => (
          <li key={threat.id}>{threat.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;



