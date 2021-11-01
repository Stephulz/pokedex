import typeToColor from "./typeToColor";

describe("TypeToColor - Unit Tests", () => {
  it("should return an color", () => {
    const color = typeToColor.get("fire");
    expect(color).toBe("#EE8130");
  });

  it("shouldn't return an color", () => {
    const color = typeToColor.get("asdsadas");
    expect(color).toBe(undefined);
  });
});
