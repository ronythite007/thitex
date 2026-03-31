const techs = [
  "React", "TypeScript", "Python", "TensorFlow", "AWS", "Docker",
  "Kubernetes", "PostgreSQL", "Node.js", "Next.js", "PyTorch", "Go",
  "Redis", "GraphQL", "Figma", "Vercel",
];

const TechMarquee = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="marquee-mask">
        <div className="flex animate-marquee w-max">
          {[...techs, ...techs].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="font-mono-tech text-foreground/20 whitespace-nowrap mx-8"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
