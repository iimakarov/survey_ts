import { decode } from "he";
import {
  surveyModel,
  surveyQuestion,
  questionType,
} from "./surveyTypes";

function parseSurvey(inputJson: string) {
  const surveyParse = JSON.parse(decode(inputJson));

  let surveyItems: surveyQuestion[] = [];
  for (let item of surveyParse.items)
    surveyItems.push({
      id: item.id,
      name: item.name,
      description: item.description,
      type: item.type as questionType,
      addTextBox: item.addTextBox,
      choiceOpts: item.choiceOpts,
      addCheckBox: item.addCheckBox,
    } as surveyQuestion);

  const survey: surveyModel = {
    id: surveyParse.id,
    name: surveyParse.name,
    description: surveyParse.description,
    items: surveyItems,
    isFinished: false,
  };

  return survey;
}

export default parseSurvey;
