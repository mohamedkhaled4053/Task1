interface InternalAndShow {
  internalUse: boolean;
  show: boolean;
}
interface MandatoryAndShow {
  mandatory: boolean;
  show: boolean;
}

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
        personalQuestions: any[];
      };
      profile: {
        education: MandatoryAndShow;
        experience: MandatoryAndShow;
        resume: MandatoryAndShow;
        profileQuestions: any[];
      };
      customisedQuestions: any[];
    };
  };
}

export let mockData: ApplicationForm = {
  data: {
    id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    type: "applicationForm",
    attributes: {
      coverImage: "http://example.com",
      personalInformation: {
        firstName: { internalUse: false, show: true },
        lastName: { internalUse: false, show: true },
        emailId: { internalUse: true, show: false },
        phoneNumber: { internalUse: false, show: true },
        nationality: { internalUse: false, show: false },
        currentResidence: { internalUse: false, show: true },
        idNumber: { internalUse: false, show: true },
        dateOfBirth: { internalUse: false, show: true },
        gender: { internalUse: false, show: true },
        personalQuestions: [
          {
            id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            type: "Paragraph",
            question: "string",
            choices: ["string"],
            maxChoice: 0,
            disqualify: false,
            other: false,
          },
        ],
      },
      profile: {
        education: { mandatory: true, show: true },
        experience: { mandatory: false, show: true },
        resume: { mandatory: true, show: false },
        profileQuestions: [
          {
            id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            type: "Paragraph",
            question: "string",
            choices: ["string"],
            maxChoice: 0,
            disqualify: false,
            other: false,
          },
        ],
      },
      customisedQuestions: [
        {
          id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          type: "Paragraph",
          question: "string",
          choices: ["string"],
          maxChoice: 0,
          disqualify: false,
          other: false,
        },
      ],
    },
  },
};
