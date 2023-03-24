import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { StyleButtton } from './StyleButton';



export const ButtonWhatsap: React.FC = () => {
  const handleButtonClick = () => {
    const phone = '+00 (00)00000-0000'; // insira o número do seu celular
    const message = 'Olá, gostaria de saber mais informações.'; // insira a mensagem que deseja enviar
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <StyleButtton onClick={handleButtonClick}>
      <FontAwesomeIcon icon={faWhatsapp} size="3x"/>
    </StyleButtton>
  );
};
