"use strict";
const React = require("react");
class PlainTextProvider {
    constructor(cfg) {
        this.config = {
            done_text: (cfg && cfg.done_text) || "OK",
            done_class: (cfg && cfg.done_class) || "",
            failed_text: (cfg && cfg.failed_text) || "NO",
            failed_class: (cfg && cfg.failed_class) || "",
            running_text: (cfg && cfg.running_text) || "...",
            running_class: (cfg && cfg.running_class) || "",
        };
    }
    done() {
        return (React.createElement("span", {className: this.config.done_class}, this.config.done_text));
    }
    failed() {
        return (React.createElement("span", {className: this.config.failed_class}, this.config.failed_text));
    }
    running() {
        return (React.createElement("span", {className: this.config.running_class}, this.config.running_text));
    }
}
exports.PlainTextProvider = PlainTextProvider;
//# sourceMappingURL=PlainTextProvider.js.map