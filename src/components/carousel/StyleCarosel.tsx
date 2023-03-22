import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 250px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;

  h2 {
    margin-bottom: 10px;
  }

  .avatar {
    background-size: cover;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin: 0 20px;
  }

  .stars {
    display: flex;
    justify-content: center;
    margin-top: 10px;

    span {
      font-size: 24px;
      color: gold;
    }
  }
`;

export const Button = styled.button`
  margin: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  background-color: #eee;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #ccc;
  }
`;
