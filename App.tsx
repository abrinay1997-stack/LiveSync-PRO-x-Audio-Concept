
import React, { useEffect, useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import Button from './components/Button';
import Card from './components/Card';
import AgendaItem from './components/AgendaItem';
import Modal from './components/Modal';
import { EVENT_DATA, AGENDA, OBJECTIVES, AUDIENCE_PROFILES, PAIN_POINTS } from './constants';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Target, 
  AlertCircle, 
  CheckCircle2,
  Instagram,
  Facebook,
  Globe
} from 'lucide-react';

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const calculateTimeLeft = useCallback(() => {
    const targetDate = new Date('2026-02-06T18:00:00').getTime();
    const now = Date.now();
    const distance = targetDate - now;

    if (distance < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  }, []);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      const updatedTime = calculateTimeLeft();
      setTimeLeft(updatedTime);
      if (updatedTime.days === 0 && updatedTime.hours === 0 && updatedTime.minutes === 0 && updatedTime.seconds === 0) {
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-cyan-500/30 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-[10%] w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Zap size={14} className="animate-pulse" />
              Sesión Técnica Especializada • Entrada Libre
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              Precision Audio <span className="gradient-text">Lab for FOH</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-xl font-light leading-relaxed">
              Domina la arquitectura de sistemas y optimiza tu flujo de trabajo FOH. Una experiencia técnica exclusiva de <span className="text-cyan-400 font-medium">Audioconcept</span> & <span className="text-purple-500 font-medium">LiveSync PRO.</span>
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-cyan-400 border border-white/10">
                  <Calendar size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-slate-500 tracking-widest">Fecha</div>
                  <div className="font-bold">6 de Febrero, 2026</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-cyan-400 border border-white/10">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-slate-500 tracking-widest">Horario</div>
                  <div className="font-bold">6:00 PM - 9:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-up">
            <Card className="relative z-10 p-0 overflow-hidden" showGlow={true}>
              <img 
                src="https://elvenezolano.com.pa/wp-content/uploads/2019/09/Audioconcept-1.jpg" 
                alt="Audio Concept Event Showcase" 
                className="w-full h-auto opacity-70 hover:opacity-90 transition-opacity object-cover min-h-[300px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse-custom"></div>
                  <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Acceso Libre</span>
                </div>
                <h3 className="text-white text-xl font-bold">Demostración Técnica</h3>
                <p className="text-slate-400 text-sm">Escenarios reales y optimización de fase en tiempo real.</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 px-6 md:px-12 bg-[#080808] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Soluciones de Ingeniería para el <span className="text-cyan-400">Ingeniero Moderno</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PAIN_POINTS.map((point, idx) => (
              <div key={idx} className="bg-white/[0.03] border border-white/10 p-8 rounded-2xl group hover:border-cyan-500/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                  <AlertCircle size={24} />
                </div>
                <h4 className="text-white font-bold text-lg mb-4 leading-tight">{point.question}</h4>
                <div className="h-px w-8 bg-cyan-500/50 mb-4"></div>
                <p className="text-slate-500 text-sm leading-relaxed">{point.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-12 px-6 md:px-12 relative">
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute -top-4 -right-2 md:-right-6 z-20 rotate-12 animate-bounce">
            <div className="bg-red-600 text-white px-4 py-2 rounded-sm font-black text-[10px] md:text-xs uppercase tracking-tighter shadow-[0_4px_10px_rgba(220,38,38,0.5)] border-2 border-red-500/50 flex items-center gap-2">
              <Users size={14} fill="currentColor" />
              Cupos Limitados
            </div>
          </div>

          <div className="bg-[#0f0f0f] border border-cyan-500/20 rounded-2xl p-8 md:p-10 relative overflow-hidden group">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10 text-center lg:text-left">
              <div className="flex-1">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-cyan-400 mb-2">
                  <Clock size={18} className="animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">Cuenta Regresiva</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">El Workshop está por comenzar</h2>
              </div>

              <div className="flex-1 flex flex-col items-center">
                <div className="flex gap-4 md:gap-8">
                  {Object.entries(timeLeft).map(([label, value]) => (
                    <div key={label} className="flex flex-col items-center min-w-[50px]">
                      <span className="text-3xl md:text-4xl font-black text-white font-mono tracking-tighter">
                        {String(value).padStart(2, '0')}
                      </span>
                      <span className="text-[8px] text-slate-600 uppercase tracking-widest mt-1">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-shrink-0 w-full lg:w-auto">
                <Button 
                  variant="secondary" 
                  className="w-full lg:w-auto px-8 py-4 text-sm uppercase tracking-widest"
                  onClick={() => window.open(EVENT_DATA.registrationLink, '_blank')}
                >
                  Obtener Cupo <Zap className="inline-block ml-2 fill-current" size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-[#06010f] px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Ingeniería para la <span className="text-cyan-400">Excelencia FOH</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Un laboratorio práctico diseñado para dominar los flujos de trabajo más avanzados en el diseño de sistemas de audio profesional.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card title="Propuesta Educativa" className="flex flex-col">
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Fusionamos fundamentos de ingeniería con demostraciones prácticas de alto nivel. Aprenderás a utilizar herramientas de precisión para garantizar una mezcla impecable desde el FOH.
              </p>
              <div className="mt-auto flex items-center gap-3 text-cyan-400 font-bold text-sm tracking-wide">
                <ShieldCheck size={18} /> Metodología Profesional
              </div>
            </Card>
            <Card title="Ubicación" className="flex flex-col">
              <div className="flex gap-4 mb-4">
                <MapPin className="text-purple-500 flex-shrink-0" />
                <p className="text-slate-400 text-sm leading-relaxed">
                  {EVENT_DATA.location}
                </p>
              </div>
              <div className="mt-auto">
                <Button variant="ghost" className="w-full text-xs py-2" onClick={() => window.open(EVENT_DATA.googleMapsLink, '_blank')}>
                  Ver en el mapa
                </Button>
              </div>
            </Card>
            <Card title="Lo que lograrás" className="flex flex-col">
              <ul className="space-y-3">
                {OBJECTIVES.slice(0, 4).map((obj, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-400">
                    <Target size={16} className="text-cyan-500 flex-shrink-0" />
                    {obj.text}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Agenda Section (Optimized for 2 columns with "Audio Cable" connection) */}
      <section className="py-24 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Programa del <span className="text-purple-500">Evento</span></h2>
            <p className="text-slate-500">Cronograma técnico diseñado para optimizar tu tiempo.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {/* Columna 1 */}
            <div className="space-y-0">
              {AGENDA.slice(0, Math.ceil(AGENDA.length / 2)).map((item, index) => (
                <AgendaItem key={index} item={item} index={index} />
              ))}
            </div>
            {/* Columna 2 */}
            <div className="space-y-0 mt-0 md:mt-0">
              {AGENDA.slice(Math.ceil(AGENDA.length / 2)).map((item, index) => (
                <AgendaItem key={index + 10} item={item} index={index + Math.ceil(AGENDA.length / 2)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-24 bg-[#06010f] px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
              Público Objetivo
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">¿Para quién es <span className="text-cyan-400">conveniente</span> asistir?</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {AUDIENCE_PROFILES.map((profile, idx) => (
              <Card key={idx} className="relative group hover:bg-[#111] transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    <Users size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{profile.title}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 italic border-l-2 border-white/5 pl-4">{profile.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {profile.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                      <CheckCircle2 size={16} className="text-cyan-500 flex-shrink-0 mt-0.5 opacity-50" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA Section (NEW) */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#06010f] to-[#050505]">
        <div className="max-w-4xl mx-auto">
          <Card className="text-center py-16 px-8 md:px-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-cyan-500/[0.02] pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Asegura tu lugar en la <br/><span className="gradient-text">vanguardia del audio</span>
              </h2>
              <p className="text-slate-400 mb-10 text-lg font-light max-w-xl mx-auto leading-relaxed">
                El acceso es gratuito pero los cupos son limitados para garantizar una experiencia técnica personalizada.
              </p>
              <Button 
                variant="secondary" 
                className="px-12 py-5 text-lg shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:scale-105"
                onClick={() => window.open(EVENT_DATA.registrationLink, '_blank')}
              >
                Obtener Cupo Gratuito <Zap className="inline-block ml-2 fill-current animate-pulse" size={20} />
              </Button>
              <p className="mt-8 text-slate-600 text-[10px] uppercase tracking-[0.2em] font-bold">
                Cortesía de Audio Concept Panamá & LiveSync PRO
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-[#050505] px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-2">
              <Logo />
              <p className="text-slate-500 text-sm mt-6 max-w-sm leading-relaxed">
                Precision Pro Audio Lab es un espacio de transferencia de conocimiento técnico especializado para la industria del espectáculo en Panamá.
              </p>
            </div>

            {/* Audioconcept Socials */}
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 border-l-2 border-cyan-500 pl-3">Audioconcept</h4>
              <div className="flex flex-col gap-4">
                <a href={EVENT_DATA.socials.audioconcept.web} target="_blank" className="flex items-center gap-3 text-slate-500 hover:text-cyan-400 transition-colors group text-sm">
                  <Globe size={18} /> Sitio Web Oficial
                </a>
                <a href={EVENT_DATA.socials.audioconcept.instagram} target="_blank" className="flex items-center gap-3 text-slate-500 hover:text-pink-500 transition-colors group text-sm">
                  <Instagram size={18} /> @audioconcept_pa
                </a>
                <a href={EVENT_DATA.socials.audioconcept.facebook} target="_blank" className="flex items-center gap-3 text-slate-500 hover:text-blue-500 transition-colors group text-sm">
                  <Facebook size={18} /> Audioconcept Panamá
                </a>
              </div>
            </div>

            {/* LiveSync PRO Socials */}
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 border-l-2 border-purple-500 pl-3">LiveSync PRO</h4>
              <div className="flex flex-col gap-4">
                <a href={EVENT_DATA.socials.livesyncpro.web} target="_blank" className="flex items-center gap-3 text-slate-500 hover:text-cyan-400 transition-colors group text-sm">
                  <Globe size={18} /> livesyncpro.com
                </a>
                <a href={EVENT_DATA.socials.livesyncpro.instagram} target="_blank" className="flex items-center gap-3 text-slate-500 hover:text-pink-500 transition-colors group text-sm">
                  <Instagram size={18} /> @livesyncpro
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest">
              <button onClick={() => setIsLegalModalOpen(true)} className="text-slate-500 hover:text-white transition-colors">Aviso Legal</button>
              <button onClick={() => setIsPrivacyModalOpen(true)} className="text-slate-500 hover:text-white transition-colors">Privacidad</button>
            </div>
            <a href="https://abrinay1997-stack.github.io/SyncMaster/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors font-black text-[10px] uppercase tracking-[0.2em] border border-white/10 px-4 py-1.5 rounded-full">
              Soporte Técnico Especializado
            </a>
          </div>

          <div className="mt-12 text-center border-t border-white/5 pt-8">
            <p className="text-slate-600 text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-medium">
              © 2026 LIVE SYNC PRO | AUDIO ENGINEERING. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <Modal isOpen={isLegalModalOpen} onClose={() => setIsLegalModalOpen(false)} title="Aviso Legal">
        <div className="space-y-4 text-xs md:text-sm">
          <p>Este sitio web es operado por el equipo de Ingeniería de LiveSync PRO en colaboración con Audio Concept Panamá.</p>
          <h3 className="text-white font-bold uppercase tracking-widest text-[10px]">Responsabilidad Técnica</h3>
          <p>La información técnica presentada durante el Workshop tiene fines educativos y demostrativos.</p>
        </div>
      </Modal>

      <Modal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} title="Política de Privacidad">
        <div className="space-y-4 text-xs md:text-sm">
          <p>Informamos sobre el tratamiento de la información recolectada mediante el formulario de inscripción.</p>
          <h3 className="text-white font-bold uppercase tracking-widest text-[10px]">Recolección de Datos</h3>
          <p>Recopilamos su nombre, correo electrónico y perfil profesional para gestionar su acceso al Precision Pro Audio Lab.</p>
        </div>
      </Modal>
    </div>
  );
};

export default App;
