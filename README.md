# Dice Game

A simple browser-based dice game built as a test assignment.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Material UI v5
- SCSS Modules (BEM)

## How It Works

The player sets a threshold (0–100) using a slider and chooses whether the dice result should be **Over** or **Under** that threshold. Clicking **Play** rolls the dice (random number 1–100). If the result satisfies the condition, the player wins. Each round is recorded in a history table, which holds up to 10 entries.

## Project Structure

```
src/
├── app/                  # Next.js App Router layout and page
├── components/
│   └── DiceGame/         # Root feature component
│       └── components/   # StatusBanner, ResultDisplay, GameControls, HistoryTable
├── hooks/
│   └── useDiceGame.ts    # Game state and logic
├── types/
│   └── game.types.ts     # TypeScript interfaces
├── utils/
│   └── game.utils.ts     # Pure utility functions
└── theme/
    └── theme.ts          # MUI theme configuration
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
