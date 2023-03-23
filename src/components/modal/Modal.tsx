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
        <button onClick={onClose} style={{
          float: 'right',
          borderRadius: '20px',
          backgroundColor: '#ff7f7f',
          color: '#ffffff',
          padding: '10px 20px',
          transition: 'background-color 0.3s ease-in-out',
          border: 'none'
        }}>
          Close
        </button>
        <text
          style={{
            color: '#333',
            fontSize: '18px',
            lineHeight: '1.5'
          }}
        >
          {content}
        </text>
        {children}
      </div>
    </div >
  );
};

export { Modal };
