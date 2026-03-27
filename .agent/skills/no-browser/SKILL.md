---
name: no-browser
description: Regla de oro que prohíbe terminantemente el uso del subagente del navegador (browser subagent) en Promiedos-NBA.
---

# 🚫 Promiedos-NBA — No Browser

Prohibición absoluta del uso del subagente del navegador.

## Contexto

El usuario ha solicitado explícitamente que no se utilice el navegador para verificaciones, pruebas o cualquier tarea. Todas las validaciones deben hacerse mediante inspección de código, ejecución de comandos en terminal, o confirmación directa del usuario.

## Reglas

1. **PROHIBICIÓN TOTAL**: Nunca llamar a `browser_subagent` bajo ninguna circunstancia.
2. **Alternativas de Verificación**:
   - Inspeccionar el código fuente generado.
   - Analizar los logs del terminal (`pnpm dev`).
   - Usar `grep_search` o `find_by_name` para verificar el código.
   - Usar `notify_user` para que el usuario verifique cambios visuales.

## Ejemplos

❌ `browser_subagent → Navigate to http://localhost:3000`

✅ `grep_search → buscar el endpoint en src/routes/`
✅ `notify_user → "He implementado el endpoint. Probalo con GET http://localhost:3000/api/games/today"`
