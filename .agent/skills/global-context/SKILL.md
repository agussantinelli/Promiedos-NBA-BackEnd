---
name: global-context
description: Directriz maestra del proyecto Promiedos-NBA BackEnd. Provee el contexto arquitectónico global y OBLIGA al cumplimiento del resto de las skills.
---

# 🌍 Promiedos-NBA BackEnd — Contexto Global

Esta es la **regla maestra** del proyecto. Toda implementación en el backend de Promiedos-NBA debe respetar la arquitectura **Fastify + Drizzle**.

## 🏛️ Contexto Arquitectónico

El Promiedos-NBA BackEnd usa una arquitectura liviana y por capas:

- **HTTP Layer** (`src/routes/`): Handlers Fastify, sin lógica de negocio.
- **Service Layer** (`src/services/`): Consultas Drizzle, transformaciones y lógica de dominio NBA.
- **Data Layer** (`src/db/`): Schema Drizzle (`schema.ts`) y conexión Drizzle (`index.ts`).

## ⚖️ Ley de Cumplimiento de Skills

Es **OBLIGATORIO** respetar las skills especializadas:
1. **`fastify`**: Blueprint de rutas, plugins y tipado de handlers.
2. **`drizzle`**: Reglas de queries, schema y migraciones.
3. **`code-quality`**: Política "Sin Comentarios" y SOLID.
4. **`naming-conventions`**: Sufijos de archivos y `snake_case` en DB.
5. **`no-browser`**: PROHIBICIÓN TOTAL del subagente del navegador.

## 🛡️ Flujo de Implementación

1. Definir/actualizar el schema en `src/db/schema.ts`.
2. Generar migración: `pnpm db:generate` → `pnpm db:migrate`.
3. Crear función de servicio en `src/services/`.
4. Exponer el endpoint en el plugin de ruta correspondiente en `src/routes/`.
