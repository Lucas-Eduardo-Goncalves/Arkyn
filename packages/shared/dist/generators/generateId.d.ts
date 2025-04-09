/**
 * Generates a unique identifier (UUID) in the specified format and type.
 *
 * @param type - The desired output type of the UUID. Can be:
 *   - `"text"`: Returns the UUID as a string.
 *   - `"binary"`: Returns the UUID as a `Uint8Array` in binary format.
 * @param format - The version of the UUID to generate. Can be:
 *   - `"v4"`: Generates a random UUID (version 4).
 *   - `"v7"`: Generates a time-ordered UUID (version 7).
 * @returns The generated UUID in the specified type and format.
 *   - If `type` is `"text"`, a string representation of the UUID is returned.
 *   - If `type` is `"binary"`, a `Uint8Array` representation of the UUID is returned.
 * @throws {Error} If an invalid `type` or `format` is provided.
 *
 * @example
 * // Generate a version 4 UUID as a string
 * const idTextV4 = generateId("text", "v4");
 * console.log(idTextV4); // e.g., "550e8400-e29b-41d4-a716-446655440000"
 *
 * @example
 * // Generate a version 7 UUID as binary
 * const idBinaryV7 = generateId("binary", "v7");
 * console.log(idBinaryV7); // Uint8Array([...])
 */
declare function generateId(type: "text", format: "v4" | "v7"): string;
declare function generateId(type: "binary", format: "v4" | "v7"): Uint8Array;
export { generateId };
//# sourceMappingURL=generateId.d.ts.map