import Container from "@/components/common/container";

export default function Footer() {
  return (
    <footer className="
      border-t
      border-border
      py-12
    ">
      <Container>

        <div className="
          flex
          flex-col
          gap-6
          md:flex-row
          md:items-center
          md:justify-between
        ">

          <div>
            <p className="text-sm text-muted">
              © 2026 Al Gyfrans
            </p>
          </div>


          <button
            className="
              rounded-full
              border
              border-border
              px-5
              py-2
              text-sm
              transition
              hover:bg-surface
            "
          >
            Enable Immersive Experience
          </button>

        </div>

      </Container>
    </footer>
  );
}