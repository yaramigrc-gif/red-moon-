const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname));

function getLunaReply(text) {
  const lower = text.toLowerCase();
  if(lower.includes('triste')) return '¡Ánimo! Todo va a mejorar 😄';
  if(lower.includes('tarea')) return 'Empieza por lo más fácil y luego lo difícil 💪';
  if(lower.includes('cansado')) return 'Tómate un descanso y luego sigue 💤';
  return '¡Sigue adelante! Tú puedes 😎';
}

app.post('/message', (req, res) => {
  const userText = req.body.text || '';
  const reply = getLunaReply(userText);
  res.json({ reply });
});

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));