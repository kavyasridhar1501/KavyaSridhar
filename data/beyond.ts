/**
 * Content for the "Beyond Work" section.
 *
 * Everything here is a placeholder. Swap in your own entries:
 * - Paintings: put image files in /public/paintings/ and set `src` to e.g. "/paintings/sunset.jpg".
 *   Leave `src` empty to show a blank canvas placeholder.
 * - Films: `poster` is optional. Without one, a typographic poster is drawn in the film's `tone`.
 * - Music: `link` is optional (Spotify / Apple Music / YouTube URL). `cover` is optional album art.
 *   Set `playlistEmbed` to a Spotify embed URL (https://open.spotify.com/embed/playlist/...) to show the player.
 */

export type Painting = {
  title: string;
  year: string;
  medium: string;
  size?: string;
  src?: string;
};

export type Film = {
  title: string;
  director: string;
  year: string;
  note: string;
  tone: string;
  poster?: string;
};

export type Track = {
  title: string;
  artist: string;
  link?: string;
  cover?: string;
};

export const paintings: Painting[] = [
  { title: "Untitled No. 1", year: "2025", medium: "Acrylic on canvas", size: "16 × 20 in" },
  { title: "Untitled No. 2", year: "2025", medium: "Watercolor on paper", size: "9 × 12 in" },
  { title: "Untitled No. 3", year: "2024", medium: "Oil on canvas", size: "18 × 24 in" },
  { title: "Untitled No. 4", year: "2024", medium: "Gouache on paper", size: "8 × 10 in" },
  { title: "Untitled No. 5", year: "2023", medium: "Acrylic on board", size: "12 × 12 in" },
];

export const films: Film[] = [
  { title: "Favorite Film One", director: "Director", year: "Year", note: "One line on why this one stays with you.", tone: "#2F4B8F" },
  { title: "Favorite Film Two", director: "Director", year: "Year", note: "One line on why this one stays with you.", tone: "#C8452A" },
  { title: "Favorite Film Three", director: "Director", year: "Year", note: "One line on why this one stays with you.", tone: "#D9A441" },
  { title: "Favorite Film Four", director: "Director", year: "Year", note: "One line on why this one stays with you.", tone: "#8A9A7B" },
  { title: "Favorite Film Five", director: "Director", year: "Year", note: "One line on why this one stays with you.", tone: "#E6B8A2" },
  { title: "Favorite Film Six", director: "Director", year: "Year", note: "One line on why this one stays with you.", tone: "#3B3833" },
];

export const tracks: Track[] = [
  { title: "Song Title One", artist: "Artist Name" },
  { title: "Song Title Two", artist: "Artist Name" },
  { title: "Song Title Three", artist: "Artist Name" },
  { title: "Song Title Four", artist: "Artist Name" },
  { title: "Song Title Five", artist: "Artist Name" },
];

/** Optional Spotify embed, e.g. "https://open.spotify.com/embed/playlist/XXXXXXXX". */
export const playlistEmbed = "";
