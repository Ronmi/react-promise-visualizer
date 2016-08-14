import * as React from "react";
import { VNProvider } from "./VNProvider";

export interface PlainTextProviderConfig {
    done_text?: string;
    done_class?: string;
    failed_text?: string;
    failed_class?: string;
    running_text?: string;
    running_class?: string;
}

export class PlainTextProvider implements VNProvider {
    private config: PlainTextProviderConfig;

    constructor(cfg?: PlainTextProviderConfig) {
	this.config = {
	    done_text: (cfg && cfg.done_text) || "OK",
	    done_class: (cfg && cfg.done_class) || "",
	    failed_text: (cfg && cfg.failed_text) || "NO",
	    failed_class: (cfg && cfg.failed_class) || "",
	    running_text: (cfg && cfg.running_text) || "...",
	    running_class: (cfg && cfg.running_class) || "",
	};
    }

    done(): JSX.Element {
	return (
	    <span className={this.config.done_class}>
		{this.config.done_text}
	    </span>
	);
    }
    failed(): JSX.Element {
	return (
	    <span className={this.config.failed_class}>
		{this.config.failed_text}
	    </span>
	);
    }
    running(): JSX.Element {
	return (
	    <span className={this.config.running_class}>
		{this.config.running_text}
	    </span>
	);
    }
}
