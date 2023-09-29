import React from "react";
import "./style.scss";
import { Form, Checkbox, Switch, Upload } from "antd";
import { Icon } from "../Icon/Icon";
import { ImgIcon } from "../Icon/ImgIcon";
import { ApplicationForm } from "../utils/mock";

type Props = {
  header: string;
  data: ApplicationForm["data"]["attributes"];
  attribute: keyof ApplicationForm["data"]["attributes"];
  checkBoxLabel?: "mandatory" | "internalUse";
};

const ApplicationCard = ({
  header,
  data,
  attribute,
  checkBoxLabel = "internalUse",
}: Props) => {
  if (attribute === "coverImage") {
    return (
      <div className="card upload">
        <div className="card-header">Upload cover image</div>
        <div className="card-body">
          {data[attribute].includes("example") && (
            <Form.Item name="coverImage">
              <Upload.Dragger
                name="file"
                multiple={true}
                action="http://example.com/"
                fileList={[]}
              >
                <p className="ant-upload-drag-icon">
                  <ImgIcon name="upload" width="33px" />
                </p>
                <p className="ant-upload-text">Upload cover image</p>
                <p className="ant-upload-hint">
                  16:9 ratio is recommended. Max image size 1mb
                </p>
              </Upload.Dragger>
            </Form.Item>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-header">{header}</div>
      <div className="card-body">
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
                    {checkBoxLabel === "internalUse" ? "internal" : "mandatory"}
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

        <div className="add-question">
          <Icon name="add" width={25} /> Add a question
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;
