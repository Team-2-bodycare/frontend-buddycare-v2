import styled from "styled-components";

export const MenuContainer = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.3);
  padding: 20px;
  color: #cccccc;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const MenuUl = styled.ul`
  display: flex;
  gap: 20px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export const MenuLi = styled.li`
  float: left;
  cursor: pointer;
`;

export const MenuDropbtn = styled.div`
  display: inline-block;

  text-align: center;
  text-decoration: none;

  @media (max-width: 370px) {
    font-size: 15px;
  }
`;

export const MenuDropDownContent = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

export const MenuDropDownLi = styled(MenuLi)`
  display: inline-block;

  &:hover {
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:hover ${MenuDropDownContent} {
    display: block;
  }
`;

export const MenuA = styled.a`
  display: inline-block;
  color: #cccccc;
  text-align: center;
  text-decoration: none;

  &:hover {
  color: #ffffff;
  }

  @media (max-width: 370px) {
    font-size: 15px;
  }
`;

export const MenuSubA = styled.a`
  width: auto;
  color: rgb(240, 240, 240);
  padding: 10px 15px;
  text-decoration: none;
  display: block;
  text-align: left;
  
  &:hover {
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 370px) {
    font-size: 15px;
  }
`;
