import React from 'react';
import styles from './ResultDisplay.module.scss';

interface ResultDisplayProps {
  result: number | null;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  return (
    <div className={styles.result}>
      <span className={styles.result__number}>
        {result ?? '?'}
      </span>
    </div>
  );
};

export default ResultDisplay;
