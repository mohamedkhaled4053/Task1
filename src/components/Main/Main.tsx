import "./style.scss";
import Navbar from "../Navbar/Navbar";
import { ApplicationForm, mockData, questionTypes } from "../utils/mock";
import { useState } from "react";
import { Form, Input, Select } from "antd";
import { ImgIcon } from "../Icon/ImgIcon";
import ApplicationCard from "../ApplicationCard/ApplicationCard";
import { Icon } from "../Icon/Icon";

const Main = () => {
  let [FormData, setFormData] = useState<ApplicationForm>(mockData);

  const handleFormChange = (changedValues: any, values: any) => {
    console.log(changedValues);
    console.log(values);
  };

  let data = FormData.data.attributes;
  // let { personalQuestions } = personalInformation;
  // let { profileQuestions } = profile;

  return (
    <div className="main">
      <Navbar />
      <Form initialValues={data} onValuesChange={handleFormChange}>
        <ApplicationCard
          header="Upload cover image"
          data={data}
          attribute="coverImage"
        />
        <ApplicationCard
          header="Personal Information"
          data={data}
          attribute="personalInformation"
          checkBoxLabel="internalUse"
        />
        <ApplicationCard
          header="Profile"
          data={data}
          attribute="profile"
          checkBoxLabel="mandatory"
        />
        <div className="card">
          <div className="card-header">Upload cover image</div>
          <div className="card-body">
            <div className="question">
              <div className="question-body">
                <div className="question-type">paragraph</div>
                <p className="title">
                  Please tell me about yourself in less than 500 words
                </p>
              </div>
              <ImgIcon className="edit-icon" name="edit" width={18} />
            </div>
            <div className="question form">
              <div className="question-body">
                <Form.Item label="Type">
                  <Select suffixIcon={<Icon name="arrow" />}>
                    {questionTypes.map((questionType) => (
                      <Select.Option value={questionType}>
                        {questionType}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item label="Question">
                  <Input placeholder="Type here" />
                </Form.Item>
                <Form.Item label="Choise">
                  <Icon name="unorderedList" className="unorderedList" />
                  <Input placeholder="Type here" />
                  <Icon name="add" width={13} className="add" />
                </Form.Item>
                <Form.Item>
                  <Input.TextArea placeholder="additional information" />
                </Form.Item>
                <div className="video-duration">
                  <Form.Item className="duration">
                    <Input placeholder="Max duration of video" />
                  </Form.Item>
                  <Form.Item className="duration-unit">
                    <Select
                      placeholder="in (sec/min)"
                      suffixIcon={<Icon name="arrow" />}
                    >
                      <Select.Option value="minutes">minutes</Select.Option>
                      <Select.Option value="seconds">seconds</Select.Option>
                    </Select>
                  </Form.Item>
                </div>
                <div className="question-form-buttons">
                  <span className="question-form-button delete">
                    <Icon name="close" /> Delete question
                  </span>
                  <span className="question-form-button save">Save </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Main;
