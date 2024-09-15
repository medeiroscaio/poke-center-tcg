import express from 'express';
import cors from 'cors';
import TCGdex from '@tcgdex/sdk';

const app = express();
const port = 5000;
const tcgdex = new TCGdex('en');

app.use(cors());
app.use(express.json());

app.get('/fetch-cards', async (req, res) => {
  const { name } = req.query;

  try {
    const allCards = await tcgdex.fetch('cards');

    if (!Array.isArray(allCards)) {
      throw new Error('Dados inválidos recebidos da API.');
    }

    const cards = allCards.filter(card => card.name && card.name.toLowerCase().includes(name.toLowerCase()));

    if (cards.length === 0) {
      res.status(404).json({ message: 'Nenhuma carta encontrada.' });
      return;
    }

    res.json(cards);
  } catch (error) {
    console.error('Erro ao buscar cartas:', error.message);
    res.status(500).json({ message: 'Erro ao buscar as cartas.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
