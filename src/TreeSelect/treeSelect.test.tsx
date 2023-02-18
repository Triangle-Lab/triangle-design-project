import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import TreeSelect, { TreeNode, selectType } from './index';

const data: Array<TreeNode<string>> = [
  {
    value: '1',
    label: 'Item 1',
    children: [
      { value: '1.1', label: 'Subitem 1.1' },
      { value: '1.2', label: 'Subitem 1.2' },
    ],
  },
  {
    value: '2',
    label: 'Item 2',
  },
];

describe('TreeSelect component', () => {
  it('should render with default props', () => {
    render(<TreeSelect data={data} />);
    const inputElement = screen.getByTestId('treeSelect');
    expect(inputElement).toBeInTheDocument();
  });

  it('should call onSelect callback function when a node is selected', () => {
    const onSelectMock = jest.fn();
    render(<TreeSelect data={data} onSelect={onSelectMock} />);
    const item1 = screen.getByTestId('checkBoxContainerItem 2');
    fireEvent.click(item1);
    expect(onSelectMock).toHaveBeenCalledWith([{ value: '2', label: 'Item 2' }]);
  });

  it('should expand children node when clicked', () => {
    render(<TreeSelect data={data} />);
    const expandButton = screen.getByTestId('labelContainerItem 1');
    fireEvent.click(expandButton);
    const subitem1 = screen.getByTestId('childrenItem 1');
    expect(subitem1).toBeInTheDocument();
  });

  it('should render with circle checkbox type', () => {
    render(<TreeSelect data={data} checkable checkboxType={selectType.circle} />);
    const checkBoxes = screen.getByTestId('checkBoxContainerItem 1');
    const checkBoxesItem = checkBoxes.querySelector('svg');
    expect(checkBoxesItem).toHaveClass('checkBox');
  });

  it('should render with custom placeholder', () => {
    render(<TreeSelect data={data} placeholder="Select an item" />);
    const inputElement = screen.getByTestId('Select an item') as HTMLDivElement;
    expect(inputElement).toBeInTheDocument();
  });
});