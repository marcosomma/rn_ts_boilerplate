/**
 * Shades a color by a given percentage.
 * 
 * @param color - The color to shade in hexadecimal format.
 * @param percent - The percentage by which to shade the color.
 * @returns The shaded color in hexadecimal format.
 */
const shadeColor = (color: string, percent: number): string => {
  var R = parseInt(color.substring(1, 3), 16);
  var G = parseInt(color.substring(3, 5), 16);
  var B = parseInt(color.substring(5, 7), 16);

  R = parseInt(((R * (100 + percent)) / 100).toString());
  G = parseInt(((G * (100 + percent)) / 100).toString());
  B = parseInt(((B * (100 + percent)) / 100).toString());

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  R = Math.round(R);
  G = Math.round(G);
  B = Math.round(B);

  var RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
  var GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
  var BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);

  return "#" + RR + GG + BB;
};

/**
 * Converts an RGBA color value to its corresponding hexadecimal representation.
 * @param rgba - The RGBA color value to convert.
 * @returns The hexadecimal representation of the RGBA color value.
 */
const rgbaToHex = (rgba: {
  r: number;
  g: number;
  b: number;
  a?: number;
}): string => {
  let r = rgba.r.toString(16);
  let g = rgba.g.toString(16);
  let b = rgba.b.toString(16);
  let a = rgba.a !== undefined ? rgba.a.toString(16) : "";

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;
  if (a.length == 1) a = "0" + a;

  return "#" + r + g + b + a;
};

/**
 * Converts a hexadecimal color code to RGBA format.
 * @param hex - The hexadecimal color code to convert.
 * @returns An object containing the red, green, blue, and alpha values of the converted color.
 */
const hexToRgba = (
  hex: string
): { r: number; g: number; b: number; a?: number } => {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);
  let a = hex.length >= 9 ? parseInt(hex.slice(7, 9), 16) / 255 : undefined;

  return { r, g, b, a };
};

export { shadeColor, rgbaToHex, hexToRgba };
