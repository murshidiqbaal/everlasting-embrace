import { createFileRoute } from "@tanstack/react-router";
import NavBar from "@/components/wedding/NavBar";
import RSVP from "@/components/wedding/RSVP";
import Footer from "@/components/wedding/Footer";
import MusicToggle from "@/components/wedding/MusicToggle";

export const Route = createFileRoute("/rsvp")({
  head: () => ({
    meta: [
      { title: "RSVP — Badusha & Aishu" },
      { name: "description", content: "Let us know if you can join our Kerala wedding celebration." },
      { property: "og:title", content: "RSVP — Badusha & Aishu" },
      { property: "og:description", content: "Reply to our wedding invitation." },
    ],
  }),
  component: RsvpPage,
});

function RsvpPage() {
  return (
    <>
      <NavBar />
      <main className="pt-24">
        <RSVP />
        <Footer />
      </main>
      <MusicToggle />
    </>
  );
}
