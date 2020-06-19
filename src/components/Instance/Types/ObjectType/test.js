require("../../../../tests/svelte_loader");

const ObjectType = require("./index.svelte");

import { render } from "@testing-library/svelte";
import tap from "tap";

tap.test("required", async (t) => {
  const { debug, container } = render(ObjectType, {
    definition: {
      properties: {
        foo: {},
        bar: {},
      },
      required: ["foo"],
    },
  });

  t.is(
    container.querySelector(".required").textContent,
    "foo",
    "foo is required"
  );
});