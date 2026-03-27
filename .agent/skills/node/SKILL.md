---
name: node
description: Buenas prácticas de Node.js y configuración del runtime para Promiedos-NBA BackEnd.
---

# 🟢 Promiedos-NBA — Node.js Standards

Directrices para el runtime de Node.js en el backend.

## 📏 Reglas

1. **Async/Await**: Uso obligatorio de `async/await` para todas las operaciones asíncronas. No usar callbacks.
2. **Variables de entorno**: Acceder siempre a variables de entorno a través de `process.env` con `dotenv` cargado al inicio del proceso (`import 'dotenv/config'` en `src/index.ts`).
3. **No blocking**: Evitá operaciones síncronas que bloqueen el event loop (`fs.readFileSync`, `JSON.parse` en loops grandes, etc.).
4. **Error handling**: Usá `try/catch` en todos los handlers async. Dejá que Fastify maneje los errores HTTP con sus mecanismos nativos.
5. **TypeScript strict**: `strict: true` en `tsconfig.json` es obligatorio. Nunca deshabilitar reglas de tipado.
6. **ESM**: El proyecto usa `"type": "module"` en `package.json`. Usá imports ESM (`import/export`), no `require`.
