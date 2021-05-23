import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { NameAndIconStep } from './name-and-icon-step';

describe("Create Competition (Name and Icon Step) Success", () => {
  it("should load the Name and Icon Step", async () => {
    render(<NameAndIconStep />);

    const header = screen.getByRole("heading", {
      name: /create.*competition.*/i,
    });
    const competitionNameInput = screen.getByLabelText(/competition.*name.*/i);
    const charsUsed = screen.getByText(/\d+ \/ 40/);
    const backButton = screen.queryByTitle("Back");
    const nextButton = screen.queryByTitle("Next");

    expect(header).toBeInTheDocument();
    expect(competitionNameInput).toBeInTheDocument();
    expect(charsUsed).toBeInTheDocument();
    expect(backButton).not.toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it("should update how many title characters used as User types", async () => {
    render(<NameAndIconStep />);

    const input = screen.getByLabelText(/competition.*name.*/i);
    userEvent.type(input, "My Competition");

    expect(input).toHaveValue("My Competition");
    expect(screen.getByText("14 / 40")).toBeInTheDocument();
  });
});

describe("Create Competition (Name and Icon Step) Errors", () => {
  it("should enable/disable the Next Button and change character count to red depending on number of chars entered", async () => {
    render(<NameAndIconStep />);

    expect(screen.getByTitle(/next.*/i)).toBeDisabled();

    const input = screen.getByLabelText(/competition.*name.*/i);
    userEvent.type(
      input,
      "My Competition My Competition My Competition My Competition "
    );

    expect(screen.getByText("60 / 40")).toBeInTheDocument();
    expect(screen.getByTitle("Characters Used")).toHaveStyle(
      `color: rgb(220, 53, 69) !important`
    );
  });
});
