describe("@esm-bundle/markdown-it-emoji", () => {
  it("can load the esm bundle without dying", () => {
    return import("../esm/index.js");
  });
});
