---
title: "Nami"
description: "Asistente Inteligente de Finanzas Personales"
tech: ["Flutter", "FastAPI", "Supabase", "Docker"]
---

## 🌊 ¿Qué es Nami?

**Nami** es una solución integral (Mobile) diseñada para abordar los desafíos de la economía bimonetaria (**VES/USD**). A diferencia de las apps de finanzas tradicionales, Nami automatiza la carga de datos mediante un pipeline de **Inteligencia Artificial** que procesa capturas de Pago Móvil y facturas físicas, consolidando las finanzas en una única moneda base con conversión automática de tasas.

---

## 🛠️ Arquitectura y Modelo de Datos

### Stack Tecnológico

- **Backend:** FastAPI (Python) con procesamiento asíncrono.
- **Frontend:** Flutter para Android.
- **IA/ML:** Pipeline de OCR con EasyOCR, Gemini, Google Cloud Vision.
- **Database:** PostgreSQL (Relational) gestionado con SQLModel.

### 📊 Modelo de Base de Datos (Relacional)

Para garantizar la integridad de las transacciones y la gestión de divisas, Nami utiliza un esquema relacional normalizado. A continuación se detalla la estructura principal:

```sql
-- Estructura de Tablas Principales

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255),
    moneda_preferida VARCHAR(10),
    auth_provider ENUM('local', 'google'),
    is_active BOOLEAN DEFAULT TRUE,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categorias (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    icono VARCHAR(50),
    color VARCHAR(20),
    tipo ENUM('ingreso', 'gasto')
);

CREATE TABLE gastos (
    id SERIAL PRIMARY KEY,
    id_usuario INT REFERENCES usuarios(id),
    id_categoria INT REFERENCES categorias(id),
    id_moneda_original VARCHAR(3),
    monto_original DECIMAL(18,2),
    tasa_aplicada DECIMAL(18,4),
    monto_consolidado DECIMAL(18,2),
    fecha_gasto DATE,
    descripcion TEXT,
    metodo_captura ENUM('manual', 'ia_scan'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE presupuestos (
    id SERIAL PRIMARY KEY,
    id_usuario INT REFERENCES usuarios(id),
    id_categoria INT REFERENCES categorias(id),
    monto_limite DECIMAL(18,2),
    mes INT,
    year INT
);

CREATE TABLE logs_ia (
    id SERIAL PRIMARY KEY,
    id_gasto INT REFERENCES gastos(id),
    confianza_ocr FLOAT,
    tiempo_procesamiento FLOAT,
    modelo_usado VARCHAR(50),
    raw_text TEXT
);
```

> [!TIP]
> El motor de consolidación financiera utiliza las tablas de `gastos` y `tasas_cambio` para generar reportes en tiempo real, permitiendo al usuario ver su balance en cualquier moneda independientemente de la divisa original de la transacción.

---

## 🚀 Desafíos de Ingeniería y Soluciones

### 1. El Problema de la Multi-moneda (VES/USD)

**Desafío:** Los usuarios en Venezuela transaccionan en dos monedas con tasas de cambio volátiles, lo que dificulta tener un balance real.
**Solución:** Implementé un motor de conversión en el backend que vincula cada gasto con la tasa de cambio del día. El sistema permite al usuario elegir una "Moneda Base" y realiza la consolidación automática de todo el historial financiero en tiempo real.

### 2. Automatización via OCR/IA

**Desafío:** La carga manual de gastos es la principal razón de abandono de las apps de finanzas.
**Solución:** Desarrollé un pipeline de procesamiento de imágenes que extrae:

- Montos y fechas.
- Comercio/Entidad.
- Categorización sugerida mediante IA.
  Esto reduce el tiempo de registro de un gasto de 30 segundos a solo 5 segundos (validación de captura).

---

## 📊 Business & Technical Canvas

| Componente          | Implementación Técnica                                                                                |
| :------------------ | :---------------------------------------------------------------------------------------------------- |
| **Valor Agregado**  | Automatización del registro financiero en entornos de alta inflación.                                 |
| **Seguridad**       | Almacenamiento seguro de credenciales y tokens `HttpOnly`.                                            |
| **Infraestructura** | Contenedores Docker para el despliegue del backend y Supabase para el almacenamiento de comprobantes. |
| **Escalabilidad**   | Arquitectura modular que permite añadir nuevos proveedores de OCR sin romper el contrato de la API.   |

---

## 📈 Logros Técnicos

- **Pipeline de ML:** Implementación exitosa de un flujo sincrónico de procesamiento de imágenes con manejo de errores por etapa.
- **Consistencia de Datos:** Sistema de validación que impide registros futuros y garantiza que cada gasto tenga una tasa de cambio válida asociada.
- **Interfaz Multiplataforma:** Código base único en Flutter que sirve tanto para usuarios móviles como para gestión administrativa vía web.

---

## 🎓 Contexto del Proyecto

Este ecosistema representa mi **Trabajo de Grado** mediante el cual obtendré el título de **Ingeniero de Computación**. Es una solución avanzada de ingeniería de software enfocada en la resolución de problemas económicos reales mediante tecnología moderna, desarrollada con un enfoque en **Backend Standout** y **Full Stack Integration**.

- **Desarrollador:** Santiago Perrotta
- **Rol:** Arquitecto de Software / Full Stack Developer
- **Objetivo:** Automatización y consolidación financiera en entornos multi-moneda.

---

> **Nota:** El código fuente se encuentra en repositorios privados. Este documento describe la arquitectura, las decisiones tecnológicas y los retos superados durante el desarrollo del sistema Nami.
