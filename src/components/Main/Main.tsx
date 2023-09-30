import "./style.scss";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { Form } from "antd";
import ApplicationCard from "../ApplicationCard/ApplicationCard";
import { ApplicationForm } from "../../utils/types";
import ImageCard from "../ImageCard/ImageCard";

const Main = () => {
  let [formData, setFormData] = useState<ApplicationForm>();
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(false);

  const [form] = Form.useForm();

  const handleFormChange = (changedValues: any, values: any) => {
    form.setFieldsValue(values);

    updateApplicationForm({
      ...formData,
      data: { ...formData!.data, attributes: values },
    });
  };

  async function updateApplicationForm(formData: ApplicationForm) {
    try {
      await fetch(
        "http://127.0.0.1:4010/api/889.0687931420016/programs/officia/application-form",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      ).then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function getFormData() {
      try {
        setLoading(true);
        setError(false);
        let formData: ApplicationForm = await fetch(
          "http://127.0.0.1:4010/api/967.9758630816657/programs/iste/application-form"
        ).then((res) => res.json());

        setFormData(formData);
        form.setFieldsValue(formData.data.attributes);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getFormData();
    // eslint-disable-next-line
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error || !formData)
    return <div className="error">failed to get the form</div>;

  let data = formData!.data.attributes;

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
