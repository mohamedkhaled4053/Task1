import React from "react";
import { Form, Upload } from "antd";
import { ImgIcon } from "../Icon/ImgIcon";

type Props = {
  coverImage:string
};

const ImageCard = ({ coverImage }: Props) => {
  return (
    <div className="card upload">
      <div className="card-header">Upload cover image</div>
      <div className="card-body">
        {coverImage.includes("example") && (
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
};

export default ImageCard;
