import { slugfy } from "../slugfy";

// describe("Slugfy", () => {
//     it("converts a string to a slug", () => {
//         expect("Something").toBe("Something");
//         expect("else").toBe("else");
//     });
// });


test("Slugfy converts a string to a slug", () => {
    expect(slugfy("Tab 1")).toBe("tab-1");
    expect(slugfy("Amy's Tab")).toBe("amys-tab");
    expect(slugfy("Amy-Tab")).toBe("amy-tab");
    expect(slugfy("Amy! Tab")).toBe("amy-tab");
});
