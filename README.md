<h1 align="center">🏀 Promiedos NBA – BackEnd</h1>

<div align="center">

  <a href="https://github.com/agussantinelli/Promiedos-NBA-FrontEnd" target="_blank" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/💻%20Repo%20Frontend-Vue.js%20%7C%20TypeScript-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white" alt="Repo Frontend"/>
  </a>

  <a href="https://github.com/agussantinelli/Promiedos-NBA-BackEnd" target="_blank" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/⚙️%20Repo%20Backend-NestJS%20%7C%20PostgreSQL-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="Repo Backend"/>
  </a>

  <a href="https://github.com/agussantinelli" target="_blank">
    <img src="https://img.shields.io/badge/👤%20Agustín%20Santinelli-agussantinelli-000000?style=for-the-badge&logo=github&logoColor=white" alt="Agus"/>
  </a>

</div>


<div align="center">
  <img src="https://img.shields.io/badge/NestJS-Framework-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS Badge"/>
  <img src="https://img.shields.io/badge/PostgreSQL-Base%20de%20Datos-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL Badge"/>
  <img src="https://img.shields.io/badge/TypeORM-ORM-e53535?style=for-the-badge&logo=typeorm&logoColor=white" alt="TypeORM Badge"/>
  <img src="https://img.shields.io/badge/TypeScript-Lenguaje-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Badge"/>
  <img src="https://img.shields.io/badge/pnpm-Package%20Manager-F69220?style=for-the-badge&logo=pnpm&logoColor=white" alt="pnpm Badge"/>
</div>

<div align="center">
    <a href="https://drive.google.com/drive/folders/1EUGlDWBfIjM2IB9C-M7n3oqcy_gZE8f-" target="_blank">
        <img src="https://img.shields.io/badge/📂%20Documentación%20del%20Proyecto-Google%20Drive-4285F4?style=for-the-badge&logo=googledrive&logoColor=white" alt="Docs Badge"/>
    </a>
</div>

<div align="center">
  <img src="https://img.shields.io/badge/Copyright-All_Rights_Reserved-red?style=for-the-badge&logo=copyright&logoColor=white" alt="Copyright Badge"/>
</div>

<hr/>

<h2>🎯 Objetivo del BackEnd</h2>

<p>
  El <strong>BackEnd</strong> de <strong>Promiedos NBA</strong> expone una <strong>API REST</strong> robusta construida con <strong>NestJS</strong> sobre 
  <strong>Node.js + PostgreSQL</strong>, utilizando <strong>TypeORM</strong> como capa de persistencia. Se encarga de centralizar:
</p>

<ul>
  <li><strong>Resultados de la NBA actualizados en el momento</strong>.</li>
  <li>Detalles completos de los partidos (marcador, boxscore, líderes).</li>
  <li>Datos de la competición actual (clasificaciones, rachas, estadísticas agregadas).</li>
  <li><strong>Datos históricos</strong>: campeonatos, finales, premios y récords.</li>
  <li>Logros individuales (MVP, All-Star, Hall of Fame, etc.).</li>
  <li>Estadísticas avanzadas: PPG, APG, RPG, BPG, SPG, Stocks, minutos, eficiencia, etc.</li>
  <li>Información estructurada de franquicias, estadios y contexto histórico-cultural.</li>
</ul>

<p>
  Gracias a la arquitectura modular de <strong>NestJS</strong>, el diseño permite escalar fácilmente hacia múltiples competiciones de baloncesto.
</p>

<hr/>

<h2>🧱 Stack tecnológico (BackEnd)</h2>

