import React from 'react';
import { useDiceGame } from '@/hooks/useDiceGame';
import StatusBanner from './components/StatusBanner/StatusBanner';
import ResultDisplay from './components/ResultDisplay/ResultDisplay';
import GameControls from './components/GameControls/GameControls';
import HistoryTable from './components/HistoryTable/HistoryTable';
import styles from './DiceGame.module.scss';

const DiceGame: React.FC = () => {
  const {
    threshold,
    direction,
    result,
    status,
    history,
    setThreshold,
    setDirection,
    handlePlay,
  } = useDiceGame();

  return (
    <div className={styles.diceGame}>
      <div className={styles.diceGame__inner}>
        <StatusBanner status={status} direction={direction} />

        <ResultDisplay result={result} />

        <GameControls
          threshold={threshold}
          direction={direction}
          onThresholdChange={setThreshold}
          onDirectionChange={setDirection}
          onPlay={handlePlay}
        />

        <HistoryTable history={history} />
      </div>
    </div>
  );
};

export default DiceGame;
