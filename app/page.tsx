"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  {
    title: "AI / Machine Learning",
    items: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn"],
  },
  {
    title: "Gen AI & LLM",
    items: [
      "LangChain",
      "LangGraph",
      "Autogen",
      "Retrieval Augmented Generation (RAG)",
      "Vector Database (FAISS)",
    ],
  },
  {
    title: "Programming",
    items: ["Python", "SQL"],
  },
  {
    title: "Tools",
    items: ["Git", "Jupyter Notebook"],
  },
  {
    title: "AI Specializations",
    items: [
      "Natural Language Processing",
      "Time Series Forecasting",
      "Computer Vision",
      "Imbalanced Learning",
    ],
  },
];

const learning = [
  "Large Language Model fine-tuning",
  "AI Agents and multi-agent systems",
  "Vector databases",
  "Advanced time-series forecasting",
];

const projects = [
  {
    title: "Stroke Prediction Using Machine Learning",
    description:
      "Developed multiple ML models including Logistic Regression, Random Forest, and XGBoost to predict stroke risk.",
    achievements: [
      "Applied SMOTE for imbalanced dataset",
      "Feature engineering and hyperparameter tuning",
      "Improved stroke recall from 0.02 to 0.71",
    ],
    tags: ["Machine Learning", "Healthcare", "Classification"],
    link: "https://github.com/suphyusinhtet/stroke_prediction",
  },
  {
    title: "Stock Price Prediction Using Transformers",
    description:
      "Implemented time-series forecasting models to predict stock prices for NVIDIA, Apple, Amazon, Google, and AMD.",
    achievements: [
      "Compared Transformer models against LSTM, GRU, and CNN-LSTM",
      "Used sliding window sequence of 30 days",
      "Evaluated using MAE and MSE",
    ],
    tags: ["Time Series", "Transformers", "Forecasting"],
    link: "https://github.com/suphyusinhtet/stockprice_prediction",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const staggerItem = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
  transition: { duration: 0.35, ease: "easeOut" },
};

export default function Home() {
  const [activeTag, setActiveTag] = useState("All");
  const projectTags = useMemo(() => {
    const tagSet = new Set<string>();
    projects.forEach((project) => project.tags.forEach((tag) => tagSet.add(tag)));
    return ["All", ...Array.from(tagSet)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeTag === "All") {
      return projects;
    }
    return projects.filter((project) => project.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <div className="text-luxe-ink">
      <header className="sticky top-0 z-50 border-b border-luxe-line/70 bg-luxe-bg/80 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center gap-6 px-6 py-4">
          <div className="text-lg font-semibold tracking-wide text-luxe-ink">
            Su Phyu Sin Htet
          </div>
          <div className="hidden flex-1 items-center justify-center gap-6 text-sm font-medium text-luxe-muted md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-luxe-ink"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-3">
            <a
              href="https://rxresu.me/suphyusinhtet/su-phyu-sin-htet-junior-machine-learning-engineer"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-luxe-accent/60 bg-luxe-primary/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-luxe-ink shadow-soft transition hover:-translate-y-0.5 hover:bg-luxe-primary"
            >
              CV
            </a>
          </div>
        </nav>
        <div className="mx-auto flex w-full max-w-6xl items-center gap-4 overflow-x-auto px-6 pb-3 text-xs font-medium text-luxe-muted md:hidden">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="shrink-0">
              {item.label}
            </a>
          ))}
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-14">
        <section id="home" className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div {...fadeUp}>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-luxe-accent">
              Junior AI Engineer
            </p>
            <h1 className="mt-4 font-[var(--font-cormorant)] text-5xl font-semibold leading-tight text-luxe-ink sm:text-6xl">
              Su Phyu Sin Htet
            </h1>
            <p className="mt-4 text-base text-luxe-muted">
              London, UK · AI / Machine Learning Engineer
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-luxe-muted">
              Master’s graduate in Artificial Intelligence Technology specializing in machine learning
              and intelligent systems. Proficient in building ML models, performing data analysis,
              and developing AI-powered applications.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-luxe-accent px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-luxe-accent/40 bg-luxe-surface px-6 py-3 text-sm font-semibold text-luxe-ink shadow-soft transition hover:-translate-y-0.5"
              >
                Contact Me
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm">
              <SocialLink
                href="https://github.com/suphyusinhtet"
                label="GitHub"
                icon={GitHubIcon}
              />
              <SocialLink
                href="https://www.linkedin.com/in/su-phyu-sin-htet/"
                label="LinkedIn"
                icon={LinkedInIcon}
              />
              <SocialLink
                href="mailto:suphyusinhtet@gmail.com"
                label="Email"
                icon={MailIcon}
              />
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="grid gap-6">
            <div className="rounded-2xl border border-luxe-line/80 bg-white/80 p-4 shadow-card">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/53178539.jpeg"
                  alt="Su Phyu Sin Htet portrait"
                  width={560}
                  height={560}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-luxe-muted">
                <span>AI Engineer</span>
                <span>London</span>
              </div>
            </div>
            <div className="rounded-2xl border border-luxe-line/80 bg-luxe-surface/95 p-8 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-luxe-accent">
                Focus Areas
              </p>
              <h2 className="mt-4 font-[var(--font-cormorant)] text-2xl font-semibold">
                Building intelligent systems with thoughtful engineering.
              </h2>
              <div className="mt-6 grid gap-4 text-sm text-luxe-muted">
                {["Machine learning pipelines and evaluation", "LLM-assisted applications with RAG", "Data-driven product prototyping"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-luxe-line/70 bg-white/70 px-4 py-3 shadow-soft"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
              <div className="mt-6 rounded-xl border border-luxe-accent/30 bg-luxe-primary/40 p-4 text-sm text-luxe-muted">
                Open to collaborations and research-driven product roles.
              </div>
            </div>
          </motion.div>
        </section>

        <motion.section id="skills" {...fadeUp}>
          <SectionHeading
            title="Skills"
            subtitle="Capabilities across ML engineering, generative AI, and applied research."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="rounded-2xl border border-luxe-line/70 bg-luxe-surface/95 p-6 shadow-card transition hover:-translate-y-1"
              >
                <h3 className="font-[var(--font-cormorant)] text-xl font-semibold text-luxe-ink">
                  {skill.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2 text-sm text-luxe-muted">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-luxe-line/70 bg-white/70 px-3 py-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="learning" {...fadeUp}>
          <SectionHeading
            title="Currently Learning"
            subtitle="Focused growth areas for 2024 and beyond."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {learning.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-luxe-line/70 bg-luxe-surface/95 p-5 text-sm text-luxe-muted shadow-card transition hover:-translate-y-1"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="experience" {...fadeUp}>
          <SectionHeading
            title="Experience"
            subtitle="Engineering foundations across enterprise systems and integrations."
          />
          <div className="mt-8 rounded-2xl border border-luxe-line/70 bg-luxe-surface/95 p-8 shadow-card">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-[var(--font-cormorant)] text-2xl font-semibold">
                  Junior Software Engineer
                </h3>
                <p className="text-sm text-luxe-muted">
                  Global Connect Asia Co., Ltd · Yangon, Myanmar
                </p>
              </div>
              <span className="rounded-full border border-luxe-line/70 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-luxe-muted">
                Jan 2020 - Jan 2021
              </span>
            </div>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-sm text-luxe-muted">
              <li>
                Developed and maintained custom features for Odoo ERP modules including Sales,
                Purchase, and Inventory.
              </li>
              <li>Implemented Python-based modifications in Odoo modules.</li>
              <li>Integrated third-party modules and RESTful APIs.</li>
              <li>Debugged and tested systems with QA team collaboration.</li>
            </ul>
          </div>
        </motion.section>

        <motion.section id="featured" {...fadeUp}>
          <SectionHeading
            title="Featured Project"
            subtitle="Agentic Medical Assistant (LLM + RAG)"
          />
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-luxe-line/70 bg-luxe-surface/95 p-8 shadow-card">
              <h3 className="font-[var(--font-cormorant)] text-2xl font-semibold">
                Agentic Medical Assistant
              </h3>
              <p className="mt-4 text-sm text-luxe-muted">
                AI system that analyzes medical PDF reports using Groq-powered LLaMA models.
              </p>
              <ul className="mt-6 list-disc space-y-3 pl-5 text-sm text-luxe-muted">
                <li>Retrieval Augmented Generation (RAG)</li>
                <li>FAISS vector search</li>
                <li>Real-time medical Q&A</li>
                <li>Tool-augmented reasoning</li>
                <li>Explainable AI outputs</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-luxe-line/70 bg-white/80 p-8 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-luxe-accent">
                Tech Stack
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-luxe-muted">
                {["FastAPI", "React", "LangChain", "FAISS", "LLM"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-luxe-line/70 bg-luxe-surface px-3 py-1 text-luxe-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-luxe-line/70 bg-luxe-surface/80 p-4 text-sm text-luxe-muted">
                Built for real-time medical Q&A with explainable responses and tool-augmented reasoning.
              </div>
              <a
                href="https://ai-health-assistant-frontend-gamma.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-luxe-accent px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-soft transition hover:-translate-y-0.5"
              >
                Live Demo
              </a>
            </div>
          </div>
        </motion.section>

        <motion.section id="projects" {...fadeUp}>
          <SectionHeading
            title="Projects"
            subtitle="Applied ML experiments with measurable outcomes."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {projectTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] shadow-soft transition hover:-translate-y-0.5 ${
                  activeTag === tag
                    ? "border-luxe-accent bg-luxe-accent text-white"
                    : "border-luxe-line/70 bg-white/70 text-luxe-muted"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          <motion.div
            layout
            variants={staggerContainer}
            initial={false}
            animate="animate"
            className="mt-6 grid gap-6 lg:grid-cols-2"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  variants={staggerItem}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="rounded-2xl border border-luxe-line/70 bg-luxe-surface/95 p-8 shadow-card transition hover:-translate-y-1"
                >
                  <h3 className="font-[var(--font-cormorant)] text-2xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm text-luxe-muted">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-luxe-accent">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-luxe-primary/60 px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ul className="mt-6 list-disc space-y-3 pl-5 text-sm text-luxe-muted">
                    {project.achievements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-luxe-accent"
                  >
                    View on GitHub
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.section>

        <motion.section id="research" {...fadeUp}>
          <SectionHeading
            title="Research"
            subtitle="Stroke Prediction Using Machine Learning (Master’s Research)"
          />
          <div className="mt-8 rounded-2xl border border-luxe-line/70 bg-luxe-surface/95 p-8 shadow-card">
            <ul className="list-disc space-y-3 pl-5 text-sm text-luxe-muted">
              <li>
                Investigated stroke prediction using healthcare electronic health records.
              </li>
              <li>Evaluated Logistic Regression, Random Forest, and XGBoost.</li>
              <li>Addressed severe class imbalance using SMOTE.</li>
              <li>Increased recall from 0.02 to 0.71.</li>
            </ul>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-luxe-accent">
              Tools
            </p>
            <p className="mt-2 text-sm text-luxe-muted">
              Python, Scikit-learn, XGBoost, Pandas
            </p>
          </div>
        </motion.section>

        <motion.section id="education" {...fadeUp}>
          <SectionHeading
            title="Education"
            subtitle="Academic grounding in AI and computer engineering."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-luxe-line/70 bg-luxe-surface/95 p-8 shadow-card">
              <h3 className="font-[var(--font-cormorant)] text-2xl font-semibold">
                MSc Artificial Intelligence Technology
              </h3>
              <p className="mt-2 text-sm text-luxe-muted">
                Northumbria University · London, UK
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-luxe-accent">
                May 2024 - Sep 2025
              </p>
            </div>
            <div className="rounded-2xl border border-luxe-line/70 bg-luxe-surface/95 p-8 shadow-card">
              <h3 className="font-[var(--font-cormorant)] text-2xl font-semibold">
                Bachelor of Engineering
              </h3>
              <p className="mt-2 text-sm text-luxe-muted">
                Computer Engineering and Information Technology · Yangon Technological University
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-luxe-accent">
                Dec 2013 - Oct 2019
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section id="contact" {...fadeUp}>
          <SectionHeading
            title="Contact"
            subtitle="Let’s build thoughtful AI products together."
          />
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <form className="rounded-2xl border border-luxe-line/70 bg-luxe-surface/95 p-8 shadow-card">
              <div className="grid gap-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-luxe-accent">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-luxe-line/70 bg-white/80 px-4 py-3 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-luxe-accent">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-luxe-line/70 bg-white/80 px-4 py-3 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-luxe-accent">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project"
                    className="mt-2 w-full rounded-xl border border-luxe-line/70 bg-white/80 px-4 py-3 text-sm"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 rounded-full bg-luxe-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-soft transition hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
            <div className="rounded-2xl border border-luxe-line/70 bg-white/80 p-8 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-luxe-accent">
                Direct
              </p>
              <div className="mt-6 grid gap-4 text-sm text-luxe-muted">
                {[
                  {
                    label: "Email",
                    value: "suphyusinhtet@gmail.com",
                    href: "mailto:suphyusinhtet@gmail.com",
                  },
                  {
                    label: "LinkedIn",
                    value: "su-phyu-sin-htet",
                    href: "https://www.linkedin.com/in/su-phyu-sin-htet/",
                  },
                  {
                    label: "GitHub",
                    value: "suphyusinhtet",
                    href: "https://github.com/suphyusinhtet",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-luxe-line/70 bg-luxe-surface/90 px-4 py-3"
                  >
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-luxe-accent">
                      {item.label}
                    </p>
                    <a
                      href={item.href}
                      className="mt-2 inline-flex items-center text-sm font-medium text-luxe-ink"
                    >
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-luxe-line/70 bg-luxe-bg/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
          <div className="flex items-center gap-4">
            <SocialIconLink
              href="https://github.com/suphyusinhtet"
              label="GitHub"
              icon={GitHubIcon}
            />
            <SocialIconLink
              href="https://www.linkedin.com/in/su-phyu-sin-htet/"
              label="LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialIconLink
              href="mailto:suphyusinhtet@gmail.com"
              label="Email"
              icon={MailIcon}
            />
          </div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-luxe-muted">
            © 2025 Su Phyu Sin Htet
          </p>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-luxe-accent">
        {title}
      </p>
      <h2 className="mt-3 font-[var(--font-cormorant)] text-3xl font-semibold text-luxe-ink">
        {subtitle}
      </h2>
    </div>
  );
}

function SocialLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-luxe-line/70 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-luxe-ink transition hover:-translate-y-0.5"
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}

function SocialIconLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-luxe-line/70 bg-white/70 text-luxe-ink shadow-soft transition hover:-translate-y-0.5"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.944.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.137 20.193 22 16.44 22 12.017 22 6.484 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.983 3.5C4.983 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.493 1.12 2.493 2.5ZM.5 8.5h3.98V23H.5V8.5Zm7.982 0h3.817v1.98h.053c.532-1.01 1.835-2.076 3.776-2.076 4.037 0 4.783 2.658 4.783 6.112V23h-3.98v-6.96c0-1.658-.033-3.792-2.311-3.792-2.312 0-2.665 1.806-2.665 3.675V23H8.482V8.5Z" />
    </svg>
  );
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.236-8 4.8-8-4.8V6l8 4.8L20 6v2.236Z" />
    </svg>
  );
}
