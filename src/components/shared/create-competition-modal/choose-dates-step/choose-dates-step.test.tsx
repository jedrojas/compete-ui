import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import React from 'react';

import ChooseDatesStep from './choose-dates-step';

describe("Create Competition (Choose Dates Step) Success", () => {
  it("should load the Choose Dates Step", async () => {
    render(<ChooseDatesStep />);

    const header = screen.queryByRole("heading", {
      name: /choose.*date/i,
    });
    const backButton = screen.queryByTitle("Back");
    const nextButton = screen.queryByTitle("Next");

    expect(header).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });
});
