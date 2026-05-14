const params = new URLSearchParams(window.location.search);
const tema = params.get("tema");

fetch(`data/${tema}.json`)
  .then(res => res.json())
  .then(data => {

    const container = document.getElementById("contenedor");

    data.forEach(item => {

      // Obtener dominio
      const domain = new URL(item.url).hostname;

      // Generar favicon automáticamente
      const favicon =
      `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

      container.innerHTML += `
        <div class="recurso">

          <img
            src="${favicon}"
            alt="${item.nombre}"
            class="logo"
          >

          <h2>${item.nombre}</h2>

          <p>${item.descripcion}</p>

          <small>${item.tipo}</small>

          <br><br>

          <a href="${item.url}" target="_blank">
            Visitar
          </a>

        </div>
      `;
    });

  });