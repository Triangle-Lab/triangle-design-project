interface currentMonthProps {
    year: number;
    month: number;
}
interface dateType {
    date: number;
    isCurrentMonth: boolean;
}
declare const getCurrentMonth: (props: currentMonthProps) => dateType[];
export default getCurrentMonth;
