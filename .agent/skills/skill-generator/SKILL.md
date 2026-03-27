---
name: skill-generator
description: Herramienta para crear nuevas skills siguiendo el estándar de Promiedos-NBA BackEnd.
---

# 🛠️ Promiedos-NBA BackEnd — Skill Generator

Usá esta skill cada vez que necesitéis crear una nueva directriz para el proyecto BackEnd.

## 📝 Instrucciones

1. **Ubicación**: `.agent/skills/<nombre>/SKILL.md`
2. **Metadata**: Incluí `name` y `description` en el frontmatter YAML.
3. **Alcance**: Las skills del BackEnd deben enfocarse en arquitectura Fastify, convenciones Drizzle, runtime Node.js y calidad de código.
4. **Registrá la nueva skill** en `global-skills/SKILL.md` y en `global-context/SKILL.md` después de crearla.

## 📄 Template

```markdown
---
name: <nombre-kebab-case>
description: <Una línea describiendo el propósito>.
---

# <Emoji> Promiedos-NBA BackEnd — <Nombre>

<Descripción breve del propósito de esta skill.>

## 📏 Reglas

1. **Regla 1**: ...
2. **Regla 2**: ...
```
