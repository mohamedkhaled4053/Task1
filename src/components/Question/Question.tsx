import {
  Checkbox,
  Form,
  FormListFieldData,
  Input,
  Select,
} from "antd";
import React, { useState } from "react";
import { ImgIcon } from "../Icon/ImgIcon";
import { Icon } from "../Icon/Icon";
import { questionTypes } from "../../utils/mock";
import { applicationQuestion } from "../../utils/types";
import "./style.scss";
import Choices from "./Choices";
import VideoInputs from "./VideoInputs";

type Props = {
  field: FormListFieldData;
  name: string[];
  remove: (index: number | number[]) => void;
};

const Question = ({ field, name, remove }: Props) => {
  let [isEdit, setIsEdit] = useState(false);
  let [isNew, setIsNew] = useState(false);

  let form = Form.useFormInstance();
  return (
    <Form.Item shouldUpdate style={{ marginBottom: 0 }}>
      {({ getFieldValue }) => {
        let questionData: applicationQuestion = getFieldValue([
          ...name,
          field.name,
        ]);

        let type = questionData?.type;
        let displayQuestionFrom = isNew || isEdit;

        if (!questionData) {
          setIsNew(true);
        }

        function handleTypeChange(value: string) {
          form.setFieldValue([...name, field.name, "choices"], [""]);
        }

        return (
          <div
            key={field.key}
            className={`question ${displayQuestionFrom ? "form" : ""}`}
          >
            {displayQuestionFrom ? (
              <div className="question-body">
                <>
                  <Form.Item label="Type" name={[field.name, "type"]}>
                    <Select
                      onChange={handleTypeChange}
                      suffixIcon={<Icon name="arrow" />}
                    >
                      {questionTypes.map((questionType) => (
                        <Select.Option
                          key={field.key + questionType.value}
                          value={questionType.value}
                        >
                          {questionType.label}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>

                  <Form.Item label="Question" name={[field.name, "question"]}>
                    <Input placeholder="Type here" />
                  </Form.Item>

                  {(type === "MultipleChoice" || type === "Dropdown") && (
                    <Choices field={field} type={type} />
                  )}

                  {type === "Video question" && <VideoInputs field={field} />}

                  {type === "YesNo" && (
                    <Form.Item
                      valuePropName="checked"
                      name={[field.name, "disqualify"]}
                    >
                      <Checkbox>
                        Disqualify candidate if the answer is no
                      </Checkbox>
                    </Form.Item>
                  )}

                  <div className="question-form-buttons">
                    <span
                      className="question-form-button delete"
                      onClick={() => remove(field.name)}
                    >
                      <Icon name="close" /> Delete question
                    </span>
                    <span
                      className="question-form-button save"
                      onClick={() => {
                        setIsEdit(false);
                        setIsNew(false);
                      }}
                    >
                      Save
                    </span>
                  </div>
                </>
              </div>
            ) : (
              <>
                <div className="question-body">
                  <div className="question-type">{type}</div>
                  <p className="title">{questionData?.question}</p>
                </div>
                <ImgIcon
                  className="edit-icon"
                  name="edit"
                  width={18}
                  onClick={() => setIsEdit(true)}
                />
              </>
            )}
          </div>
        );
      }}
    </Form.Item>
  );
};

export default Question;
