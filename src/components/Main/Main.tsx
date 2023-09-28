import "./style.scss";
import Navbar from "../Navbar/Navbar";
// import { ApplicationForm, mockData } from "../utils/mock";
// import { useState } from "react";
import { Form, Upload, Checkbox, Switch } from "antd";
import { ImgIcon } from "../Icon/ImgIcon";
import { Icon } from "../Icon/Icon";

const Main = () => {
  //   let [FormData, setFormData] = useState<ApplicationForm>(mockData);

  const handleFormChange = (changedValues: any, values: any) => {
    console.log(changedValues);
    console.log(values);
  };
  return (
    <div className="main">
      <Navbar />
      <Form onValuesChange={handleFormChange}>
        <div className="card upload">
          <div className="card-header">Upload cover image</div>
          <div className="card-body">
            <Form.Item name="coverImage">
              <Upload.Dragger
                name="file"
                multiple={true}
                action="http://example.com/"
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
          </div>
        </div>
        <div className="card">
          <div className="card-header">Upload cover image</div>
          <div className="card-body">
            <div className="infos">
              <div className="info">
                <p className="title">First Name</p>
                <Form.Item
                  name={["personalInformation", "firstName", "internal"]}
                >
                  <Checkbox>Internal</Checkbox>
                </Form.Item>
                <Form.Item name={["personalInformation", "firstName", "show"]}>
                  <Switch id="test" /> <label htmlFor="test">Hide</label>
                </Form.Item>
              </div>
              <div className="info">
                <p className="title">First Name</p>
                <Form.Item
                  name={["personalInformation", "firstName", "internal"]}
                >
                  <Checkbox>Internal</Checkbox>
                </Form.Item>
                <Form.Item name={["personalInformation", "firstName", "show"]}>
                  <Switch id="test" /> <label htmlFor="test">Hide</label>
                </Form.Item>
              </div>
              <div className="info">
                <p className="title">First Name</p>
                <Form.Item
                  name={["personalInformation", "firstName", "internal"]}
                >
                  <Checkbox>Internal</Checkbox>
                </Form.Item>
                <Form.Item name={["personalInformation", "firstName", "show"]}>
                  <Switch id="test" /> <label htmlFor="test">Hide</label>
                </Form.Item>
              </div>
            </div>
            <div className="add-question">
              <Icon name="add" width={25} /> Add a question
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Upload cover image</div>
          <div className="card-body">
            <div className="question saved">
              <p className="title">Please tell me about yourself in less than 500 words</p>
              <ImgIcon name="edit" width={18}/>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Main;
