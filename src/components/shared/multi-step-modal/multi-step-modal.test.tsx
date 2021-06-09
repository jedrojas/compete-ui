import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import React, { useState } from 'react';

import { MultiStepModal } from './multi-step-modal';

describe("Multi Step Modal is rendered", () => {
  it("should render", async () => {
    const mockShow = true;
    const mockSetShow = jest.fn();
    render(<MultiStepModal show={mockShow} setShow={mockSetShow} />);
  });
});
