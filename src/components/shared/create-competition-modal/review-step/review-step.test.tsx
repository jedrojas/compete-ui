import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import React from 'react';

import ReviewStep from './review-step';

describe("Create Competition (Review Step) Success", () => {
  it("should load the Review Step", async () => {
    render(<ReviewStep />);

    const header = screen.queryByRole("heading", {
      name: /review.*/i,
    });
    const backButton = screen.queryByTitle("Back");
    const submitButton = screen.queryByTitle("Submit");

    expect(header).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
