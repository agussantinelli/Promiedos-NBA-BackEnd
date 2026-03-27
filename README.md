<h1 align="center">🏀 Promiedos NBA – BackEnd</h1>

<div align="center">

  <a href="https://github.com/agussantinelli/Promiedos-NBA-FrontEnd" target="_blank" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/💻%20Repo%20Frontend-SvelteKit%20%7C%20TypeScript-FF3E00?style=for-the-badge&logo=svelte&logoColor=white" alt="Repo Frontend"/>
  </a>

  <a href="https://github.com/agussantinelli/Promiedos-NBA-BackEnd" target="_blank" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/⚙️%20Repo%20Backend-Fastify%20%7C%20PostgreSQL-000000?style=for-the-badge&logo=fastify&logoColor=white" alt="Repo Backend"/>
  </a>

  <a href="https://github.com/agussantinelli" target="_blank">
    <img src="https://img.shields.io/badge/👤%20Agustín%20Santinelli-agussantinelli-000000?style=for-the-badge&logo=github&logoColor=white" alt="Agus"/>
  </a>

</div>


<div align="center">
  <img src="https://img.shields.io/badge/Fastify-Framework-000000?style=for-the-badge&logo=fastify&logoColor=white" alt="Fastify Badge"/>
  <img src="https://img.shields.io/badge/PostgreSQL-Base%20de%20Datos-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL Badge"/>
  <img src="https://img.shields.io/badge/Drizzle-ORM-C5F74F?style=for-the-badge&logoColor=black" alt="Drizzle Badge"/>
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
  El <strong>BackEnd</strong> de <strong>Promiedos NBA</strong> expone una <strong>API REST</strong> de alto rendimiento construida con <strong>Fastify</strong> sobre
  <strong>Node.js + PostgreSQL</strong>, utilizando <strong>Drizzle ORM</strong> como capa de persistencia. Se encarga de centralizar:
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
  La arquitectura liviana de <strong>Fastify</strong> permite escalar fácilmente hacia múltiples competiciones de baloncesto sin la sobrecarga de un framework monolítico.
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
      <td>Fastify v5</td>
      <td>Framework minimalista y de altísimo rendimiento para APIs REST.</td>
    </tr>
    <tr>
      <td><strong>Lenguaje</strong></td>
      <td>TypeScript</td>
      <td>Tipado estático en rutas, schemas y acceso a datos.</td>
    </tr>
    <tr>
      <td><strong>Base de datos</strong></td>
      <td>PostgreSQL</td>
      <td>Almacenamiento relacional para temporadas, equipos, jugadores y partidos.</td>
    </tr>
    <tr>
      <td><strong>ORM / Query Layer</strong></td>
      <td>Drizzle ORM</td>
      <td>Type-safe, sin codegen, máximo rendimiento con control total de SQL.</td>
    </tr>
    <tr>
      <td><strong>Driver</strong></td>
      <td>postgres-js</td>
      <td>Cliente PostgreSQL moderno y eficiente para Node.js.</td>
    </tr>
    <tr>
      <td><strong>Dev Runner</strong></td>
      <td>tsx</td>
      <td>Ejecución de TypeScript en desarrollo sin compilación previa.</td>
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
├── src/
│   ├── db/
│   │   ├── index.ts                             # Conexión Drizzle + postgres-js
│   │   └── schema.ts                            # Schemas de todas las tablas
│   ├── routes/                                  # Rutas Fastify por dominio
│   └── index.ts                                 # Punto de entrada (servidor Fastify)
├── drizzle/                                     # Migraciones generadas (ignorado por git)
├── .env                                         # Variables de entorno
├── .gitignore
├── drizzle.config.ts                            # Configuración de Drizzle Kit
├── package.json
├── tsconfig.json
└── pnpm-lock.yaml
</code></pre>

<hr/>

<h2>🛠️ Skills Especializadas</h2>
<p>Ubicadas en <code>.agent/skills/</code>, son guías técnicas que definen cómo se deben construir las diferentes partes del sistema:</p>

