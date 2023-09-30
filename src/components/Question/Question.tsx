import { Form, FormListFieldData, Input, InputNumber, Select } from "antd";
import React, { useState } from "react";
import { ImgIcon } from "../Icon/ImgIcon";
import { Icon } from "../Icon/Icon";
import { questionTypes } from "../../utils/mock";
import { applicationQuestion } from "../../utils/types";

type Props = {
  field: FormListFieldData;
  name: string[];
  remove: (index: number | number[]) => void;
};

const Question = ({ field, name, remove }: Props) => {
  let [isEdit, setIsEdit] = useState(false);

  return (
    <Form.Item shouldUpdate style={{ marginBottom: 0 }}>
      {({ getFieldValue }) => {
        let questionData: applicationQuestion = getFieldValue([
          ...name,
          field.name,
        ]);

        let { id, question, type } = questionData;

        return (
          <div key={id} className={`question ${isEdit ? "form" : ""}`}>
            {isEdit ? (
              <div className="question-body">
                <>
                  <Form.Item label="Type" name={[field.name, "type"]}>
                    <Select suffixIcon={<Icon name="arrow" />}>
                      {questionTypes.map((questionType) => (
                        <Select.Option
                          key={id + questionType}
                          value={questionType}
                        >
                          {questionType}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item label="Question" name={[field.name, "question"]}>
                    <Input placeholder="Type here" />
                  </Form.Item>
                  {type === "Multiple choice" && (
                    <Form.Item label="Choise">
                      <Icon name="unorderedList" className="unorderedList" />
                      <Input placeholder="Type here" />
                      <Icon name="add" width={13} className="add" />
                    </Form.Item>
                  )}
                  {type === "Video question" && (
                    <>
                      <Form.Item name={[field.name, "additionalInformation"]}>
                        <Input.TextArea placeholder="additional information" />
                      </Form.Item>
                      <div className="video-duration">
                        <Form.Item
                          className="duration"
                          name={[field.name, "duration"]}
                        >
                          <InputNumber
                            min={0}
                            placeholder="Max duration of video"
                          />
                        </Form.Item>
                        <Form.Item
                          className="duration-unit"
                          name={[field.name, "durationUnit"]}
                        >
                          <Select
                            placeholder="in (sec/min)"
                            suffixIcon={<Icon name="arrow" />}
                          >
                            <Select.Option value="minutes">
                              minutes
                            </Select.Option>
                            <Select.Option value="seconds">
                              seconds
                            </Select.Option>
                          </Select>
                        </Form.Item>
                      </div>
                    </>
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
                      onClick={() => setIsEdit(false)}
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
                  <p className="title">{question}</p>
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
