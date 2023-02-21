import React from 'react'
import { config } from 'react-transition-group'
import { render, type RenderResult, fireEvent, screen } from '@testing-library/react'
//import { type AutoCompleteProps, AutoComplete } from '.'
import '@testing-library/jest-dom'
import AutoComplete, { AutoCompleteProps, DataSourceType } from '.';

describe('AutoComplete', () => {
  const fetchSuggestions = jest.fn((query: string) => {
    const result: DataSourceType[] = [
      { value: `${query}1` },
      { value: `${query}2` },
      { value: `${query}3` },
    ];
    return Promise.resolve(result);
  });

  const defaultProps: AutoCompleteProps = {
    fetchSuggestions,
    onSelect: jest.fn(),
    placeholder: 'test',
  };

  it('should render input element', () => {
    const { container } = render(<AutoComplete {...defaultProps} />);
    expect(container.querySelector('input')).toBeInTheDocument();
  });

  it('should show dropdown when input has value', async () => {
    const { container } = render(<AutoComplete {...defaultProps} />);
    const inputElement = container.querySelector('input');
    fireEvent.change(inputElement as Element, { target: { value: 'test' } });
    expect(await screen.findByText('test1')).toBeInTheDocument();
    expect(await screen.findByText('test2')).toBeInTheDocument();
    expect(await screen.findByText('test3')).toBeInTheDocument();
  });

  it('should highlight suggestion when mouse over', async () => {
    const { container } = render(<AutoComplete {...defaultProps} />);
    const inputElement = container.querySelector('input');
    fireEvent.change(inputElement as Element, { target: { value: 'test' } });
    const suggestionElement = await screen.findByText('test1');
    fireEvent.mouseEnter(suggestionElement);
    expect(suggestionElement).toHaveClass('suggestion-item');
  });

  it('should select suggestion when mouse clicked', async () => {
    const onSelect = jest.fn();
    const { container } = render(<AutoComplete {...defaultProps} onSelect={onSelect} />);
    const inputElement = container.querySelector('input');
    fireEvent.change(inputElement as Element, { target: { value: 'test' } });
    const suggestionElement = await screen.findByText('test1');
    fireEvent.click(suggestionElement);
    expect(onSelect).toHaveBeenCalledWith({ value: 'test1' });
    expect(inputElement).toHaveValue('test1');
  });
})






// config.disabled = true

// const testArray = [
//   { value: 'ab', number: 11 },
//   { value: 'abc', number: 1 },
//   { value: 'b', number: 4 },
//   { value: 'c', number: 15 }
// ]

// const testProps: AutoCompleteProps = {
//   fetchSuggestions: (query) => { return testArray.filter(item => item.value) },
//   onSelect: jest.fn(),
//   placeholder: 'auto-complete'
// }

// let wrapper: RenderResult, inputNode: HTMLInputElement
// describe('test AutoComplete component', () => {
//   beforeEach(() => {
//     wrapper = render(<AutoComplete { ...testProps }/>)
//     inputNode = wrapper.getByPlaceholderText('auto-complete') as HTMLInputElement
//   })
//   it('test basic AtuoComplete behavior', async () => {
//     fireEvent.change(inputNode, { target: { value: 'a' } })
//     expect(wrapper.queryByText('ab')).toBeInTheDocument()
//     expect(wrapper.container.querySelectorAll('.suggestion-item').length).toEqual(2)
//     fireEvent.click(wrapper.getByText('ab'))
//     expect(testProps.onSelect).toHaveBeenCalledWith({ value: 'ab', number: 11 })
//     expect(wrapper.queryByText('ab')).not.toBeInTheDocument()
//     expect(inputNode.value).toBe('ab')
//   })
//   it('should provide keyboard support', async () => {
//     fireEvent.change(inputNode, { target: { value: 'a' } })
//     expect(wrapper.queryByText('ab')).toBeInTheDocument()
//     const firstResult = wrapper.queryByText('ab')
//     const secondResult = wrapper.queryByText('abc')

//     fireEvent.keyDown(inputNode, { keyCode: 40 })
//     expect(firstResult).toHaveClass('is-active')
//     fireEvent.keyDown(inputNode, { keyCode: 40 })
//     expect(secondResult).toHaveClass('is-active')
//     fireEvent.keyDown(inputNode, { keyCode: 38 })
//     expect(firstResult).toHaveClass('is-active')
//     fireEvent.keyDown(inputNode, { keyCode: 13 })
//     expect(testProps.onSelect).toHaveBeenCalledWith({ value: 'ab', number: 11 })
//     expect(wrapper.queryByText('ab')).not.toBeInTheDocument()
//   })
//   it('click outside should hid the dropdown', async () => {
//     fireEvent.change(inputNode, { target: { value: 'a' } })
//     expect(wrapper.queryByText('ab')).toBeInTheDocument()
//     fireEvent.click(document)
//     expect(wrapper.queryByText('ab')).not.toBeInTheDocument()
//   })
//   it('renderOption should generate the right', () => {

//   })
//   it('async fetchSuggestion should works fine', () => {

//   })
// })
