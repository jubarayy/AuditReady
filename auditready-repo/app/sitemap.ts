import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com";
  const routes = [
    "",
    "/pricing",
    "/demo",
    "/faq",
    "/solutions/ecovadis",
    "/solutions/csrd",
    "/use-cases/questionnaires-fournisseurs",
    "/login",
    "/signup"
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7
  }));
}
