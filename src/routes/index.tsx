import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  Github,
  Linkedin,
  Download,
  Code2,
  Sparkles,
  Palette,
  Laptop,
  GraduationCap,
  Award,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Katleho Lebese — Tech Enthusiast & Aspiring Developer" },
      {
        name: "description",
        content:
          "Portfolio of Katleho Lebese, a tech enthusiast and aspiring developer specialising in AI tools, web development and modern UI/UX design.",
      },
      { property: "og:title", content: "Katleho Lebese — Aspiring Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Projects, skills, certificates and CV of Katleho Lebese — aspiring developer with AI Professional certification and N3 Engineering Studies.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const EMAIL = "Kaylebesse@gmail.com";
const GITHUB = "https://github.com/kaylebesse";
const LINKEDIN = "https://www.linkedin.com/feed/";
const CV = "/katleho-lebese-cv.pdf";

const navLinks = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Contact", "#contact"],
] as const;

const skillGroups = [
  {
    icon: Code2,
    title: "Development",
    skills: ["HTML5", "CSS3", "JavaScript", "React fundamentals", "Responsive design", "Git & GitHub"],
  },
  {
    icon: Sparkles,
    title: "AI & Emerging Tech",
    skills: [
      "Prompt engineering",
      "Generative AI tools",
      "AI-assisted coding",
      "AI ethics & responsible use",
      "Data literacy",
      "Automation basics",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX & AI Design",
    skills: [
      "Figma",
      "Wireframing & prototyping",
      "Design systems",
      "Accessibility (WCAG)",
      "User research",
      "AI-assisted design tools",
    ],
  },
  {
    icon: Laptop,
    title: "Digital & Productivity",
    skills: ["Microsoft 365", "Google Workspace", "Collaboration tools", "Basic data analysis"],
  },
];

const softSkills = [
  "Communication",
  "Teamwork & collaboration",
  "Problem solving",
  "Adaptability",
  "Time management",
  "Attention to detail",
  "Customer service",
  "Continuous learning",
];

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio presenting my profile, skills, projects and contact details, built with a modern accessible interface and a downloadable CV.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Figma"],
  },
  {
    title: "AI Study Assistant",
    description:
      "A conversational study helper that summarises notes, generates practice questions and explains difficult concepts, developed through prompt-engineering experiments and an AI API integration.",
    tech: ["JavaScript", "AI / LLM APIs", "Prompt engineering", "REST"],
  },
  {
    title: "Retail Stock Tracker Dashboard",
    description:
      "A stock and sales tracking dashboard inspired by my retail shadow-working experience, showing stock levels, low-stock alerts and daily sales summaries in a clean visual layout.",
    tech: ["HTML", "CSS", "JavaScript", "Chart.js", "Google Sheets"],
  },
];

const experience = [
  {
    role: "Retail Shadow Worker",
    org: "Work Experience Placement",
    points: [
      "Shadowed floor and till operations, supporting customer service and daily store routines.",
      "Assisted with stock replenishment, merchandising and point-of-sale support.",
      "Built professional workplace discipline, punctuality and clear communication.",
    ],
  },
  {
    role: "Work Readiness Programme Participant",
    org: "Digital, Professional & AI Skills Training",
    points: [
      "Digital skills: productivity suites, online collaboration and digital safety.",
      "Professional skills: workplace communication, CV writing and interview preparation.",
      "AI tools and emerging technologies applied to real workplace scenarios.",
    ],
  },
];

