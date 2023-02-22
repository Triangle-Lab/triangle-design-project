import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Progress, { ProgressProps } from './index';
import '@testing-library/jest-dom';

describe('Progress component', () => {
    afterEach(cleanup)

    const defaultProps: ProgressProps = {
        percent: 50,
        strokeHeight: 15,
        showText: true,
        style: {},
        theme: 'primary'
    }

    it('renders without crashing', () => {
        render(<Progress {...defaultProps} />)
    })

    it('renders with correct percent', () => {
        const { getByText } = render(<Progress {...defaultProps} />)
        expect(getByText('50%')).toBeInTheDocument()
    })

    it('renders with correct theme class', () => {
        const { container } = render(<Progress {...defaultProps} />)
        expect(container.querySelector('.color-primary')).toBeInTheDocument()
    })

    it('renders with custom stroke height', () => {
        const { container } = render(<Progress {...defaultProps} strokeHeight={20} />)
        expect(container.querySelector('.triangle-progress-bar-outer')?.getAttribute('style')).toBe('height: 20px;')
    })

    it('renders without text', () => {
        const { container } = render(<Progress {...defaultProps} showText={false} />)
        expect(container.querySelector('.inner-text')).not.toBeInTheDocument()
    })
})
