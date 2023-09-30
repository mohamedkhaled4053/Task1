import { Checkbox, Form, FormListFieldData, Input, InputNumber } from "antd";
import React from "react";
import { Icon } from "../Icon/Icon";
import { questionType } from "../../utils/types";

type Props = {
  field: FormListFieldData;
  type: questionType;
};

const Choices = ({ field, type }: Props) => {
  return (
    <>
      <Form.List name={[field.name, "choices"]}>
        {(choicesFields, { add, remove }) => (
          <div className="choice-inputs">
            {choicesFields.map((choiceField, index) => (
              <React.Fragment key={choiceField.key}>
                {index === 0 && <p className="choice-label">Choice</p>}
                <div className="choice-input">
                  <Icon name="unorderedList" className="unorderedList" />
                  <Form.Item key={choiceField.key} name={[choiceField.name]}>
                    <Input placeholder="Type here" />
                  </Form.Item>
                  <Icon
                    name="add"
                    width={13}
                    className="add-choice"
                    onClick={() => add()}
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
        )}
      </Form.List>

      <Form.Item
        valuePropName="checked"
        name={[field.name, "other"]}
        style={{ marginBottom: "50px" }}
      >
        <Checkbox>Enable “Other” option</Checkbox>
      </Form.Item>

      {type === "MultipleChoice" && (
        <Form.Item label="Max choice allowed" name={[field.name, "maxChoice"]}>
          <InputNumber placeholder="Enter number of choice allowed here" />
        </Form.Item>
      )}
    </>
  );
};

export default Choices;
