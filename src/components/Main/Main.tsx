import "./style.scss";
import Navbar from "../Navbar/Navbar";
import { mockData } from "../../utils/mock";
import { useState } from "react";
import { Form } from "antd";
import ApplicationCard from "../ApplicationCard/ApplicationCard";
import { ApplicationForm } from "../../utils/types";
import ImageCard from "../ImageCard/ImageCard";

const Main = () => {
  let [formData, setFormData] = useState<ApplicationForm>(mockData);

  const [form] = Form.useForm();

  const handleFormChange = (changedValues: any, values: any) => {
    console.log(changedValues);
    console.log(values);
    setFormData({
      ...formData,
      data: { ...formData.data, attributes: values },
    });
  };

  let data = formData.data.attributes;

  return (
    <div className="main">
      <Navbar />
      <Form form={form} initialValues={data} onValuesChange={handleFormChange}>
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
