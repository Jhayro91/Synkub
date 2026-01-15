'use client';

import { CodeBracketIcon, DevicePhoneMobileIcon, CogIcon, RocketLaunchIcon, ShieldCheckIcon, ClockIcon, ChatBubbleLeftRightIcon, CubeTransparentIcon, ServerStackIcon, CloudArrowUpIcon, ChartBarIcon, LightBulbIcon, CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useState, FormEvent } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    tipoProyecto: '',
    presupuesto: '',
    mensaje: ''
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({
          nombre: '',
          email: '',
          empresa: '',
          tipoProyecto: '',
          presupuesto: '',
          mensaje: ''
        });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white/95 backdrop-blur-md shadow-sm fixed w-full top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Synkub</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-600 hover:text-blue-600 transition font-medium">Inicio</a>
            <a href="#servicios" className="text-gray-600 hover:text-blue-600 transition font-medium">Servicios</a>
            <a href="#tecnologias" className="text-gray-600 hover:text-blue-600 transition font-medium">Tecnologías</a>
            <a href="#proceso" className="text-gray-600 hover:text-blue-600 transition font-medium">Proceso</a>
            <a href="#contacto" className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all">
              Solicitar Cotización
            </a>
          </div>
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 space-y-4">
            <a href="#inicio" className="block text-gray-600 hover:text-blue-600">Inicio</a>
            <a href="#servicios" className="block text-gray-600 hover:text-blue-600">Servicios</a>
            <a href="#tecnologias" className="block text-gray-600 hover:text-blue-600">Tecnologías</a>
            <a href="#proceso" className="block text-gray-600 hover:text-blue-600">Proceso</a>
            <a href="#contacto" className="block bg-blue-600 text-white px-4 py-2 rounded-lg text-center">Contactar</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50"></div>
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(226 232 240) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            <span>Soluciones de Software a Medida</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="text-gray-900">Construimos el </span>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Software</span>
            <br />
            <span className="text-gray-900">que tu negocio necesita</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transformamos ideas en productos digitales de alto impacto. Desarrollo web, aplicaciones móviles 
            y soluciones empresariales con tecnología de vanguardia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contacto"
              className="group bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Iniciar Proyecto</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#servicios"
              className="text-gray-700 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all"
            >
              Explorar Servicios
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">50+</div>
              <div className="text-gray-500 mt-1">Proyectos Entregados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">99%</div>
              <div className="text-gray-500 mt-1">Clientes Satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">5+</div>
              <div className="text-gray-500 mt-1">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">24/7</div>
              <div className="text-gray-500 mt-1">Soporte Técnico</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Nuestros Servicios</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
              Soluciones Digitales Integrales
            </h2>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Ofrecemos servicios completos de desarrollo de software adaptados a las necesidades específicas de cada cliente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="group bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CodeBracketIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Desarrollo Web</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Aplicaciones web modernas y escalables. Desde landing pages de alto impacto hasta plataformas SaaS complejas con arquitectura robusta.
              </p>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Single Page Applications (SPA)</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Progressive Web Apps (PWA)</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>E-commerce & Marketplaces</li>
              </ul>
            </div>

            {/* Service Card 2 */}
            <div className="group bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <DevicePhoneMobileIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Apps Móviles</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Aplicaciones nativas e híbridas para iOS y Android. Experiencias móviles fluidas que conectan con tus usuarios.
              </p>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>React Native & Flutter</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>Integración con APIs</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>Push Notifications</li>
              </ul>
            </div>

            {/* Service Card 3 */}
            <div className="group bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ServerStackIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Backend & APIs</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Arquitecturas backend robustas y APIs RESTful/GraphQL. Sistemas escalables que soportan el crecimiento de tu negocio.
              </p>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>Microservicios</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>Bases de datos SQL/NoSQL</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>Autenticación & Seguridad</li>
              </ul>
            </div>

            {/* Service Card 4 */}
            <div className="group bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CloudArrowUpIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud & DevOps</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Infraestructura en la nube y automatización de despliegues. Optimización de recursos y alta disponibilidad.
              </p>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>AWS, GCP, Azure</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>CI/CD Pipelines</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>Docker & Kubernetes</li>
              </ul>
            </div>

            {/* Service Card 5 */}
            <div className="group bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sistemas Empresariales</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                ERPs, CRMs y sistemas de gestión personalizados. Automatización de procesos para aumentar la productividad.
              </p>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>Gestión de inventarios</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>Facturación electrónica</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>Reportes & Analytics</li>
              </ul>
            </div>

            {/* Service Card 6 */}
            <div className="group bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <LightBulbIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Consultoría Tech</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Asesoramiento estratégico en tecnología. Auditorías de código, optimización de arquitectura y roadmaps técnicos.
              </p>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>Code Review</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>Migración de sistemas</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>Escalabilidad</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="tecnologias" className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Stack Tecnológico</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Tecnologías de Vanguardia
            </h2>
            <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
              Utilizamos las herramientas más modernas y eficientes del mercado para garantizar productos de calidad superior.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', color: 'from-cyan-400 to-cyan-600' },
              { name: 'Next.js', color: 'from-gray-600 to-gray-800' },
              { name: 'TypeScript', color: 'from-blue-500 to-blue-700' },
              { name: 'Node.js', color: 'from-green-500 to-green-700' },
              { name: 'Python', color: 'from-yellow-500 to-yellow-700' },
              { name: 'PostgreSQL', color: 'from-blue-600 to-indigo-700' },
              { name: 'MongoDB', color: 'from-green-600 to-green-800' },
              { name: 'AWS', color: 'from-orange-500 to-orange-700' },
              { name: 'Docker', color: 'from-blue-500 to-blue-700' },
              { name: 'GraphQL', color: 'from-pink-500 to-pink-700' },
              { name: 'Tailwind', color: 'from-teal-400 to-teal-600' },
              { name: 'Flutter', color: 'from-blue-400 to-blue-600' },
            ].map((tech, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all hover:scale-105"
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center`}>
                  <CubeTransparentIcon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Metodología</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
              Proceso de Desarrollo
            </h2>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Un enfoque estructurado y transparente que garantiza resultados excepcionales en cada proyecto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="text-8xl font-bold text-blue-100 absolute -top-4 -left-2">01</div>
              <div className="relative pt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery</h3>
                <p className="text-gray-600 leading-relaxed">Análisis profundo de requerimientos, objetivos de negocio y definición del alcance del proyecto.</p>
              </div>
            </div>
            <div className="relative">
              <div className="text-8xl font-bold text-indigo-100 absolute -top-4 -left-2">02</div>
              <div className="relative pt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Diseño & Arquitectura</h3>
                <p className="text-gray-600 leading-relaxed">Creación de wireframes, prototipos y definición de la arquitectura técnica óptima.</p>
              </div>
            </div>
            <div className="relative">
              <div className="text-8xl font-bold text-purple-100 absolute -top-4 -left-2">03</div>
              <div className="relative pt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Desarrollo Ágil</h3>
                <p className="text-gray-600 leading-relaxed">Implementación iterativa con sprints, revisiones constantes y entregas incrementales.</p>
              </div>
            </div>
            <div className="relative">
              <div className="text-8xl font-bold text-violet-100 absolute -top-4 -left-2">04</div>
              <div className="relative pt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Deploy & Soporte</h3>
                <p className="text-gray-600 leading-relaxed">Lanzamiento a producción, monitoreo continuo y mantenimiento post-entrega.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">¿Por qué Synkub?</h2>
            <p className="text-xl text-blue-100 mt-6 max-w-2xl mx-auto">
              Nos diferenciamos por nuestra dedicación a la excelencia y compromiso con el éxito de cada proyecto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
              <ShieldCheckIcon className="w-10 h-10 text-blue-200 mb-4" />
              <h3 className="text-xl font-bold mb-3">Código de Calidad</h3>
              <p className="text-blue-100 leading-relaxed">Arquitectura limpia, testeable y mantenible. Seguimos las mejores prácticas de la industria.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
              <ClockIcon className="w-10 h-10 text-blue-200 mb-4" />
              <h3 className="text-xl font-bold mb-3">Entregas Puntuales</h3>
              <p className="text-blue-100 leading-relaxed">Cumplimos con los plazos establecidos sin comprometer la calidad del producto final.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
              <ChatBubbleLeftRightIcon className="w-10 h-10 text-blue-200 mb-4" />
              <h3 className="text-xl font-bold mb-3">Comunicación Directa</h3>
              <p className="text-blue-100 leading-relaxed">Acceso directo al equipo de desarrollo. Actualizaciones constantes sobre el avance.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
              <RocketLaunchIcon className="w-10 h-10 text-blue-200 mb-4" />
              <h3 className="text-xl font-bold mb-3">Escalabilidad</h3>
              <p className="text-blue-100 leading-relaxed">Soluciones diseñadas para crecer junto con tu negocio, sin limitaciones técnicas.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
              <CogIcon className="w-10 h-10 text-blue-200 mb-4" />
              <h3 className="text-xl font-bold mb-3">Soporte Continuo</h3>
              <p className="text-blue-100 leading-relaxed">Mantenimiento proactivo, actualizaciones de seguridad y soporte técnico dedicado.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
              <LightBulbIcon className="w-10 h-10 text-blue-200 mb-4" />
              <h3 className="text-xl font-bold mb-3">Innovación Constante</h3>
              <p className="text-blue-100 leading-relaxed">Implementamos las últimas tecnologías y metodologías del mercado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                ¿Listo para transformar tu idea en realidad?
              </h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos digitales.
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all"
              >
                <span>Solicitar Consulta Gratuita</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Contacto</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
                Hablemos de tu Proyecto
              </h2>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Completa el formulario y te contactaremos en menos de 24 horas para discutir los detalles de tu proyecto y ofrecerte una propuesta personalizada.
              </p>
              
              <div className="mt-10 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="text-gray-900 font-medium">jhayro.chavez@synkub.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Tiempo de Respuesta</div>
                    <div className="text-gray-900 font-medium">Menos de 24 horas</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 p-10">
              {formStatus === 'success' ? (
                <div className="text-center py-12">
                  <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-gray-600 mb-6">Gracias por contactarnos. Te responderemos en menos de 24 horas.</p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="text-blue-600 font-medium hover:text-blue-700"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {formStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
                    <ExclamationCircleIcon className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <p className="text-red-700 text-sm">Hubo un error al enviar. Por favor intenta de nuevo o escríbenos directamente a jhayro.chavez@synkub.com</p>
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Empresa (opcional)</label>
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Proyecto</label>
                  <select 
                    name="tipoProyecto"
                    value={formData.tipoProyecto}
                    onChange={(e) => setFormData({...formData, tipoProyecto: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-700"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="Desarrollo Web">Desarrollo Web</option>
                    <option value="Aplicación Móvil">Aplicación Móvil</option>
                    <option value="Backend & APIs">Backend & APIs</option>
                    <option value="Sistema Empresarial">Sistema Empresarial</option>
                    <option value="Consultoría">Consultoría</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Presupuesto Estimado</label>
                  <select 
                    name="presupuesto"
                    value={formData.presupuesto}
                    onChange={(e) => setFormData({...formData, presupuesto: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-700"
                  >
                    <option value="">Selecciona un rango</option>
                    <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                    <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                    <option value="$15,000 - $50,000">$15,000 - $50,000</option>
                    <option value="$50,000+">$50,000+</option>
                    <option value="Por definir">Por definir</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                  <textarea
                    name="mensaje"
                    rows={4}
                    required
                    value={formData.mensaje}
                    onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Cuéntanos sobre tu proyecto, objetivos y cualquier detalle relevante..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {formStatus === 'loading' ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    'Enviar Solicitud'
                  )}
                </button>
                <p className="text-xs text-gray-500 text-center">
                  Al enviar este formulario, aceptas nuestra política de privacidad.
                </p>
              </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="text-2xl font-bold">Synkub</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Desarrollo de software profesional. Transformamos ideas en productos digitales de alto impacto.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6">Servicios</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Desarrollo Web</a></li>
                <li><a href="#" className="hover:text-white transition">Apps Móviles</a></li>
                <li><a href="#" className="hover:text-white transition">Backend & APIs</a></li>
                <li><a href="#" className="hover:text-white transition">Cloud & DevOps</a></li>
                <li><a href="#" className="hover:text-white transition">Consultoría</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6">Empresa</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-white transition">Metodología</a></li>
                <li><a href="#" className="hover:text-white transition">Tecnologías</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6">Contacto</h4>
              <ul className="space-y-3 text-gray-400">
                <li>jhayro.chavez@synkub.com</li>
                <li>Lima, Perú</li>
              </ul>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© 2026 Synkub. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Política de Privacidad</a>
              <a href="#" className="hover:text-white transition">Términos de Servicio</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
