import React, { useState } from 'react';
// import { Modal } from '../../components/modal/Modal';
import { TestimonialsCarousel } from '../../components/carousel/Carousel';
import { Modal } from '../../components/modal/Modal';

const developers = [
    { name: 'John', link: 'https://example.com/john' },
    { name: 'Mary', link: 'https://example.com/mary' },
    { name: 'Bob', link: 'https://example.com/bob' },
];

const Home: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <header
                style={{
                    backgroundImage: `url('/path/to/background-image.jpg')`,
                    backgroundSize: 'cover',
                    height: '400px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img src="/path/to/logo.png" alt="Logo" />
                <p>Uma frase bacana aqui</p>
            </header>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '50px',
                }}
            >
                <div
                    style={{
                        backgroundImage: `url('/path/to/card-image-1.jpg')`,
                        backgroundSize: 'cover',
                        height: '300px',
                        width: '200px',
                        borderRadius: '10px',
                        border: '1px solid white',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                        marginRight: '20px',
                    }}
                    onClick={handleCardClick}
                >
                    <h3>Título do Card 1</h3>
                </div>

                <div
                    style={{
                        backgroundImage: `url('/path/to/card-image-2.jpg')`,
                        backgroundSize: 'cover',
                        height: '300px',
                        width: '200px',
                        borderRadius: '10px',
                        border: '1px solid white',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                        marginRight: '20px',
                    }}
                    onClick={handleCardClick}
                >
                    <h3>Título do Card 2</h3>
                </div>

                <div
                    style={{
                        backgroundImage: `url('/path/to/card-image-3.jpg')`,
                        backgroundSize: 'cover',
                        height: '300px',
                        width: '200px',
                        borderRadius: '10px',
                        border: '1px solid white',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                    }}
                    onClick={handleCardClick}
                >
                    <h3>Título do Card 3</h3>
                </div>
            </div>

            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={handleModalClose} title="Título do Modal" content={''}>
                    <p>Texto do modal aqui...</p>
                </Modal>
            )}


            <TestimonialsCarousel />

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
