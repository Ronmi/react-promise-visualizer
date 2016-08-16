export interface VNProvider {
    done(): JSX.Element;
    failed(): JSX.Element;
    running(): JSX.Element;
}
