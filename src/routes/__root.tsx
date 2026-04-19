import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="glass max-w-md rounded-2xl p-10 text-center">
        <h1 className="font-script text-7xl text-gradient-gold">404</h1>
        <h2 className="mt-2 font-display text-2xl text-maroon-deep">Page not found</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          This page wandered off like jasmine in the breeze.
        </p>
        <Link
          to="/"
          className="btn-shimmer mt-6 inline-flex items-center justify-center rounded-full gradient-royal px-6 py-3 text-sm font-medium text-ivory shadow-royal transition-transform hover:scale-105"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Badusha & Aishu — A Kerala Wedding" },
      {
        name: "description",
        content:
          "Together with their families, Badusha & Aishu invite you to celebrate their Kerala wedding in Thodupuzha.",
      },
      { property: "og:title", content: "Badusha & Aishu — A Kerala Wedding" },
      {
        property: "og:description",
        content:
          "Together with their families, Badusha & Aishu invite you to celebrate their Kerala wedding in Thodupuzha.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Badusha & Aishu — A Kerala Wedding" },
      { name: "description", content: "A modern, elegant wedding invitation website with animated sections and RSVP functionality." },
      { property: "og:description", content: "A modern, elegant wedding invitation website with animated sections and RSVP functionality." },
      { name: "twitter:description", content: "A modern, elegant wedding invitation website with animated sections and RSVP functionality." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f5879d20-c77d-4e4f-8f15-a00c532b7de3/id-preview-2e3537ff--91877a0f-ee48-4537-b985-97df2fe6d4ad.lovable.app-1776583648553.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f5879d20-c77d-4e4f-8f15-a00c532b7de3/id-preview-2e3537ff--91877a0f-ee48-4537-b985-97df2fe6d4ad.lovable.app-1776583648553.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Outfit:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