<ul>
    <li><b>🌍 global-context:</b> Regla maestra — contexto arquitectónico global y flujo de implementación obligatorio (schema → migrate → service → route).</li>
    <li><b>🚀 fastify:</b> Blueprint para rutas, plugins, schemas de validación y tipado de handlers con Fastify v5.</li>
    <li><b>🧹 code-quality:</b> Principios SOLID, política "Sin Comentarios" y regla de no usar <code>any</code>.</li>
    <li><b>🏷️ naming-conventions:</b> Convenciones de archivos (<code>kebab-case</code>), código (<code>camelCase</code>) y columnas DB (<code>snake_case</code>).</li>
    <li><b>🟢 node:</b> Buenas prácticas de Node.js: async/await, ESM, dotenv y no blocking.</li>
    <li><b>🧪 test-enforcement:</b> Regla que exige un archivo <code>.spec.ts</code> por cada archivo de lógica de negocio en <code>src/services/</code>.</li>
    <li><b>🔄 readme-auto-sync:</b> Sincronización obligatoria del README cuando cambia la estructura, el schema o los endpoints.</li>
    <li><b>🚫 no-browser:</b> Prohibición estricta del subagente del navegador en todas las circunstancias.</li>
    <li><b>📚 global-skills:</b> Índice maestro de todas las skills de arquitectura disponibles en el proyecto.</li>
</ul>

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

<h2>🔧 Configuración e instalación</h2>

<h3>1️⃣ Clonar el repositorio</h3>

<pre><code>git clone https://github.com/agussantinelli/Promiedos-NBA-BackEnd.git
cd Promiedos-NBA-BackEnd
</code></pre>

<h3>2️⃣ Variables de entorno (.env)</h3>

<pre><code>DATABASE_URL=postgresql://postgres:password@localhost:5432/promiedos_nba
PORT=3000
HOST=0.0.0.0
CORS_ORIGIN=http://localhost:5173
NODE_ENV=development
</code></pre>

<h3>3️⃣ Instalar dependencias</h3>

<pre><code>pnpm install
</code></pre>

<h3>4️⃣ Crear y poblar la base de datos</h3>

<pre><code># Generar migraciones a partir del schema
pnpm db:generate

# Aplicar migraciones
pnpm db:migrate

# (Opcional) Abrir Drizzle Studio para inspeccionar datos
pnpm db:studio
</code></pre>

<h3>5️⃣ Levantar el servidor en desarrollo</h3>

<pre><code>pnpm dev
# Servidor disponible en http://localhost:3000
# Health check: GET http://localhost:3000/health
</code></pre>

<hr/>

<h2>💻 Comandos pnpm disponibles</h2>

<table>
  <thead>
    <tr>
      <th>Comando</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><p><code>pnpm dev</code></p></td>
      <td>Inicia el servidor de desarrollo con <b>tsx --watch</b> y recarga automática.</td>
    </tr>
    <tr>
      <td><p><code>pnpm build</code></p></td>
      <td>Compila el proyecto TypeScript a <code>dist/</code> para producción.</td>
    </tr>
    <tr>
      <td><p><code>pnpm start</code></p></td>
      <td>Ejecuta el servidor compilado desde <code>dist/index.js</code>.</td>
    </tr>
    <tr>
      <td><p><code>pnpm db:generate</code></p></td>
      <td>Genera los archivos de migración SQL a partir del schema de <b>Drizzle</b>.</td>
    </tr>
    <tr>
      <td><p><code>pnpm db:migrate</code></p></td>
      <td>Aplica las migraciones pendientes sobre la base de datos PostgreSQL.</td>
    </tr>
    <tr>
      <td><p><code>pnpm db:studio</code></p></td>
      <td>Abre <b>Drizzle Studio</b> para inspeccionar y editar datos visualmente.</td>
    </tr>
  </tbody>
</table>

<hr />

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

<p><em>Promiedos NBA – Backend de alto rendimiento para una plataforma estadística de baloncesto en español.</em></p>
