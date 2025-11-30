const Resume = {
  name: "Lloyd Aleister Bonds",
  title: "Full Stack Developer w/ Backend Concentration",
  summary:
    "Sophomore Software Engineering student focused on backend development, microservices architecture, and strategic implementation of AI systems.",

  education: [
    {
      school:
        "Saint Leo University College of Computing, AI, Robotics, and Data Science",
      major: "B.S. Software Engineering",
      gpa: "3.8",
      grad: "2027"
    }
  ],

  work: [
    {
      role: "Backend Software Engineer Intern",
      employer: "Sleepy Hollow Design",
      period: "Aug 2025 - Present",
      details: [
        "Built distributed microservices using Java Spring Boot to manage a U.S. e-commerce platform’s physical inventory with high reliability.",
        "Implemented authentication/authorization with Keycloak and service discoverability with Eureka, ensuring secure and discoverable microservice communication.",
        "Implemented load balancing using Spring Cloud Gateway to distribute requests reliably and prevent downtime.",
        "Developed an image-upload microservice for mobile devices, significantly speeding up internal product-listing workflows.",
        "Achieved 100% test coverage across microservices to ensure maintainability and system reliability.",
        "Implemented circuit breaker patterns using Resilience4j to protect the system from cascading failures under high load."
      ]
    }
  ],

  projects: [
    // --------------------------------------------------------
    // AUTO-DOC
    // --------------------------------------------------------
    {
      title: "Auto-Doc CLI",
      description: "CLI tool that uses AI agents to auto-generate clean, structured documentation.",
      tech: ["Golang", "Python", "Google Agents ADK", "Gemini"],
      impact: [
        "Engineered a backend CLI pipeline in Golang that automates documentation generation, reducing manual work by over 70%.",
        "Built a RESTful API layer enabling remote documentation tasks and integration into existing CI pipelines.",
        "Designed modular agent workflows in Python to process large codebases consistently and reliably."
      ],
      link: "https://github.com/AliArgonaut/Auto-Doc_Release"
    },

    // --------------------------------------------------------
    // INFERA RAG
    // --------------------------------------------------------
    {
      title: "Infera RAG",
      description: "B2B RAG-as-a-Service platform with secure API access.",
      tech: ["Java", "React", "Postgres", "PGVector", "Gemini"],
      impact: [
        "Designed and built a multi-tenant B2B RAG platform using Java, allowing clients to integrate AI retrieval workflows via APIs.",
        "Implemented vector search pipelines with PGVector, including chunking and embedding logic for efficient retrieval.",
        "Integrated OAuth2 authentication to secure client access and protect sensitive enterprise data."
      ],
      link: "https://github.com/AliArgonaut/RAGaaS_V2"
    },

    // --------------------------------------------------------
    // UNFOG — FIXED
    // --------------------------------------------------------
    {
      title: "Unfog",
      description: "AI-powered image enhancer that upscales and refines generated images.",
      tech: ["TypeScript", "React", "SQLite", "Nano Banana"],
      impact: [
        "Built a backend pipeline in TypeScript to process and upscale AI-generated images, improving clarity and realism of skin, hair, and textures.",
        "Implemented efficient file-handling and queueing logic to support batch image processing without blocking UI operations.",
        "Optimized local storage and caching with SQLite to reduce recomputation and speed up repeated transformations."
      ],
      link: "https://github.com/AliArgonaut/FrameKit"
    }
  ]
};

export default Resume
