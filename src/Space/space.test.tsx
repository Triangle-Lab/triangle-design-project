import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Space, { Direction, Side, SpaceingSize } from '.';

describe('Space', () => {
  it('should render default Space component', () => {
    render(
      <Space data-testid="space">
        <button data-testid="space-item">点击</button>
      </Space>,
    );
    const spaceEl = screen.getByTestId('space');

    expect(spaceEl).toBeInTheDocument();
    expect(spaceEl).toHaveClass('Space');
    expect(spaceEl).toHaveClass(`Space-${Direction.Horizontal}`);
    expect(spaceEl).toHaveClass('Space-break');
    expect(spaceEl).toHaveClass(`Space-horizontal-${Side.Left}`);

    const spaceItemEl = spaceEl.querySelector('div');
    //expect(spaceItemEl).toBeInTheDocument();
    expect(spaceItemEl).toHaveClass('Space-item');
    expect(spaceItemEl).toHaveClass(`Space-${SpaceingSize.Medium}`);
    expect(spaceItemEl).toHaveTextContent('点击');
  });

  it('should render Space component with specified size', () => {
    render(
      <Space data-testid="space" size={SpaceingSize.Small}>
        <button data-testid="space-item">点击</button>
      </Space>,
    );

    const spaceEl = screen.getByTestId('space');
    const spaceItemEl = spaceEl.querySelector('div');
    expect(spaceItemEl).toHaveClass(`Space-${SpaceingSize.Small}`);
  });

  it('should render Space component with specified direction', () => {
    render(
      <Space data-testid="space" direction={Direction.Vertical}>
        Test Content
      </Space>,
    );

    const spaceEl = screen.getByTestId('space');
    expect(spaceEl).toHaveClass(`Space-${Direction.Vertical}`);
    expect(spaceEl).not.toHaveClass('Space-break');
    expect(spaceEl).toHaveClass(`Space-vertical-${Side.Left}`);
  });

  it('should render Space component with specified wrap', () => {
    render(
      <Space data-testid="space" wrap={false}>
        Test Content
      </Space>,
    );

    const spaceEl = screen.getByTestId('space');
    expect(spaceEl).not.toHaveClass('Space-break');
  });

  it('should render Space component with specified side', () => {
    render(
      <Space data-testid="space" side={Side.Right}>
        Test Content
      </Space>,
    );

    const spaceEl = screen.getByTestId('space');
    expect(spaceEl).toHaveClass(`Space-horizontal-${Side.Right}`);
  });
});
