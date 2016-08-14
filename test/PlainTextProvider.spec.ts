/// <reference path="../typings/globals/mocha/index.d.ts" />

import { PlainTextProvider } from "../src/PlainTextProvider";
import { VNProviderSpec } from "./VNProvider.helper";

describe("class PlainTextProvider", () => {
  VNProviderSpec(function() {
    return new PlainTextProvider();
  });
});
