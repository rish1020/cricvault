import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      {/* Big number */}
      <p
        className="font-display font-bold select-none mb-2"
        style={{
          fontSize: "clamp(6rem, 20vw, 12rem)",
          lineHeight: 1,
          color: "var(--border-strong)",
          letterSpacing: "-0.04em",
        }}
      >
        404
      </p>

      {/* Headline */}
      <h1
        className="font-display font-bold mb-3"
        style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "var(--text-primary)" }}
      >
        That&apos;s out!
      </h1>
      <p className="text-sm max-w-xs mb-8" style={{ color: "var(--text-secondary)" }}>
        This page must&apos;ve nicked the edge. Try one of these instead:
      </p>

      {/* Nav links */}
      <div className="flex flex-wrap gap-3 justify-center">
        {[
          { label: "Home",        href: "/" },
          { label: "Tournaments", href: "/tournaments" },
          { label: "Timeline",    href: "/timeline/all/all" },
          { label: "Trophy Room", href: "/cabinet/all/all" },
        ].map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold border transition-colors"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--border)",
              color: "var(--text-primary)",
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </main>
  );
}
