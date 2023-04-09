import styled from 'styled-components';

export const FeedbackButton = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 30px;

  & button[name='good']:hover,
  & button[name='good']:focus {
    background-color: green;
  }
  & button[name='neutral']:hover,
  & button[name='neutral']:focus {
    background-color: grey;
  }
  & button[name='bad']:hover,
  & button[name='bad']:focus {
    background-color: red;
  }
  & button {
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
    font-size: 20px;
    color: #fff;
    background-color: #7e7e7e;
  }
`;
