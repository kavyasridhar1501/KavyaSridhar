/**
 * Content for the "Beyond Work" section.
 *
 * Everything here is a placeholder. Put image files in /public/paintings/ and set `src`
 * to e.g. "/paintings/sunset.jpg". Leave `src` empty to show a blank canvas placeholder.
 */

export type Painting = {
  title: string;
  year: string;
  medium: string;
  size?: string;
  src?: string;
};

export const paintings: Painting[] = [
  { title: "Untitled No. 1", year: "2025", medium: "Acrylic on canvas", size: "16 × 20 in" },
  { title: "Untitled No. 2", year: "2025", medium: "Watercolor on paper", size: "9 × 12 in" },
  { title: "Untitled No. 3", year: "2024", medium: "Oil on canvas", size: "18 × 24 in" },
  { title: "Untitled No. 4", year: "2024", medium: "Gouache on paper", size: "8 × 10 in" },
  { title: "Untitled No. 5", year: "2023", medium: "Acrylic on board", size: "12 × 12 in" },
];
