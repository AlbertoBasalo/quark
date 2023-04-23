/**
 * Generates a unique ID string.
 * @example
 * const uniqueId = generateUniqueId();
 * console.log(uniqueId); // Output: e.g., "17a8a241fb"
 * @returns A unique ID string
 */

export function generateUniqueId(): string {
  // Get current timestamp in milliseconds
  const timestamp = new Date().getTime();

  // Generate a random discriminator between 0 and 255 (1 byte)
  const discriminator = Math.floor(Math.random() * 256);

  // Convert the timestamp and discriminator to hexadecimal strings
  const timestampHex = timestamp.toString(16);
  const discriminatorHex = discriminator.toString(16);

  // Pad the hexadecimal strings with leading zeros to ensure fixed length
  const paddedTimestampHex = timestampHex.padStart(14, "0");
  const paddedDiscriminatorHex = discriminatorHex.padStart(2, "0");

  // Concatenate the padded hexadecimal strings
  const uniqueId = paddedTimestampHex + paddedDiscriminatorHex;

  return uniqueId;
}
