import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content, children }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '10px',
          padding: '20px',
          maxWidth: '80%',
          maxHeight: '80%',
          overflowY: 'auto',
        }}
      >
        <button onClick={onClose} style={{ float: 'right' }}>
          X
        </button>
        <h2>{title}</h2>
        <p>{content}</p>
        {children}
      </div>
    </div>
  );
};

export { Modal };
