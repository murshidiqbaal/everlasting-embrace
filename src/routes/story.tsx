import { createFileRoute } from "@tanstack/react-router";
import NavBar from "@/components/wedding/NavBar";
import StoryTimeline from "@/components/wedding/StoryTimeline";
import Footer from "@/components/wedding/Footer";
import MusicToggle from "@/components/wedding/MusicToggle";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Our Story — Badusha & Aishu" },
      { name: "description", content: "How Badusha & Aishu met, fell in love, and chose forever." },
      { property: "og:title", content: "Our Story — Badusha & Aishu" },
      { property: "og:description", content: "Our journey from a chance meeting to forever." },
    ],
  }),
  component: StoryPage,
});

function StoryPage() {
  return (
    <>
      <NavBar />
      <main className="pt-24">
        <StoryTimeline />
        <Footer />
      </main>
      <MusicToggle />
    </>
  );
}
