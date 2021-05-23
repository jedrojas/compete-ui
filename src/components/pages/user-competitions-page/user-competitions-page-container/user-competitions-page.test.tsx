import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { ChooseDatesStep } from '../../../shared/create-competition-modal/choose-dates-step/choose-dates-step';
import ChooseTypeStep from '../../../shared/create-competition-modal/choose-type-step/choose-type-step';
import NameAndIconStep from '../../../shared/create-competition-modal/name-and-icon-step/name-and-icon-step';
import ReviewStep from '../../../shared/create-competition-modal/review-step/review-step';
import { MultiStepModal } from '../../../shared/multi-step-modal/multi-step-modal';

describe("Create Competition Modal Success", () => {
  it("should render every step when necessary", async () => {
    const mockShow = true;
    const mockSetShow = jest.fn();
    render(
      <MultiStepModal show={mockShow} setShow={mockSetShow}>
        <NameAndIconStep />
        <ChooseTypeStep />
        <ChooseDatesStep />
        <ReviewStep />
      </MultiStepModal>
    );

    // modal is rendered
    const modal = screen.queryByRole("dialog");
    expect(modal).toBeInTheDocument();

    // Name and Icon Step is rendered
    const nameAndIconHeader = screen.queryByRole("heading", {
      name: "Create Competition",
    });
    expect(nameAndIconHeader).toBeInTheDocument();

    // Choose Type Step rendered on "Next" clicked
    const competitionNameInput = screen.getByLabelText(/competition.*name.*/i);
    userEvent.type(competitionNameInput, "My Competition");
    const nextButton = screen.getByTitle(/next.*/i);
    userEvent.click(nextButton);

    await screen.findByText(/choose.*type.*/i);
    const chooseTypeHeader = screen.queryByText(/choose.*type.*/i);
    expect(chooseTypeHeader).toBeInTheDocument();

    // Choose Dates Step rendered when "Team" button is clicked
    const teamButton = screen.getByTitle(/team.*/i);
    userEvent.click(teamButton);

    await screen.findByText(/choose.*date.*/i);
    const chooseDatesHeader = screen.queryByText(/choose.*date.*/i);
    expect(chooseDatesHeader).toBeInTheDocument();

    // Review Step rendered when "Next" button is clicked
    const nextButton2 = screen.getByTitle(/next.*/i);
    userEvent.click(nextButton2);

    await screen.findByText(/review.*/i);
    const reviewHeader = screen.queryByText(/review.*/i);
    expect(reviewHeader).toBeInTheDocument();

    // modal is removed from the screen after submit button clicked
    const submitButton = screen.getByTitle(/submit.*/i);
    userEvent.click(submitButton);

    expect(mockSetShow).toHaveBeenCalled();
  });

  it("should create payload for creating a new competition", async () => {
    const mockShow = true;
    const mockSetShow = jest.fn();
    render(
      <MultiStepModal show={mockShow} setShow={mockSetShow}>
        <NameAndIconStep />
        <ChooseTypeStep />
        <ChooseDatesStep />
        <ReviewStep />
      </MultiStepModal>
    );

    const competitionNameInput = screen.getByLabelText(/competition.*name.*/i);
    userEvent.type(competitionNameInput, "My Test Competition");

    const nextButton = screen.getByTitle(/next.*/i);
    userEvent.click(nextButton);

    await screen.findByText(/choose.*type.*/i);
    const individualButton = screen.getByTitle(/individual.*/i);
    userEvent.click(individualButton);

    await screen.findByText(/choose.*date.*/i);
    const nextButton2 = screen.getByTitle(/next.*/i);
    userEvent.click(nextButton2);

    await screen.findByText(/review.*/i);

    // Check that state was persisted through the form
    expect(screen.queryByText(/test.*competition.*/i)).toBeInTheDocument();
    expect(screen.queryByText(/individual.*/i)).toBeInTheDocument();
    expect(screen.queryByText(/start.*date.*/i)).toBeInTheDocument();
    expect(screen.queryByText(/end.*date.*/i)).toBeInTheDocument();
  });

  it("should maintain context as user navs through process", async () => {
    const mockShow = true;
    const mockSetShow = jest.fn();
    render(
      <MultiStepModal show={mockShow} setShow={mockSetShow}>
        <NameAndIconStep />
        <ChooseTypeStep />
        <ChooseDatesStep />
        <ReviewStep />
      </MultiStepModal>
    );

    const competitionNameInput = screen.getByLabelText(/competition.*name.*/i);
    userEvent.type(competitionNameInput, "My Test Competition");

    const nextButton = screen.getByTitle(/next.*/i);
    userEvent.click(nextButton);

    await screen.findByText(/choose.*type.*/i);
    const backButton = screen.getByTitle(/back.*/i);
    userEvent.click(backButton);

    expect(screen.getByDisplayValue("My Test Competition")).toBeInTheDocument();
  });
});
