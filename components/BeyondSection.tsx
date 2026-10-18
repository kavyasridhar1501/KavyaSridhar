"use client";

import { useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight, HiXMark, HiPlay, HiPause, HiArrowUpRight } from "react-icons/hi2";
import { Reveal, SectionHeading, asset } from "./ui";
import { films, paintings, playlistEmbed, tracks, type Painting } from "@/data/beyond";

const ratios = ["aspect-[4/5]", "aspect-square", "aspect-[3/4]", "aspect-[5/4]", "aspect-[4/5]"];

/** Dark ink on light poster tones, white on dark ones. */
function posterText(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 0.5 ? "text-ink" : "text-white";
}

function SubHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-8 flex items-baseline justify-between gap-4 border-b border-night-line pb-4">
      <h3 className="font-serif text-3xl text-night-ink md:text-4xl">{title}</h3>
      <p className="label text-night-muted">{kicker}</p>
    </div>
  );
}

/** Blank primed canvas shown until a painting image is added. */
function CanvasPlaceholder() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[#EFE9DD] p-6 text-center text-[#8A8173]">
      <svg viewBox="0 0 120 40" className="w-24" aria-hidden="true">
        <path
          d="M4 28 C 20 8, 40 34, 60 18 S 100 6, 116 22"
          fill="none"
          stroke="#C8452A"
          strokeWidth="7"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>
      <span className="label">Painting goes here</span>
    </div>
  );
}

function PaintingImage({ painting, className }: { painting: Painting; className?: string }) {
  return painting.src ? (
    <img
      src={asset(painting.src)}
      alt={`${painting.title}, ${painting.medium}, ${painting.year}`}
      loading="lazy"
      className={`h-full w-full object-cover ${className ?? ""}`}
    />
  ) : (
    <CanvasPlaceholder />
  );
}

