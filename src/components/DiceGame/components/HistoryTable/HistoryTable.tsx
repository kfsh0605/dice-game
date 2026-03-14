import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import type { HistoryEntry } from '@/types/game.types';
import styles from './HistoryTable.module.scss';

interface HistoryTableProps {
  history: HistoryEntry[];
}

const HistoryTable: React.FC<HistoryTableProps> = ({ history }) => {
  if (history.length === 0) return null;

  return (
    <div className={styles.historyTable}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={styles.historyTable__headerCell}>
              Time
            </TableCell>
            <TableCell className={styles.historyTable__headerCell}>
              Guess
            </TableCell>
            <TableCell
              className={styles.historyTable__headerCell}
            >
              Result
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.map((entry) => (
            <TableRow key={entry.id}>
              <TableCell className={styles.historyTable__cell}>
                {entry.time}
              </TableCell>
              <TableCell className={styles.historyTable__cell}>
                {entry.direction === 'over' ? 'Over' : 'Under'} {entry.threshold}
              </TableCell>
              <TableCell
                className={`${styles.historyTable__cell} ${
                  entry.status === 'win'
                    ? styles['historyTable__cell--win']
                    : styles['historyTable__cell--lose']
                }`}
              >
                {entry.result}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default HistoryTable;
