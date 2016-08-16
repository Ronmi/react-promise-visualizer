"use strict";
const React = require("react");
(function (RenderStates) {
    RenderStates[RenderStates["INIT"] = 0] = "INIT";
    RenderStates[RenderStates["DONE"] = 1] = "DONE";
    RenderStates[RenderStates["FAILED"] = 2] = "FAILED";
    RenderStates[RenderStates["RUNNING"] = 3] = "RUNNING";
})(exports.RenderStates || (exports.RenderStates = {}));
var RenderStates = exports.RenderStates;
class Visualizer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            state: RenderStates.INIT,
        };
        this.running_id = -1; // so id will start from zero
        this.config = {
            className: this.props.className || "",
            provider: this.props.provider,
            duration: (this.props.duration > 0) ? this.props.duration : 3000,
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
        return (React.createElement("span", {className: this.config.className, style: style}, this.getNode()));
    }
    // internal methods
    getNode() {
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
    showRunning() {
        this.running_id++;
        this.setState({ state: RenderStates.RUNNING });
        return this.running_id;
    }
    showDone(id) {
        if (id != this.running_id) {
            // this work has been overwritten, do not show changes.
            return;
        }
        this.setState({ state: RenderStates.DONE });
    }
    showFailed(id) {
        if (id != this.running_id) {
            // this work has been overwritten, do not show changes.
            return;
        }
        this.setState({ state: RenderStates.FAILED });
    }
    clear(id) {
        if (id != this.running_id) {
            // this work has been overwritten, do not show changes.
            return;
        }
        this.setState({ state: RenderStates.INIT });
    }
    // exported API methods
    // show visualizes the promise passed in, overwrites previous state.
    show(p) {
        let handler = this.showRunning();
        return new Promise((res, rej) => {
            p.then((t) => {
                this.showDone(handler);
                setTimeout(this.clear.bind(this, handler), this.config.duration);
                res(t);
            }, (e) => {
                this.showFailed(handler);
                setTimeout(this.clear.bind(this, handler), this.config.duration);
                rej(e);
            });
        });
    }
}
exports.Visualizer = Visualizer;
//# sourceMappingURL=Visualizer.js.map