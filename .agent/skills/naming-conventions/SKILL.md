---
name: naming-conventions
description: Convenciones de nombres para archivos, funciones y columnas de base de datos en Promiedos-NBA BackEnd.
---

# 🏷️ Promiedos-NBA BackEnd — Naming Conventions

Estándares de naming para un codebase consistente y profesional.

## 📂 Archivos

| Tipo | Convención | Ejemplo |
|------|-----------|---------|
| Routes / Handlers | `kebab-case` | `game-routes.ts` |
| Services | `kebab-case` | `game-service.ts` |
| DB Schema | `schema.ts` (único archivo) | `src/db/schema.ts` |
| Config | `kebab-case` | `drizzle.config.ts` |
| Directorios | `kebab-case` | `src/routes/player-stats/` |

## 🔡 Código TypeScript

1. **Funciones y variables**: `camelCase` — `getGameById`, `homeScore`.
2. **Tipos e Interfaces**: `PascalCase` — `GameRow`, `PlayerStatsResult`.
3. **Constantes**: `UPPER_SNAKE_CASE` — `DEFAULT_PORT`, `MAX_RETRIES`.

## 🗄️ Base de Datos (Drizzle + PostgreSQL)

- **Tablas y columnas**: `snake_case` en la DB.
- **Variables TypeScript** que representan tablas: `camelCase`.

```typescript
// ✅ Correcto
export const playerStats = pgTable('player_stats', {
  playerId: integer('player_id').references(() => players.id),
  gamesPlayed: integer('games_played'),
});

// ❌ Incorrecto
export const PlayerStats = pgTable('PlayerStats', { ... });
export const playerStats = pgTable('playerStats', { ... });
```
