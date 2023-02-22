/// <reference types="react" />
interface SwitchProps {
    onSwitch: (isOn: boolean) => void;
    onColor?: string;
    switchId: string;
}
declare const Switch: {
    ({ onSwitch, onColor, switchId }: SwitchProps): JSX.Element;
    defaultProps: {
        onColor: string;
    };
};
export default Switch;
