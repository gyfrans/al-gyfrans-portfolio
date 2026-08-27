import Container from "@/components/common/container";

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function Home({
  params,
}: PageProps) {

  const {
    locale,
  } = await params;

  return (
    <main className="min-h-screen">
      <Container>
        <section className="flex min-h-screen items-center">

          <div>

            <p className="text-muted">
              {locale === "id"
                ? "Halo, saya"
                : "Hello, I'm"}
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight">
              Al Gyfrans
            </h1>

            <p className="mt-4 text-xl text-muted">
              Developer & Problem Solver
            </p>

          </div>

        </section>
      </Container>
    </main>
  );
}