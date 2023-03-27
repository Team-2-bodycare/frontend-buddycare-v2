import { OAuth2Client } from 'google-auth-library';
import { useEffect, useState } from 'react';
import dotenv from 'dotenv';

dotenv.config();

type CalendarProps = {
  onAuthSuccess: (client: OAuth2Client) => void;
};

const Calendar = ({ onAuthSuccess }: CalendarProps) => {
  const [client, setClient] = useState<OAuth2Client | null>(null);

  useEffect(() => {
    const credentials = {
      client_id: process.env.CLIENT_ID!,
      client_secret: process.env.CLIENT_SECRET!,
      redirect_uris: [process.env.REDIRECT_URI!]
    };

    const scopes = ['https://www.googleapis.com/auth/calendar'];

    const client = new OAuth2Client(
      credentials.client_id,
      credentials.client_secret,
      credentials.redirect_uris[0]
    );

    const authorizeUrl = client.generateAuthUrl({
      access_type: 'offline',
      scope: scopes
    });

    console.log(`Abra o URL de autorização no navegador: ${authorizeUrl}`);

    const getToken = async (code: string) => {
      const { tokens } = await client.getToken(code);
      client.setCredentials(tokens);
      console.log('Token de acesso armazenado.');
      onAuthSuccess(client);
    };

    // Exemplo de como solicitar o código de autorização do usuário
    // Você pode modificar este código para se adequar ao seu caso de uso
    const code = prompt('Insira o código de autorização aqui:');
    getToken(code!);

    setClient(client);
  }, [onAuthSuccess]);

  return <div>Seu componente aqui</div>;
};

export default Calendar;
