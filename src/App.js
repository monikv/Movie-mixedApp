import './App.css';

import { ThemeToggleProvider } from './Component/ThemeContext';

import { Routing } from './Routes/Routes';

function App() {
  return (
    <div className="App">
    <ThemeToggleProvider>
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Routing />
      </div>
    </ThemeToggleProvider>
    
 

    </div>
  );
}

export default App;
