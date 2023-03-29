import {
  UserUpdateButton,
  UserUpdateForm,
  UserUpdateFormGroup,
  UserUpdateInput,
  UserUpdateSpanEmail,
  UserUpdateSpanName,
  UserUpdateSpanPassword,
  UserUpdateSpanPhone,
  UserUpdateSpanPhoto,
  UserUpdateTitle,
} from "./styleUserUpdate";
import { useEffect, useState } from "react";
import { IUser } from "../../interfaces/IUser";
import { userService } from "../../services/user/UserService";
import { updateUser } from "../../services/users/GetByIdUser";
import swal from "sweetalert";

export function UserUpdate() {
  const userId = localStorage.getItem("userId");
  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    password: "",
    phone: "",
    photo: "",
  });

  useEffect(() => {
    userById();
  }, []);

  async function userById() {
    if (userId) {
      const response = await userService.GetById(`${userId}`);

      const userInfosValues = {
        name: response?.data.name,
        email: response?.data.email,
        password: response?.data.password,
        phone: response?.data.phone,
        photo: response?.data.photo,
      };

      setUser({
        ...user,
        ...userInfosValues,
      });
    }
  }

  const handleChangesValues = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((value: IUser) => ({
      ...value,
      [e.target.name]: e.target.value,
    }));
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userId) {
      const response = await updateUser(`${userId}`, user);

      if (response) {
        swal({
          title: "Perfil atualizado com sucesso!",
          icon: "success",
          timer: 6000,
        });
      } else {
        swal({
          title: "Error!",
          text: "Erro ao atualizar perfil",
          icon: "error",
          timer: 6000,
        });
      }
    }
  };

  return (
    <UserUpdateForm onSubmit={onSubmit}>
      <UserUpdateTitle>Editar dados do perfil</UserUpdateTitle>
      <UserUpdateFormGroup>
        <UserUpdateInput
          value={user?.name}
          autoComplete="off"
          type="text"
          name="name"
          required
          onChange={handleChangesValues}
        />
        <UserUpdateSpanName>Nome</UserUpdateSpanName>
      </UserUpdateFormGroup>
      <UserUpdateFormGroup>
        <UserUpdateInput
          value={user?.email}
          autoComplete="off"
          type="text"
          name="email"
          required
          onChange={handleChangesValues}
        />
        <UserUpdateSpanEmail>Email</UserUpdateSpanEmail>
      </UserUpdateFormGroup>

      <UserUpdateFormGroup>
        <UserUpdateInput
          value={user?.password}
          autoComplete="off"
          type="password"
          name="password"
          required
          onChange={handleChangesValues}
        />
        <UserUpdateSpanPassword>Senha</UserUpdateSpanPassword>
      </UserUpdateFormGroup>

      <UserUpdateFormGroup>
        <UserUpdateInput
          value={user?.phone}
          autoComplete="off"
          type="text"
          name="phone"
          required
          onChange={handleChangesValues}
        />
        <UserUpdateSpanPhone>Telefone</UserUpdateSpanPhone>
      </UserUpdateFormGroup>

      <UserUpdateFormGroup>
        <UserUpdateInput
          value={user?.photo}
          type="text"
          name="photo"
          required
          onChange={handleChangesValues}
        />
        <UserUpdateSpanPhoto>Foto</UserUpdateSpanPhoto>
      </UserUpdateFormGroup>

      <UserUpdateButton type="submit">Salvar</UserUpdateButton>
    </UserUpdateForm>
  );
}
