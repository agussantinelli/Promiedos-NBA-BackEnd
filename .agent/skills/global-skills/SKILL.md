---
name: global-skills
description: Catálogo central de skills para el BackEnd de Promiedos-NBA (Fastify + Drizzle).
---

# 📚 Promiedos-NBA BackEnd — Skills Catalog

Índice de todas las directrices arquitectónicas del BackEnd. **DEBEN** respetarse en todo momento.

## ⚙️ Skills disponibles

- **[global-context](.agent/skills/global-context/SKILL.md)**: La "Regla Maestra" — contexto arquitectónico y flujo de implementación.
- **[fastify](.agent/skills/fastify/SKILL.md)**: Estructura de rutas, plugins, schemas de validación y tipado de handlers.
- **[naming-conventions](.agent/skills/naming-conventions/SKILL.md)**: Convenciones de nombres para archivos, clases y columnas de DB.
- **[code-quality](.agent/skills/code-quality/SKILL.md)**: SOLID, "Sin Comentarios", DRY y funciones pequeñas.
- **[node](.agent/skills/node/SKILL.md)**: Buenas prácticas de Node.js: async/await, variables de entorno, no blocking.
- **[no-browser](.agent/skills/no-browser/SKILL.md)**: Prohibición total del subagente del navegador.
- **[readme-auto-sync](.agent/skills/readme-auto-sync/SKILL.md)**: Sincronización obligatoria del README cuando cambia la estructura.
- **[skill-generator](.agent/skills/skill-generator/SKILL.md)**: Plantilla para crear nuevas skills del proyecto.

## 🛠️ Uso

1. **Antes de codear**: Consultá la skill relevante primero.
2. **Consistencia**: Si una skill define un patrón, seguilo estrictamente.
3. **Actualizaciones**: Al establecer un nuevo patrón, actualizá o creá la skill correspondiente con `skill-generator`.
