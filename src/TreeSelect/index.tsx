import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io';
import CheckBox, { iconType } from './SelectBox';
import TreeSelectInput, { data } from './treeSelectInput';

export interface TreeNode<T> {
  value: T;
  label: string;
  children?: Array<TreeNode<T>>;
  unfold?: boolean;
  defaultSelected?: boolean;
}

export enum selectType {
  circle = 'circle',
  box = 'box',
}

interface TreeSelectProps<T> {
  data: Array<TreeNode<T>>;
  isSingle?: boolean; //Single selection or multiple selection
  checkable?: boolean; //is checkboxable
  expandable?: boolean; //Whether to display the arrow
  checkboxType?: selectType; //The type of checkbox
  inputWidth?: string; //The width of the input box
  inputHeight?: string; //The height of the input box
  displaySelect?: boolean; //Whether to display the selected item
  placeholder?: string; //The placeholder of the input box
  needInput?: boolean; //Whether to display the input box
  dropDownPosition?: 'bottom' | 'leftBottom' | 'rightBottom'; //The position of the drop-down box
  onSelect?: (selected: Array<TreeNode<T>>) => void; //Callback function when selected
  onExpand?: (expanded: Set<T>) => void; //Callback function when expanded
}

function TreeSelect<T>(props: TreeSelectProps<T>) {
  const [expanded, setExpanded] = useState<Set<T>>(new Set()); //An array with uniqueness
  const [selected, setSelected] = useState<Array<TreeNode<T>>>([]);
  const [displayTree, setDisplayTree] = useState<boolean>(false);
  const [inputRef, setInputRef] = useState(React.createRef<HTMLDivElement>());
  const [dropDownRef, setDropDownRef] = useState(
    React.createRef<HTMLDivElement>(),
  );
  const {
    data,
    isSingle,
    checkable,
    checkboxType,
    onSelect,
    onExpand,
    expandable,
    inputWidth,
    inputHeight,
    displaySelect,
    placeholder,
    dropDownPosition,
    needInput,
    ...restProps
  } = props;
  const icon =
    checkboxType === selectType.circle ? iconType.circle : iconType.box;
  const inputblock: Array<data<T>> = [];
  const treeClass = classNames('treeContainer', {
    'treeContainer-default': needInput,
    'treeContainer-hide': !displayTree && needInput,
    'treeContainer-noInput': !needInput,
  });
  const containerClass = classNames('container', {})

  //Get the position of the drop-down box
  const getTopPos = () => {
    if (inputRef.current && dropDownRef.current) {
      const { height } = inputRef.current.getBoundingClientRect();
      if (dropDownPosition === 'bottom') return `${height + 5}px`;
      return '-2px';
    }
  };

  const getLeftPos = () => {
    if (inputRef.current && dropDownRef.current) {
      const { width } = inputRef.current.getBoundingClientRect();
      if (dropDownPosition === 'leftBottom') {
        console.log('left');
        return `${-width}px`; 
      }
      if (dropDownPosition === 'rightBottom') {
        return `${width}px`;
      }
      console.log(dropDownPosition);
      return '0px';
    }
  };
  const topPos = getTopPos();
  const leftPos = getLeftPos();

  //initialize the selected and expanded nodes
  useEffect(() => {
    const initialSelected: Array<TreeNode<T>> = [];
    const initialExpanded: Set<T> = new Set();

    if (displaySelect !== undefined) {
      setDisplayTree(displaySelect);
    }

    const traverse = (node: TreeNode<T>) => {
      if (node.defaultSelected) {
        initialSelected.push(node);
      }
      if (node.unfold && node.children) {
        initialExpanded.add(node.value);
      }
      if (node.children) {
        node.children.forEach((child: TreeNode<T>) => {
          traverse(child);
        });
      }
    };

    data.forEach((node: TreeNode<T>) => {
      traverse(node);
    });

    setSelected(initialSelected);
    setExpanded(initialExpanded);
  }, []);

  //Expand or collapse the node
  const handleExpand = (node: TreeNode<T>) => {
    const newExpanded = new Set(expanded);
    if (newExpanded.has(node.value)) {
      newExpanded.delete(node.value);
    } else {
      newExpanded.add(node.value);
    }
    setExpanded(newExpanded);
  };

  //Select or cancel the node
  const handleSelect = (node: TreeNode<T>) => {
    if (isSingle) {
      setSelected([node]);
    } else {
      const newSelected = [...selected];
      const index = newSelected.indexOf(node);
      if (index >= 0) {
        newSelected.splice(index, 1);
      } else {
        newSelected.push(node);
      }
      setSelected(newSelected);
    }
  };

  //Display the selected node
  const deliverNode = () => {
    inputblock.splice(0, inputblock.length);
    selected.forEach((item) => {
      inputblock.push({ value: item.value, label: item.label });
    });
  };

  //Callback function when selected
  useEffect(() => {
    if (onSelect) {
      onSelect(selected);
    }
  }, [selected]);

  //Callback function when expanded
  useEffect(() => {
    if (onExpand) {
      onExpand(expanded);
    }
  }, [expanded]);

  //Render the tree
  const renderTree = (node: TreeNode<T>) => {
    const nodeClass = classNames('tree-node', {});
    const checkBoxClass = classNames('tree-node-checkbox', {});
    const labelClass = classNames('tree-node-label', {
      'tree-node-label-selected': selected.includes(node),
    });
    deliverNode(); //Display the selected node

    return (
      <div key={`tree-node-${node.value}`} className={nodeClass}>
        <div className="tree-node-header" onClick={() => handleExpand(node)}>
          {expandable ? (
            node.children && node.children.length > 0 ? (
              expanded.has(node.value) ? (
                <IoMdArrowDropdown />
              ) : (
                <IoMdArrowDropright />
              )
            ) : (
              <IoMdArrowDropdown className="space" />
            )
          ) : null}
          {checkable ? (
            <div
              className={checkBoxClass}
              onClick={(e) => {
                e.stopPropagation();
                handleSelect(node);
              }}
              data-testid={`checkBoxContainer` + node.label}
            >
              <CheckBox
                displayIcon={checkable}
                icon={icon}
                isSelected={selected.includes(node)}
              />
            </div>
          ) : null}

          <div
            className={labelClass}
            data-testid={`labelContainer` + node.label}
            onClick={(e) => {
              e.stopPropagation(); //Block the propagation of events to avoid affecting other nodes
              if (node.children && node.children.length > 0) handleExpand(node);
            }}
          >
            {node.label}
          </div>
        </div>
        {node.children && node.children.length > 0 ? (
          <div
            data-testid={`children` + node.label}
            className={classNames('tree-node-children', {
              'tree-node-expanded': expanded.has(node.value),
            })}
          >
            {node.children.map((child) => renderTree(child))}
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <div className={containerClass} data-testid='treeSelect'>
      {needInput ? (
        <TreeSelectInput
        data={inputblock}
        width={inputWidth}
        height={inputHeight}
        defaultShow={displayTree}
        inputRef={inputRef}
        placeholder={placeholder}
        deleteItem={(value) => {
          const newSelected = [...selected];
          const index = newSelected.findIndex((item) => item.value === value);
          if (index >= 0) {
            newSelected.splice(index, 1);
          }
          setSelected(newSelected);
        }}
        showTree={(showTree) => {
          setDisplayTree(showTree);
        }}
      />
        ) : null}
      <div
        className={treeClass}
        ref={dropDownRef}
        style={{ width: inputWidth, top: topPos, left: leftPos }}
      >
        {data.map((node) => renderTree(node))}
      </div>
    </div>
  );
}

TreeSelect.defaultProps = {
  isSingle: true,
  checkable: true,
  expandable: true,
  unfold: false,
  inputWidth: '400px',
  inputHeight: '30px',
  displaySelect: false,
  checkboxType: selectType.box,
  dropDownPosition: 'bottom',
  needInput: true,
};

export default TreeSelect;
