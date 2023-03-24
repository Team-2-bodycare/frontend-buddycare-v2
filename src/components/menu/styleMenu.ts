import styled from "styled-components";

export const MenuContainer = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.3);
  padding: 20px;
  color: #cccccc;
  display: flex;
  width: 100%;
  height: 50px;
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
  top: 44px;
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const MenuDropDownLi = styled(MenuLi)`
  display: inline-block;
  padding: 10px 15px;

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
<<<<<<< HEAD
  padding: 10px 15px;
  color: white;
=======
  color: #cccccc;
>>>>>>> d6c3f6bb5e6e2d873699f6c5577d0a75bdafb2d5
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
