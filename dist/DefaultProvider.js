/// <reference path="../typings/globals/require/index.d.ts" />
"use strict";
const React = require("react");
const ok = require("../assets/ok.svg");
const failed = require("../assets/failed.svg");
const running = require("../assets/running.svg");
const css = require("../assets/animation.css");
class DefaultProvider {
    done() {
        return (React.createElement("img", {src: ok, style: { width: "inherit", height: "inherit" }}));
    }
    failed() {
        return (React.createElement("img", {src: failed, style: { width: "inherit", height: "inherit" }}));
    }
    running() {
        return (React.createElement("span", {className: css.spin}, React.createElement("img", {src: running, style: { width: "inherit", height: "inherit" }})));
    }
}
exports.DefaultProvider = DefaultProvider;
//# sourceMappingURL=DefaultProvider.js.map