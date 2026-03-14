'use client';

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
          labelPlacement="start"
          control={<Radio size="small" sx={{ color: '#9c27b0', '&.Mui-checked': { color: '#9c27b0' } }} />}
          label="Under"
        />
        <FormControlLabel
          value="over"
          labelPlacement="start"
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
          marks={[
            { value: 0 },
            { value: 20 },
            { value: 40 },
            { value: 60 },
            { value: 80 },
            { value: 100 },
          ]}
          sx={{
            color: '#9c27b0',
            height: 2,
            '& .MuiSlider-track': {
              height: 2,
              border: 'none',
            },
            '& .MuiSlider-rail': {
              height: 2,
              opacity: 1,
              backgroundColor: 'rgba(156, 39, 176, 0.38)',
            },
            '& .MuiSlider-thumb': {
              width: 20,
              height: 20,
              backgroundColor: '#9c27b0',
              '&:hover, &.Mui-focusVisible': {
                boxShadow: '0 0 0 8px rgba(156, 39, 176, 0.16)',
              },
              '&.Mui-active': {
                boxShadow: '0 0 0 14px rgba(156, 39, 176, 0.16)',
              },
            },
            '& .MuiSlider-mark': {
              width: 2,
              height: 2,
              borderRadius: '100px',
              backgroundColor: '#9c27b0',
              opacity: 1,
              '&.MuiSlider-markActive': {
                backgroundColor: '#9c27b0',
                opacity: 1,
              },
            },
            '& .MuiSlider-valueLabel': {
              backgroundColor: '#757575',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: 400,
              padding: '4px 12px',
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
        aria-label="Roll the dice"
        className={styles.controls__button}
        sx={{
          backgroundColor: '#9c27b0',
          borderRadius: '4px',
          padding: '8px 22px',
          fontSize: '14px',
          fontWeight: '500',
          letterSpacing: '1.25px',
          boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.20), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
          '&:hover': {
            backgroundColor: '#7b1fa2',
            boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.20), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
          },
        }}
      >
        PLAY
      </Button>
    </div>
  );
};

export default GameControls;
