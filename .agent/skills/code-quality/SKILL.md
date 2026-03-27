---
name: code-quality
description: Principios SOLID, naming y política "Sin Comentarios" para el BackEnd de Promiedos-NBA.
---

# 💎 Promiedos-NBA BackEnd — Code Quality

Estándares para mantener un codebase robusto y legible.

## 📏 Reglas

1. **Sin Comentarios**: El código debe ser autoexplicativo. Usá nombres descriptivos en lugar de comentarios.
2. **SOLID**: Seguí los principios SOLID estrictamente:
   - **S**: Cada función/servicio tiene una sola responsabilidad.
   - **O**: Abierto para extensión, cerrado para modificación.
   - **D**: Dependencias inyectadas, no hardcodeadas.
3. **Funciones Pequeñas**: Una función = una acción. Si hace más de una cosa, extraela.
4. **DRY**: No repitas lógica. Extraé helpers a `src/utils/` o funciones de servicio compartidas.
5. **Type Safety**: Nunca uses `any`. Si no conocés el tipo, declaralo con un tipo explícito o `unknown`.
6. **Sin código muerto**: No dejés líneas comentadas ni funciones no utilizadas en el commit final.
