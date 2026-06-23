'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import classes from './calculator-buttons.module.css';

type CalculatorButtonsProps = {
  onButtonClick?: (value: string) => void;
  onDelete?: () => void;
  onEnter?: () => void;
};

export default function CalculatorButtons({ onButtonClick, onDelete, onEnter }: CalculatorButtonsProps): React.JSX.Element {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.grid}>
          {numbers.map((number) => (
            <button
              key={number}
              type="button"
              className={classes.circleButton}
              onClick={() => onButtonClick?.(number)}
            >
              {number}
            </button>
          ))}

          <button
            type="button"
            className={classes.zeroButton}
            onClick={() => onButtonClick?.('0')}
          >
            0
          </button>

          <button
            type="button"
            className={classes.circleButton}
            onClick={() => onButtonClick?.('.')}
          >
            .
          </button>
        </div>

        <div className={classes.actions}>
          <button
            type="button"
            className={classes.deleteButton}
            onClick={onDelete}
          >
            <FontAwesomeIcon
              icon={faDeleteLeft}
              className={classes.icon}
            />
          </button>

          <button
            type="button"
            className={classes.enterButton}
            onClick={onEnter}
          >
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className={classes.icon}
            />
          </button>
        </div>
      </div>
    </ div>
  );
}
