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
    name: "Madaparambil Resort Auditorium",
    city: "Thodupuzha, Kerala",
    mapsEmbed:
      "https://www.google.com/maps?q=Madaparambil+Resort,+Thodupuzha,+Kerala&output=embed",
    mapsLink:
      "https://www.google.com/maps/search/?api=1&query=Madaparambil+Resort+Thodupuzha+Kerala",
  },
  story: [
    {
      year: "2019",
      title: "How We Met",
      text: "Beneath the rain-soaked arches of a Kochi café, a shared umbrella turned into a shared story.",
    },
    {
      year: "2020",
      title: "First Date",
      text: "A walk along Marine Drive, salted breeze and laughter that refused to end.",
    },
    {
      year: "2023",
      title: "The Proposal",
      text: "On a quiet houseboat in Alleppey, lit by lanterns and the moon over the backwaters.",
    },
    {
      year: "2024",
      title: "Forever Begins",
      text: "Hand in hand, blessed by family, by the lamp of the nilavilakku.",
    },
  ],
  events: [
    {
      name: "Mehendi",
      date: new Date(weddingDate.getTime() - 2 * 86400000),
      time: "5:00 PM onwards",
      place: "Bride's Home, Thrissur",
      icon: "🌿",
    },
    {
      name: "Sangeet",
      date: new Date(weddingDate.getTime() - 86400000),
      time: "7:00 PM",
      place: "Heritage Banquet, Thrissur",
      icon: "🎶",
    },
    {
      name: "Wedding Muhurtham",
      date: weddingDate,
      time: "6:30 PM",
      place: "Guruvayur Temple Hall",
      icon: "🪔",
    },
    {
      name: "Reception",
      date: new Date(weddingDate.getTime() + 86400000),
      time: "7:00 PM",
      place: "Le Meridien, Kochi",
      icon: "💍",
    },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?w=900&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=900&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=900&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=900&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?w=900&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1529636798458-92182e662485?w=900&auto=format&fit=crop&q=80",
  ],
  blessing:
    "May the lamp of love forever burn bright in your home. May your days be filled with laughter, your nights with quiet joy, and your years with the fragrance of jasmine and the warmth of family.",
  music:
    "https://cdn.pixabay.com/download/audio/2022/03/15/audio_1f9c8f1e21.mp3?filename=indian-flute-spiritual-meditation-music-22139.mp3",
};
