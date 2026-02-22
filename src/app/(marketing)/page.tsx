import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/forms/ContactForm";
import { projectUseCases } from "@/use-cases/projects/projectUseCases";

export default async function LandingPage() {
  const featuredProjects = await projectUseCases.listFeatured();

  return (
    <div className="space-y-12">
      <FadeIn>
        <section className="space-y-6 text-center">
          <p className="text-accent">Enterprise-Grade Digital Experience</p>
          <h1 className="text-5xl font-bold text-light">Scale Faster with CobaCorp</h1>
          <p className="mx-auto max-w-2xl text-muted">Website perusahaan modern dengan ekosistem dashboard admin, CMS blog dinamis, portfolio, dan Supabase backend.</p>
          <Link className="inline-block rounded-xl bg-primary px-6 py-3 font-semibold text-white hover:bg-primaryGlow" href="/dashboard">Masuk Admin Panel</Link>
        </section>
      </FadeIn>

      <section className="grid gap-6 md:grid-cols-3">
        {["Role-based dashboard", "Dynamic CMS blog", "Portfolio + contact automation"].map((item) => (
          <Card key={item}><p>{item}</p></Card>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Featured Portfolio</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {featuredProjects.map((project: any) => (
            <Card key={project.id}>
              <p className="text-lg font-semibold">{project.name}</p>
              <p className="text-muted">{project.summary}</p>
            </Card>
          ))}
        </div>
      </section>

      <Card>
        <h2 className="mb-4 text-2xl font-semibold">Hubungi Kami</h2>
        <ContactForm />
      </Card>
    </div>
  );
}
