/// <reference types="react" />
export declare enum iconType {
    circle = "circle",
    box = "box"
}
interface CBProps {
    displayIcon?: boolean;
    icon?: iconType;
    isSelected?: boolean;
}
declare function CheckBox(props: CBProps): JSX.Element;
export default CheckBox;
