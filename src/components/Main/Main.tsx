import "./style.scss";
import Navbar from "../Navbar/Navbar";
import { mockData } from "../utils/mock";
import { useState } from "react";
import { Form } from "antd";
import ApplicationCard from "../ApplicationCard/ApplicationCard";
import { ApplicationForm } from "../utils/types";
import ImageCard from "../ImageCard/ImageCard";

const Main = () => {
  let [FormData, setFormData] = useState<ApplicationForm>(mockData);

  const handleFormChange = (changedValues: any, values: any) => {
    console.log(changedValues);
    console.log(values);
  };

  let data = FormData.data.attributes;

  return (
    <div className="main">
      <Navbar />
      <Form initialValues={data} onValuesChange={handleFormChange}>
        <ImageCard coverImage={data.coverImage} />

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

        <ApplicationCard
          header="customisedQuestions"
          data={data}
          attribute="customisedQuestions"
        />
      </Form>
    </div>
  );
};

export default Main;
