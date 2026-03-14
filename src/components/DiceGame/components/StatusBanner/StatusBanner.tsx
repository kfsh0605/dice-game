import React from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import type { GameStatus, Direction } from '@/types/game.types';
import { getLoseMessage } from '@/utils/game.utils';
import styles from './StatusBanner.module.scss';

interface StatusBannerProps {
  status: GameStatus;
  direction: Direction;
}

const StatusBanner: React.FC<StatusBannerProps> = ({ status, direction }) => {
  if (status === 'idle') return null;

  const isWin = status === 'win';

  return (
    <div className={`${styles.banner} ${isWin ? styles['banner--win'] : styles['banner--lose']}`}>
      <div className={styles.banner__icon}>
        {isWin
          ? <CheckCircleOutlineIcon fontSize="small" />
          : <ErrorOutlineIcon fontSize="small" />
        }
      </div>
      <div className={styles.banner__content}>
        <span className={styles.banner__title}>
          {isWin ? 'You won' : 'You lost'}
        </span>
        {!isWin && (
          <span className={styles.banner__subtitle}>
            {getLoseMessage(direction)}
          </span>
        )}
      </div>
    </div>
  );
};

export default StatusBanner;
