import EventDetails from "@/components/wedding/EventDetails";
import Footer from "@/components/wedding/Footer";
import MusicToggle from "@/components/wedding/MusicToggle";
import NavBar from "@/components/wedding/NavBar";
import VenueMap from "@/components/wedding/VenueMap";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Wedding Events — Badusha & Aishu" },
      { name: "description", content: "Mehendi, Nikkah, and Reception details." },
      { property: "og:title", content: "Wedding Events — Badusha & Aishu" },
      { property: "og:description", content: "All Five days of our Kerala wedding celebration." },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <>
      <NavBar />
      <main className="pt-24">
        <EventDetails />
        <VenueMap />
        <Footer />
      </main>
      <MusicToggle />
    </>
  );
}
