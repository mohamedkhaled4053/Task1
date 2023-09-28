import "./style.scss";
import Navbar from "../Navbar/Navbar";
// import { ApplicationForm, mockData } from "../utils/mock";
// import { useState } from "react";
import { Form, Upload } from "antd";
import { ImgIcon } from "../Icon/ImgIcon";

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
      </Form>
    </div>
  );
};

export default Main;
