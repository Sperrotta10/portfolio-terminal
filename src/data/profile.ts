export type ExperienceItem = {
  range: string;
  role: string;
  company: string;
  bullets: string[];
};

export type ProjectItem = {
  name: string;
  subtitle: string;
  description: string;
  tech: string[];
  images?: string[];
  hrefLive?: string;
  hrefSource?: string;
};

export type ToolsList = {
  backend: { label: string; iconSrc: string }[];
  frontend: { label: string; iconSrc: string }[];
  databases: { label: string; iconSrc: string }[];
  infrastructure: { label: string; iconSrc: string }[];
};

export type Profile = {
  titleAscii: string[];
  bioTitle: string;
  bio: string[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  tools: ToolsList;
  links: { label: string; href: string; iconSrc: string }[];
  cvUrl?: string;
};

export const profile: Profile = {
  titleAscii: [
    "███████╗ █████╗ ███╗   ██╗████████╗██╗ █████╗  ██████╗  ██████╗ ",
    "██╔════╝██╔══██╗████╗  ██║╚══██╔══╝██║██╔══██╗██╔════╝ ██╔═══██╗",
    "███████╗███████║██╔██╗ ██║   ██║   ██║███████║██║  ███╗██║   ██║",
    "╚════██║██╔══██║██║╚██╗██║   ██║   ██║██╔══██║██║   ██║██║   ██║",
    "███████║██║  ██║██║ ╚████║   ██║   ██║██║  ██║╚██████╔╝╚██████╔╝",
    "╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚═╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ",
    "██████╗ ███████╗██████╗ ██████╗  ██████╗ ████████╗████████╗ █████╗ ",
    "██╔══██╗██╔════╝██╔══██╗██╔══██╗██╔═══██╗╚══██╔══╝╚══██╔══╝██╔══██╗",
    "██████╔╝█████╗  ██████╔╝██████╔╝██║   ██║   ██║      ██║   ███████║",
    "██╔═══╝ ██╔══╝  ██╔══██╗██╔══██╗██║   ██║   ██║      ██║   ██╔══██║",
    "██║     ███████╗██║  ██║██║  ██║╚██████╔╝   ██║      ██║   ██║  ██║",
    "╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝    ╚═╝      ╚═╝   ╚═╝  ╚═╝",
  ],
  bioTitle: "bio.md",
  bio: [
    "Hola👋, soy <span class='highlight'>Santiago Perrotta</span>, <span class='highlight'>Ingeniero en Computación</span> y desarrollador <span class='highlight'>Full Stack</span>.",
    "Llevo cuatro años en el mundo de la programación y me especializo principalmente",
    "en el desarrollo del <span class='highlight'>backend</span>. Me atrae la lógica que sostiene las aplicaciones y",
    "disfruto construyendo <span class='highlight'>arquitecturas sólidas</span>.",
    "",
    "Tengo una mentalidad analítica y visual que me permite observar los problemas de mi",
    "entorno para transformarlos en <span class='highlight'>soluciones tecnológicas reales</span>. Para mí, programar es",
    "una herramienta de resolución. Siempre busco aprender nuevas tecnologías con el objetivo",
    "de encontrar formas más eficientes de enfrentar cada reto técnico que se me presente.",
  ],
  experience: [
    {
      range: "sept. 2024 – mar. 2025",
      role: "Desarrollador Full Stack (Pasantia)",
      company: "Orquesta Sinfonica de Carabobo",
      bullets: [
        "<span class='highlight'>Desarrollé</span> e <span class='highlight'>implementé</span> un sistema interno para administrar pagos y organizar la información\n estudiantil de la orquesta.",
        "<span class='highlight'>Estructuré</span> módulos clave para la gestión de <span class='highlight'>estudiantes</span> (información personal, materias y\n balance financiero), <span class='highlight'>cátedras</span> (profesores, materias y costos) y <span class='highlight'>pagos</span> (transacciones con\n emisores, métodos y referencias), con persistencia en <span class='highlight'>MySQL</span>.",
        "<span class='highlight'>Automaticé</span> la generación de reportes en PDF para facilitar el control y la transparencia\n financiera (<span class='highlight'>HTML/CSS/JS + Node.js/Express</span>).",
      ],
    },
  ],
  projects: [
    {
      name: "Ecommerce MSJ Market",
      subtitle: "",
      description:
        "Aplicación web diseñada para optimizar la experiencia de compras en mini-mercados mediante la creación de listas personalizadas, gestión de disponibilidad de productos y fidelización de usuarios a través de un sistema de suscripción.",
      tech: ["TypeScript", "Astro", "React"],
      images: [
        "/projects/mini-mercado/1.webp",
        "/projects/mini-mercado/2.webp",
        "/projects/mini-mercado/3.webp",
        "/projects/mini-mercado/4.webp",
      ],
      hrefLive: "https://mini-mercado-nine.vercel.app/",
      hrefSource: "https://github.com/Sperrotta10/Mini-Mercado",
    },
    {
      name: "Distributed File System",
      subtitle: "DFS con consistencia fuerte",
      description:
        "Sistema distribuido con réplicas, tolerancia a fallos y APIs gRPC para operaciones de archivos.",
      tech: ["Rust", "gRPC", "Docker"],
      images: [
        "/projects/distributed-file-system.svg",
        "/projects/ai-powered-code-editor.svg",
        "/projects/mini-mercado/1.webp"
      ],
      hrefLive: "#",
      hrefSource: "#",
    },
    {
      name: "Cloud Dashboard",
      subtitle: "Monitoreo en tiempo real",
      description:
        "Dashboard interactivo para visualizar métricas de infraestructura cloud en tiempo real.",
      tech: ["Next.js", "Tailwind", "D3.js"],
      images: [
        "/projects/ai-powered-code-editor.svg",
        "/projects/distributed-file-system.svg",
        "/projects/mini-mercado/1.webp"
      ],
      hrefLive: "#",
      hrefSource: "#",
    },
    {
      name: "Mobile Wallet",
      subtitle: "Gestión de activos digitales",
      description:
        "Billetera digital segura para el manejo de transacciones y portafolio de criptoactivos.",
      tech: ["React Native", "Firebase", "Web3"],
      images: [
        "/projects/distributed-file-system.svg",
        "/projects/mini-mercado/1.webp",
        "/projects/ai-powered-code-editor.svg"
      ],
      hrefLive: "#",
      hrefSource: "#",
    },
  ],
  tools: {
    backend: [
      { label: "Python", iconSrc: "/code/backend/python.svg" },
      { label: "FastAPI", iconSrc: "/code/backend/fastapi.svg" },
      { label: "Node.js", iconSrc: "/code/backend/nodejs.svg" },
      { label: "Express", iconSrc: "/code/backend/Express.js_dark.svg" },
      { label: "Java", iconSrc: "/code/backend/java.svg" },
    ],
    frontend: [
      { label: "React", iconSrc: "/code/frontend/React_dark.svg" },
      { label: "Tailwind CSS", iconSrc: "/code/frontend/tailwindcss.svg" },
      { label: "Vue.js", iconSrc: "/code/frontend/vue.svg" },
      { label: "TypeScript", iconSrc: "/code/frontend/typescript.svg" },
      { label: "JavaScript", iconSrc: "/code/frontend/javascript.svg" },
    ],
    databases: [
      { label: "PostgreSQL", iconSrc: "/code/databases/postgresql.svg" },
      { label: "MySQL", iconSrc: "/code/databases/MySQL_dark.svg" },
      { label: "Supabase", iconSrc: "/code/databases/supabase.svg" },
      { label: "Prisma", iconSrc: "/code/databases/Prisma_dark.svg" },
      { label: "Sequelize", iconSrc: "/code/databases/sequelize.svg" },
    ],
    infrastructure: [
      { label: "Docker", iconSrc: "/code/infrastructure/docker.svg" },
      { label: "GitHub Actions", iconSrc: "/code/infrastructure/GitHub-Actions.svg" },
      { label: "Postman", iconSrc: "/code/infrastructure/postman.svg" },
      { label: "GitLab", iconSrc: "/code/infrastructure/gitlab.svg" },
      { label: "Google Cloud", iconSrc: "/code/infrastructure/google-cloud.svg" },
    ],
  },
  links: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/santiago-perrotta/",
      iconSrc: "/social/linkedin.svg",
    },
    {
      label: "GitHub",
      href: "https://github.com/Sperrotta10",
      iconSrc: "/social/GitHub_dark.svg"
    },
    {
      label: "Email",
      href: "mailto:sperrottaa10@gmail.com",
      iconSrc: "/social/gmail.svg"
    },
  ],
  cvUrl: "/sperrotta_cv.pdf",
};
