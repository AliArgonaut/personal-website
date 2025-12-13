import React from 'react';

const projects = [
    {
        screenshot: 'autodoc-thumbnail.png',
        name: "Autodoc CLI",
        subtitle: "Robust backend pipelines for auto-documenting codebases through advanced parsing, metadata extraction, and multi-agent orchestration.",
        link: "www.github.com/AliArgonaut/autodoc-cli",
        tech: ["Golang", "Python", "AI Agents", "API"]
    },

    {
        screenshot: 'framekit-thumbnail.png',
        name: "Framekit",
        subtitle: "Utilized Amazon S3 buckets, TypeScript, React, and Nano Banana to generate professional promotional content from unprofessional product photos.",
        link: "www.github.com/AliArgonaut/autodoc-cli",
        tech: ["Image Models", "Typescript", "PostgreSQL", "S3"]
    },

    {
        screenshot: 'httpquest-thumbnail.png',
        name: "HTTPQuest",
        subtitle: `Low-level From Scratch TCP/HTTP server combining real time state management, AI narrative generation, JSON entity modeling, and turn-based adventure orchestration.`,
        link: "www.github.com/AliArgonaut/autodoc-cli",
        tech: ["Java", "TCP/HTTP", "LLM", "Websockets"]
    },

    {
        "screenshot": "jmarch.png",
        "name": "E-Commerce Microservices Platform",
        "subtitle": "Microservices architecture with Spring Cloud Gateway, Eureka service discovery, Keycloak OAuth2 authentication, aggregated Swagger documentation, and Resilience4j fault tolerance patterns for distributed systems.",
        "link": "www.github.com/AliArgonaut/java-microservices-demo",
        "tech": [
            "Java",
            "Spring Boot",
            "Spring Cloud Gateway",
            "test-containers",
            "Eureka",
            "Keycloak",
            "OAuth2/JWT",
            "Resilience4j",
            "Docker",
            "OpenAPI/Swagger"
        ]
    },

    {
        screenshot: 'infera-thumbnail.png',
        name: "Infera",
        subtitle: `Multi-tenant B2B RAGaaS using Java. Vector search pipelines (PGVector),
            including chunking and embedding logic for efficient retrieval, and integrated OAuth2 authentication to secure
            client access and protect sensitive enterprise data.`,
        link: "www.github.com/AliArgonaut/autodoc-cli",
        tech: ["Spring Boot 3", "Java", "PostgreSQL", "RAG", "OAuth2"]
    },

    {
        screenshot: 'shutter-thumbnail.png',
        name: "Shutter Studio",
        subtitle: `Utilized similar pipelines found in framekit to generate professional headshots from selfies.`,
        link: "www.github.com/AliArgonaut/autodoc-cli",
        tech: ["NestJS", "TypeScript", "PostgreSQL", "S3"]
    },

];

export default function ProjectsLoader() {
  const handleProjectClick = (link) => {
    window.open(link.startsWith('http') ? link : `https://${link}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-black p-8">
      <div className="max-w-7xl mx-auto">
                <div className="flex flex-row flex-wrap gap-6 justify-start">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border-2 border-black bg-white hover:shadow-xl transition-all duration-300 cursor-pointer group w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(33.333%-16px)]"
              onClick={() => handleProjectClick(project.link)}
            >
              {/* Screenshot */}
              <div className="aspect-video bg-gray-100 overflow-hidden border-b-2 border-black">
                <img
                  src={project.screenshot}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h2 className="text-2xl font-bold mb-3 group-hover:underline">
                  {project.name}
                </h2>

                {/* Subtitle */}
                <p className="text-sm text-gray-700 text-left leading-relaxed mb-4">
                  {project.subtitle}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-black text-white text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link indicator */}
              <div className="px-6 pb-4 flex items-center text-sm font-medium group-hover:underline">
                <span>View Project</span>
                <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