const education = [
  {
    icon: GraduationCap,
    title: "National Senior Certificate (Matric)",
    detail: "Completed secondary education with a strong interest in technology and problem solving.",
  },
  {
    icon: GraduationCap,
    title: "N3 Certificate — Engineering Studies",
    detail: "Technical foundation in engineering principles, mathematics and analytical thinking.",
  },
  {
    icon: Award,
    title: "AI Professional Certificate",
    detail: "Artificial intelligence fundamentals, practical AI tooling and responsible, ethical AI use.",
  },
  {
    icon: Award,
    title: "Work Readiness Programme",
    detail: "Digital and professional skills, plus AI tools and emerging technologies.",
  },
];

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-bold text-gradient">
            Katleho Lebese
          </a>
          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild size="sm" className="bg-gradient-primary shadow-soft">
            <a href={CV} download>
              <Download className="size-4" /> CV
            </a>
          </Button>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="relative overflow-hidden">
          <img
            src={heroBg}
            alt=""
            aria-hidden="true"
            width={1600}
            height={1000}
            className="absolute inset-0 size-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
          <div className="relative mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
            <Badge className="mb-6 border-0 bg-secondary text-secondary-foreground">
              Tech enthusiast &amp; aspiring developer
            </Badge>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl">
              Hi, I&apos;m <span className="text-gradient">Katleho Lebese</span> — building a career in
              tech, one project at a time.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              I am a motivated young woman in tech with a foundation in engineering studies and a growing
              specialisation in artificial intelligence, web development and modern UI/UX design. Certified
              as an AI Professional and currently pursuing further studies in technology, I combine
              analytical problem solving with a user-centred mindset to turn ideas into clean, accessible
              digital products.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-primary shadow-elegant">
                <a href="#projects">
                  View my work <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={CV} download>
                  <Download className="size-4" /> Download CV
                </a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <a className="inline-flex items-center gap-2 hover:text-primary" href={`mailto:${EMAIL}`}>
                <Mail className="size-4" /> {EMAIL}
              </a>
              <a
                className="inline-flex items-center gap-2 hover:text-primary"
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
              >
                <Github className="size-4" /> GitHub
              </a>
              <a
                className="inline-flex items-center gap-2 hover:text-primary"
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="size-4" /> LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <Section id="about" eyebrow="About me" title="A curious mind with a passion for technology">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                My journey into technology started with curiosity — wanting to understand how the apps and
                systems I use every day are actually built. That curiosity grew into a genuine passion for
                development, artificial intelligence and design.
              </p>
              <p>
                I hold a Matric certificate and an N3 Certificate in Engineering Studies, which gave me a
                strong analytical and technical base. I then earned an AI Professional certificate, where I
                learned how to work with AI tools responsibly and effectively, and completed a work
                readiness programme covering digital skills, professional skills and emerging technologies.
              </p>
              <p>
                Today I focus on front-end development and modern UI/UX practice — designing interfaces that
                are beautiful, accessible and genuinely useful, while using AI as a partner to work smarter.
                I am still pursuing my studies in tech, and I am open to internships, learnerships and
                junior developer opportunities where I can keep growing.
              </p>
            </div>
            <div className="card-surface p-6">
              <h3 className="text-lg font-semibold text-foreground">At a glance</h3>
              <dl className="mt-4 space-y-4 text-sm">
                {[
                  ["Focus", "Front-end development, AI tools, UI/UX"],
                  ["Certification", "AI Professional"],
                  ["Education", "Matric · N3 Engineering Studies"],
                  ["Status", "Pursuing further studies in tech"],
                  ["Open to", "Internships & junior roles"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-semibold text-primary">{k}</dt>
                    <dd className="text-muted-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Section>

        {/* Skills */}
        <div className="bg-gradient-soft">
          <Section id="skills" eyebrow="Skills" title="Technical & soft skills">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {skillGroups.map(({ icon: Icon, title, skills }) => (
                <div key={title} className="card-surface p-6">
                  <div className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {skills.map((s) => (
                      <li key={s}>• {s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-10 card-surface p-6">
              <h3 className="text-lg font-semibold text-foreground">Soft skills</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {softSkills.map((s) => (
                  <Badge key={s} variant="secondary" className="rounded-full px-3 py-1 text-sm font-medium">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          </Section>
        </div>

        {/* Projects */}
        <Section id="projects" eyebrow="Portfolio" title="Selected projects">
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <article key={p.title} className="card-surface flex flex-col p-6">
                <div className="h-1.5 w-14 rounded-full bg-gradient-primary" />
                <h3 className="mt-5 text-xl font-semibold text-foreground">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="rounded-full">
                      {t}
                    </Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <div className="bg-gradient-soft">
          <Section id="experience" eyebrow="Experience" title="Work experience & training">
            <div className="grid gap-6 md:grid-cols-2">
              {experience.map((e) => (
                <div key={e.role} className="card-surface p-6">
                  <div className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft">
                    <Briefcase className="size-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">{e.role}</h3>
                  <p className="text-sm font-medium text-accent">{e.org}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {e.points.map((pt) => (
                      <li key={pt}>• {pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* Education */}
        <Section id="education" eyebrow="Education" title="Qualifications & certificates">
          <div className="grid gap-6 sm:grid-cols-2">
            {education.map(({ icon: Icon, title, detail }) => (
              <div key={title} className="card-surface flex gap-4 p-6">
                <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" eyebrow="Contact" title="Let's build something together">
          <div className="card-surface p-8 md:p-10">
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              I am always open to internships, learnerships, junior developer roles and collaboration on
              interesting projects. The quickest way to reach me is by email — I usually reply within a day.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <a
                href={`mailto:${EMAIL}`}
                className="card-surface flex items-center gap-3 p-5 text-sm font-medium text-foreground"
              >
                <Mail className="size-5 text-primary" /> {EMAIL}
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="card-surface flex items-center gap-3 p-5 text-sm font-medium text-foreground"
              >
                <Github className="size-5 text-primary" /> github.com/kaylebesse
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="card-surface flex items-center gap-3 p-5 text-sm font-medium text-foreground"
              >
                <Linkedin className="size-5 text-primary" /> LinkedIn profile
              </a>
            </div>
            <Button asChild size="lg" className="mt-8 bg-gradient-primary shadow-elegant">
              <a href={CV} download>
                <Download className="size-4" /> Download my CV
              </a>
            </Button>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border/60 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Katleho Lebese. All rights reserved.</p>
          <p>Tech enthusiast · Aspiring developer · Lifelong learner</p>
        </div>
      </footer>
    </div>
  );
}
