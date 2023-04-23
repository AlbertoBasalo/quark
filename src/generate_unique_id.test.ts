import { generateUniqueId } from "./generate_unique_id";

describe("The generateUniqueId function", () => {
  test("returns a string", () => {
    expect(typeof generateUniqueId()).toBe("string");
  });

  test("returns a hexadecimal string", () => {
    const uniqueId = generateUniqueId();
    expect(uniqueId).toMatch(/^[0-9a-f]+$/i);
    // expect(/^[0-9a-f]+$/i.test(uniqueId)).toBe(true);
  });

  test("returns a string of length 16", () => {
    const uniqueId = generateUniqueId();
    expect(uniqueId.length).toBe(16);
  });

  test("generates unique identifiers", () => {
    const uniqueIds = new Set<string>();
    for (let i = 0; i < 10000; i++) {
      const uniqueId = generateUniqueId();
      expect(uniqueIds).not.toContain(uniqueId);
      uniqueIds.add(uniqueId);
    }
  });
});
