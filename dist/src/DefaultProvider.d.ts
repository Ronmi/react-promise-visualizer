import { VNProvider } from "./VNProvider";
export declare class DefaultProvider implements VNProvider {
    done(): JSX.Element;
    failed(): JSX.Element;
    running(): JSX.Element;
}
