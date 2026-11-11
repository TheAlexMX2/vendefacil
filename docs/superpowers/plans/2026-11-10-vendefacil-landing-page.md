# Plan de Implementación: Landing Page VendeFácil Micro-SaaS

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir una Landing Page de alta conversión (PLG) para VendeFácil ($99 MXN/mes) con un editor interactivo WYSIWYG en el Hero y mockup de smartphone en tiempo real utilizando React, Tailwind CSS y Lucide Icons.

**Architecture:** Aplicación React construida sobre Vite con Tailwind CSS. El estado reactivo de la tienda creada se gestiona en el componente principal o hook dedicado, sincronizando de forma instantánea el formulario de 4 pasos (marca, producto, imagen y precio) con el mockup fotorrealista de iPhone 15. Incluye secciones de Trust, Cómo Funciona, Plan Lite $99 MXN, Footer y modal de activación con Mercado Pago.

**Tech Stack:** React 18+, Vite, Tailwind CSS, Lucide React, Canvas/FileReader API.

## Global Constraints
- Marca: VendeFácil (`vendefacil.online`).
- Color primario: Violeta vibrante (`#7C3AED`).
- Color secundario/confianza: Verde esmeralda (`#10B981`).
- Precio: $99 MXN / mes (Plan Lite).
- Mobile-first, tiempo de respuesta <16ms en inputs, cero dependencias pesadas innecesarias.

---

### Task 1: Inicialización del Proyecto Vite + React y Configuración de Tailwind CSS

**Files:**
- Create: `package.json`, `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, `index.html`, `src/index.css`, `src/main.jsx`, `src/App.jsx`

**Interfaces:**
- Consumes: Node.js runtime y npm
- Produces: Entorno de desarrollo funcional con Vite, Tailwind CSS configurado con los colores corporativos (`brand-violet`, `brand-emerald`) e iconos de Lucide.

- [ ] **Step 1: Inicializar proyecto Vite con plantilla React e instalar dependencias**
Run: `npm create vite@latest . -- --template react --force` (o inicializar `package.json` con vite, react, react-dom, lucide-react).
Install: `npm install lucide-react clsx tailwind-merge` y devDependencies `tailwindcss postcss autoprefixer vite @vitejs/plugin-react`.

- [ ] **Step 2: Configurar Tailwind CSS y PostCSS**
Configurar `tailwind.config.js` con soporte para colores `brand-violet` (`#7C3AED`, `#6D28D9`), `brand-emerald` (`#10B981`, `#059669`) y fuentes sans.
Configurar `postcss.config.js` con tailwindcss y autoprefixer.
Configurar `src/index.css` con directivas `@tailwind base; @tailwind components; @tailwind utilities;`.

- [ ] **Step 3: Verificar compilación inicial con `npm run build`**
Run: `npm run build`
Expected: `dist/` generado exitosamente sin errores de compilación.

- [ ] **Step 4: Commit**
Run:
```bash
git add package.json package-lock.json vite.config.js tailwind.config.js postcss.config.js index.html src/
git commit -m "chore: initialize vite react project with tailwind css and lucide icons"
```

---

### Task 2: Utilidades de Formato, Sanitización de Subdominio y Presets de Prueba

**Files:**
- Create: `src/utils/formatters.js`
- Create: `src/data/presets.js`
- Create: `src/test/utils.test.js`

**Interfaces:**
- Produces:
  - `slugifyBrand(brandName)`: Convierte "Mis Zapatos" en `miszapatos` (alfanumérico en minúsculas, sin espacios ni caracteres especiales).
  - `formatMXN(amount)`: Formatea número a `$350 MXN`.
  - `STORE_PRESETS`: Array con 3 productos preconfigurados con imágenes optimizadas (Café Artesanal, Ropa Oversize, Vela Aromática).

- [ ] **Step 1: Crear `src/utils/formatters.js`**
Implementar funciones puras:
```javascript
export function slugifyBrand(name) {
  if (!name) return "tu-marca";
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "")
    .trim() || "tu-marca";
}

export function formatMXN(val) {
  const num = typeof val === "number" ? val : parseFloat(val) || 0;
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0
  }).format(num);
}
```

- [ ] **Step 2: Crear `src/data/presets.js`**
Definir presets con SVG/Data-URIs de alta calidad para pruebas instantáneas en 1 clic.

- [ ] **Step 3: Validar utilidades mediante script de verificación de Node**
Run: `node -e "import('./src/utils/formatters.js').then(m => { console.log(m.slugifyBrand('Mis Zapatos'), m.formatMXN(350)) })"`
Expected: `miszapatos $350.00` (o formato MXN equivalente).

