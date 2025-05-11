const express = require('express');
const cors = require('cors');  // Importujesz CORS
const app = express();
const PORT = process.env.PORT || 3000;

// Używasz CORS, aby zezwolić na zapytania z różnych źródeł
app.use(cors());  // Włączenie CORS globalnie

app.get('/', (req, res) => {
  res.send('<h1>🐶 Tu jest komunikat od backendu!</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