<table>
  <thead>
    <tr>
      <th>Componente</th>
      <th>Tecnología</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Runtime</strong></td>
      <td>Node.js</td>
      <td>Entorno de ejecución JavaScript/TypeScript.</td>
    </tr>
    <tr>
      <td><strong>Framework</strong></td>
      <td>NestJS</td>
      <td>Framework progresivo para aplicaciones de servidor eficientes y escalables.</td>
    </tr>
    <tr>
      <td><strong>Lenguaje</strong></td>
      <td>TypeScript</td>
      <td>Tipado estático en controladores, servicios y modelos.</td>
    </tr>
    <tr>
      <td><strong>Base de datos</strong></td>
      <td>PostgreSQL</td>
      <td>Almacenamiento relacional para temporadas, equipos, jugadores y partidos.</td>
    </tr>
    <tr>
      <td><strong>ORM / Query Layer</strong></td>
      <td>TypeORM</td>
      <td>Abstracción de acceso a datos, migraciones y tipado.</td>
    </tr>
    <tr>
      <td><strong>Tests</strong></td>
      <td>Jest + Supertest (a definir)</td>
      <td>Testing unitario e integración HTTP.</td>
    </tr>
  </tbody>
</table>

<hr/>

<h2>📊 Modelo de datos (conceptual)</h2>

<p>Algunas entidades principales que se planean modelar:</p>

<ul>
  <li><strong>League</strong> – Permite escalar a otras ligas (NBA, EuroLeague, ACB, JJOO, etc.).</li>
  <li><strong>Season</strong> – Temporadas (ej. 2024-25) por liga.</li>
  <li><strong>Team</strong> – Franquicias con:
    <ul>
      <li>Nombre, ciudad, colores, año de fundación.</li>
      <li>Datos históricos (campeonatos, finales, rachas).</li>
      <li>Información sobre estadio, fotos y detalles de idiosincrasia.</li>
    </ul>
  </li>
  <li><strong>Player</strong> – Jugadores con biografía y vínculo a equipos y ligas.</li>
  <li><strong>Game</strong> – Partidos:
    <ul>
      <li>Fecha, equipos local/visitante, marcador final.</li>
      <li>Estado: programado, en juego, finalizado.</li>
      <li>Referencias a estadísticas individuales.</li>
    </ul>
  </li>
  <li><strong>PlayerGameStats</strong> – Boxscore por jugador:
    <ul>
      <li>MPG, PTS, AST, REB, BLK, STL, turnovers, Stocks, etc.</li>
    </ul>
  </li>
  <li><strong>TeamSeasonStats</strong> – Estadísticas agregadas por equipo y temporada.</li>
  <li><strong>Award</strong> – Logros individuales:
    <ul>
      <li>MVP, DPOY, ROY, All-Star, Hall of Fame, etc.</li>
    </ul>
  </li>
  <li><strong>HistoricalRecord</strong> – Récords históricos (máximos de puntos, triples, rachas de victorias, etc.).</li>
</ul>

<hr/>

<h2>📡 Endpoints principales (propuestos)</h2>

<h3>📌 Resultados y partidos</h3>
<ul>
  <li><code>GET /api/games/today</code> – Partidos del día.</li>
  <li><code>GET /api/games/:id</code> – Detalle completo del partido.</li>
  <li><code>GET /api/games/live</code> – Partidos en vivo (marcador y tiempo).</li>
  <li><code>GET /api/games/by-date?date=YYYY-MM-DD</code> – Partidos por fecha.</li>
</ul>

<h3>📌 Equipos</h3>
<ul>
  <li><code>GET /api/teams</code> – Lista completa de franquicias NBA.</li>
  <li><code>GET /api/teams/:id</code> – Ficha estática del equipo (historia, estadio, fotos, idiosincrasia).</li>
  <li><code>GET /api/teams/:id/stats</code> – Estadísticas de la temporada actual.</li>
</ul>

<h3>📌 Jugadores y estadísticas</h3>
<ul>
  <li><code>GET /api/players</code> – Listado general / filtrado.</li>
  <li><code>GET /api/players/:id</code> – Detalle de jugador.</li>
  <li><code>GET /api/players/:id/stats</code> – Stats por temporada.</li>
  <li><code>GET /api/stats/leaders?metric=ppg</code> – Líderes por métrica: PPG, APG, RPG, BPG, SPG, Stocks, etc.</li>
</ul>

<h3>📌 Historia y logros</h3>
<ul>
  <li><code>GET /api/history/mvps</code> – MVPs por temporada.</li>
  <li><code>GET /api/history/champions</code> – Campeones de la NBA.</li>
  <li><code>GET /api/history/hall-of-fame</code> – Ingresados al Hall of Fame.</li>
  <li><code>GET /api/history/all-star</code> – Participaciones y premios del All-Star.</li>
