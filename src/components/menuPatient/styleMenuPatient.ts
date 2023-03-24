import styled from "styled-components";

export const MenuContainer = styled.div`
  position: fixed;
  background: rgba(46, 171, 244, 0.8);
  padding: 5px;
  color: rgb(240, 240, 240);
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const PatientPhotoDefault = styled.img`
  width: 50px;
  border-radius: 50px;
  position: absolute;
  right: 20px;
  cursor: pointer;
`;

export const PatientPhoto = styled.img`
  position: absolute;
  right: 40px;
  top: 10px;
  width: 60px;
  border-radius: 50px;

  cursor: pointer;
`;

export const MenuLi = styled.li`
  position: absolute;
  right: 0px;
  top: 0px;
  float: left;
  cursor: pointer;
`;

export const MenuDropDownContent = styled.div`
  background-color: rgba(46, 171, 244, 0.8);
  display: none;
  position: absolute;
  right: 0;
  top: 70px;
  min-width: 145px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const MenuDropDownLi = styled(MenuLi)`
  display: inline-block;
  padding: 0;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:hover ${MenuDropDownContent} {
    display: block;
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
