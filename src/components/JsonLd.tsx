/**
 * Injects a JSON-LD structured data script into the page <head>.
 * Server component — no "use client" needed.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
