import React, { useState } from 'react';
import { Carousel } from '../../components/carousel/Carousel';
import { Modal } from '../../components/modal/Modal';
import { Card, Header } from './StyleHome'

import Logo from '../../assets/img/logo.png'
import Card1 from '../../assets/img/card1.png';
import Card2 from '../../assets/img/card2.png';
import Card3 from '../../assets/img/card3.png';

const developers = [
    { name: 'Átila', link: 'https://example.com/john' },
    { name: 'Gregorio', link: 'https://example.com/mary' },
    { name: 'Matheus', link: 'https://example.com/bob' },
];

const Home: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const handleCardClick = (content: string) => {
        setIsModalOpen(true);
        setModalContent(content);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Header>
                <img src={`${Logo}`} alt="Logo" />
                <h1>Buddy Care - Cuidado emocional online ao seu alcance</h1>
            </Header>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '10px',
                }}
            >
                <Card onClick={() => handleCardClick('Conteúdo do primeiro modal')} style={{ backgroundImage: `url(${Card1})`, backgroundSize: 'cover' }}>
                    <h3>Atendimento Psicológico Online</h3>
                </Card>

                <Card onClick={() => handleCardClick('Conteúdo do segundo modal')} style={{ backgroundImage: `url(${Card2})`, backgroundSize: 'cover' }}>
                <h3>Profissionais de Alta Qualidade</h3>
                </Card>

                <Card onClick={() => handleCardClick('Conteúdo do terceiro modal')} style={{ backgroundImage: `url(${Card3})`, backgroundSize: 'cover' }}>
                <h3>Atendimento de Qualidade que Cabe no Seu Bolso</h3>
                </Card>
            </div>

            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={handleModalClose} title="Título do Modal" content={modalContent}>
                    <p>{modalContent}</p>
                </Modal>
            )}


            <Carousel />

            <footer>
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
