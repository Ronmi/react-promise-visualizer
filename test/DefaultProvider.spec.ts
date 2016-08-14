/// <reference path="../typings/globals/mocha/index.d.ts" />

import { DefaultProvider } from "../src/DefaultProvider";
import { VNProviderSpec } from "./VNProvider.helper";

describe("class DefaultProvider", () => {
  VNProviderSpec(function() {
    return new DefaultProvider();
  });
});
