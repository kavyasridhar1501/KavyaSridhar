"use client";

import { useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight, HiXMark } from "react-icons/hi2";
import { Reveal, SectionHeading, asset } from "./ui";
import { paintings, type Painting } from "@/data/beyond";

const ratios = ["aspect-[4/5]", "aspect-square", "aspect-[3/4]", "aspect-[5/4]", "aspect-[4/5]"];

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
          intro="When I step away from the keyboard, I paint. A few pieces from the studio."
          dark
        />
        <Reveal>
          <Studio />
        </Reveal>
      </div>
    </section>
  );
}
