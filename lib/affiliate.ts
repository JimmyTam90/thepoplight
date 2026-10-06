export const DEFAULT_AFFILIATE_URL = "https://thepoplight.com/?snowball=BUI46838";
export const MERCHANT_ORIGIN = new URL(DEFAULT_AFFILIATE_URL).origin;
const TAG = "snowball=BUI46838";
// Deep-link format (product URL + same snowball param) is INFERRED, not verified. Set NEXT_PUBLIC_AFFILIATE_DEEPLINKS=off to fall back to the default URL.
export function productLink(path?: string): string {
  if (!path || process.env.NEXT_PUBLIC_AFFILIATE_DEEPLINKS === "off") return DEFAULT_AFFILIATE_URL;
  return `${MERCHANT_ORIGIN}${path}?${TAG}`;
}
export const CONTACT_EMAIL = "daniaengracia26377@gmail.com";
export const SITE = "https://primegearlab.com";
