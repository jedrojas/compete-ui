import palette from 'google-palette';

export const generateColor = (name: string) => {
  const PALETTE_SIZE = 20;

  const colorPalette = palette("mpn65", PALETTE_SIZE);
  let hashVal = 0;
  for (const c of name) {
    hashVal += c.charCodeAt(0);
  }
  hashVal = hashVal % PALETTE_SIZE;

  return `#${colorPalette[hashVal]}`;
};
