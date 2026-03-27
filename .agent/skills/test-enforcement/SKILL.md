---
name: test-enforcement
description: Regla que requiere un archivo de test para cada archivo de lógica de negocio en Promiedos-NBA BackEnd.
---

# 🚔 Promiedos-NBA BackEnd — Test Enforcement

Para garantizar la fiabilidad, toda lógica de negocio debe tener su test correspondiente.

## 📏 Reglas

1. **Lógica de Servicio**: Todo archivo en `src/services/` DEBE tener un `[nombre].spec.ts` correspondiente.
2. **Utilidades**: Todo archivo en `src/utils/` DEBE tener su test.
3. **Rutas (Handlers)**: Los tests de rutas son opcionales si la lógica está en el servicio, pero recomendados para flujos críticos.
4. **Naming**: `[filename].spec.ts` en el mismo directorio que el archivo testeado.
5. **Creación simultánea**: Si creás un archivo de servicio, su test DEBE crearse en el mismo paso.

> ⚠️ **Nota**: El proyecto aún no tiene configurado un test runner. Cuando se integre (Vitest recomendado), esta skill guiará la estrategia de testing.
