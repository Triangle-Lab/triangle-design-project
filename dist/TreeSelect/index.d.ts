/// <reference types="react" />
export interface TreeNode<T> {
    value: T;
    label: string;
    children?: Array<TreeNode<T>>;
    unfold?: boolean;
    defaultSelected?: boolean;
}
export declare enum selectType {
    circle = "circle",
    box = "box"
}
interface TreeSelectProps<T> {
    data: Array<TreeNode<T>>;
    isSingle?: boolean;
    checkable?: boolean;
    expandable?: boolean;
    checkboxType?: selectType;
    inputWidth?: string;
    inputHeight?: string;
    displaySelect?: boolean;
    placeholder?: string;
    needInput?: boolean;
    dropDownPosition?: 'bottom' | 'leftBottom' | 'rightBottom';
    onSelect?: (selected: Array<TreeNode<T>>) => void;
    onExpand?: (expanded: Set<T>) => void;
}
declare function TreeSelect<T>(props: TreeSelectProps<T>): JSX.Element;
declare namespace TreeSelect {
    var defaultProps: {
        isSingle: boolean;
        checkable: boolean;
        expandable: boolean;
        unfold: boolean;
        inputWidth: string;
        inputHeight: string;
        displaySelect: boolean;
        checkboxType: selectType;
        dropDownPosition: string;
        needInput: boolean;
    };
}
export default TreeSelect;
