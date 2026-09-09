const sampleListings = [
  {
    title: "Downtown Toronto Loft",
    description:
      "A modern loft in the heart of downtown Toronto with easy access to restaurants, shopping, and entertainment.",
    image: {
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      filename: "listingimage"
    },
    price: 1800,
    location: "Toronto",
    country: "Canada",
    geometry: {
      type: "Point",
      coordinates: [-79.3832, 43.6532]
    }
  },

  {
    title: "Cozy Vancouver Apartment",
    description:
      "A comfortable apartment surrounded by beautiful city views and only minutes from downtown Vancouver.",
    image: {
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      filename: "listingimage"
    },
    price: 2200,
    location: "Vancouver",
    country: "Canada",
    geometry: {
      type: "Point",
      coordinates: [-123.1207, 49.2827]
    }
  },

  {
    title: "Mountain Escape in Banff",
    description:
      "Relax in a peaceful mountain retreat surrounded by the breathtaking Canadian Rockies.",
    image: {
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=80",
      filename: "listingimage"
    },
    price: 2500,
    location: "Banff",
    country: "Canada",
    geometry: {
      type: "Point",
      coordinates: [-115.5708, 51.1784]
    }
  },

  {
    title: "Ocean View Home",
    description:
      "Wake up to beautiful Atlantic Ocean views from this relaxing home near downtown St. John's.",
    image: {
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80",
      filename: "listingimage"
    },
    price: 1400,
    location: "St. John's",
    country: "Canada",
    geometry: {
      type: "Point",
      coordinates: [-52.7126, 47.5615]
    }
  },

  {
    title: "Montreal City Stay",
    description:
      "A stylish apartment in Montreal perfect for exploring the city's food, culture, and nightlife.",
    image: {
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
      filename: "listingimage"
    },
    price: 1600,
    location: "Montreal",
    country: "Canada",
    geometry: {
      type: "Point",
      coordinates: [-73.5673, 45.5017]
    }
  },

  {
    title: "New York City Penthouse",
    description:
      "Enjoy an unforgettable stay in the heart of New York City with incredible access to Manhattan attractions.",
    image: {
      url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
      filename: "listingimage"
    },
    price: 3500,
    location: "New York City",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-74.0060, 40.7128]
    }
  },

  {
    title: "Miami Beach Getaway",
    description:
      "A bright tropical stay close to Miami Beach, restaurants, nightlife, and the ocean.",
    image: {
      url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
      filename: "listingimage"
    },
    price: 2800,
    location: "Miami",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-80.1918, 25.7617]
    }
  },

  {
    title: "London Luxury Apartment",
    description:
      "A modern London apartment offering a comfortable stay near some of the city's most famous attractions.",
    image: {
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
      filename: "listingimage"
    },
    price: 3200,
    location: "London",
    country: "United Kingdom",
    geometry: {
      type: "Point",
      coordinates: [-0.1276, 51.5072]
    }
  },

  {
    title: "Parisian Apartment",
    description:
      "Experience Paris from a charming apartment surrounded by cafés, shops, and beautiful historic streets.",
    image: {
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
      filename: "listingimage"
    },
    price: 3000,
    location: "Paris",
    country: "France",
    geometry: {
      type: "Point",
      coordinates: [2.3522, 48.8566]
    }
  },

  {
    title: "Tokyo Modern Stay",
    description:
      "A clean and modern apartment perfectly located for exploring the exciting neighborhoods of Tokyo.",
    image: {
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=80",
      filename: "listingimage"
    },
    price: 2400,
    location: "Tokyo",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [139.6917, 35.6895]
    }
  },

  {
    title: "Bali Tropical Villa",
    description:
      "Relax in a private tropical villa surrounded by lush greenery and beautiful Balinese scenery.",
    image: {
      url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
      filename: "listingimage"
    },
    price: 2100,
    location: "Bali",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates: [115.1889, -8.4095]
    }
  },

  {
    title: "Dubai Luxury Retreat",
    description:
      "Experience modern luxury in Dubai with incredible architecture, shopping, restaurants, and desert adventures nearby.",
    image: {
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
      filename: "listingimage"
    },
    price: 4500,
    location: "Dubai",
    country: "United Arab Emirates",
    geometry: {
      type: "Point",
      coordinates: [55.2708, 25.2048]
    }
  }
];

module.exports = { data: sampleListings };