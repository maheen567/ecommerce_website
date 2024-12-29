'use client';

import React, { useState } from 'react';
import styles from './Counter.module.css';

const Counter = () => {

    let [counter, setCounter] = useState(0);

    const addValue = () => {
        counter = counter + 1;
        setCounter(counter);
    };
    const subValue = () => {
      counter = counter - 1;
      setCounter(counter);
  };
  return (
    <div className={styles.counter_container}>
      <button className={styles.btn_1} onClick={subValue}>-</button>
      <p>{counter}</p>
      <button className={styles.btn_2} onClick={addValue}>+</button>
    </div>
  )
}

export default Counter
