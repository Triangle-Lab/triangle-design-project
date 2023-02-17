import classNames from 'classnames';
import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdOutlineRadioButtonUnchecked,
  MdRadioButtonChecked,
} from 'react-icons/md';
// import { MdCheckBox } from 'react-icons/md';
import { MdOutlineCheckBox } from 'react-icons/md';

export enum iconType {
  circle = 'circle',
  box = 'box',
}

interface CBProps {
  displayIcon?: boolean;
  icon?: iconType;
  isSelected?: boolean;
}

function CheckBox(props: CBProps) {
  const { displayIcon, icon, isSelected } = props;
  const checkBoxClass = classNames('checkBox', {
    'checkBox-checked': isSelected,
    'checkBox-unchecked': !isSelected,
  });

  return (
    <>
      {displayIcon &&
        (icon === iconType.circle ? (
          isSelected ? (
            <MdRadioButtonChecked className={checkBoxClass} />
          ) : (
            <MdOutlineRadioButtonUnchecked className={checkBoxClass} />
          )
        ) : isSelected ? (
          <MdOutlineCheckBox className={checkBoxClass} />
        ) : (
          <MdCheckBoxOutlineBlank className={checkBoxClass} />
        ))}
    </>
  );
}

export default CheckBox;
