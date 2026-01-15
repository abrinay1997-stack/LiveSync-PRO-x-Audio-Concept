
import React from 'react';
import { Activity, Clock, MapPin, Users, Target, Calendar } from 'lucide-react';
import { AgendaItem, Objective, AudienceProfile } from './types';

export const COLORS = {
  bgPrimary: '#050505',
  bgSecondary: '#06010f',
  bgCard: '#0f0f0f',
  bgInput: '#1a1a1a',
  cyan400: 'rgb(34 211 238)',
  cyan500: 'rgb(6 182 212)',
  purple500: 'rgb(168 85 247)',
  slate400: 'rgb(148 163 184)',
  slate500: 'rgb(100 116 139)',
};

export const EVENT_DATA = {
  name: "Engineering Summit: LiveSync PRO & Audio Concept",
  concept: "Taller técnico avanzado y demostración de ingeniería en tiempo real",
  duration: "3 horas de inmersión técnica",
  location: "Showroom Audio Concept, Plaza 61, Obarrio, Panamá",
  capacity: "Cupos estrictamente limitados",
  registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdJw1GuWixvJT0Q8KhUoKwixOdM91Ga_mexRlWi3jKPbew20Q/viewform?usp=header"
};

export const AGENDA: AgendaItem[] = [
  {
    time: "6:00 PM",
    title: "Apertura y Technical Showcase",
    details: [
      "Recepción de invitados y acreditación técnica",
      "Exhibición de hardware de última generación",
      "Networking de apertura con la comunidad de ingeniería"
    ]
  },
  {
    time: "6:30 PM",
    title: "Keynote: Innovación en el Diseño de Sistemas",
    speaker: "Dirección Técnica Audio Concept",
    details: [
      "Tendencias globales en audio profesional 2024",
      "La evolución del flujo de trabajo: De la teoría a la precisión"
    ]
  },
  {
    time: "6:45 PM",
    title: "Masterclass: Ecosistema LiveSync PRO",
    speaker: "Especialistas de Producto",
    details: [
      "Optimización de tiempos en montajes de gran escala",
      "Análisis de caso: Ingeniería aplicada en el Teatro Anayansi",
      "Integración de flujos de trabajo colaborativos"
    ]
  },
  {
    time: "7:45 PM",
    title: "Demostración Práctica y Simulación",
    speaker: "Ingenieros de Sistemas Invitados",
    details: [
      "Uso de herramientas de cálculo avanzado en tiempo real",
      "Resolución de desafíos técnicos comunes en venues complejos",
      "Workflow de alta eficiencia para giras y eventos corporativos"
    ]
  },
  {
    time: "8:30 PM",
    title: "Panel de Expertos y Mesa Redonda",
    speaker: "Senior System Engineers",
    details: [
      "Sesión interactiva de preguntas y respuestas técnicas",
      "Intercambio de experiencias y mejores prácticas",
      "Consultoría rápida sobre escenarios reales planteados por asistentes"
    ]
  },
  {
    time: "8:50 PM",
    title: "Cierre y Beneficios Exclusivos",
    details: [
      "Presentación de beneficios especiales para asistentes",
      "Anuncio de certificaciones y próximos pasos",
      "Networking final y cierre del Summit"
    ]
  }
];

export const OBJECTIVES: Objective[] = [
  { text: "Dominar metodologías avanzadas de System Design", isPrimary: true },
  { text: "Reducir márgenes de error en montajes de alta complejidad", isPrimary: true },
  { text: "Conectar con los líderes de la industria del audio en Panamá", isPrimary: true },
  { text: "Aprender a optimizar el ROI mediante planificación técnica", isPrimary: false },
  { text: "Acceder a herramientas exclusivas del ecosistema PRO", isPrimary: false },
];

export const AUDIENCE_PROFILES: AudienceProfile[] = [
  {
    title: "Ingeniería y Diseño de Sistemas",
    percentage: 100,
    description: "Este evento es indispensable si tu objetivo es dominar flujos de trabajo de alta precisión, reducir tiempos de ajuste en sitio y garantizar una cobertura sonora uniforme en entornos acústicamente complejos.",
    items: [
      "Optimización de arreglos lineales",
      "Alineación de sistemas de fase avanzada",
      "Software de predicción y cálculo en tiempo real",
      "Resolución de fallos en redes de audio IP"
    ]
  },
  {
    title: "Producción y Gestión Estratégica",
    percentage: 100,
    description: "Conveniente para líderes que necesitan validar el cumplimiento técnico de sus proveedores, optimizar presupuestos mediante planificación de ingeniería y elevar el estándar de calidad de sus producciones.",
    items: [
      "Criterios de validación técnica de proyectos",
      "Optimización de ROI en infraestructura AV",
      "Mitigación de riesgos en eventos de gran escala",
      "Supervisión de estándares internacionales de audio"
    ]
  }
];
