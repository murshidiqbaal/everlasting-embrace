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
      { title: "Arjun & Meenakshi — A Kerala Wedding" },
      {
        name: "description",
        content:
          "Together with their families, Arjun & Meenakshi invite you to celebrate their Kerala Malabar wedding.",
      },
      { property: "og:title", content: "Arjun & Meenakshi — A Kerala Wedding" },
      {
        property: "og:description",
        content:
          "Together with their families, Arjun & Meenakshi invite you to celebrate their Kerala Malabar wedding.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Great+Vibes&family=Inter:wght@300;400;500;600&display=swap",
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
