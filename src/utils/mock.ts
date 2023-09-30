import { ApplicationForm } from "./types";

export const questionTypes = [
  "Paragraph",
  "Short answer",
  "Yes/No",
  "Dropdown",
  "Multiple choice",
  "Date",
  "Number",
  "File upload",
  "Video question",
] as const;

export let mockData: ApplicationForm = {
  data: {
    id: "497f6eca-6276-4993-bfeb-53cbbba6f08",
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
            id: "497fgfsgajhgh6eca-276-4993-bfeb-53cbbbba6f08",
            type: "Paragraph",
            question: "how are you",
            choices: ["string"],
            maxChoice: 0,
            disqualify: false,
            other: false,
          },
          {
            id: "49hgfgdfsa7f6eca-276-4993-bfeb-53cbbbba6f08",
            type: "File upload",
            question: "what is your age",
            choices: ["string"],
            maxChoice: 0,
            disqualify: false,
            other: false,
          },
          {
            id: "497f6eca-276-4993-bfeb-53cbbbfdsasafdaba6f08",
            type: "Date",
            question: "I'm good",
            choices: ["string"],
            maxChoice: 0,
            disqualify: false,
            other: false,
          },
          {
            id: "497f6eca-276-4993-bfeb-53cbbbbgfafdsaa6f08",
            type: "Multiple choice",
            question: "but bad",
            choices: ["string"],
            maxChoice: 0,
            disqualify: false,
            other: false,
          },
          {
            id: "4fdsaf97f6eca-276-4993-bfeb-53cbbbba6f08",
            type: "Yes/No",
            question: "how are you",
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
            id: "497fasfdaff6eca-6276-4993-bfeb-53cbbbba608",
            type: "Paragraph",
            question: "string",
            choices: ["string"],
            maxChoice: 0,
            disqualify: false,
            other: false,
          },
          {
            id: "497fdasfdasf6eca-6276-4993-bfebhfealkjds-53cbbbba608",
            type: "Paragraph",
            question: "strfdsaing",
            choices: ["string"],
            maxChoice: 0,
            disqualify: false,
            other: false,
          },
          {
            id: "497f6eca-dfadslfdsafdkdash-4993-bfeb-53cbbbba608",
            type: "Paragraph",
            question: "stggggggggring",
            choices: ["string"],
            maxChoice: 0,
            disqualify: false,
            other: false,
          },
          {
            id: "497f6eca-627bjnlkdsasafdsgityyk6-4993-bfeb-53cbbbba608",
            type: "Paragraph",
            question: "string",
            choices: ["string"],
            maxChoice: 0,
            disqualify: false,
            other: false,
          },
          {
            id: "4fdasfdas97f6eca-6276-ml;ij4993-bfeb-53cbbbba608",
            type: "Paragraph",
            question: "string",
            choices: ["string"],
            maxChoice: 0,
            disqualify: false,
            other: false,
          },
          {
            id: "497f6ecafdsadsa-6276-4993-bfkjkeb-53cbbbba608",
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
          id: "497f6eca-6276-4993-bfeb-53cbbbbfdasfa6f08",
          type: "Paragraph",
          question: "string",
          choices: ["string"],
          maxChoice: 0,
          disqualify: false,
          other: false,
        },
        {
          id: "497f6eca-6276-4993-bfeb-5fdsaa3cbbbba6f08",
          type: "Paragraph",
          question: "string",
          choices: ["string"],
          maxChoice: 0,
          disqualify: false,
          other: false,
        },
        {
          id: "497f6ecafdsafafdsa-6276-4993-bfeb-53cbbbba6f08",
          type: "Paragraph",
          question: "string",
          choices: ["string"],
          maxChoice: 0,
          disqualify: false,
          other: false,
        },
        {
          id: "497f6eca-6276-49gfdsgfsd93-bfeb-53cbbbba6f08",
          type: "Paragraph",
          question: "string",
          choices: ["string"],
          maxChoice: 0,
          disqualify: false,
          other: false,
        },
        {
          id: "497f6eca-6276-4993-bfeb-5fdsafsa3cbbbbadsafdsa6f08",
          type: "Paragraph",
          question: "stringdddddddddddddd",
          choices: ["string"],
          maxChoice: 0,
          disqualify: false,
          other: false,
        },
      ],
    },
  },
};