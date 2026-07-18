export interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "I ordered the Black Forest for my daughter's birthday and it was gone in ten minutes. Three guests asked which bakery in Kanpur we'd bought it from.",
    name: "Ritika S.",
    location: "Swaroop Nagar",
  },
  {
    quote:
      "You can taste the actual chocolate in their cakes, not just sugar. I messaged on WhatsApp, picked my pack size, and had it confirmed in five minutes.",
    name: "Arjun M.",
    location: "Civil Lines",
  },
  {
    quote:
      "We ordered a cookie box for a work event and people kept asking about it for a week. Cranbakery is our go-to for office orders now.",
    name: "Priya K.",
    location: "Kakadeo",
  },
];
