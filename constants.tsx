
import React from 'react';
import { Activity, Clock, MapPin, Users, Target, Calendar } from 'lucide-react';
import { AgendaItem, Objective, AudienceProfile, PainPoint } from './types';

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
  name: "Precision Pro Audio Lab: LiveSync PRO & Audio Concept",
  concept: "Taller técnico avanzado de diseño de sistemas y flujo de trabajo FOH",
  duration: "3 horas de inmersión técnica",
  location: "Showroom Audio Concept, Plaza 61, Obarrio, Panamá",
  googleMapsLink: "https://maps.app.goo.gl/gSpLztjafUZtK3tT6",
  capacity: "Cupos estrictamente limitados",
  registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdJw1GuWixvJT0Q8KhUoKwixOdM91Ga_mexRlWi3jKPbew20Q/viewform?usp=header",
  socials: {
    audioconcept: {
      facebook: "https://www.facebook.com/Audioconcept.com.pa",
      instagram: "https://www.instagram.com/audioconcept_pa/",
      web: "https://audioconcept.com.pa/"
    },
    livesyncpro: {
      instagram: "https://www.instagram.com/livesyncpro/",
      web: "https://livesyncpro.com/"
    }
  }
};

export const PAIN_POINTS: PainPoint[] = [
  {
    question: "¿Cansado de que tu sistema no responda igual en todas las zonas del venue?",
    solution: "Aprende a garantizar una respuesta de frecuencia uniforme mediante metodologías de diseño de sistemas de alta precisión."
  },
  {
    question: "¿Pierdes horas tratando de alinear la fase de tus subs con el arreglo principal?",
    solution: "Optimiza tu flujo de trabajo y reduce el ajuste de fase de horas a minutos integrando el ecosistema LiveSync Pro en tu FOH."
  },
  {
    question: "¿Tus mezclas pierden impacto debido a cancelaciones acústicas no detectadas?",
    solution: "Identifica y resuelve problemas críticos de fase antes del show con técnicas avanzadas de medición y predicción."
  }
];

export const AGENDA: AgendaItem[] = [
  {
    time: "6:00 PM",
    title: "Apertura y Technical Showcase",
    details: [
      "Acreditación técnica",
      "Exhibición de hardware y networking inicial"
    ]
  },
  {
    time: "6:30 PM",
    title: "Keynote: El Nuevo Estándar del FOH",
    speaker: "Abrinay",
    details: [
      "Visión estratégica de la ingeniería sonora 2026",
      "Del concepto a la ejecución sin errores"
    ]
  },
  {
    time: "6:45 PM",
    title: "Masterclass: Flujos de Trabajo de Alta Eficiencia",
    speaker: "Abrinay",
    details: [
      "Secretos de optimización en montajes de gran escala",
      "Integración LiveSync PRO: El fin de las horas perdidas"
    ]
  },
  {
    time: "7:45 PM",
    title: "Laboratorio Práctico y Simulación Real",
    speaker: "Abrinay",
    details: [
      "Resolución de desafíos acústicos complejos en vivo",
      "Técnicas de precisión aplicadas"
    ]
  },
  {
    time: "8:30 PM",
    title: "Mesa Redonda: Consultoría Técnica",
    speaker: "Abrinay",
    details: [
      "Sesión interactiva de Q&A",
      "Análisis de casos planteados por los asistentes"
    ]
  },
  {
    time: "8:50 PM",
    title: "Cierre y Anuncios Exclusivos",
    details: [
      "Beneficios para la comunidad PRO",
      "Certificaciones y networking final"
    ]
  }
];

export const OBJECTIVES: Objective[] = [
  { text: "Aprender a usar LiveSync Pro para optimización FOH", isPrimary: true },
  { text: "Dominar metodologías avanzadas de System Design", isPrimary: true },
  { text: "Reducir márgenes de error en montajes de alta complejidad", isPrimary: true },
  { text: "Conectar con los líderes de la industria del audio en Panamá", isPrimary: true },
  { text: "Aprender a optimizar el ROI mediante planificación técnica", isPrimary: false },
  { text: "Acceder a herramientas exclusivas del ecosistema PRO", isPrimary: false },
];

export const AUDIENCE_PROFILES: AudienceProfile[] = [
  {
    title: "Ingeniería FOH y Diseño de Sistemas",
    percentage: 100,
    description: "Este Workshop es indispensable si tu objetivo es dominar flujos de trabajo de alta precisión, reducir tiempos de ajuste en sitio y garantizar una cobertura sonora uniforme para FOH en entornos acústicamente complejos.",
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
    description: "Conveniente para líderes que necesitan validar el cumplimiento técnico de sus proveedores, optimizar presupuestos mediante planificación de ingeniería y elevar el estándar de calidad sonora de sus producciones.",
    items: [
      "Criterios de validación técnica de proyectos",
      "Optimización de ROI en infraestructura AV",
      "Mitigación de riesgos en eventos de gran escala",
      "Supervisión de estándares internacionales de audio"
    ]
  }
];
