import React, { useState } from 'react';
import styles from './Home.module.css';

export default function Home() {

  const [name] = useState('home page');

  return (
    <div className={styles.home}>
      {name}
    </div>
  );
}
