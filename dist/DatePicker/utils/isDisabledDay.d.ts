import { selectedDateType } from '../DatePicker';
interface disabledDateRangeType {
    start: selectedDateType;
    end: selectedDateType;
}
declare const isDisabledDay: (date: selectedDateType, disabledDateRange: disabledDateRangeType) => boolean;
export default isDisabledDay;
