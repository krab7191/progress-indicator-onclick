import { ProgressIndicator, ProgressStep } from '@carbon/react';
import './App.scss';
import styles from './App.module.scss';
import { useState } from 'react';

const list = [
  'One',
  'Two',
  'Three',
  'Four'
];

window.onerror = function(e){
  document.getElementById('error').innerHTML = e.toString();
}

function App() {
  const [clicked, setClicked] = useState('Not clicked!');
  return (
    <div className="App">
      <header className="App-header">
        ProgressStep onClick prop POC
      </header>
      <p>{clicked}</p>
      <div id='error' className={styles.error}></div>
      <div className={styles.container}>
        <ProgressIndicator vertical currentIndex={3} style={{ position: 'fixed' }}>
          {list.map((name, idx) => (
            <ProgressStep
              key={`${name}-${idx}`}
              label={name}
              secondaryLabel={idx === 2 ? list[idx] : null}
              onClick={() => {
                setClicked('Clicked!');
              }}
            />
          ))}
        </ProgressIndicator>
      </div>
    </div>
  );
}

export default App;
