export interface surveyModel {
  id: string;
  name: string;
  description: string;
  items: surveyQuestion[];
  isFinished: boolean;
}

export interface surveyQuestion {
  id: string;
  name: string;
  description: string;
  type: questionType;
  addTextBox?: boolean;
  choiceOpts?: string;
  addCheckBox?: boolean;
}

export interface surveyAnswer {
  id: string;
  name: string;
  description: string;
  comment: string;
  answer: string | null;
  type: questionType;
  isFinished: boolean;
  checkBoxChecked?: boolean;
}

export type questionType = "single-choice" | "rating" | "text";