</ul>

<hr/>

<h2>📁 Estructura del Proyecto</h2>

<pre><code>Promiedos-NBA-BackEnd/
├── src/                                         # Código fuente principal
│   ├── modules/                                 # Módulos funcionales (NBA, Teams, Players)
│   ├── common/                                  # Filtros, guards, decorators globales
│   ├── config/                                  # Configuración de App y DB
│   ├── database/                                # Entidades, Migraciones y Seeds
│   ├── app.module.ts                            # Módulo raíz de la aplicación
│   └── main.ts                                  # Punto de entrada (Configuración global)
├── test/                                        # Tests de integración (E2E)
├── .env                                         # Variables de entorno (DB, Port)
├── .gitignore                                   # Archivos excluidos de Git
├── nest-cli.json                                # Configuración del CLI de Nest
├── package.json                                 # Dependencias y scripts
├── tsconfig.json                                # Configuración de TypeScript
└── pnpm-lock.yaml                               # Lockfile de dependencias
</code></pre>

<hr/>

<h2>🔧 Configuración e instalación</h2>

<h3>1️⃣ Clonar el repositorio</h3>

<pre><code>git clone https://github.com/agussantinelli/Promiedos-NBA-BackEnd.git
cd Promiedos-NBA-BackEnd
</code></pre>

<h3>2️⃣ Variables de entorno (ejemplo .env)</h3>

<pre><code>
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=password
DB_NAME=promiedos_nba

PORT=3000
NODE_ENV=development
</code></pre>

<h3>3️⃣ Instalar dependencias y levantar el servidor</h3>

<pre><code>
pnpm install
pnpm dev
</code></pre>

<hr/>

<h2>📌 Futuras extensiones de la API</h2>

<p>
  La API está pensada para soportar múltiples ligas y torneos de baloncesto en el futuro:
</p>

<ul>
  <li>Juegos Olímpicos (JJOO).</li>
  <li>EuroBasket.</li>
  <li>EuroLeague.</li>
  <li>Liga ACB.</li>
  <li>Liga Nacional Argentina.</li>
  <li>G League.</li>
  <li>Otros torneos FIBA y ligas regionales.</li>
</ul>

<hr/>

<h2>📬 Contacto</h2>

<p>
  Autor: <strong>Agustín Santinelli</strong><br/>
  Email: <a href="mailto:agustinsantinelli@gmail.com">agustinsantinelli@gmail.com</a><br/>
  GitHub: <a href="https://github.com/agussantinelli" target="_blank">@agussantinelli</a>
</p>

<hr>

<h2 align="left">⚖️ Licencia y Propiedad Intelectual</h2>

<p align="left">
  Este proyecto es <b>propiedad intelectual privada</b> de Agustín Santinelli. No se otorga ninguna licencia de uso abierto. Puedes consultar los términos detallados en el archivo 
  <a href="LICENSE"><code>LICENSE</code></a> incluido en este repositorio.
</p>

<p align="left">
  <i>
    ⚠️ <b>Restricción Firme:</b> Queda terminantemente prohibida la copia, reproducción, distribución o modificación de este código sin autorización expresa del autor. Este repositorio se publica exclusivamente como exhibición de portafolio profesional.
  </i>
</p>
<hr />

<h2 align="left">🚫 Copyright Total</h2>

<p align="left">
  Este proyecto es propiedad intelectual exclusiva de <b>Agustín Santinelli</b>. No se aceptan contribuciones externas o forks para su uso público sin previo acuerdo por escrito.
</p>

<p align="left">
  Si tienes sugerencias directas o deseas explorar colaboraciones comerciales, por favor contacta al autor: 
  <a href="mailto:agustinsantinelli@gmail.com">agustinsantinelli@gmail.com</a>.
</p>

<hr />

<p><em>Promiedos NBA – Backend para una plataforma estadística de baloncesto en español, moderna y extensible.</em></p>
