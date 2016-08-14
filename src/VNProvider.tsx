import * as React from "react";

export interface VNProvider {
    done(): JSX.Element; // react jsx element for done
    failed(): JSX.Element; // react jsx element for failed
    running(): JSX.Element; // react jsx element for running
}
