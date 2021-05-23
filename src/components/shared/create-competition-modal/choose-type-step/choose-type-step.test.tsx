import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import React from 'react';

import { ChooseTypeStep } from './choose-type-step';

describe("Create Competition (Choose Type Step) Success", () => {
  it("should load the Choose Type Step", async () => {
    render(<ChooseTypeStep />);

    const header = screen.queryByRole("heading", {
      name: "Choose a competition type",
    });
    const teamButton = screen.queryByTitle("Team Competition");
    const individualButton = screen.queryByTitle("Individual Competition");
    const backButton = screen.queryByTitle("Back");
    const nextButton = screen.queryByTitle("Next");

    expect(header).toBeInTheDocument();
    expect(teamButton).toBeInTheDocument();
    expect(individualButton).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
    expect(nextButton).not.toBeInTheDocument();
  });
});
