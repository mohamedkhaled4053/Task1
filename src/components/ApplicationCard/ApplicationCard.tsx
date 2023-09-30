import React from "react";
import "./style.scss";
import { Form, Checkbox, Switch } from "antd";
import { Icon } from "../Icon/Icon";
import { ApplicationForm } from "../../utils/types";
import Question from "../Question/Question";

type Props = {
  header: string;
  data: ApplicationForm["data"]["attributes"];
  attribute: Exclude<keyof ApplicationForm["data"]["attributes"], "coverImage">;
  checkBoxLabel?: "mandatory" | "internalUse";
};

const ApplicationCard = ({
  header,
  data,
  attribute,
  checkBoxLabel = "internalUse",
}: Props) => {
  let questionFormItemName: string[];
  switch (attribute) {
    case "personalInformation":
      questionFormItemName = [attribute, "personalQuestions"];
      break;
    case "profile":
      questionFormItemName = [attribute, "profileQuestions"];
      break;
    case "customisedQuestions":
      questionFormItemName = ["customisedQuestions"];
      break;
  }

  return (
    <div className="card">
      <div className="card-header">{header}</div>
      <div className="card-body">
        {/* infos */}
        {attribute !== "customisedQuestions" && (
          <div className="infos">
            {Object.keys(data[attribute]).map((info) => {
              if (info.includes("Questions")) {
                return null;
              }
              return (
                <div className="info" key={info}>
                  <p className="title">{info}</p>

                  <Form.Item
                    valuePropName="checked"
                    name={[attribute, info, checkBoxLabel]}
                  >
                    <Checkbox>
                      {checkBoxLabel === "internalUse"
                        ? "internal"
                        : "mandatory"}
                    </Checkbox>
                  </Form.Item>

                  <Form.Item
                    valuePropName="checked"
                    name={[attribute, info, "show"]}
                  >
                    <Switch id={info + "show"} />
                  </Form.Item>
                  <label htmlFor={info + "show"}>Hide</label>
                </div>
              );
            })}
          </div>
        )}
        
        {/* questions */}
        <Form.List name={questionFormItemName}>
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <Question
                  key={field.key}
                  field={field}
                  name={questionFormItemName}
                  remove={remove}
                />
              ))}

                <div className="add-question" onClick={()=>add()}>
                  <Icon name="add" width={25} /> Add a question
                </div>

            </>
          )}
        </Form.List>
      </div>
    </div>
  );
};

export default ApplicationCard;
