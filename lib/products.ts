export type ColorVariant = {
  name: string;
  slug: string;
  price: string;
  image: string; // verified Poplight CDN product photo (square, 1254x1254 per merchant og:image)
  alt: string;
};
const CDN = "https://thepoplight.com/cdn/shop/files/";
const V = "?v=1789682697";
// Prices observed on the merchant site; they can change.
export const colorVariants: ColorVariant[] = [
  { name: "Marigold", slug: "marigold", price: "$99", image: `${CDN}Marigold_PDP_min.jpg${V}`, alt: "Marigold Poplight wall sconce on a white wall" },
  { name: "Sage Green", slug: "sagegreen", price: "$89 (sale at last check)", image: `${CDN}Sage_Green_PDP_white_background_min.jpg${V}`, alt: "Sage green Poplight wall sconce on a white background" },
  { name: "Dusty Rose", slug: "dustyrose", price: "$99", image: `${CDN}Dusty_Rose_PDP_min.jpg${V}`, alt: "Dusty rose Poplight wall sconce on a white wall" },
  { name: "Matte Black", slug: "black", price: "$99", image: `${CDN}Black_PDP_min.jpg${V}`, alt: "Matte black Poplight wall sconce on a white wall" },
  { name: "Vermillion Red", slug: "vermillionred", price: "$99", image: `${CDN}Vermillion_Red_Photo_min.jpg${V}`, alt: "Vermillion red Poplight wall sconce on a white wall" },
  { name: "Blue", slug: "blue", price: "$99", image: `${CDN}Blue_PDP_min.jpg${V}`, alt: "Blue Poplight wall sconce on a white wall" },
  { name: "White", slug: "popwhite", price: "$99", image: `${CDN}White_PDP_min.jpg${V}`, alt: "White Poplight wall sconce on a white wall" },
  { name: "Mushroom", slug: "mushroom-rechargeable-wall-sconce", price: "$89 (sale at last check)", image: `${CDN}Mushroom_PDP_min.jpg${V}`, alt: "Mushroom Poplight wall sconce on a white wall" },
];
