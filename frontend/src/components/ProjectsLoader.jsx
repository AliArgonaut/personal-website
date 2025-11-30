import React from 'react';

const projects = [
  {
    screenshot: '/agents.png',
    name: "Autodoc CLI",
    subtitle: "Robust backend pipelines for auto-documenting codebases through advanced parsing, metadata extraction, and multi-agent orchestration.",
    link: "www.google.com",
    tech: ["Golang", "Python", "AI Agents"]
  },
  {
    screenshot: '/agents.png',
    name: "Infera Rag",
    subtitle: "B2B RAG platform delivering fast, reliable retrieval with optimized embeddings, smart indexing pipelines, and secure tenant-isolated backend.",
    link: "www.google.com",
    tech: ["React", "Java", "Eureka", "Stripe", "oAuth2", "Junit"]
  },
  {
    screenshot: '/agents.png',
    name: "Shutter Studio",
    subtitle: "High-performance backend handling photo capture, editing pipelines, and storage orchestration for Headshot Studio clients.",
    link: "www.google.com",
    tech: ["TypeScript", "React", "Image Models", "RESTful"]
  },
  {
    screenshot: '/agents.png',
    name: "FrameKit",
    subtitle: "Robust backend pipelines for auto-documenting codebases through advanced parsing, metadata extraction, and multi-agent orchestration.",
    link: "www.google.com",
    tech: ["TypeScript", "React", "Image Models", "RESTful"]
  },
  {
    screenshot: '/agents.png',
    name: "Unfog",
    subtitle: "Backend powerhouse for Unfog: AI image upscaling, secure uploads, tokenized access, Stripe billing, OAuth, and microservice orchestration.",
    link: "www.google.com",
    tech: ["Gemini", "TypeScript", "React", "Image Models"]
  },
  {
    screenshot: '/agents.png',
    name: "Sleepy Hollow Inventory System",
    subtitle: "High-coverage backend for inventory management: secure mobile uploads, Keycloak auth, Eureka discovery, load-balanced services, and Resilience4j fault-tolerance.",
    link: "www.google.com",
    tech: ["Angular", "Java", "Eureka", "KeyCloak", "Spring Security", "Junit"]
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
