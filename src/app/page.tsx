import Container from "@/components/common/container";
import ThemeToggle from "@/components/common/theme-toggle";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Container>
        <section className="flex min-h-screen items-center justify-between">

          <div>
            <p className="text-muted">
              Hello, I'm
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight">
              Al Gyfrans
            </h1>

            <p className="mt-4 text-xl text-muted">
              Developer & Problem Solver
            </p>
          </div>

          <ThemeToggle />

        </section>
      </Container>
    </main>
  );
}