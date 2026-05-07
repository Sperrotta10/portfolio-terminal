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
  imageSrc?: string;
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
    "Hola👋, soy Santiago Perrotta, Ingeniero en Computación y desarrollador Full Stack.",
    "Llevo cuatro años en el mundo de la programación y me especializo principalmente",
    "en el desarrollo del backend. Me atrae la lógica que sostiene las aplicaciones y",
    "disfruto construyendo arquitecturas sólidas.",
    "",
    "Tengo una mentalidad analítica y visual que me permite observar los problemas de mi",
    "entorno para transformarlos en soluciones tecnológicas reales. Para mí, programar es",
    "una herramienta de resolución. Siempre busco aprender nuevas tecnologías con el objetivo",
    "de encontrar formas más eficientes de enfrentar cada reto técnico que se me presente.",
  ],
  experience: [
    {
      range: "2024–2025",
      role: "Desarrollador Full Stack",
      company: "Orquesta Sinfonica de Carabobo",
      bullets: [
        "Desarrollé e implementé un sistema interno para administrar pagos y organizar la información\n estudiantil de la orquesta.",
        "Estructuré módulos clave para la gestión de estudiantes (información personal, materias y\n balance financiero), cátedras (profesores, materias y costos) y pagos (transacciones con\n emisores, métodos y referencias), con persistencia en MySQL.",
        "Automaticé la generación de reportes en PDF para facilitar el control y la transparencia\n financiera (HTML/CSS/JS + Node.js/Express).",
      ],
    },
  ],
  projects: [
    {
      name: "AI‑Powered Code Editor",
      subtitle: "Editor con features asistidas por IA",
      description:
        "Explora, refactoriza y documenta código con un flujo tipo terminal y comandos rápidos.",
      tech: ["TypeScript", "Astro", "React"],
      imageSrc: "/projects/ai-powered-code-editor.svg",
      hrefLive: "#",
      hrefSource: "#",
    },
    {
      name: "Distributed File System",
      subtitle: "DFS con consistencia fuerte",
      description:
        "Sistema distribuido con réplicas, tolerancia a fallos y APIs gRPC para operaciones de archivos.",
      tech: ["Rust", "gRPC", "Docker"],
      imageSrc: "/projects/distributed-file-system.svg",
      hrefLive: "#",
      hrefSource: "#",
    },
    {
      name: "AI‑Powered Code Editor",
      subtitle: "Editor con features asistidas por IA",
      description:
        "Explora, refactoriza y documenta código con un flujo tipo terminal y comandos rápidos.",
      tech: ["TypeScript", "Astro", "React"],
      imageSrc: "/projects/ai-powered-code-editor.svg",
      hrefLive: "#",
      hrefSource: "#",
    },
    {
      name: "Distributed File System",
      subtitle: "DFS con consistencia fuerte",
      description:
        "Sistema distribuido con réplicas, tolerancia a fallos y APIs gRPC para operaciones de archivos.",
      tech: ["Rust", "gRPC", "Docker"],
      imageSrc: "/projects/distributed-file-system.svg",
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
};

