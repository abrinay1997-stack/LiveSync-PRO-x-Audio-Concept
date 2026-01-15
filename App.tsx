
import React, { useEffect, useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import Button from './components/Button';
import Card from './components/Card';
import AgendaItem from './components/AgendaItem';
import Modal from './components/Modal';
import { EVENT_DATA, AGENDA, OBJECTIVES, AUDIENCE_PROFILES } from './constants';
import { Calendar, MapPin, Clock, Users, ArrowRight, ShieldCheck, Zap, Target, AlertCircle, CheckCircle2 } from 'lucide-react';

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
    // Fecha objetivo: 13 de Febrero de 2026 a las 18:00 (6:00 PM)
    const targetDate = new Date('2026-02-13T18:00:00').getTime();
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
      <section className="relative pt-40 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-[10%] w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Zap size={14} className="animate-pulse" />
              Evento para Profesionales
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Engineering <span className="gradient-text">Summit</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-xl font-light">
              Eleva tu estándar en System Design. Una experiencia técnica exclusiva de LiveSync PRO × Audio Concept.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-cyan-400 border border-white/10">
                  <Calendar size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-slate-500 tracking-widest">Fecha</div>
                  <div className="font-bold">13 de Febrero</div>
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

            <div className="flex flex-wrap gap-4">
              <Button 
                variant="secondary" 
                className="px-10"
                onClick={() => window.open(EVENT_DATA.registrationLink, '_blank')}
              >
                Asegurar mi CUPO
              </Button>
              <Button variant="ghost" onClick={() => document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' })}>
                Explorar el Contenido
              </Button>
            </div>
          </div>

          <div className="relative animate-slide-up">
            <Card className="relative z-10 p-0 overflow-hidden" showGlow={true}>
              <img 
                src="https://audioconcept.com.pa/wp-content/uploads/Logo-1200x630-1.jpg" 
                alt="Audio Concept Event" 
                className="w-full h-auto opacity-70 hover:opacity-90 transition-opacity object-cover min-h-[300px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse-custom"></div>
                  <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Exclusivo</span>
                </div>
                <h3 className="text-white text-xl font-bold">Demostración Técnica</h3>
                <p className="text-slate-400 text-sm">Flujos de trabajo reales para sistemas de gran escala.</p>
              </div>
            </Card>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 blur-2xl rounded-full"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-cyan-500/20 blur-2xl rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Countdown Section - Event Start */}
      <section className="py-12 px-6 md:px-12 relative">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#0f0f0f] border border-cyan-500/20 rounded-2xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 shadow-[0_0_15px_rgba(6,182,212,0.8)]"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div className="text-center md:text-left flex-1">
                <div className="flex items-center justify-center md:justify-start gap-2 text-cyan-400 mb-2">
                  <Clock size={18} className="animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">Cuenta Regresiva</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">El Summit está por comenzar</h2>
                <p className="text-slate-500 text-sm mt-1 italic">Prepárate para una jornada técnica sin precedentes.</p>
              </div>

              <div className="flex flex-col items-center flex-1">
                <span className="text-slate-500 uppercase text-[10px] tracking-widest mb-3">Tiempo restante para el evento</span>
                <div className="flex gap-4 md:gap-8">
                  <div className="flex flex-col items-center min-w-[60px]">
                    <span className="text-3xl md:text-4xl font-black text-white font-mono tracking-tighter">
                      {String(timeLeft.days).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] text-slate-600 uppercase tracking-widest mt-1">Días</span>
                  </div>
                  <div className="flex flex-col items-center min-w-[60px]">
                    <span className="text-3xl md:text-4xl font-black text-white font-mono tracking-tighter">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] text-slate-600 uppercase tracking-widest mt-1">Horas</span>
                  </div>
                  <div className="flex flex-col items-center min-w-[60px]">
                    <span className="text-3xl md:text-4xl font-black text-white font-mono tracking-tighter">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] text-slate-600 uppercase tracking-widest mt-1">Min</span>
                  </div>
                  <div className="flex flex-col items-center min-w-[60px]">
                    <span className="text-3xl md:text-4xl font-black text-cyan-400 font-mono tracking-tighter">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] text-slate-600 uppercase tracking-widest mt-1">Seg</span>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-auto flex-1 md:flex-none text-center">
                <Button 
                  variant="secondary" 
                  className="w-full md:w-auto px-12 py-4"
                  onClick={() => window.open(EVENT_DATA.registrationLink, '_blank')}
                >
                  Registrarme Ahora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Summit */}
      <section id="about" className="py-24 bg-[#06010f] px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Un Taller para la <span className="text-cyan-400">Excelencia Técnica</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Diseñado para profesionales que buscan dominar los flujos de trabajo más avanzados en la industria del sonido profesional.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card title="Propuesta Educativa" className="flex flex-col">
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Fusionamos fundamentos de ingeniería con demostraciones prácticas de alto nivel. Aprenderás a utilizar herramientas de precisión para garantizar resultados impecables en cada proyecto.
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
                <Button variant="ghost" className="w-full text-xs py-2" onClick={() => window.open('https://maps.app.goo.gl/u3U6zXWfU7k2R6J9A', '_blank')}>
                  Cómo llegar
                </Button>
              </div>
            </Card>
            <Card title="Lo que lograrás" className="flex flex-col">
              <ul className="space-y-3">
                {OBJECTIVES.slice(0, 3).map((obj, i) => (
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

      {/* Agenda Section */}
      <section id="agenda" className="py-24 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Estructura del <span className="text-purple-500">Summit</span></h2>
            <p className="text-slate-500">3 horas de inmersión total en el diseño de sistemas de alto rendimiento.</p>
          </div>

          <div className="max-w-2xl mx-auto">
            {AGENDA.map((item, index) => (
              <AgendaItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience / Convenience Section */}
      <section id="audience" className="py-24 bg-[#06010f] px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
              Público Objetivo
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Para quién es <span className="text-cyan-400">conveniente</span> asistir?</h2>
            <p className="text-slate-500 max-w-3xl mx-auto">El contenido del Summit ha sido curado para los roles que determinan el éxito técnico y comercial de una producción de alta gama.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {AUDIENCE_PROFILES.map((profile, idx) => (
              <Card key={idx} className="relative group hover:bg-[#111] transition-all duration-500">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    <Users size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {profile.title}
                  </h3>
                </div>

                <div className="mb-8">
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <AlertCircle size={14} /> Por qué asistir:
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed italic border-l-2 border-white/5 pl-4 py-1">
                    "{profile.description}"
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Módulos clave de interés:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {profile.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-slate-300 text-sm group/item">
                        <CheckCircle2 size={16} className="text-cyan-500 flex-shrink-0 mt-0.5 opacity-50 group-hover/item:opacity-100 transition-opacity" />
                        <span className="group-hover/item:text-white transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-[#050505] px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start">
            <Logo />
            <p className="text-slate-600 text-[10px] mt-6 uppercase tracking-widest text-center md:text-left">
              © 2024 Engineering Summit. Un evento profesional de<br/>LiveSync PRO en colaboración con Audio Concept Panamá.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-8 text-sm font-medium">
              <button onClick={() => setIsLegalModalOpen(true)} className="text-slate-500 hover:text-white transition-colors">Aviso Legal</button>
              <button onClick={() => setIsPrivacyModalOpen(true)} className="text-slate-500 hover:text-white transition-colors">Privacidad</button>
              <a href="https://abrinay1997-stack.github.io/SyncMaster/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors font-bold">Soporte Técnico</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <Modal isOpen={isLegalModalOpen} onClose={() => setIsLegalModalOpen(false)} title="Aviso Legal">
        <div className="space-y-4">
          <p>Este sitio web es operado por el equipo de Ingeniería de LiveSync PRO en colaboración con Audio Concept Panamá.</p>
          <h3 className="text-white font-bold">Responsabilidad Técnica</h3>
          <p>La información técnica presentada durante el Summit tiene fines educativos y demostrativos. LiveSync PRO no se hace responsable por la implementación incorrecta de las metodologías discutidas fuera de un entorno controlado.</p>
          <h3 className="text-white font-bold">Propiedad Intelectual</h3>
          <p>Todos los logotipos, marcas y software demostrados son propiedad exclusiva de sus respectivos dueños.</p>
        </div>
      </Modal>

      <Modal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} title="Política de Privacidad">
        <div className="space-y-4">
          <p>En cumplimiento con las normativas de protección de datos personales, informamos sobre el tratamiento de la información recolectada mediante el formulario de inscripción.</p>
          <h3 className="text-white font-bold">Recolección de Datos</h3>
          <p>Recopilamos su nombre, correo electrónico y perfil profesional con el único propósito de gestionar su acceso al Engineering Summit.</p>
        </div>
      </Modal>

      {/* Mobile Floating CTA */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
        <Button 
          variant="secondary" 
          className="w-full shadow-2xl py-4 flex items-center justify-center gap-2"
          onClick={() => window.open(EVENT_DATA.registrationLink, '_blank')}
        >
          Asegurar mi CUPO <ArrowRight size={18} />
        </Button>
      </div>
    </div>
  );
};

export default App;
