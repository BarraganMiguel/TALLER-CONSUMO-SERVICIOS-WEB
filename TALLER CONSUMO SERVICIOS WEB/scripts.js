// 1. Usuarios (JSONPlaceholder)
fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => {
    const lista = document.getElementById('usuarios');
    data.forEach(user => {
      const item = document.createElement('li');
      item.textContent = `${user.name} (${user.email})`;
      lista.appendChild(item);
    });
  });

// 2. Clima en Quito (Open-Meteo)
fetch('https://api.open-meteo.com/v1/forecast?latitude=-0.23&longitude=-78.52&current_weather=true')
  .then(res => res.json())
  .then(data => {
    const clima = document.getElementById('clima');
    clima.textContent = `Temperatura: ${data.current_weather.temperature}°C - Viento: ${data.current_weather.windspeed} km/h`;
  });

// 3. Razas de gatos (catfact.ninja)
fetch('https://catfact.ninja/breeds')
  .then(res => res.json())
  .then(data => {
    const lista = document.getElementById('gatos');
    data.data.slice(0, 5).forEach(breed => {
      const item = document.createElement('li');
      item.textContent = `${breed.breed} - Tamaño: ${breed.size}`;
      lista.appendChild(item);
    });
  });

// 4. Universidades en Ecuador (Hipolabs API)
fetch('http://universities.hipolabs.com/search?country=Ecuador')
  .then(res => res.json())
  .then(data => {
    const lista = document.getElementById('universidades');
    data.slice(0, 5).forEach(universidad => {
      const item = document.createElement('li');
      item.innerHTML = `<strong>${universidad.name}</strong> - <a href="${universidad.web_pages[0]}" target="_blank">Sitio web</a>`;
      lista.appendChild(item);
    });
  });

// 5. Criptomonedas (CoinGecko)
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,cardano&vs_currencies=usd')
  .then(res => res.json())
  .then(data => {
    const lista = document.getElementById('criptos');
    for (const [coin, info] of Object.entries(data)) {
      const item = document.createElement('li');
      item.textContent = `${coin.toUpperCase()}: $${info.usd} USD`;
      lista.appendChild(item);
    }
  });
// Dato curioso sobre el número 7 (Numbers API)
fetch('http://numbersapi.com/7/trivia')
  .then(res => res.text())
  .then(data => {
    const parrafo = document.getElementById('numero-curioso');
    parrafo.textContent = data;
  })
  .catch(err => console.error('Error cargando dato numérico:', err));
// Consejo aleatorio (Advice Slip API)
fetch('https://api.adviceslip.com/advice')
  .then(res => res.json())
  .then(data => {
    const consejo = document.getElementById('consejo');
    consejo.textContent = `"${data.slip.advice}"`;
  })
  .catch(err => console.error('Error cargando consejo:', err));

