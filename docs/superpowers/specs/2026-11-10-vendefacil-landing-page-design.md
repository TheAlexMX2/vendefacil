# Especificación de Diseño: Landing Page Micro-SaaS VendeFácil

**Fecha:** 2026-11-10  
**Proyecto:** Landing Page Micro-SaaS de Creación de Tiendas Online en Segundos  
**Marca:** VendeFácil (`vendefacil.online`)  
**Modelo de Negocio:** Product-Led Growth (PLG) — Plan Lite $99 MXN / mes  

---

## 1. Visión del Producto y Objetivos

La landing page de **VendeFácil** está orientada a emprendedores de México y Latinoamérica que buscan vender en línea de inmediato sin lidiar con plataformas complejas, costos elevados ni comisiones sorpresas.

### Objetivos Clave de Conversión (PLG)
1. **Reducción a cero del "Time-to-Value":** El usuario experimenta la creación de su tienda directamente en el Hero sin necesidad de registrarse primero.
2. **Previsualización en tiempo real:** Todo cambio en los campos del creador WYSIWYG impacta de inmediato en un mockup fotorrealista de smartphone.
3. **Propuesta de valor transparente:** Plan único de $99 MXN/mes con 0% de comisiones por venta e integración con Mercado Pago.
4. **Mobile-First & Ultra Rápida:** Optimizado para dispositivos móviles y navegación fluida con scroll suave y tiempos de carga instantáneos.

---

## 2. Stack Tecnológico y Arquitectura

* **Framework:** React 18+ estructurado con Vite para compilación de alto rendimiento y HMR sin latencia.
* **Estilizado:** Tailwind CSS configurado con paleta personalizada:
  * Color de acento primario: Violeta vibrante `brand-violet` (`#7C3AED` principal, `#6D28D9` hover, `#DDD6FE` fondos suaves).
  * Color secundario / confianza: Verde esmeralda (`#10B981` y `#059669`) para estados activos, candado SSL y badges de pago.
  * Superficies: Fondo claro ultra limpio (`#FAFAFA` / `#FFFFFF`), bordes sutiles en `slate-200`.
  * Tipografía: `Inter` sans-serif con soporte tipográfico numérico tabular para precios.
* **Iconografía:** `lucide-react` para iconos vectoriales consistentes y accesibles.
* **Animaciones y Micro-interacciones:** `framer-motion` para transiciones suaves de componentes y retroalimentación táctil en el teléfono.

---

## 3. Arquitectura de Componentes

```
src/
├── assets/                  # Imágenes base y presets de prueba
├── components/
│   ├── Header.jsx           # Navegación fija con blur, enlaces y botón de login
│   ├── Hero.jsx             # Contenedor Split-Screen del Hero
│   ├── StoreBuilderCard.jsx # Tarjeta interactiva con los 4 pasos WYSIWYG
│   ├── PhoneMockup.jsx      # Mockup de smartphone reactivo en tiempo real
│   ├── TrustBar.jsx         # Sellos de confianza y socios (Mercado Pago, SSL)
│   ├── HowItWorks.jsx       # 3 pasos explicativos ilustrados
│   ├── Pricing.jsx          # Tarjeta del Plan Lite $99 MXN/mes + upsells
│   ├── StoreExamples.jsx    # Showcase de tiendas de ejemplo
│   ├── PublishModal.jsx     # Modal de éxito / publicación inmediata simulada
│   ├── LoginModal.jsx       # Modal de inicio de sesión accesible
│   └── Footer.jsx           # Enlaces legales, privacidad, soporte y redes
├── data/
│   └── presets.js           # Productos de ejemplo para autocompletado en 1 clic
├── App.jsx                  # Estado global compartido (tienda activa) y orquestación
├── index.css                # Directivas Tailwind, fuentes y utilidades de scrollbar
└── main.jsx                 # Punto de entrada de React
```

---

## 4. Detalle de Componentes y Funcionalidad

### 4.1 Header (Navegación)
* **Logotipo:** Tipografía sans-serif bold `VendeFácil` con un distintivo punto violeta y micro-isotipo de bolsa/rayo.
* **Enlaces de navegación:** Scroll suave a `#como-funciona`, `#precios`, `#ejemplos`.
* **Botón de Iniciar Sesión:** Abre un modal flotante con inputs de email y contraseña.
* **Menú Móvil:** Botón hamburguesa accesible que despliega un drawer suave en pantallas pequeñas.

### 4.2 Hero Section (Gancho Interactivo WYSIWYG)
* **Copy Principal:**
  * **H1:** *"Tu tienda en línea lista para vender. Sin código, sin comisiones extra."*
  * **Subtítulo:** *"Crea tu página, sube tu primer producto y comienza a cobrar hoy mismo por solo $99 MXN al mes. Pruébalo ahora mismo:"*
