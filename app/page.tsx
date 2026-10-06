import Image from "next/image";
import { CTA, StickyMobileCTA } from "@/components/CTA";
import { ColorComparison } from "@/components/ColorComparison";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
const F = "https://thepoplight.com/cdn/shop/files/";
const features = [
  ["No tools, no wiring", "Stick-on base with a built-in level. One pair of tape comes on each Poplight."],
  ["USB-C rechargeable", "Battery lasts up to 9 hours per charge, or pop it out to charge elsewhere."],
  ["Dimmable, 3 color temps", "3 watts (300 lumens). Warm, neutral and cool via the free iOS/Android app."],
  ["Renter-friendly", "Removes without drilling; the merchant describes removal as damage-free when done as directed."],
];
const uses = [
  ["Bedroom reading light", "Black_Poplights_Rechargeable_Wall_Sconces_Hero_Image_Battery_Operated_Wall_Light-min_compressed.png?v=1787681150", "Matte black Poplights on both sides of a bed"],
  ["Living room accent", "warm_lighting_room_upgrade_compressed.jpg?v=1787681270", "Matte black Poplight in warm light beside books and a vase"],
  ["Reading nook or hallway", "rechargeable_wall_sconce_stylish_interior_compressed.jpg?v=1787681318", "Reading nook accented with a Poplight wall sconce"],
];
const faq = [
  { q: "Who is PrimeGearLab?", a: "An independent affiliate publisher. We are not Poplight and not its official store. Purchases are completed on the Poplight website." },
  { q: "Do I need tools or an electrician?", a: "Per Poplight, no: it sticks on and is battery powered. Wall surfaces vary, so follow Poplight's install tips." },
  { q: "Can I change the bulb?", a: "Poplight uses an integrated LED, so there is no bulb to change." },
  { q: "What about shipping, returns and warranty?", a: "Poplight's site mentions 30-day returns with original packaging and a lifetime guarantee. Always confirm current terms on their site; we don't set them." },
  { q: "Is the price final?", a: "Prices shown were observed on Poplight's site and can change. The merchant's page is the source of truth." },
];
export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between px-5 py-4"><span className="text-xl font-bold">PrimeGearLab</span><span className="text-xs text-slate/70">Independent product guide · Affiliate links</span></header>
      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-8 md:grid-cols-2">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-amber">Renter-friendly wall lighting</p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">Cozy wall sconces. No drill, no wiring.</h1>
            <p className="text-lg text-slate/80">Poplight is a rechargeable, stick-on wall light for renters, homeowners and decorators. We summarize what it does and where to buy it.</p>
            <div className="flex flex-wrap gap-3"><CTA path="/products/sagegreen">Shop the Bestseller</CTA><CTA path="/collections/poplight" variant="ghost">See All Colors</CTA></div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl"><Image src={`${F}Sage_Green_Hero_Lights_On_Desktop.jpg?v=1789791505`} alt="Sage green Poplight wall sconces lit in a cozy room" fill priority sizes="(min-width:768px) 50vw, 100vw" className="object-cover" /></div>
        </section>
        <section className="mx-auto max-w-6xl px-5 py-10"><h2 className="mb-6 text-2xl font-bold">Why people consider it</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{features.map(([t, d]) => <div key={t} className="rounded-2xl bg-white p-5"><h3 className="font-semibold">{t}</h3><p className="mt-2 text-sm text-slate/80">{d}</p></div>)}</div></section>
        <section className="mx-auto max-w-6xl px-5 py-10"><h2 className="mb-6 text-2xl font-bold">Where it fits</h2>
          <div className="grid gap-5 md:grid-cols-3">{uses.map(([t, src, alt]) => <figure key={t}><div className="relative aspect-[4/3] overflow-hidden rounded-2xl"><Image src={`${F}${src}`} alt={alt} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" /></div><figcaption className="mt-2 font-semibold">{t}</figcaption></figure>)}</div></section>
        <ColorComparison />
        <section className="mx-auto max-w-3xl px-5 py-10"><h2 className="mb-6 text-2xl font-bold">Questions</h2><FAQ items={faq} /></section>
        <section className="bg-slate px-5 py-12 text-center text-white"><h2 className="text-2xl font-bold">Ready to see the options?</h2><p className="mx-auto my-3 max-w-xl text-white/80">You&apos;ll complete your purchase on Poplight&apos;s own site.</p><CTA>Go to Poplight</CTA></section>
      </main>
      <Footer /><StickyMobileCTA />
    </>
  );
}
