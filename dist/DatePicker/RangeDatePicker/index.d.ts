import React from 'react';
import { selectedDateType } from '../DatePicker/';
export interface selectedDateRangeType {
    start: selectedDateType;
    end: selectedDateType;
}
interface RangePickerProps {
    onChange: (rangeDate: selectedDateRangeType) => void;
    en?: boolean;
    disabledDateRange?: {
        start: selectedDateType;
        end: selectedDateType;
    };
}
declare type NativePickerProps = React.HTMLAttributes<HTMLElement> & RangePickerProps;
export declare type PickerProps = Partial<NativePickerProps>;
declare const Index: ({ onChange, en, disabledDateRange }: PickerProps) => JSX.Element;
export default Index;
