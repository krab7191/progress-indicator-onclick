import { ProgressIndicator, ProgressStep } from '@carbon/react';
import './App.scss';
import styles from './App.module.scss';
import { useEffect, useState } from 'react';

const list = [
  'One',
  'Two',
  'Three',
  'Four'
];

function App() {
  const [clicked, setClicked] = useState('Not clicked!');
  const [err, setErr] = useState('');

  useEffect(() => {
    window.onerror = function(e){
      setErr(e.toString());
    }
  }, []);

  useEffect(() => {
    let timer;
    if (err) {
      timer = window.setTimeout(() => {
        setErr('');
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, [err]);

  return (
    <div className="App">
      <header className="App-header">
        ProgressStep onClick prop POC
      </header>
      <p>INSTRUCTIONS: click a progress step on the left. Nothing will happen even though onClick prop is present. Highlight a step and press the enter key. This results in an error.</p>
      <br />
      <p>{clicked}</p>
      <br />
      <div id='error' className={styles.error}>{err}</div>
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
