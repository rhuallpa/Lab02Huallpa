const express = require('express');
const app = express();

// Ruta para el archivo index.html en la raíz
app.get('/', (req, res) => {
  res.sendFile('./static/index.html', {
    root: __dirname
  });
});

// Ruta para la página "Nosotros"
app.get('/nosotros', (req, res) => {
  res.sendFile('./static/nosotros.html', {
    root: __dirname
  });
});

// Ruta para la página "Catálogo"
app.get('/catalogo', (req, res) => {
  res.sendFile('./static/catalogo.html', {
    root: __dirname
  });
});

// Ruta para la página "Contactos"
app.get('/contactos', (req, res) => {
  res.sendFile('./static/contactos.html', {
    root: __dirname
  });
});

// Ruta para la página "Fashion"
app.get('/fashion', (req, res) => {
  res.sendFile('./static/fashion.html', {
    root: __dirname
  });
});
  
// Ruta para la página "Travel"
app.get('/travel', (req, res) => {
  res.sendFile('./static/travel.html', {
      root: __dirname
  });
});
  

// Ruta para la página "Holyday"
app.get('/holyday', (req, res) => {
  res.sendFile('./static/holyday.html', {
        root: __dirname
  });
});
  
// Configuración del puerto
app.listen(3000, () => {
  console.log(`Server on port ${3000}`);
});

// Manejo de Rutas no Encontradas (404)
app.use((req, res) => {
  res.status(404).send('No se encontro tu pagina.....!!!');
});
