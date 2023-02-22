import { type FC, type ReactElement } from 'react';
import { type InputProps } from '../Input';
interface DataSourceObject {
    value: string;
}
export declare type DataSourceType<T = {}> = T & DataSourceObject;
export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
    fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
    onSelect?: (item: DataSourceType) => void;
    renderOption?: (item: DataSourceType) => ReactElement;
    size?: 'lg' | 'sm';
}
export declare const AutoComplete: FC<AutoCompleteProps>;
export default AutoComplete;
