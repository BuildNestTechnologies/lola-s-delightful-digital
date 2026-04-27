export interface Testimonial {
  name: string;
  rating: number;
  text: string;
  avatar: string;
}

const avatar = (name: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=C4A27A&color=2C2420&bold=true&size=128`;

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Narayan",
    rating: 5,
    text: "The vibe at Dear Lola is unmatched — warm lighting, lovely music, and the Tempura Prawns are unreal. Arup made our evening so special with his attention to every detail.",
    avatar: avatar("Narayan"),
  },
  {
    name: "Anagha",
    rating: 5,
    text: "Easily the best butter chicken in Kalyan. The mocktails are crafted like art, and the staff genuinely cares. We came for dinner and stayed three hours just because of the ambience.",
    avatar: avatar("Anagha"),
  },
  {
    name: "Hiten",
    rating: 4,
    text: "Beautiful place for a date night. The Lotus Stem Khichdi was a surprise highlight. Slightly busy on weekends — reserve ahead. Will absolutely return.",
    avatar: avatar("Hiten"),
  },
];
