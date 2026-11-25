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
      skillsTitle: string;
      aboutTitle: string;
      aboutText: string;
      contactTitle: string;
      contactText: string;
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
      projectsSubtitle: 'Applications fullstack, frontend interactif et intégrations API.',
      skillsTitle: 'Compétences techniques',
      aboutTitle: 'À propos',
      aboutText:
        'Développeur web fullstack junior orienté pratique et qualité de code. J’accorde une attention particulière à la séparation modulaire des responsabilités (DRY), à la sécurité des données et au design responsive mobile-first.',
      contactTitle: 'Travaillons ensemble',
      contactText:
        'Disponible pour un poste de développeur web fullstack junior ou une opportunité technique. Contactez-moi directement par e-mail, GitHub ou LinkedIn.',
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
        badge: 'Frontend • React',
        description:
          'Application web responsive dédiée à la gestion et au suivi des enregistrements de naissances, avec recherche instantanée, filtrage et interface claire.',
        highlights: [
          'Gestion d’état dynamique, recherche et filtrage en temps réel avec React',
          'Architecture par composants modulaires et design mobile-first',
          'Déploiement continu sur Vercel',
        ],
        stack: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'GitHub', 'Vercel'],
        liveUrl: 'https://nacimientos-app-u8ha.vercel.app/',
        repoUrl: 'https://github.com/cyrille514/nacimientos-app',
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
      projectsSubtitle: 'Aplicaciones fullstack, frontend interactivo e integraciones API.',
      skillsTitle: 'Habilidades técnicas',
      aboutTitle: 'Sobre mí',
      aboutText:
        'Desarrollador web fullstack junior enfocado en la práctica y la calidad del código. Priorizo la arquitectura modular (DRY), la seguridad de los datos y el diseño responsivo mobile-first.',
      contactTitle: 'Trabajemos juntos',
      contactText:
        'Disponible para posiciones de desarrollador web fullstack junior o proyectos técnicos. Puedes contactarme directamente por correo, GitHub o LinkedIn.',
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
        badge: 'Frontend • React',
        description:
          'Aplicación web responsiva para la gestión y consulta de registros de nacimientos, con búsqueda rápida, filtros y diseño claro.',
        highlights: [
          'Gestión de estado dinámica, búsqueda y filtrado en tiempo real con React',
          'Arquitectura por componentes modulares y diseño mobile-first',
          'Despliegue continuo en Vercel',
        ],
        stack: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'GitHub', 'Vercel'],
        liveUrl: 'https://nacimientos-app-u8ha.vercel.app/',
        repoUrl: 'https://github.com/cyrille514/nacimientos-app',
      },
    ],
  },
};
