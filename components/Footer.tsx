import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/affiliate";
export function Footer() {
  return (
    <footer className="bg-slate px-5 pb-28 pt-10 text-sm text-white md:pb-10">
      <div className="mx-auto max-w-6xl space-y-4">
        <p className="text-lg font-bold">PrimeGearLab</p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/legal/privacy">Privacy Policy</Link><Link href="/legal/terms">Terms of Service</Link>
          <Link href="/legal/affiliate-disclosure">Affiliate Disclosure</Link><Link href="/legal/contact">Contact Us</Link>
        </nav>
        <p><a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a></p>
        <p>We may receive a commission if you make a purchase through links on this page at no extra cost to you.</p>
        <p>© 2026 PrimeGearLab. All rights reserved. Managed &amp; Operated in partnership with authorized media agency partners.</p>
      </div>
    </footer>
  );
}
