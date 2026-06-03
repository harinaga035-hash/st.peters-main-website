import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sitemap.xml")({
  component: SitemapRoute,
});

function SitemapRoute() {
  return null;
}
