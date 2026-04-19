import img1 from "@/assets/baduppi/WhatsApp Image 2026-04-19 at 1.14.45 PM.jpeg";
import img2 from "@/assets/baduppi/WhatsApp Image 2026-04-19 at 1.14.46 PM (1).jpeg";
import img3 from "@/assets/baduppi/WhatsApp Image 2026-04-19 at 1.14.46 PM.jpeg";

// Easily editable placeholder content for the wedding site.

const weddingDate = new Date(2026, 4, 10, 18, 30, 0);

export const wedding = {
  bride: "Aishu Jaffer",
  groom: "Badusha Ameer",
  coupleAnd: "&",
  tagline: "Together with their families, invite you to celebrate the wedding of",
  date: weddingDate,
  dateLabel: weddingDate.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }),
  timeLabel: "6:30 PM Reception",
  venue: {
    name: "Madaparambil Resort",
    city: "Thodupuzha, Kerala",
    mapsEmbed: "https://www.google.com/maps?q=Madaparambil+Resort,+Thodupuzha,+Kerala&output=embed",
    mapsLink:
      "https://www.google.com/maps/search/?api=1&query=Madaparambil+Resort+Thodupuzha+Kerala",
  },
  story: [
    {
      year: "2019",
      title: "How We Met",
      text: "Beneath the rain-soaked arches of Newman College, a shared umbrella turned into a shared story.",
    },
    {
      year: "2020",
      title: "First Date",
      text: "A walk along Thodupuzha Walkway, salted breeze and laughter that refused to end.",
    },
    {
      year: "2023",
      title: "The Proposal",
      text: "On a quiet evening in Thodupuzha, lit by lanterns and the moon over the backwaters.",
    },
    {
      year: "2024",
      title: "Forever Begins",
      text: "Hand in hand, blessed by family, by the lamp of the nilavilakku.",
    },
  ],
  events: [
    {
      name: "Nikhah",
      date: new Date(weddingDate.getTime() - 2 * 86400000),
      time: "11:00 AM",
      place: "Masjid-Noor Juma Masjid, Elamdesam",
      icon: "🌿",
    },
    {
      name: "Mehendi",
      date: new Date(weddingDate.getTime() - 2 * 86400000),
      time: "5:00 PM onwards",
      place: "Bride's Home,Elamdesam, Thodupuzha",
      icon: "🌿",
    },
    {
      name: "Wedding Ceremony",
      date: new Date(weddingDate.getTime() - 86400000),
      time: "11:00 AM",
      place: "Nainar Palli Auditorium, Thodupuzha",
      icon: "🪔",
    },
    {
      name: "Sangeet Night",
      date: new Date(weddingDate.getTime() - 86400000),
      time: "7:00 PM",
      place: " Groom's Home, Thodupuzha",
      icon: "🎶",
    },

    {
      name: "Reception",
      date: new Date(weddingDate.getTime() - 86400000),
      time: "6:00 PM",
      place: "Madaparambil Resort, Thodupuzha",
      icon: "💍",
    },
  ],
  gallery: [img1, img2, img3],

  blessing:
    "May the lamp of love forever burn bright in your home. May your days be filled with laughter, your nights with quiet joy, and your years with the fragrance of jasmine and the warmth of family.",
  music:
    "https://cdn.pixabay.com/download/audio/2022/03/15/audio_1f9c8f1e21.mp3?filename=indian-flute-spiritual-meditation-music-22139.mp3",
};
