import { VNProvider } from "./VNProvider";
export interface PlainTextProviderConfig {
    done_text?: string;
    done_class?: string;
    failed_text?: string;
    failed_class?: string;
    running_text?: string;
    running_class?: string;
}
export declare class PlainTextProvider implements VNProvider {
    private config;
    constructor(cfg?: PlainTextProviderConfig);
    done(): JSX.Element;
    failed(): JSX.Element;
    running(): JSX.Element;
}
