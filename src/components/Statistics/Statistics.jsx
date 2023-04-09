import React from 'react';
import PropTypes from 'prop-types';

import {
  Title,
  Feedback,
  WrapTotal,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <Title>Statistics</Title>
      <Feedback>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </Feedback>
      <WrapTotal>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </WrapTotal>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  PositivePercentage: PropTypes.number,
};