- [ ] **Step 4: Commit**
Run:
```bash
git add src/utils/formatters.js src/data/presets.js
git commit -m "feat: add formatters and instant product presets"
```

---

### Task 3: Header Sticky y Modales de Autenticación

**Files:**
- Create: `src/components/Header.jsx`
- Create: `src/components/LoginModal.jsx`

**Interfaces:**
- Produces:
  - `<Header onOpenLogin={() => ...} onScrollTo={(id) => ...} />`
  - `<LoginModal isOpen={boolean} onClose={() => ...} />`

- [ ] **Step 1: Implementar `src/components/LoginModal.jsx`**
Modal accesible con backdrop blur, campo de email, contraseña, botón "Iniciar sesión" con feedback, enlace a "¿Olvidaste tu contraseña?" y cierre accesible (ESC y botón X).

- [ ] **Step 2: Implementar `src/components/Header.jsx`**
Barra sticky con `backdrop-blur-md bg-white/90 border-b border-slate-200/80`.
Logotipo `VendeFácil` con isotipo de bolsa y rayo en violeta.
Enlaces de navegación suave: "Cómo funciona", "Precios", "Ejemplos".
Botón secundario "Iniciar sesión" y botón responsive para menú móvil desplegable.

- [ ] **Step 3: Verificar en navegador y empaquetado**
Run: `npm run build`
Expected: Compilación exitosa.

- [ ] **Step 4: Commit**
Run:
```bash
git add src/components/Header.jsx src/components/LoginModal.jsx
git commit -m "feat: add sticky header navigation and accessible login modal"
```

---

### Task 4: Hero Split-Screen con Creador WYSIWYG y Mockup de Smartphone Reactivo

**Files:**
- Create: `src/components/StoreBuilderCard.jsx`
- Create: `src/components/PhoneMockup.jsx`
- Create: `src/components/Hero.jsx`

**Interfaces:**
- Consumes: `storeState`, `setStoreState`, `onPublishClick`
- Produces:
  - Formulario de 4 pasos simultáneos:
    1. Input Marca con educación en vivo de subdominio (`https://[slug].vendefacil.online`).
    2. Input Producto estrella.
    3. Zona Drag & Drop de imagen con soporte para carga de archivos locales y presets en 1 clic.
    4. Input Precio en pesos mexicanos.
  - Mockup de iPhone 15 fotorrealista con dynamic island, status bar, barra de navegador con candado SSL verde y botón de compra interactivo.
  - CTA "Publicar esta tienda por $99 MXN/mes" con animación de pulso.

- [ ] **Step 1: Implementar `src/components/StoreBuilderCard.jsx`**
Tarjeta interactiva con los 4 pasos accesibles, indicador de slug dinámico (`miszapatos.vendefacil.online`), zona drag & drop con FileReader y presets rápidos de 1 clic.

- [ ] **Step 2: Implementar `src/components/PhoneMockup.jsx`**
Chasis fotorrealista de teléfono celular moderno con sombras flotantes, dynamic island, barra de navegador segura con SSL verde y renderizado en vivo del logo, foto, precio y botón de compra con micro-animación de éxito al hacer clic.

- [ ] **Step 3: Implementar `src/components/Hero.jsx`**
Orquesta el layout Split-Screen (50/50 en desktop >= 1024px, stacked vertical en mobile < 1024px), títulos H1 y subtítulo de conversión, conectando `StoreBuilderCard` con `PhoneMockup`.

- [ ] **Step 4: Verificar reactividad e interactividad en build**
Run: `npm run build`
Expected: Compilación limpia.

- [ ] **Step 5: Commit**
Run:
```bash
git add src/components/StoreBuilderCard.jsx src/components/PhoneMockup.jsx src/components/Hero.jsx
git commit -m "feat: add interactive WYSIWYG hero builder and live smartphone mockup"
```

---

### Task 5: TrustBar, Sección "Cómo Funciona", Precios (Plan Lite) y Showcase de Ejemplos

**Files:**
- Create: `src/components/TrustBar.jsx`
- Create: `src/components/HowItWorks.jsx`
- Create: `src/components/Pricing.jsx`
- Create: `src/components/StoreExamples.jsx`

