import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import EnvelopeIntro from "@/components/wedding/EnvelopeIntro";
import NavBar from "@/components/wedding/NavBar";
import Hero from "@/components/wedding/Hero";
import StoryTimeline from "@/components/wedding/StoryTimeline";
import EventDetails from "@/components/wedding/EventDetails";
import Gallery from "@/components/wedding/Gallery";
import InvitationMessage from "@/components/wedding/InvitationMessage";
import RSVP from "@/components/wedding/RSVP";
import VenueMap from "@/components/wedding/VenueMap";
import Footer from "@/components/wedding/Footer";
import MusicToggle from "@/components/wedding/MusicToggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Badusha & Aishu — A Kerala Wedding Invitation" },
      {
        name: "description",
        content:
          "Join Badusha & Aishu for a Kerala wedding celebration in Thodupuzha. RSVP, view event details, and explore our story.",
      },
      { property: "og:title", content: "Badusha & Aishu — A Kerala Wedding Invitation" },
      {
        property: "og:description",
        content: "A Kerala Malabar wedding celebration. You are invited.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("envelope-opened") === "1") {
      setOpened(true);
    }
  }, []);

  return (
    <>
      <EnvelopeIntro onOpen={() => setOpened(true)} />
      {opened && (
        <>
          <NavBar />
          <main className="relative">
            <Hero />
            <StoryTimeline />
            <EventDetails />
            <InvitationMessage />
            <Gallery />
            <VenueMap />
            <RSVP />
            <Footer />
          </main>
          <MusicToggle />
        </>
      )}
    </>
  );
}
