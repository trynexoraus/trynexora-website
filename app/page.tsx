export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-xl font-semibold tracking-tight">Trynexora</div>
        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#about">About</a>
          <a href="#careers">Careers</a>
          <a href="mailto:careers@trynexora.us">Contact</a>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-300">
          AI Infrastructure & Enterprise Software
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
          Building reliable software systems for modern AI-driven businesses.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">
          Trynexora is an international software company focused on backend
          engineering, enterprise systems, AI applications, and remote-first
          engineering collaboration.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#careers"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
          >
            View Open Positions
          </a>
          <a
            href="mailto:careers@trynexora.us"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white"
          >
            Contact Careers
          </a>
        </div>
      </section>

      <section id="about" className="border-t border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-blue-300">
              About Us
            </p>
            <h2 className="text-3xl font-semibold">Who we are</h2>
          </div>
          <div className="space-y-5 text-gray-300">
            <p>
              Trynexora is a remote-first software company working with
              engineers across different regions. We build practical technology
              systems for business operations, AI workflows, data processing,
              and backend services.
            </p>
            <p>
              Our team values clear communication, responsible engineering,
              strong ownership, and long-term collaboration. We welcome
              engineers who can work independently, understand real business
              problems, and deliver stable production systems.
            </p>
          </div>
        </div>
      </section>

      <section id="careers" className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-blue-300">
          Careers
        </p>
        <h2 className="text-3xl font-semibold">Open Position</h2>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row">
            <div>
              <h3 className="text-2xl font-semibold">
                Java Backend Engineer
              </h3>
              <p className="mt-3 text-gray-300">
                Remote · Full-time · Backend Engineering
              </p>
            </div>
            <a
              href="mailto:careers@trynexora.us?subject=Java Backend Engineer Application"
              className="h-fit rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
            >
              Apply by Email
            </a>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div>
              <h4 className="font-semibold">Tech Stack</h4>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                Java, Spring Boot, Spring Cloud, MySQL, Redis, MQ, REST APIs.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">What You Do</h4>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                Build backend services, integrate systems, optimize performance,
                and support reliable production delivery.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">How We Work</h4>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                Remote-first, outcome-oriented, written communication, practical
                engineering, and direct collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16 text-sm text-gray-400">
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <p>© 2026 Trynexora. All rights reserved.</p>
            <p>careers@trynexora.us</p>
          </div>
        </div>
      </section>
    </main>
  );
}