import "./style.scss";
import Navbar from "../Navbar/Navbar";
import { ApplicationForm, mockData } from "../utils/mock";
import { useState } from "react";
import { Form } from "antd";
import { ImgIcon } from "../Icon/ImgIcon";
import ApplicationCard from "../ApplicationCard/ApplicationCard";

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
            <div className="question saved">
              <p className="title">
                Please tell me about yourself in less than 500 words
              </p>
              <ImgIcon name="edit" width={18} />
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Main;
