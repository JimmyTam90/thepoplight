import { productLink } from "@/lib/affiliate";
const base = "inline-flex min-h-[44px] items-center justify-center rounded-full px-6 py-3 font-semibold transition-transform duration-100 active:scale-95 pointer-events-auto";
export function CTA({ path, children, variant = "solid" }: { path?: string; children: React.ReactNode; variant?: "solid" | "ghost" }) {
  const style = variant === "solid" ? "bg-amber text-white hover:bg-slate" : "border-2 border-slate text-slate hover:bg-slate hover:text-white";
  return <a href={productLink(path)} target="_blank" rel="noopener noreferrer" className={`${base} ${style}`}>{children}</a>;
}
export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 pointer-events-auto bg-cream/95 p-3 shadow-[0_-4px_12px_rgba(0,0,0,.1)] md:hidden" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
      <a href={productLink("/products/sagegreen")} target="_blank" rel="noopener noreferrer" className={`${base} w-full bg-amber text-white`}>See Poplight Options</a>
    </div>
  );
}
