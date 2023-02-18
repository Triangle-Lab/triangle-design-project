import classNames from 'classnames';
import React from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';

export interface data<T> {
  value: T;
  label: string;
}

interface inputProps<T> {
  data: Array<data<T>>; //The data of the selected item
  itemColor?: string; //The color of the selected item
  width?: string; //The width of the input box
  height?: string; //The height of the input box
  defaultShow?: boolean; //Whether to display the input box
  placeholder?: string; //The placeholder of the input box
  deleteItem?: (value: T) => void; //Delete the selected item
  showTree?: (showTree: boolean) => void; //Whether to display the drop-down box
  inputRef?: React.RefObject<HTMLDivElement>; //The reference of the input box
}

function TreeSelectInput<T>(props: inputProps<T>) {
  const {
    data,
    itemColor,
    width,
    height,
    deleteItem,
    showTree,
    defaultShow,
    inputRef,
    placeholder,
    ...restProps
  } = props;
  let show = defaultShow;
  const inputClass = classNames('inputClass', {
    'inputClass-active': show === true,
  });

  const randerInput = (data: Array<data<T>>) => {
    return data.map((item: data<T>) => {
      return (
        <div className="inputblock" key={`${item.value}`}>
          <div className="blocklabal">{item.label}</div>
          <RxCross1
            className="cross"
            onClick={() => {
              deleteItem && deleteItem(item.value);
            }}
          />
        </div>
      );
    });
  };

  return (
    <div
      ref={inputRef}
      className={inputClass}
      style={{ width: width, height: height }}
      {...restProps}
    >
      <div className="itemsClass">
        {randerInput(data)}
        {data.length === 0 && (
          <div className="inputPlaceholder" data-testid='Select an item' >{placeholder}</div>
        )}
      </div>
      <AiOutlineDown
        className="cross"
        onClick={() => {
          show = !show;
          showTree && showTree(show);
        }}
      />
    </div>
  );
}

TreeSelectInput.defaultProps = {
  itemColor: 'blue',
  width: '200px',
  height: '30px',
  placeholder: '请选择',
};

export default TreeSelectInput;
