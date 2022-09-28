import { ProgressIndicator, ProgressStep } from '@carbon/react';
import './App.scss';
import styles from './App.module.scss';
import { useEffect, useState } from 'react';

const initialList = [
  '1',
  '2',
  '3',
  '4'
];

function App() {
  const [err, setErr] = useState('');
  const [list, setList] = useState(initialList);

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

  const changeHandler = (idx) => {
    const newArr = list.slice(0, idx+1);
    setList(newArr);
  };

  const addHandler = () => {
    const newList = [ ...list ];
    newList.push(list.length+1);
    setList(newList);
  };

  return (
    <div className="App">
      <header className="App-header">
        ProgressStep onClick prop POC
      </header>
      <p>INSTRUCTIONS: click a progress step on the left. Nothing will happen even though onClick prop is present. Highlight a step and press the enter key. This results in an error.</p>
      <br />
      <br />
      <div id='error' className={styles.error}>{err}</div>
      <div className={styles.container}>
        <ProgressIndicator vertical currentIndex={list.length -1} style={{ position: 'fixed' }} onChange={changeHandler}>
          {list.map((name, idx) => (
            <ProgressStep
              key={`${name}-${idx}`}
              label={name}
              secondaryLabel={idx === list.length - 1 ? list[idx] + '' : null}
            />
          ))}
        </ProgressIndicator>
        <button onClick={addHandler}>Add</button>
      </div>
    </div>
  );
}

export default App;
