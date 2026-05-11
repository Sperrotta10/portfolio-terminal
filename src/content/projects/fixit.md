---
title: "Fixit"
description: "Gestión y Conexión de Servicios Técnicos"
tech: ["React Native", "Node.js", "MySQL", "Firebase"]
---

## 🔧 ¿Qué es Fixit?

**FIXIT** es una plataforma móvil diseñada bajo un modelo B2C y C2C que centraliza la oferta de servicios técnicos especializados. El proyecto resuelve la fragmentación del mercado técnico en Valencia, Venezuela, proporcionando un entorno seguro para la contratación y gestión de reparaciones.

### 🎯 Propuesta de Valor

- **Para Clientes:** Acceso inmediato a técnicos verificados, sistema de reputación transparente y seguimiento en tiempo real.
- **Para Técnicos:** Digitalización de su oferta, captación de clientes basada en geolocalización y herramientas de gestión de servicios.

---

## 🛠️ Arquitectura y Modelo de Datos

### Stack Tecnológico

- **Frontend:** React Native (Cross-platform iOS/Android)
- **Backend (Serverless):** Node.js con Firebase Cloud Functions
- **Database:** MySQL (Relational) & Cloud Firestore (NoSQL for real-time)
- **Storage:** Google Cloud Storage para evidencia fotográfica y perfiles

### 📊 Modelo de Base de Datos (Relacional)

Para garantizar la integridad de las transacciones y la gestión de usuarios, FIXIT utiliza un esquema relacional normalizado. A continuación se detalla la estructura principal:

```sql
-- Estructura de Tablas Principales

CREATE TABLE Usuarios (
    ID_Usuario INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(255),
    Apellido VARCHAR(255),
    Email VARCHAR(255) UNIQUE,
    Contraseña VARCHAR(255),
    Rol ENUM('usuario', 'tecnico')
);

CREATE TABLE Tecnicos (
    ID_Tecnico INT PRIMARY KEY AUTO_INCREMENT,
    ID_Usuario INT,
    Especializaciones TEXT,
    Certificaciones TEXT,
    Anos_exp INT,
    FOREIGN KEY (ID_Usuario) REFERENCES Usuarios(ID_Usuario)
);

CREATE TABLE Categoria (
    ID_Categoria INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(255),
    Descripcion TEXT
);

CREATE TABLE TecnicoCategoria (
    ID_TecnicoCategoria INT PRIMARY KEY AUTO_INCREMENT,
    ID_Tecnico INT,
    ID_Categoria INT,
    FOREIGN KEY (ID_Tecnico) REFERENCES Tecnicos(ID_Tecnico),
    FOREIGN KEY (ID_Categoria) REFERENCES Categoria(ID_Categoria)
);

CREATE TABLE ExperienciaLaboral (
    ID_Experiencia INT PRIMARY KEY AUTO_INCREMENT,
    ID_Tecnico INT,
    Empresa VARCHAR(255),
    Cargo VARCHAR(255),
    Fecha_Inicio DATE,
    Fecha_Fin DATE,
    FOREIGN KEY (ID_Tecnico) REFERENCES Tecnicos(ID_Tecnico)
);

CREATE TABLE SolicitudesServicio (
    ID_Request INT PRIMARY KEY AUTO_INCREMENT,
    ID_Usuario INT,
    ID_Tecnico INT,
    Tipo_Servicio VARCHAR(255),
    Estado_servicio ENUM('pendiente', 'en proceso', 'completado'),
    Estatus_servicio ENUM('abierto', 'cerrado'),
    FOREIGN KEY (ID_Usuario) REFERENCES Usuarios(ID_Usuario),
    FOREIGN KEY (ID_Tecnico) REFERENCES Tecnicos(ID_Tecnico)
);

CREATE TABLE Facturas (
    ID_Factura INT PRIMARY KEY AUTO_INCREMENT,
    ID_Request INT,
    Monto DECIMAL(10,2),
    Fecha_emision DATETIME,
    FOREIGN KEY (ID_Request) REFERENCES SolicitudesServicio(ID_Request)
);

CREATE TABLE Transacciones (
    ID_Transaccion INT PRIMARY KEY AUTO_INCREMENT,
    ID_Factura INT,
    Metodo_pago ENUM('tarjeta', 'transferencia', 'efectivo'),
    Estado_pago ENUM('pendiente', 'completado', 'fallido'),
    FOREIGN KEY (ID_Factura) REFERENCES Facturas(ID_Factura)
);
```

