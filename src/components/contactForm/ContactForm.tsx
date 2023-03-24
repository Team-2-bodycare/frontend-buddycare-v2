import React, { useState } from "react";
import {
  Button,
  ContactLabel,
  Form,
  Input,
  InputWrapper,
  StyleH2,
  Textarea,
} from "./StyleContact";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formState);
    // Aqui você pode enviar o formulário por e-mail usando uma biblioteca de envio de e-mails ou uma API de e-mails
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <StyleH2>Entre em contato conosco</StyleH2>
        <InputWrapper>
          <ContactLabel htmlFor="name">Nome:</ContactLabel>
          <Input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />

          <ContactLabel htmlFor="email">E-mail:</ContactLabel>
          <Input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </InputWrapper>

        <ContactLabel htmlFor="message">Mensagem:</ContactLabel>
        <Textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
        />

        <Button type="submit">Enviar</Button>
      </Form>
    </>
  );
};
