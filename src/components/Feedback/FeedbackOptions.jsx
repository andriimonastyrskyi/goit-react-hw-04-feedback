import PropTypes from 'prop-types';

import { FeedbackButton } from 'components/Feedback/Feedback.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <FeedbackButton>
      {options.map(option => {
        return (
          <li key={option}>
            <button
              name={option}
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </button>
          </li>
        );
      })}
    </FeedbackButton>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};
