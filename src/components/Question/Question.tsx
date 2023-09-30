import { Form, FormListFieldData } from "antd";
import React from "react";
import { applicationQuestion } from "../../utils/types";
import { ImgIcon } from "../Icon/ImgIcon";

type Props = { field: FormListFieldData; name: string[] };

const Question = ({ field, name }: Props) => {
  return (
    <Form.Item shouldUpdate>
      {({ getFieldValue }) => {
        let questionData: applicationQuestion = getFieldValue([
          ...name,
          field.name,
        ]);

        let { id, question, type } = questionData;

        return (
          <div key={id} className="question">
            <div className="question-body">
              <div className="question-type">{type}</div>
              <p className="title">{question}</p>
            </div>
            <ImgIcon className="edit-icon" name="edit" width={18} />
          </div>
        );
      }}
    </Form.Item>
  );
};

export default Question;
