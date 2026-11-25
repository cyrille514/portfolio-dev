export type Lang = 'fr' | 'es';

export interface ProjectItem {
  title: string;
  badge: string;
  description: string;
  highlights: string[];
  stack: string[];
  liveUrl: string;
  repoUrl: string;
}

export interface ProjectMatrixRow {
  project: string;
  type: string;
  stackSummary: string;
  status: string;
}

export const portfolioContent: Record<
  Lang,
  {
    metaTitle: string;
    role: string;
    heroTitle: string;
    heroSubtitle: string;
    ctaProjects: string;
    ctaContact: string;
    nav: { about: string; projects: string; skills: string; contact: string };
    sections: {
      projectsTitle: string;
      projectsSubtitle: string;
      matrixTitle: string;
      matrixHeaders: {
        project: string;
        type: string;
        stack: string;
        status: string;
      };
      skillsTitle: string;
      aboutTitle: string;
      aboutText: string;
      contactTitle: string;
      contactText: string;
    };
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitButton: string;
      sentNotice: string;
    };
    labels: {
      liveDemo: string;
      sourceCode: string;
      keyPoints: string;
    };
    skills: {
      category: string;
      items: string[];
    }[];
    projects: ProjectItem[];
    projectMatrix: ProjectMatrixRow[];
  }
