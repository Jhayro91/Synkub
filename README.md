# Plataforma Web Synkub

Sitio web profesional para Synkub, una empresa especializada en desarrollo de software a medida. Esta plataforma permite a los clientes potenciales contactar para solicitar cotizaciones, agendar reuniones y conocer nuestros servicios.

## 🚀 Características

- **Diseño Moderno y Responsivo**: Interfaz profesional con diseño adaptativo para todos los dispositivos
- **Optimización SEO**: Metadatos completos, Open Graph, Twitter Cards y datos estructurados
- **Formulario de Contacto**: Sistema de contacto integrado con selección de presupuesto y tipo de proyecto
- **Secciones Completas**:
  - Hero con animaciones y estadísticas
  - Servicios detallados (Web, Móvil, Backend, Cloud, Empresarial, Consultoría)
  - Tecnologías utilizadas
  - Proceso de desarrollo (4 etapas)
  - Por qué elegir Synkub
  - Formulario de contacto
  - Footer con enlaces sociales
- **Sitemap y Robots.txt**: Para mejor indexación en motores de búsqueda
- **Rendimiento Optimizado**: Next.js con Turbopack para desarrollo rápido

## 🛠️ Tecnologías Utilizadas

- **Next.js 16** - Framework de React para aplicaciones web modernas
- **TypeScript** - Tipado estático para mayor robustez
- **Tailwind CSS** - Framework CSS utility-first para estilos responsivos
- **@heroicons/react** - Iconos profesionales para la interfaz
- **ESLint** - Linting para mantener la calidad del código

## 📦 Instalación y Uso

### Prerrequisitos

- Node.js 18 o superior
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/Jhayro91/Synkub.git
cd Synkub
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Construcción para Producción

```bash
npm run build
npm start
```

## 📁 Estructura del Proyecto

```
plataforma-synkub/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts    # API para envío de cotizaciones por email
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx          # Layout principal con metadatos SEO
│   ├── page.tsx            # Página principal con todas las secciones
│   └── sitemap.ts          # Generación automática de sitemap
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── robots.txt
│   ├── manifest.json
│   ├── vercel.svg
│   └── window.svg
├── .github/
│   └── copilot-instructions.md
├── .env.example            # Variables de entorno de ejemplo
├── render.yaml             # Configuración de Render.com
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── README.md
```

## 📧 Configuración de Emails

El formulario de contacto envía cotizaciones a tu correo usando **Resend**.

### Configurar envío de emails:

1. Crea una cuenta en [resend.com](https://resend.com) (gratis)
2. Obtén tu API Key en [resend.com/api-keys](https://resend.com/api-keys)
3. En Render.com, ve a tu servicio > **Environment**
4. Agrega la variable: `RESEND_API_KEY=re_tu_api_key`

**Nota**: Sin configurar Resend, el formulario igual funciona pero los datos se registran en los logs del servidor.

## 🎨 Personalización

### Colores y Branding

Los colores principales se definen en Tailwind CSS:
- Azul primario: `blue-600` a `indigo-700`
- Gradientes: Azul a índigo a púrpura
- Fondo: Blanco con acentos en slate

### Contenido

Para modificar el contenido:
- **Hero**: Editar la sección `inicio` en `app/page.tsx`
- **Servicios**: Modificar el array de servicios en la sección correspondiente
- **Tecnologías**: Actualizar el array de tecnologías
- **Contacto**: Cambiar emails y información de contacto

### SEO y Metadatos

Los metadatos se configuran en `app/layout.tsx`:
- Título y descripción optimizados para SEO
- Open Graph para redes sociales (Facebook, LinkedIn)
- Twitter Cards para compartir en Twitter
- Datos estructurados JSON-LD (Organization, WebSite, Service)
- Viewport y theme-color configurados
- Keywords relevantes para posicionamiento

## 🚀 Despliegue

### Render.com (Configurado)

El proyecto incluye `render.yaml` para despliegue automático:

1. Ve a [render.com](https://render.com) y crea una cuenta
2. Conecta tu cuenta de GitHub
3. Haz clic en **New > Web Service**
4. Selecciona el repositorio `Synkub`
5. Render detectará automáticamente la configuración del `render.yaml`
6. Haz clic en **Create Web Service**

**Configuración incluida:**
- Build Command: `npm install && npm run build`
- Start Command: `npm start`
- Runtime: Node.js
- Plan: Free
- Auto-deploy: Habilitado

### Vercel (Alternativa)

1. Conecta tu repositorio de GitHub a Vercel
2. Configura el build command: `npm run build`
3. El sitio se desplegará automáticamente

### Otras Plataformas

Compatible con:
- Netlify
- Railway
- Heroku
- Cualquier servidor que soporte Next.js

## 🔍 SEO Optimizado

Este proyecto incluye:
- ✅ Meta tags completos (title, description, keywords)
- ✅ Open Graph para Facebook/LinkedIn
- ✅ Twitter Cards
- ✅ Datos estructurados Schema.org (JSON-LD)
- ✅ Sitemap.xml dinámico
- ✅ Robots.txt optimizado
- ✅ Manifest.json para PWA
- ✅ Headers de seguridad
- ✅ Compresión habilitada
- ✅ Imágenes optimizadas

## 📞 Contacto

- **Email**: jhayro.chavez@synkub.com
- **Sitio Web**: [synkub.onrender.com](https://synkub.onrender.com)
- **GitHub**: [github.com/Jhayro91/Synkub](https://github.com/Jhayro91/Synkub)
- **Ubicación**: Lima, Perú

## 📄 Licencia

Este proyecto es privado y propiedad de Synkub.

## 🤝 Contribuciones

Para contribuir:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

Desarrollado con ❤️ por [Jhayro Chavez](https://github.com/Jhayro91)
