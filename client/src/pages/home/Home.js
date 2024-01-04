import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './Home.module.css';

export default function Home() {

  const [name] = useState('home page');
  const natigate = useNavigate();
  return (
    <div className={styles.home}>
      {name}
      <button onClick={() => {
        natigate('/')
      }}>
        index page
      </button>
    </div>
  );
}
