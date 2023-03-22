import React, { useState } from "react";
import { Carousel } from "../../components/carousel/Carousel";
import { Modal } from "../../components/modal/Modal";
import {
  Card,
  CardGrid,
  CarrouselContainer,
  Header,
  TitleCard,
} from "./StyleHome";

import Logo from "../../assets/img/logo.png";
import Card1 from "../../assets/img/card1.png";
import Card2 from "../../assets/img/card2.png";
import Card3 from "../../assets/img/card3.png";
import { useNavigate } from "react-router-dom";
import { Menu } from "../../components/menu/Menu";

const developers = [
  { name: "Átila", link: "https://example.com/john" },
  { name: "Gregorio", link: "https://example.com/mary" },
  { name: "Matheus", link: "https://example.com/bob" },
];

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleCardClick = (content: string) => {
    setIsModalOpen(true);
    setModalContent(content);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Menu />
      <Header>
        <img src={`${Logo}`} alt="Logo" />
        <h1>Buddy Care - Cuidado emocional online ao seu alcance</h1>
      </Header>

      <CardGrid>
        <Card
          onClick={() => handleCardClick("Conteúdo do primeiro modal")}
          style={{ backgroundImage: `url(${Card1})`, backgroundSize: "cover" }}
        >
          <TitleCard>Atendimento Psicológico Online</TitleCard>
        </Card>

        <Card
          onClick={() => handleCardClick("Conteúdo do segundo modal")}
          style={{ backgroundImage: `url(${Card2})`, backgroundSize: "cover" }}
        >
          <TitleCard>Profissionais de Alta Qualidade</TitleCard>
        </Card>

        <Card
          onClick={() => handleCardClick("Conteúdo do terceiro modal")}
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
        >
          <p>{modalContent}</p>
        </Modal>
      )}
      <CarrouselContainer>
        <Carousel />
      </CarrouselContainer>
      <footer
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {developers.map((dev) => (
          <a key={dev.name} href={dev.link}>
            {dev.name}
          </a>
        ))}
      </footer>
    </>
  );
};

export default Home;
