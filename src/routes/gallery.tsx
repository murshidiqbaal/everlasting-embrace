import { createFileRoute } from "@tanstack/react-router";
import NavBar from "@/components/wedding/NavBar";
import Gallery from "@/components/wedding/Gallery";
import Footer from "@/components/wedding/Footer";
import MusicToggle from "@/components/wedding/MusicToggle";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Arjun & Meenakshi" },
      { name: "description", content: "A collection of moments from our journey together." },
      { property: "og:title", content: "Gallery — Arjun & Meenakshi" },
      { property: "og:description", content: "Memories from our journey to forever." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <NavBar />
      <main className="pt-24">
        <Gallery />
        <Footer />
      </main>
      <MusicToggle />
    </>
  );
}
