import { createFileRoute } from "@tanstack/react-router";
import NavBar from "@/components/wedding/NavBar";
import EventDetails from "@/components/wedding/EventDetails";
import VenueMap from "@/components/wedding/VenueMap";
import Footer from "@/components/wedding/Footer";
import MusicToggle from "@/components/wedding/MusicToggle";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Wedding Events — Arjun & Meenakshi" },
      { name: "description", content: "Mehendi, Sangeet, Wedding Muhurtham, and Reception details." },
      { property: "og:title", content: "Wedding Events — Arjun & Meenakshi" },
      { property: "og:description", content: "All four days of our Kerala wedding celebration." },
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
