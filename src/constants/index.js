import flutterApp1 from "../assets/projects/project-1.jpg";
import flutterApp2 from "../assets/projects/project-2.jpg";
import flutterApp3 from "../assets/projects/project-3.jpg";
import flutterApp4 from "../assets/projects/project-4.jpg";

export const TEXTS = {
  en: {
    HEROABOUT_SUBTITLE: "Flutter Developer & UI Specialist",
    HEROABOUT_TEXT: `I'm a Flutter developer with expertise in:
• Building cross-platform apps with Dart/Flutter
• Implementing state management solutions
• Firebase backend integration
• Creating responsive UI/UX designs
• Optimizing app performance

Technical Skills:
✓ Flutter framework (3+ years)
✓ Firebase services
✓ State management (Bloc, Provider)
✓ CI/CD pipelines
✓ Automated testing

I deliver:
- Clean, maintainable code
- Pixel-perfect interfaces
- Smooth animations
- Scalable architectures

Beyond coding, I enjoy chess strategy, piano composition, and drawing inspiration from Japanese design aesthetics.`,

PROJECTS: [
  {
    title: "HealthTrack Pro",
    image: flutterApp1,
    description: "Comprehensive health management platform with medication tracking, symptom logging, and telehealth features. Features offline-first architecture and end-to-end encryption.",
    technologies: ["Flutter", "Firebase", "Bloc", "Hive", "Dart"],
    features: [
      "Cross-platform (iOS/Android/Web)",
      "Custom health data visualization",
      "Secure cloud sync",
      "Push notification system"
    ],
    link: "https://github.com/rachoudane/healthtrack-pro"
  },
  {
    title: "E-Commerce Delivery Suite",
    image: flutterApp2,
    description: "Complete logistics solution with real-time tracking, driver dispatch, and payment processing. Supports multiple languages and complex business rules.",
    technologies: ["Flutter", "Riverpod", "Firestore", "Maps", "Stripe"],
    features: [
      "Real-time order tracking",
      "Optimized routing system",
      "In-app chat support",
      "Multi-vendor support"
    ],
    link: "https://github.com/rachoudane/ecommerce-delivery"
  },
  {
    title: "TaskMaster Pro",
    image: flutterApp3,
    description: "Productivity app featuring natural language processing for task creation and team collaboration tools. Includes voice command support and cross-device sync.",
    technologies: ["Flutter", "GetX", "SQLite", "NLP", "Dart"],
    features: [
      "Voice command integration",
      "Team workspaces",
      "Custom gesture controls",
      "Dark/light theme support"
    ],
    link: "https://github.com/rachoudane/taskmaster-pro"
  },
  {
    title: "Flutter UI Kit",
    image: flutterApp4,
    description: "Open-source collection of production-ready Flutter components with comprehensive documentation and examples. Used by developers worldwide.",
    technologies: ["Flutter", "Custom Paint", "Animations", "Dart"],
    features: [
      "30+ customizable widgets",
      "Performance benchmarks",
      "Theming system",
      "Accessibility support"
    ],
    link: "https://github.com/rachoudane/flutter-ui-kit"
  }
],

    CONTACT: {
      address: "59000 Lille, France",
      phoneNo: "+33 (0)6 29 26 79 25",
      email: "rachoucorp@gmail.com",
      github: "https://github.com/rachoudane",
      fiverr: "https://www.fiverr.com/s/KepLd88"
    }
  },

  fr: {
    HEROABOUT_SUBTITLE: "Développeur Flutter & Spécialiste UI",
    HEROABOUT_TEXT: `Je suis un développeur Flutter spécialisé dans :
• Développement d'applications multiplateformes avec Dart/Flutter
• Mise en œuvre de solutions de gestion d'état
• Intégration de backend Firebase
• Création de designs UI/UX réactifs
• Optimisation des performances d'applications

Compétences techniques :
✓ Framework Flutter (3+ ans d'expérience)
✓ Services Firebase
✓ Gestion d'état (Bloc, Provider)
✓ Pipelines CI/CD
✓ Tests automatisés

Ce que j'apporte :
- Code propre et maintenable
- Interfaces pixel-perfect
- Animations fluides
- Architectures évolutives

En dehors du code, j'aime la stratégie aux échecs, composer au piano et m'inspirer de l'esthétique japonaise.`,

PROJECTS: [
  {
    title: "HealthTrack Pro",
    image: flutterApp1,
    description: "Plateforme complète de gestion santé avec suivi de médicaments, journal des symptômes et fonctionnalités de télémédecine. Architecture offline-first et chiffrement end-to-end.",
    technologies: ["Flutter", "Firebase", "Bloc", "Hive", "Dart"],
    features: [
      "Multiplateforme (iOS/Android/Web)",
      "Visualisation de données santé",
      "Synchronisation cloud sécurisée",
      "Système de notifications push"
    ],
    link: "https://github.com/rachoudane/healthtrack-pro"
  },
  {
    title: "Suite Livraison E-Commerce",
    image: flutterApp2,
    description: "Solution logistique complète avec suivi en temps réel, dispatch de livreurs et traitement de paiements. Support multilingue et règles métier complexes.",
    technologies: ["Flutter", "Riverpod", "Firestore", "Maps", "Stripe"],
    features: [
      "Suivi de commande en temps réel",
      "Système de routage optimisé",
      "Chat intégré",
      "Support multi-vendeurs"
    ],
    link: "https://github.com/rachoudane/ecommerce-delivery"
  },
  {
    title: "TaskMaster Pro",
    image: flutterApp3,
    description: "Application de productivité avec traitement de langage naturel pour la création de tâches et outils de collaboration. Support des commandes vocales et synchronisation multi-appareils.",
    technologies: ["Flutter", "GetX", "SQLite", "NLP", "Dart"],
    features: [
      "Commandes vocales",
      "Espaces d'équipe",
      "Gestes personnalisés",
      "Thèmes clair/sombre"
    ],
    link: "https://github.com/rachoudane/taskmaster-pro"
  },
  {
    title: "Kit UI Flutter",
    image: flutterApp4,
    description: "Collection open-source de composants Flutter prêts pour la production avec documentation complète. Utilisé par des développeurs du monde entier.",
    technologies: ["Flutter", "Custom Paint", "Animations", "Dart"],
    features: [
      "30+ widgets personnalisables",
      "Benchmarks de performance",
      "Système de thèmes",
      "Support accessibilité"
    ],
    link: "https://github.com/rachoudane/flutter-ui-kit"
  }
],

    CONTACT: {
      address: "59000 Lille, France",
      phoneNo: "+33 (0)6 29 26 79 25",
      email: "rachoucorp@gmail.com",
      github: "https://github.com/rachoudane",
      fiverr: "https://www.fiverr.com/s/KepLd88"
    }
  }
};

// Default exports for backward compatibility
export const {
  HEROABOUT_TEXT,
  EXPERIENCES,
  PROJECTS,
  CONTACT
} = TEXTS.en;