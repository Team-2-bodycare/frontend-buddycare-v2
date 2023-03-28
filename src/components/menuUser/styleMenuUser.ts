import styled from "styled-components";

export const MenuContainer = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  padding: 5px;
  color: rgb(240, 240, 240);
  display: flex;
  gap: 10px;
  width: 100%;
  height: 70px;
  justify-content: left;
  align-items: center;
  z-index: 1;
`;

export const UserPhotoDefault = styled.img`
  position: absolute;
  left: 20px;
  top: 10px;
  width: 50px;
  border-radius: 50px;
  cursor: pointer;
`;

export const UserPhoto = styled.img`
  /* position: absolute;
  left: 20px;
  top: 10px; */
  width: 50px;
  height: 50px;
  margin: 13px 10px 10px 10px;
  border-radius: 50px;
  cursor: pointer;
`;

export const UserName = styled.p`
  /* position: absolute;
  left: 100px;
  top: 30px;
  width: 200px; */
  font-size: 18px;
  text-align: left;
`;

export const MenuLi = styled.li`
  /* position: absolute;
  left: 0px;
  top: 0px; */
  float: left;
  cursor: pointer;
`;

export const MenuDropDownContent = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  display: none;
  position: absolute;
  left: 0;
  top: 70px;
  min-width: 145px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const MenuDropDownLi = styled(MenuLi)`
  display: inline-block;
  flex-direction: row;
  padding: 3px;
  /* &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  } */
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
  border-radius: 10px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 370px) {
    font-size: 15px;
  }
`;