> = {
  fr: {
    metaTitle: 'Cyrille Nyami — Développeur Web Fullstack Junior',
    role: 'Développeur Web Fullstack Junior',
    heroTitle: 'Je conçois des applications web complètes, fiables et responsives.',
    heroSubtitle:
      'De l’interface utilisateur responsive jusqu’aux bases de données relationnelles, APIs et paiements en ligne. Je développe des solutions web structurées en JavaScript, React, Astro, Node.js, PostgreSQL et Supabase.',
    ctaProjects: 'Voir mes projets',
    ctaContact: 'Me contacter',
    nav: {
      about: 'À propos',
      projects: 'Projets',
      skills: 'Compétences',
      contact: 'Contact',
    },
    sections: {
      projectsTitle: 'Projets sélectionnés',
      projectsSubtitle: 'Applications fullstack, architecture modulaire et déploiement continu.',
      matrixTitle: 'Vue d’ensemble technique',
      matrixHeaders: {
        project: 'Projet',
        type: 'Périmètre',
        stack: 'Stack principale',
        status: 'État',
      },
      skillsTitle: 'Compétences techniques',
      aboutTitle: 'À propos',
      aboutText:
        'Développeur web fullstack junior orienté pratique et qualité de code. J’accorde une attention particulière à la séparation modulaire des responsabilités (DRY), à la sécurité des données et au design responsive mobile-first.',
      contactTitle: 'Travaillons ensemble',
      contactText:
        'Disponible pour un poste de développeur web fullstack junior ou une opportunité technique. Envoyez un message ou utilisez mes liens directs.',
    },
    form: {
      nameLabel: 'Nom',
      namePlaceholder: 'Votre nom',
      emailLabel: 'E-mail',
      emailPlaceholder: 'vous@exemple.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Décrivez votre besoin ou opportunité...',
      submitButton: 'Envoyer le message',
      sentNotice:
        'Message prêt dans votre client e-mail. Vous pouvez aussi écrire directement à cyrillenyamitchamba67@gmail.com.',
    },
    labels: {
      liveDemo: 'Démo en ligne',
      sourceCode: 'Code GitHub',
      keyPoints: 'Points clés',
    },
    skills: [
      {
        category: 'Frontend & UI',
        items: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript (ES6+)', 'React', 'Astro'],
      },
      {
        category: 'Backend & Bases de données',
        items: ['Node.js', 'API REST', 'SSR', 'SQL', 'PostgreSQL', 'Supabase Auth'],
      },
      {
        category: 'Intégrations & Déploiement',
        items: ['Stripe Checkout', 'Brevo', 'Retell.ai', 'Git & GitHub', 'Vercel', 'Netlify'],
      },
    ],
    projects: [
      {
        title: 'Tienda Coches — E-commerce & Showroom',
        badge: 'Fullstack • Production',
        description:
          'Plateforme e-commerce automobile complète avec catalogue filtrable, authentification utilisateur, panier, paiement sécurisé Stripe et génération automatique de factures par e-mail.',
        highlights: [
          'Base de données relationnelle PostgreSQL avec requêtes paramétrées',
          'Authentification et gestion de profil via Supabase',
          'Paiement Stripe Checkout, facturation idempotente et e-mails Brevo',
        ],
        stack: ['PostgreSQL', 'Supabase', 'Stripe', 'Brevo', 'Astro SSR', 'Tailwind CSS'],
        liveUrl: 'https://tienda-coches.vercel.app',
        repoUrl: 'https://github.com/cyrille514/tienda-coches',
      },
      {
        title: 'Gestion de Naissances — Application Interactive',
        badge: 'Fullstack • React & Node.js',
        description:
          'Application web responsive dédiée à la gestion et au suivi des enregistrements de naissances, avec recherche instantanée, filtrage et interface claire.',
        highlights: [
          'Gestion d’état dynamique, recherche et filtrage en temps réel avec React',
          'Architecture client/serveur modulaire et design mobile-first',
          'Déploiement continu sur Vercel',
        ],
        stack: ['React', 'Node.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vercel'],
        liveUrl: 'https://nacimientos-app-u8ha.vercel.app/',
        repoUrl: 'https://github.com/cyrille514/nacimientos-app',
      },
    ],
    projectMatrix: [
      {
        project: 'Tienda Coches',
        type: 'Fullstack E-commerce',
        stackSummary: 'Astro SSR, PostgreSQL, Supabase, Stripe, Brevo',
        status: 'En ligne',
      },
      {
        project: 'Gestion de Naissances',
        type: 'Fullstack Web App',
        stackSummary: 'React, Node.js, JavaScript (ES6+), Tailwind CSS',
        status: 'En ligne',
      },
    ],
  },

  es: {
    metaTitle: 'Cyrille Nyami — Desarrollador Web Fullstack Junior',
    role: 'Desarrollador Web Fullstack Junior',
    heroTitle: 'Desarrollo aplicaciones web completas, fiables y responsivas.',
    heroSubtitle:
      'Desde la interfaz de usuario responsiva hasta bases de datos relacionales, APIs y pasarelas de pago. Construyo soluciones estructuradas con JavaScript, React, Astro, Node.js, PostgreSQL y Supabase.',
    ctaProjects: 'Ver proyectos',
    ctaContact: 'Contactar',
    nav: {
      about: 'Sobre mí',
      projects: 'Proyectos',
      skills: 'Habilidades',
      contact: 'Contacto',
    },
    sections: {
      projectsTitle: 'Proyectos destacados',
      projectsSubtitle: 'Aplicaciones fullstack, arquitectura modular y despliegue continuo.',
      matrixTitle: 'Resumen técnico',
      matrixHeaders: {
        project: 'Proyecto',
        type: 'Alcance',
        stack: 'Stack principal',
        status: 'Estado',
      },
      skillsTitle: 'Habilidades técnicas',
      aboutTitle: 'Sobre mí',
      aboutText:
        'Desarrollador web fullstack junior enfocado en la práctica y la calidad del código. Priorizo la arquitectura modular (DRY), la seguridad de los datos y el diseño responsivo mobile-first.',
      contactTitle: 'Trabajemos juntos',
      contactText:
        'Disponible para posiciones de desarrollador web fullstack junior o proyectos técnicos. Envía un mensaje o utiliza los enlaces directos.',
    },
    form: {
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Correo electrónico',
      emailPlaceholder: 'tu@ejemplo.com',
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Cuéntame sobre el puesto o proyecto...',
      submitButton: 'Enviar mensaje',
      sentNotice:
        'Mensaje preparado en tu gestor de correo. También puedes escribir directamente a cyrillenyamitchamba67@gmail.com.',
    },
    labels: {
      liveDemo: 'Demo en vivo',
      sourceCode: 'Código GitHub',
      keyPoints: 'Puntos clave',
    },
    skills: [
      {
        category: 'Frontend y UI',
        items: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript (ES6+)', 'React', 'Astro'],
      },
      {
        category: 'Backend y Bases de Datos',
        items: ['Node.js', 'API REST', 'SSR', 'SQL', 'PostgreSQL', 'Supabase Auth'],
      },
      {
        category: 'Integraciones y Despliegue',
        items: ['Stripe Checkout', 'Brevo', 'Retell.ai', 'Git y GitHub', 'Vercel', 'Netlify'],
      },
    ],
    projects: [
      {
        title: 'Tienda Coches — E-commerce y Showroom',
        badge: 'Fullstack • Producción',
        description:
          'Plataforma e-commerce de vehículos con catálogo filtrable, autenticación de usuarios, carrito, pago seguro con Stripe y generación automática de facturas por correo.',
        highlights: [
          'Base de datos relacional PostgreSQL con consultas parametrizadas',
          'Autenticación y gestión de perfil mediante Supabase',
          'Pago con Stripe Checkout, facturación idempotente y correos con Brevo',
        ],
        stack: ['PostgreSQL', 'Supabase', 'Stripe', 'Brevo', 'Astro SSR', 'Tailwind CSS'],
        liveUrl: 'https://tienda-coches.vercel.app',
        repoUrl: 'https://github.com/cyrille514/tienda-coches',
      },
      {
        title: 'Gestión de Nacimientos — Aplicación Interactiva',
        badge: 'Fullstack • React & Node.js',
        description:
          'Aplicación web responsiva para la gestión y consulta de registros de nacimientos, con búsqueda rápida, filtros y diseño claro.',
        highlights: [
          'Gestión de estado dinámica, búsqueda y filtrado en tiempo real con React',
          'Arquitectura cliente/servidor modular y diseño mobile-first',
          'Despliegue continuo en Vercel',
        ],
        stack: ['React', 'Node.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vercel'],
        liveUrl: 'https://nacimientos-app-u8ha.vercel.app/',
        repoUrl: 'https://github.com/cyrille514/nacimientos-app',
      },
    ],
    projectMatrix: [
      {
        project: 'Tienda Coches',
        type: 'Fullstack E-commerce',
        stackSummary: 'Astro SSR, PostgreSQL, Supabase, Stripe, Brevo',
        status: 'En línea',
      },
      {
        project: 'Gestión de Nacimientos',
        type: 'Fullstack Web App',
        stackSummary: 'React, Node.js, JavaScript (ES6+), Tailwind CSS',
        status: 'En línea',
      },
    ],
  },
};
