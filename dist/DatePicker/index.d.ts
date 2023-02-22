import React from 'react';
import { selectedDateType } from './DatePicker/';
interface pickerProps {
    onChange: (date: selectedDateType) => void;
    en?: boolean;
    disabledDateRange?: {
        start: selectedDateType;
        end: selectedDateType;
    };
}
declare type NativePickerProps = React.HTMLAttributes<HTMLElement> & pickerProps;
export declare type PickerProps = Partial<NativePickerProps>;
declare const Index: ({ onChange, en, disabledDateRange }: PickerProps) => JSX.Element;
export default Index;
