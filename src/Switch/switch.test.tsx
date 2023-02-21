import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Switch from './index';

describe('Switch component', () => {
  it('should render with default props', () => {
    let wrapper = render(<Switch onSwitch={() => { }} switchId="switch1" />);
    const inputElement = wrapper.container.querySelector("#switch1") as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
  });

  it('should call onSwitch callback function when clicked', () => {
    const onSwitchMock = jest.fn();
    let wrapper = render(<Switch onSwitch={onSwitchMock} switchId="switch3" />);
    const inputElement = wrapper.container.querySelector("#switch3") as HTMLInputElement;
    fireEvent.click(inputElement);
    expect(onSwitchMock).toHaveBeenCalledWith(true);
  });
});
