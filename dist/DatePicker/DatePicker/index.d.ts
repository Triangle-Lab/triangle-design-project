/// <reference types="react" />
export interface selectedDateType {
    year: number;
    month: number;
    day: number;
}
interface DatePickerProps {
    onChange: (date: selectedDateType) => void;
    en?: boolean;
    disabledDateRange?: {
        start: selectedDateType;
        end: selectedDateType;
    };
}
declare const DatePicker: {
    ({ onChange, en, disabledDateRange }: DatePickerProps): JSX.Element;
    defaultProps: {
        en: boolean;
    };
};
export default DatePicker;