function Studio() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [current, setCurrent] = useState(0);

  const open = (i: number) => {
    setCurrent(i);
    dialogRef.current?.showModal();
  };
  const step = (d: number) => setCurrent((c) => (c + d + paintings.length) % paintings.length);
  const painting = paintings[current];

  return (
    <div>
      <SubHeading kicker="The studio" title="Paintings" />
      {/* Horizontal gallery wall */}
      <ul className="-mx-5 flex snap-x snap-mandatory items-end gap-6 overflow-x-auto px-5 pb-6 sm:-mx-8 sm:px-8 md:gap-10 [scrollbar-color:#36332E_transparent]">
        {paintings.map((p, i) => (
          <li key={`${p.title}-${i}`} className="w-[68vw] shrink-0 snap-center sm:w-[19rem]">
            <button
              type="button"
              onClick={() => open(i)}
              className="group block w-full text-left"
              aria-label={`View ${p.title} larger`}
            >
              <div className="bg-[#2B2824] p-2.5 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:-translate-y-1.5">
                <div className={`${ratios[i % ratios.length]} overflow-hidden`}>
                  <PaintingImage painting={p} className="transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
              <div className="mt-4">
                <p className="font-serif text-xl italic text-night-ink">{p.title}</p>
                <p className="text-sm text-night-muted">
                  {p.medium}, {p.year}
                </p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label={painting?.title}
        onClick={(e) => e.target === dialogRef.current && dialogRef.current?.close()}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        className="m-auto max-h-[92vh] w-[min(92vw,56rem)] bg-transparent p-0 backdrop:bg-black/85 backdrop:backdrop-blur-sm"
      >
        {painting && (
          <figure className="bg-night p-4 text-night-ink sm:p-6">
            <div className="flex max-h-[70vh] items-center justify-center overflow-hidden bg-night-soft">
              {painting.src ? (
                <img
                  src={asset(painting.src)}
                  alt={`${painting.title}, ${painting.medium}, ${painting.year}`}
                  className="max-h-[70vh] w-auto object-contain"
                />
              ) : (
                <div className="aspect-[4/3] w-full">
                  <CanvasPlaceholder />
                </div>
              )}
            </div>
            <figcaption className="mt-4 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-serif text-2xl italic">{painting.title}</p>
                <p className="text-sm text-night-muted">
                  {painting.medium}, {painting.year}
                  {painting.size && ` · ${painting.size}`}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="label mr-2 text-night-muted">
                  {current + 1} / {paintings.length}
                </span>
                {[
                  { label: "Previous painting", icon: HiChevronLeft, onClick: () => step(-1) },
                  { label: "Next painting", icon: HiChevronRight, onClick: () => step(1) },
                  { label: "Close", icon: HiXMark, onClick: () => dialogRef.current?.close() },
                ].map(({ label, icon: Icon, onClick }) => (
                  <button
                    key={label}
                    type="button"
                    onClick={onClick}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-night-line transition-colors hover:border-night-ink"
                  >
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </figcaption>
          </figure>
        )}
      </dialog>
    </div>
  );
}

function ScreeningRoom() {
  return (
    <div>
      <SubHeading kicker="The screening room" title="Films" />
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {films.map((film, i) => (
          <Reveal as="li" key={`${film.title}-${i}`} delay={i * 0.05}>
            <figure
              tabIndex={0}
              className="group relative aspect-[2/3] overflow-hidden outline-offset-4 transition-transform duration-500 hover:-translate-y-1 focus-visible:-translate-y-1"
              style={{ backgroundColor: film.tone }}
            >
              {film.poster ? (
                <img
                  src={asset(film.poster)}
                  alt={`Poster for ${film.title}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              ) : (
                // Typographic stand-in poster
                <div className={`flex h-full flex-col justify-between p-4 ${posterText(film.tone)}`}>
                  <span className="label opacity-80">No. {String(i + 1).padStart(2, "0")}</span>
                  <span className="font-serif text-2xl leading-[1.05] drop-shadow-sm">{film.title}</span>
                </div>
              )}
              {/* Ticket stub that slides up on hover / focus */}
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-[calc(100%+4px)] bg-night-ink p-3 text-ink transition-transform duration-500 ease-out group-hover:translate-y-0 group-focus-visible:translate-y-0">
                <span
                  aria-hidden="true"
                  className="absolute -top-px left-0 right-0 border-t-2 border-dashed border-night"
                />
                <p className="label text-accent">Admit one</p>
                <p className="mt-1 font-serif text-lg leading-tight">{film.title}</p>
                <p className="text-xs text-muted">
                  {film.director} · {film.year}
                </p>
                <p className="mt-2 text-xs leading-snug">{film.note}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

function ListeningRoom() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const track = tracks[current];

  if (!track) return null;

  return (
    <div>
      <SubHeading kicker="The listening room" title="Now Playing" />
      <div className="grid items-center gap-10 border border-night-line bg-night-soft p-6 md:grid-cols-[auto_1fr] md:p-10">
        {/* Turntable */}
        <div className="relative mx-auto h-56 w-56 sm:h-64 sm:w-64">
          <div
            aria-hidden="true"
            className="absolute inset-0 animate-spin-slow rounded-full shadow-[0_20px_50px_-15px_rgba(0,0,0,0.9)]"
            style={{
              animationPlayState: playing ? "running" : "paused",
              background:
                "repeating-radial-gradient(circle at center, #111 0 2px, #1d1c1a 2px 4px), #111",
            }}
          >
            <div className="absolute inset-[34%] overflow-hidden rounded-full bg-accent">
              {track.cover ? (
                <img src={asset(track.cover)} alt="" className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="h-2 w-2 rounded-full bg-night" />
                </div>
              )}
            </div>
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_200deg,transparent_0deg,rgba(255,255,255,0.08)_40deg,transparent_80deg)]" />
          </div>
          {/* Tone arm */}
          <span
            aria-hidden="true"
            className={`absolute -right-3 top-2 h-28 w-1.5 origin-top rounded-full bg-night-muted transition-transform duration-700 ${
              playing ? "rotate-[22deg]" : "rotate-[6deg]"
            }`}
          />
        </div>

        <div>
          <div className="flex items-start justify-between gap-4">
            <div aria-live="polite">
              <p className="label flex items-center gap-2 text-night-muted">
                {playing && (
                  <span className="flex h-3 items-end gap-[2px]" aria-hidden="true">
                    {[0, 0.2, 0.4].map((d) => (
                      <span
                        key={d}
                        className="h-full w-[2px] origin-bottom animate-eq bg-accent"
                        style={{ animationDelay: `${d}s` }}
                      />
                    ))}
                  </span>
                )}
                {playing ? "Now playing" : "Paused"}
              </p>
              <p className="mt-2 font-serif text-3xl leading-tight text-night-ink md:text-4xl">{track.title}</p>
              <p className="text-night-muted">{track.artist}</p>
            </div>
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              aria-pressed={playing}
              aria-label={playing ? "Pause turntable" : "Spin turntable"}
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-night-ink text-night transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              {playing ? <HiPause size={22} /> : <HiPlay size={22} className="translate-x-px" />}
            </button>
          </div>

          <ol className="mt-8 divide-y divide-night-line border-y border-night-line">
            {tracks.map((t, i) => (
              <li key={`${t.title}-${i}`} className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setCurrent(i);
                    setPlaying(true);
                  }}
                  aria-current={i === current ? "true" : undefined}
                  className={`flex flex-1 items-center gap-4 py-3 text-left transition-colors ${
                    i === current ? "text-night-ink" : "text-night-muted hover:text-night-ink"
                  }`}
                >
                  <span className={`w-6 font-mono text-xs ${i === current ? "text-accent" : ""}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">
                    {t.title} <span className="text-night-muted">— {t.artist}</span>
                  </span>
                </button>
                {t.link && (
                  <a
                    href={t.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Listen to ${t.title} by ${t.artist}`}
                    className="p-2 text-night-muted transition-colors hover:text-night-ink"
                  >
                    <HiArrowUpRight />
                  </a>
                )}
              </li>
            ))}
          </ol>

          {playlistEmbed && (
            <iframe
              title="Playlist"
              src={playlistEmbed}
              loading="lazy"
              className="mt-8 h-[152px] w-full rounded-xl border-0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default function BeyondSection() {
  return (
    <section id="beyond" className="section bg-night text-night-ink">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          room="05"
          eyebrow="The private collection"
          title={
            <>
              Beyond <span className="italic">Work</span>
            </>
          }
          intro="The things that shape how I see: paint on canvas, films that stay with me, and whatever is on repeat."
          dark
        />
        <div className="space-y-24">
          <Reveal>
            <Studio />
          </Reveal>
          <ScreeningRoom />
          <Reveal>
            <ListeningRoom />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