* **Tarjeta de Creación WYSIWYG (Paso a paso visible sin fricción):**
  * **Paso 1 (Nombre de marca):** Input de texto con auto-generación de slug en minúsculas y eliminación de caracteres especiales.
    * *Micro-educación en vivo:* Indicador visual inmediato debajo del input mostrando: `Tu subdominio: https://[slug].vendefacil.online` (ej. si el usuario escribe "Mis Zapatos", se formatea y muestra en tiempo real como `miszapatos.vendefacil.online` aclarando que los espacios se adaptan automáticamente a formato web sin espacios).
  * **Paso 2 (Producto estrella):** Input de texto descriptivo con sugerencia de placeholder.
  * **Paso 3 (Imagen del producto):**
    * Zona Drag & Drop interactiva con lector FileReader para convertir imágenes locales a data URLs de inmediato.
    * Selector de presets rápidos en 1 clic: *"Café de Especialidad"*, *"Ropa Oversize"*, *"Vela Aromática"*.
  * **Paso 4 (Precio):** Input numérico con máscara de pesos mexicanos (`$ [monto] MXN`).
  * **CTA Principal:**
    * Botón: *"Publicar esta tienda por $99 MXN/mes"*.
    * Nota informativa: *"Tu URL será: `[marca].vendefacil.online` • Sin contratos forzosos"*.

### 4.3 Mockup de Teléfono Celular (Vista en Vivo)
* Marco de smartphone moderno con notch / dynamic island y barra de estado realista.
* Barra de navegación con candado SSL verde y la URL generada en vivo.
* Renderizado reactivo de la tienda:
  * Encabezado con el nombre de la tienda.
  * Carrito de compras interactivo con contador.
  * Fotografía del producto centrada con zoom suave.
  * Título y precio formateado en pesos mexicanos.
  * Botón interactivo: *"Comprar con Mercado Pago"*, con micro-animación al pulsar que confirma la orden de prueba.
  * Insignia inferior: *"Ventas seguras con Mercado Pago"*.

### 4.4 Barra de Confianza (Trust Bar)
* Insignias con iconos de seguridad: Mercado Pago Partner, Cifrado SSL 256 bits, 0% comisiones por venta, y Servidores de alta disponibilidad (99.9%).

### 4.5 Sección "Cómo Funciona" (3 Pasos)
1. **Paso 1: Diseña tu tienda aquí mismo** — Configura tu marca, producto y precio en menos de 60 segundos con previsualización en vivo.
2. **Paso 2: Conecta tu Mercado Pago con un clic** — Vinculación directa y segura sin necesidad de APIs complicadas ni conocimientos técnicos.
3. **Paso 3: Comparte tu enlace y recibe pedidos** — Difunde tu tienda en Instagram, TikTok o WhatsApp y recibe notificaciones inmediatas en tu celular.

### 4.6 Sección de Precios (Plan Lite Único)
* Tarjeta destacada de columna única:
  * Precio: **$99 MXN / mes** con insignia destacada: *"Cancela cuando quieras • Sin letras chiquitas"*.
  * Incluye:
    * Subdominio inmediato (`.vendefacil.online`).
    * Catálogo de hasta 10 productos con **almacenamiento de imágenes optimizado** (WebP / CDN ultrarrápido).
    * Integración con Mercado Pago (el dinero va directo a tu cuenta).
    * 0% comisiones ocultas por venta.
    * Notificaciones automáticas de pedidos por WhatsApp.
    * Certificado de seguridad SSL incluido.
  * Upsell elegante: Mención de dominios `.com` o `.mx` personalizados disponibles desde el panel de control.
  * CTA: *"Comenzar ahora por $99 MXN"*.

### 4.7 Footer
* Enlaces rápidos, Aviso de Privacidad legal, Términos y Condiciones, Preguntas Frecuentes y soporte directo vía WhatsApp y correo electrónico.

### 4.8 Modal de Publicación y Checkout
* Activado por el CTA del creador:
  * Muestra felicitación interactiva: *"¡Tu tienda está lista para activarse!"*.
  * Despliega la URL final asignada: `https://[slug].vendefacil.online`.
  * Formulario de creación de cuenta: Nombre completo, Correo electrónico y Contraseña de acceso (o botón alternativo de *"Acceder con Enlace Mágico por Correo"* para que el emprendedor tenga absoluta certidumbre de cómo gestionará su panel tras el pago).
  * Resumen transparente: Total a pagar **$99 MXN** con insignia de seguridad Mercado Pago.
  * Botón de simulación de pago seguro que completa el onboarding y da acceso al panel de administración.

---

## 5. Pruebas y Criterios de Aceptación
1. **Interactividad:** Modificar cualquier campo del creador actualiza el teléfono en <16ms sin parpadeos.
2. **Carga de imágenes:** Arrastrar o seleccionar un archivo de imagen actualiza el renderizado del teléfono de inmediato. Los botones de preset cargan imágenes de muestra instantáneas.
3. **Responsividad:** 
   * En pantallas grandes (>=1024px): Layout split-screen 50/50 balanceado.
   * En pantallas medianas y móviles (<1024px): Formulario primero, seguido por el teléfono centrado y escalado de forma natural.
4. **Accesibilidad:** Cumplimiento de contrastes WCAG AA en botones, inputs con labels accesibles e indicadores de foco nítidos.
