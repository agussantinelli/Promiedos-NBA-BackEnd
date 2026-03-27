---
name: readme-auto-sync
description: Reglas para mantener el README.md del BackEnd sincronizado con la evolución de Promiedos-NBA.
---

# 🔄 Promiedos-NBA BackEnd — README Auto-Sync

Directrices para mantener el README sincronizado con el estado real del proyecto.

## 📏 Reglas

1. **Estructura del Proyecto**:
   - **CUÁNDO**: Cada vez que creés, mováis o eliminéis un archivo `.ts` o un directorio en `src/`.
   - **QUÉ HACER**: Actualizá la sección `📁 Estructura del Proyecto` en el `README.md`.

2. **Modelo de Datos**:
   - **CUÁNDO**: Si agregás o modificás una tabla en `src/db/schema.ts`.
   - **QUÉ HACER**: Actualizá la sección `📊 Modelo de datos` del README.

3. **Endpoints**:
   - **CUÁNDO**: Si agregás un nuevo endpoint en `src/routes/`.
   - **QUÉ HACER**: Agregá la ruta a la sección `📡 Endpoints principales`.

4. **Comandos pnpm**:
   - **CUÁNDO**: Si agregás un nuevo script en `package.json`.
   - **QUÉ HACER**: Agregá una fila en la tabla `💻 Comandos pnpm disponibles`.
