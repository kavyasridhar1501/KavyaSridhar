/**
 * Content for the "Beyond Work" section: paintings and crochet.
 *
 * Put image files in /public/gallery/ and set `src` to e.g. "/gallery/koi.jpg".
 * `width` / `height` are the image's pixel size, used to reserve the right shape
 * before it loads. Leave `src` empty to show a blank canvas placeholder.
 */

export type Piece = {
  title: string;
  medium: string;
  year?: string;
  size?: string;
  src?: string;
  width?: number;
  height?: number;
};

export const pieces: Piece[] = [
  { title: "Koi", medium: "Painting", src: "/gallery/koi.jpg", width: 995, height: 655 },
  { title: "Forest Path", medium: "Painting", src: "/gallery/forest.jpg", width: 677, height: 1032 },
  { title: "Curious Giraffe", medium: "Painting", year: "2021", src: "/gallery/giraffe.jpg", width: 687, height: 1003 },
  { title: "Bumblebees", medium: "Crochet", src: "/gallery/crochet-bees.jpg", width: 1400, height: 1050 },
];
