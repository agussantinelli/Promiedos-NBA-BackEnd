---
name: fastify
description: Reglas de arquitectura core para Fastify v5, rutas, plugins y schemas en Promiedos-NBA BackEnd.
---

# 🚀 Promiedos-NBA — Fastify Core Architecture

Directrices para construir la API REST de Promiedos-NBA usando Fastify v5.

## 🏗️ Estructura de Rutas

Cada dominio NBA se organiza en su propia carpeta bajo `src/routes/`:

```
src/routes/
├── games/
│   └── index.ts     # GET /api/games, GET /api/games/:id, etc.
├── teams/
│   └── index.ts
├── players/
│   └── index.ts
└── stats/
    └── index.ts
```

## 📏 Reglas de Implementación

1. **Plugin por dominio**: Registrá cada grupo de rutas como un Fastify plugin usando `fastify.register()`.
2. **Schemas de validación**: Usá los JSON schemas nativos de Fastify para validar `body`, `params` y `querystring`. No uses librerías externas de validación salvo que sea estrictamente necesario.
3. **Tipado de rutas**: Siempre tipá el handler con los generics de Fastify:
   ```typescript
   fastify.get<{ Params: { id: string } }>('/games/:id', async (request, reply) => { ... });
   ```
4. **Reply explícito**: Usá `reply.send()` o `return` pero no los mezcles en el mismo handler.
5. **Errores**: Lanzá errores con `fastify.httpErrors` o tirá un `Error` estándar: Fastify lo captura y responde con 500.
6. **Plugins**: Usá `@fastify/cors` y otros plugins oficiales del ecosistema Fastify.

## 📂 Acceso a Datos

Toda consulta a la base de datos va en un archivo de servicio, nunca directamente en el handler:
```
src/
├── db/
│   ├── index.ts     # Conexión Drizzle
│   └── schema.ts    # Schemas de tablas
├── routes/          # Handlers Fastify (solo lógica HTTP)
└── services/        # Consultas Drizzle (lógica de dominio)
```
