import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { CONTACT_EMAIL } from "@/lib/affiliate";
const pages: Record<string, { title: string; body: string[] }> = {
  privacy: { title: "Privacy Policy", body: ["PrimeGearLab does not collect personal data through forms on this site. If analytics or advertising pixels are enabled, they may collect usage data such as pages viewed and referral source.", "When you click a link you leave this site; the merchant's own privacy policy applies there.", `Questions: ${CONTACT_EMAIL}.`] },
  terms: { title: "Terms of Service", body: ["This site provides general product information and affiliate links. Content is provided as-is and may not reflect current merchant prices, offers or policies.", "PrimeGearLab is not the seller. Orders, shipping, returns and warranties are handled by the merchant.", "Have counsel review these terms before relying on them."] },
  "affiliate-disclosure": { title: "Affiliate Disclosure", body: ["PrimeGearLab is an independent publisher. We may receive a commission if you make a purchase through links on this page at no extra cost to you.", "We are not Poplight and do not operate its store."] },
  contact: { title: "Contact Us", body: [`Email us at ${CONTACT_EMAIL}.`] },
};
export function generateStaticParams() { return Object.keys(pages).map((slug) => ({ slug })); }
export default function Legal({ params }: { params: { slug: string } }) {
  const p = pages[params.slug]; if (!p) notFound();
  return (<><main className="mx-auto max-w-3xl space-y-4 px-5 py-12"><Link href="/" className="underline">← PrimeGearLab</Link><h1 className="text-3xl font-bold">{p.title}</h1>{p.body.map((t, i) => <p key={i}>{t}</p>)}</main><Footer /></>);
}
