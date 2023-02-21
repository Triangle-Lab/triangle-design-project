import React, { FC } from 'react';
import { ThemeProps } from '../Icon';
export interface ProgressProps {
  percent: number;
  strokeHeight?: number;
  showText?: boolean;
  style?: React.CSSProperties;
  theme?: ThemeProps;
}
const Progress: FC<ProgressProps> = (props) => {
  const { percent, strokeHeight, showText, theme } = props;
  return (
    <div data-testid="progress" className="viking-progress-bar">
      <div
        className="viking-progress-bar-outer"
        style={{ height: `${strokeHeight}px` }}
      >
        <div
          className={`viking-bar-inner color-${theme}`}
          style={{ width: `${percent}%` }}
        >
          {showText ? (
            <span className="inner-text">{`${percent}%`}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  theme: 'primary',
};
export default Progress;
