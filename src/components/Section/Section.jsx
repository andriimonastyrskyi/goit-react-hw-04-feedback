import PropTypes from 'prop-types';
import { FeedbackButton } from 'components/Section/Section.styled';

export const Section = ({ title, children }) => {
  return (
    <FeedbackButton>
      <h1>{title}</h1>
      {children}
    </FeedbackButton>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
