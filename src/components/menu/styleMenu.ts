import styled from "styled-components";

export const MenuContainer = styled.div`
  position: fixed;
  background: rgba(46, 171, 244, 0.8);
  padding: 5px;
  color: rgb(240, 240, 240);
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
  color: white;
  text-align: center;
  text-decoration: none;

  @media (max-width: 370px) {
    font-size: 15px;
  }
`;

export const MenuDropDownContent = styled.div`
  background-color: rgba(46, 171, 244, 0.8);
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const MenuDropDownLi = styled(MenuLi)`
  display: inline-block;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:hover ${MenuDropDownContent} {
    display: block;
  }
`;

export const MenuA = styled.a`
  display: inline-block;
  color: white;
  text-align: center;
  text-decoration: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
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
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 370px) {
    font-size: 15px;
  }
`;
