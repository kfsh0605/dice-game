import React from 'react';
import Slider from '@mui/material/Slider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import type { Direction } from '@/types/game.types';
import styles from './GameControls.module.scss';

interface GameControlsProps {
  threshold: number;
  direction: Direction;
  onThresholdChange: (value: number) => void;
  onDirectionChange: (value: Direction) => void;
  onPlay: () => void;
}

const GameControls: React.FC<GameControlsProps> = ({
  threshold,
  direction,
  onThresholdChange,
  onDirectionChange,
  onPlay,
}) => {
  const handleSliderChange = (_: Event, value: number | number[]) => {
    onThresholdChange(value as number);
  };

  const handleDirectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onDirectionChange(e.target.value as Direction);
  };

  return (
    <div className={styles.controls}>
      <RadioGroup
        row
        value={direction}
        onChange={handleDirectionChange}
        className={styles.controls__radio}
      >
        <FormControlLabel
          value="under"
          control={<Radio size="small" sx={{ color: '#9c27b0', '&.Mui-checked': { color: '#9c27b0' } }} />}
          label="Under"
        />
        <FormControlLabel
          value="over"
          control={<Radio size="small" sx={{ color: '#9c27b0', '&.Mui-checked': { color: '#9c27b0' } }} />}
          label="Over"
        />
      </RadioGroup>

      <div className={styles.controls__slider}>
        <Slider
          value={threshold}
          onChange={handleSliderChange}
          min={0}
          max={100}
          valueLabelDisplay="on"
          sx={{
            color: '#9c27b0',
            '& .MuiSlider-valueLabel': {
              backgroundColor: '#616161',
              borderRadius: '4px',
            },
          }}
        />
        <div className={styles.controls__sliderLabels}>
          <span>0</span>
          <span>100</span>
        </div>
      </div>

      <Button
        variant="contained"
        fullWidth
        onClick={onPlay}
        className={styles.controls__button}
        sx={{
          backgroundColor: '#9c27b0',
          '&:hover': { backgroundColor: '#7b1fa2' },
          borderRadius: '4px',
          padding: '12px',
          fontSize: '16px',
          fontWeight: '700',
          letterSpacing: '1px',
        }}
      >
        PLAY
      </Button>
    </div>
  );
};

export default GameControls;