> [!TIP]
> La arquitectura híbrida permite que los datos críticos (pagos, usuarios) residan en MySQL, mientras que la interacción en tiempo real y geolocalización se maneje vía Firebase.

El flujo de datos se sincroniza a través de tres canales principales:

1.  **Mobile App:** Interfaz de usuario para solicitudes y presupuestos.
2.  **Real-time Engine:** Sincronización de coordenadas GPS y chat bidireccional.
3.  **Admin Logic:** Validaciones en backend para la integridad de las transacciones y estados del servicio.

---

## 🚀 Desafíos Técnicos y Soluciones de Ingeniería

### 1. Optimización de Búsqueda Geográfica (Geohashing)

**Desafío:** Filtrar cientos de técnicos por cercanía sin realizar consultas pesadas que afecten la latencia de la app.
**Solución:** Se implementó una lógica de **Geohashes** en Firestore. Al convertir coordenadas en cadenas de texto indexables, el sistema realiza consultas de rango ultra-rápidas, reduciendo el tiempo de respuesta a < 2s.

### 2. Gestión de Estados Concurrente

**Desafío:** Mantener la consistencia del servicio (Solicitado -> En Camino -> En Proceso -> Finalizado) cuando ambos usuarios interactúan simultáneamente.
**Solución:** Uso de **Transacciones Atómicas** en la base de datos para evitar condiciones de carrera, asegurando que un servicio no pueda ser cancelado si el técnico ya ha marcado su llegada.

---

## 💼 Estructura del Modelo de Negocio (Ingeniería de Producto)

| Componente                | Detalle Técnico / Estratégico                                                       |
| :------------------------ | :---------------------------------------------------------------------------------- |
| **Segmento de Clientes**  | Usuarios residenciales y comerciales en busca de soporte técnico inmediato.         |
| **Relación con Clientes** | Autoservicio asistido mediante sistema de reseñas y soporte integrado.              |
| **Actividades Clave**     | Desarrollo de algoritmos de matching y mantenimiento de infraestructura serverless. |
| **Flujo de Ingresos**     | Modelo de comisión por servicio concretado y suscripciones premium para técnicos.   |

---

## 📈 Logros y Métricas de Desarrollo

- **Metodología:** Desarrollo ágil bajo **Extreme Programming (XP)**, priorizando la refactorización y la simplicidad.
- **Seguridad:** Implementación de reglas de seguridad granulares (Security Rules) que restringen el acceso a datos sensibles (teléfonos/direcciones) hasta que exista un contrato activo.
- **Escalabilidad:** Arquitectura 100% cloud que permite soportar picos de demanda sin necesidad de administrar servidores físicos.

---

## 🎓 Créditos y Colaboración

Proyecto desarrollado como Proyecto Universitario por el equipo de ingeniería:

- **Santiago Perrotta** (Full Stack Developer)
- Rodrigo Torres
- Manuel Nava
- Jesús Araujo

---

> **Nota Legal:** El código fuente es privado. Este README documenta la arquitectura, el análisis de problemas y las decisiones tecnológicas tomadas durante el ciclo de vida del desarrollo.

### Imagenes del Proyecto

<div class="gallery">
  <div class="flex justify-center">
    <img src="/projects/fixit/1.webp" alt="Vista Previa" />
  </div>
</div>
