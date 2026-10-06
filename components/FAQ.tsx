"use client";
import { useState } from "react";
export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y divide-slate/15 rounded-2xl bg-white">
      {items.map((it, i) => (
        <div key={i}>
          <h3><button type="button" aria-expanded={open === i} aria-controls={`faq-${i}`} id={`faq-b-${i}`} onClick={() => setOpen(open === i ? null : i)} className="flex min-h-[48px] w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
            {it.q}<span aria-hidden>{open === i ? "−" : "+"}</span></button></h3>
          <div id={`faq-${i}`} role="region" aria-labelledby={`faq-b-${i}`} hidden={open !== i} className="px-5 pb-4 text-slate/80">{it.a}</div>
        </div>
      ))}
    </div>
  );
}
