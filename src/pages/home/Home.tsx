import React, { useState } from "react";
import { Modal } from "../../components/modal/Modal";
import {
  Card,
  CardGrid,
  Header,
  StyleButtton,
  TitleCard,
} from "./StyleHome";

import Logo from "../../assets/img/logo.png";
import Card1 from "../../assets/img/card1.png";
import Card2 from "../../assets/img/card2.png";
import Card3 from "../../assets/img/card3.png";
import { Menu } from "../../components/menu/Menu";
import { Footer } from "../../components/footer/Footer";
import { ButtonWhatsap } from "../../components/buttonWhatsap/ButtonWhatsap";


const modalTexts = {
  "Conteudo do primeiro modal": "O atendimento psicológico online tem se tornado cada vez mais popular e acessível, permitindo que pessoas de diferentes lugares do mundo tenham acesso aos serviços de um psicólogo qualificado sem precisar sair de casa. E aqui, podemos afirmar que temos o melhor atendimento psicológico online. Ao optar por um atendimento psicológico online, você pode ter acesso a uma série de benefícios, como a conveniência e a flexibilidade de escolher o horário mais adequado para as suas sessões, bem como a privacidade e o anonimato para discutir questões delicadas e pessoais.",

  "Conteudo do segundo modal": "Para garantir que o atendimento psicológico online seja eficaz, é importante escolher um profissional qualificado e experiente, que possa fornecer um ambiente seguro e acolhedor para que você possa se sentir à vontade para compartilhar seus pensamentos e sentimentos. Nós da Buddy Care, como prestadores de serviços de atendimento psicológico online, nos comprometemos em fornecer um ambiente seguro e acolhedor para nossos pacientes, onde eles possam sentir-se confortáveis ​​para explorar seus problemas e questões mais profundas. Contamos com uma equipe de psicólogos experientes e altamente qualificados, que possuem formação e habilidades específicas para oferecer atendimento psicológico online de qualidade.",

  "Conteudo do terceiro modal": "Acreditamos que todos merecem acesso a atendimento psicológico de qualidade, independentemente de suas circunstâncias financeiras. Com a Buddy Care, você pode obter atendimento psicológico acessível e de qualidade que cabe no seu orçamento. Nosso objetivo é ajudá-lo a cuidar de sua saúde emocional sem se preocupar com os custos elevados."
};

const developers = [
  { name: "Átila", link: "https://example.com/john" },
  { name: "Gregorio", link: "https://example.com/mary" },
  { name: "Matheus", link: "https://example.com/bob" },
];

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleCardClick = (content: keyof typeof modalTexts) => {
    setIsModalOpen(true);
    setModalContent(modalTexts[content]);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      <Menu />
      <div style={{ backgroundColor: '#bfbfbf' }}>
        <Header
          style={{
            // backgroundSize: 'cover',
            height: '400px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={`${Logo}`} alt="Logo" />
          <h1>Buddy Care - Cuidado emocional online ao seu alcance</h1>
        </Header>

        <CardGrid>
          <Card
            onClick={() => handleCardClick("Conteudo do primeiro modal")}
            style={{ backgroundImage: `url(${Card1})`, backgroundSize: "cover" }}
          >
            <TitleCard>Atendimento Psicológico Online</TitleCard>
          </Card>

          <Card
            onClick={() => handleCardClick("Conteudo do segundo modal")}
            style={{ backgroundImage: `url(${Card2})`, backgroundSize: "cover" }}
          >
            <TitleCard>Profissionais de Alta Qualidade</TitleCard>
          </Card>

          <Card
            onClick={() => handleCardClick("Conteudo do terceiro modal")}
            style={{ backgroundImage: `url(${Card3})`, backgroundSize: "cover" }}
          >
            <TitleCard>Atendimento de Qualidade que Cabe no Seu Bolso</TitleCard>
          </Card>
        </CardGrid>

        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={handleModalClose}
            title="Título do Modal"
            content={modalContent}
          ></Modal>
        )}
        <StyleButtton>
        <ButtonWhatsap />
        </StyleButtton>

        <Footer />
      </div>
    </>
  );
};

export default Home;
