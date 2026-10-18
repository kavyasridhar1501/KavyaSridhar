/**
 * Small abstract "paintings" drawn in SVG, one per project, so the collection
 * has art without shipping screenshots. Each nods to what the project does.
 */

export type ArtworkVariant = "waves" | "grid" | "split" | "fields" | "lines" | "pixels";

const C = {
  canvas: "#F1ECE2",
  ink: "#1B1A18",
  ochre: "#D9A441",
  cobalt: "#2F4B8F",
  vermilion: "#C8452A",
  sage: "#8A9A7B",
  blush: "#E6B8A2",
};

function Waves() {
  // Energy forecast: a sun over layered grid "waves"
  return (
    <>
      <rect width="400" height="300" fill={C.canvas} />
      <circle cx="285" cy="105" r="58" fill={C.ochre} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path
          key={i}
          d={`M-10 ${170 + i * 22} C 60 ${140 + i * 22}, 120 ${200 + i * 22}, 200 ${170 + i * 22} S 340 ${140 + i * 22}, 410 ${170 + i * 22}`}
          fill="none"
          stroke={i % 2 ? C.cobalt : C.sage}
          strokeWidth="9"
          strokeLinecap="round"
        />
      ))}
    </>
  );
}

function Grid() {
  // Financial analytics: a Mondrian ledger with one anomaly cell
  return (
    <>
      <rect width="400" height="300" fill={C.canvas} />
      <rect x="0" y="0" width="150" height="170" fill={C.cobalt} />
      <rect x="270" y="0" width="130" height="90" fill={C.ochre} />
      <rect x="150" y="210" width="120" height="90" fill={C.vermilion} />
      <rect x="320" y="230" width="80" height="70" fill={C.blush} />
      <g stroke={C.ink} strokeWidth="8">
        <line x1="150" y1="0" x2="150" y2="300" />
        <line x1="270" y1="0" x2="270" y2="300" />
        <line x1="0" y1="170" x2="150" y2="170" />
        <line x1="270" y1="90" x2="400" y2="90" />
        <line x1="150" y1="210" x2="400" y2="210" />
        <line x1="320" y1="210" x2="320" y2="300" />
      </g>
    </>
  );
}

function Split() {
  // Expense splitting: one disc, fairly divided
  return (
    <>
      <rect width="400" height="300" fill={C.blush} />
      <path d="M200 50 A100 100 0 0 0 200 250 Z" fill={C.vermilion} transform="translate(-14 0)" />
      <path d="M200 50 A100 100 0 0 1 200 250 Z" fill={C.cobalt} transform="translate(14 0)" />
      <line x1="200" y1="30" x2="200" y2="270" stroke={C.ink} strokeWidth="2" strokeDasharray="4 6" />
    </>
  );
}

function Fields() {
  // Medical RAG: soft Rothko-style color fields
  return (
    <>
      <defs>
        <filter id="soft" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>
      <rect width="400" height="300" fill="#5C2B22" />
      <g filter="url(#soft)">
        <rect x="40" y="28" width="320" height="120" rx="6" fill={C.vermilion} />
        <rect x="40" y="166" width="320" height="34" rx="6" fill={C.blush} />
        <rect x="40" y="216" width="320" height="58" rx="6" fill={C.ochre} />
      </g>
    </>
  );
}

function Lines() {
  // Legal contracts: lines of text, one clause flagged
  const widths = [300, 260, 320, 180, 290, 240, 310, 150];
  return (
    <>
      <rect width="400" height="300" fill={C.canvas} />
      <rect x="70" y="24" width="260" height="252" fill="#FFFFFF" />
      {widths.map((w, i) => (
        <rect
          key={i}
          x="92"
          y={50 + i * 27}
          width={w * 0.72}
          height="9"
          fill={i === 4 ? C.vermilion : i === 0 ? C.ink : "#C9C2B5"}
        />
      ))}
      <circle cx="300" cy="162" r="22" fill="none" stroke={C.cobalt} strokeWidth="4" />
    </>
  );
}

function Pixels() {
  // Adversarial robustness: an orderly grid with a few perturbed pixels
  const cells = [];
  for (let y = 0; y < 6; y++) {
    for (let x = 0; x < 8; x++) {
      const n = (x * 7 + y * 13) % 11;
      const fill = n === 0 ? C.vermilion : n === 5 ? C.ochre : (x + y) % 2 ? C.cobalt : C.sage;
      cells.push(
        <rect
          key={`${x}-${y}`}
          x={x * 50 + 4}
          y={y * 50 + 4}
          width="42"
          height="42"
          fill={fill}
          transform={n === 0 ? `rotate(12 ${x * 50 + 25} ${y * 50 + 25})` : undefined}
        />
      );
    }
  }
  return (
    <>
      <rect width="400" height="300" fill={C.canvas} />
      {cells}
    </>
  );
}

const variants: Record<ArtworkVariant, () => JSX.Element> = {
  waves: Waves,
  grid: Grid,
  split: Split,
  fields: Fields,
  lines: Lines,
  pixels: Pixels,
};

export default function Artwork({ variant, className }: { variant: ArtworkVariant; className?: string }) {
  const Piece = variants[variant];
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <Piece />
    </svg>
  );
}
