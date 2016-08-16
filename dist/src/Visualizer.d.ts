import * as React from "react";
import { VNProvider } from "./VNProvider";
export interface Config {
    className?: string;
    provider: VNProvider;
    duration?: number;
}
export declare enum RenderStates {
    INIT = 0,
    DONE = 1,
    FAILED = 2,
    RUNNING = 3,
}
export interface State {
    state?: RenderStates;
}
export declare class Visualizer extends React.Component<Config, State> {
    private running_id;
    private prevNode;
    private config;
    constructor(props?: Config, context?: any);
    render(): JSX.Element;
    private getNode();
    private showRunning();
    private showDone(id);
    private showFailed(id);
    private clear(id);
    show<T>(p: Promise<T>): Promise<T>;
}