**Interfaces:**
- Produces:
  - `TrustBar`: Insignias de confianza (Mercado Pago, SSL, 0% comisiones extras).
  - `HowItWorks`: 3 pasos ilustrados (1. Diseña aquí mismo, 2. Conecta Mercado Pago en 1 clic, 3. Comparte y cobra).
  - `Pricing`: Tarjeta de columna única para el Plan Lite ($99 MXN/mes), badge "Cancela cuando quieras", características detallando almacenamiento optimizado de imágenes, y caja de upsell de dominio personalizado `.com`.
  - `StoreExamples`: Grid con 3 ejemplos reales de tiendas creadas para generar credibilidad.

- [ ] **Step 1: Implementar `src/components/TrustBar.jsx`**
Franja de confianza con logos vectoriales e indicadores de seguridad financiera.

- [ ] **Step 2: Implementar `src/components/HowItWorks.jsx`**
3 tarjetas modernas numeradas (`01`, `02`, `03`) con iconografía clara y copy directo sin jerga técnica.

- [ ] **Step 3: Implementar `src/components/Pricing.jsx`**
Tarjeta de precio destacada de 1 columna con $99 MXN/mes, lista de beneficios (subdominio inmediato, 10 productos, almacenamiento optimizado de fotos, Mercado Pago directo, 0% comisión oculta, SSL), insignia "Cancela cuando quieras", upsell sutil de dominio `.com` por $199/año y CTA directo.

- [ ] **Step 4: Implementar `src/components/StoreExamples.jsx`**
Showcase visual de marcas demostrativas en categorías populares (moda, gastronomía, bienestar).

- [ ] **Step 5: Verificar compilación y renderizado**
Run: `npm run build`
Expected: PASS sin errores.

- [ ] **Step 6: Commit**
Run:
```bash
git add src/components/TrustBar.jsx src/components/HowItWorks.jsx src/components/Pricing.jsx src/components/StoreExamples.jsx
git commit -m "feat: add trust bar, how it works, single lite pricing plan, and examples showcase"
```

---

### Task 6: Modal de Publicación/Checkout y Footer Completo

**Files:**
- Create: `src/components/PublishModal.jsx`
- Create: `src/components/Footer.jsx`

**Interfaces:**
- Consumes: `storeState`, `isOpen`, `onClose`
- Produces:
  - `PublishModal`: Modal de felicitación con la URL generada (`[marca].vendefacil.online`), campos de Nombre, Email y Contraseña (o Enlace Mágico) para certidumbre de acceso al panel, resumen de $99 MXN/mes y botón de confirmación de pago seguro con Mercado Pago.
  - `Footer`: Navegación legal, Aviso de Privacidad, Términos, FAQ y contacto directo por WhatsApp y correo.

- [ ] **Step 1: Implementar `src/components/PublishModal.jsx`**
Modal de cierre de venta interactivo con animación de confeti, resumen de la tienda creada, inputs de credenciales y simulación de procesamiento con Mercado Pago.

- [ ] **Step 2: Implementar `src/components/Footer.jsx`**
Footer completo con columnas de navegación, legal, soporte y copyright.

- [ ] **Step 3: Integrar en `src/App.jsx` y verificar ensamble completo**
Unificar todos los componentes en `src/App.jsx` con estado global fluido.

- [ ] **Step 4: Ejecutar `npm run build`**
Run: `npm run build`
Expected: Build de producción exitoso en `dist/`.

- [ ] **Step 5: Commit**
Run:
```bash
git add src/components/PublishModal.jsx src/components/Footer.jsx src/App.jsx
git commit -m "feat: add publish checkout modal, footer, and complete app assembly"
```

---

### Task 7: Verificación Integral, Pruebas de Interacción y Optimización Mobile-First

**Files:**
- Modify/Verify: `src/App.jsx`, `src/index.css`, `index.html`

- [ ] **Step 1: Ejecutar build de producción y verificación de tipos/linting**
Run: `npm run build`
Expected: Código compilado limpiamente en menos de 1 segundo.

- [ ] **Step 2: Comprobar respuesta en servidor de previsualización Vite**
Run: Iniciar servidor local Vite y verificar respuesta HTTP 200, assets cargados y consola sin warnings.

- [ ] **Step 3: Verificar criterios de aceptación**
  1. Escritura de marca actualiza slug en tiempo real y en el teléfono.
  2. Modificación de precio refleja formato `$ [monto] MXN` en el botón y etiqueta del teléfono.
  3. Carga de foto o clic en presets cambia la foto del mockup al instante.
  4. Botón de comprar en el teléfono genera micro-interacción exitosa.
  5. Clic en "Publicar esta tienda" abre el modal con la URL personalizada y campos de credenciales.

- [ ] **Step 4: Commit final**
Run:
```bash
git add .
git commit -m "chore: final quality checks and polish for VendeFácil landing page"
```
