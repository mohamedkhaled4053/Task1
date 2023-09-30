import { questionTypes } from "./mock";

export interface InternalAndShow {
  internalUse: boolean;
  show: boolean;
}
export interface MandatoryAndShow {
  mandatory: boolean;
  show: boolean;
}

export type questionType = (typeof questionTypes)[number];

export type applicationQuestion = {
  id: string;
  type: questionType;
  question: string;
  choices: string[];
  maxChoice: number;
  disqualify: boolean;
  other: boolean;
};

export interface ApplicationForm {
  data: {
    id: string;
    type: string;
    attributes: {
      coverImage: string;
      personalInformation: {
        firstName: InternalAndShow;
        lastName: InternalAndShow;
        emailId: InternalAndShow;
        phoneNumber: InternalAndShow;
        nationality: InternalAndShow;
        currentResidence: InternalAndShow;
        idNumber: InternalAndShow;
        dateOfBirth: InternalAndShow;
        gender: InternalAndShow;
        personalQuestions: applicationQuestion[];
      };
      profile: {
        education: MandatoryAndShow;
        experience: MandatoryAndShow;
        resume: MandatoryAndShow;
        profileQuestions: applicationQuestion[];
      };
      customisedQuestions: applicationQuestion[];
    };
  };
}
