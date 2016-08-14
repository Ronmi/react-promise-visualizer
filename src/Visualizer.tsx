import * as React from "react";
import { VNProvider } from "./VNProvider";
import { PlainTextProvider } from "./PlainTextProvider";

export interface Config {
    className?: string; // css class for container span
    provider: VNProvider; // visual notification provider
    duration?: number; // visible duration for done and failed in ms
}

export enum RenderStates {
    INIT,
    DONE,
    FAILED,
    RUNNING
}

export interface State {
    state?: RenderStates;
}

export class Visualizer extends React.Component<Config, State> {
    private running_id: number; // internal identifier for current running work
    private prevNode: JSX.Element;
    private config: Config;

    constructor(props?: Config, context?: any) {
        super(props, context);

        this.state = {
            state: RenderStates.INIT,
        };

        this.running_id = -1; // so id will start from zero
	this.config = {
	    className: this.props.className || "",
	    provider: this.props.provider,
	    duration: (this.props.duration>0)?this.props.duration:3000,
	};
    }

    render() {
        let o = 1;
        if (this.state.state == RenderStates.INIT) {
            o = 0;
        }
        const style = {
            "opacity": o,
	    "WebkitOpacity": o,
	    "OOpacity": o,
	    "MozOpacity": o,
	    "msOpacity": o,
        };
        return (
            <span className={this.config.className} style={style}>
                {this.getNode()}
            </span>
        );
    }

    // internal methods
    private getNode() {
        switch (this.state.state) {
            case RenderStates.DONE:
                this.prevNode = this.config.provider.done();
		break;
            case RenderStates.FAILED:
                this.prevNode = this.config.provider.failed();
		break;
            case RenderStates.RUNNING:
                this.prevNode = this.config.provider.running();
		break;
        }
        return this.prevNode;
    }
    private showRunning(): number {
        this.running_id++;
        this.setState({ state: RenderStates.RUNNING });
        return this.running_id;
    }
    private showDone(id: number) {
        if (id != this.running_id) {
            // this work has been overwritten, do not show changes.
            return;
        }
        this.setState({ state: RenderStates.DONE });
    }
    private showFailed(id: number) {
        if (id != this.running_id) {
            // this work has been overwritten, do not show changes.
            return;
        }
        this.setState({ state: RenderStates.FAILED });
    }
    private clear(id: number) {
        if (id != this.running_id) {
            // this work has been overwritten, do not show changes.
            return;
        }
        this.setState({ state: RenderStates.INIT });
    }

    // exported API methods

    // show visualizes the promise passed in, overwrites previous state.
    show<T>(p: Promise<T>): Promise<T> {
        let handler = this.showRunning();
        return new Promise<T>((res, rej) => {
            p.then(
                (t: T) => {
                    this.showDone(handler);
                    setTimeout(this.clear.bind(this, handler), this.config.duration);
                    res(t);
                },
                (e: any) => {
                    this.showFailed(handler);
                    setTimeout(this.clear.bind(this, handler), this.config.duration);
                    rej(e);
                }
            );
        });
    }
}
