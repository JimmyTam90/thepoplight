import Image from "next/image";
import { CTA } from "@/components/CTA";
import { colorVariants } from "@/lib/products";

export function ColorComparison() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-10">
      <h2 className="text-2xl font-bold">Compare colors</h2>
      <p className="mb-6 text-sm text-slate/70">Every color has the same listed features. Prices observed on Poplight&apos;s site; check there for current pricing.</p>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {colorVariants.map((c, i) => (
          <li key={c.slug} className="flex flex-col overflow-hidden rounded-2xl bg-white">
            <div className="relative aspect-square w-full bg-cream">
              <Image src={c.image} alt={c.alt} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 50vw" className="object-cover" loading={i < 2 ? "eager" : "lazy"} />
            </div>
            <div className="flex flex-1 flex-col justify-between gap-3 p-3 sm:p-5">
              <div>
                <h3 className="font-semibold">{c.name} Poplight</h3>
                <p className="text-sm text-slate/80">{c.price}</p>
              </div>
              <CTA path={`/products/${c.slug}`}>View {c.name}</CTA>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-4"><CTA path="/products/build-a-custom-bundle" variant="ghost">Build a Custom Bundle</CTA></p>
    </section>
  );
}
