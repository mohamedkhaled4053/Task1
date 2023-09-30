import React from "react";
import { Form, Upload } from "antd";
import { ImgIcon } from "../Icon/ImgIcon";
import { Icon } from "../Icon/Icon";

type Props = {
  coverImage: string;
};

const ImageCard = ({ coverImage }: Props) => {
  return (
    <div className="card upload">
      <div className="card-header">Upload cover image</div>
      {!coverImage || coverImage === "http://example.com" ? (
        <div className="card-body">
          <Form.Item name="coverImage">
            <Upload.Dragger
              name="file"
              multiple={true}
              action="http://example.com/" // upload endpoint
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
        </div>
      ) : (
        <div>
          <img
            className="cover-image"
            alt="not found"
            width={"250px"}
            src={coverImage}
          />
          <p
            className="cover-image-delete"
            onClick={() =>
              console.log("api endpoint call for deleting the cover image")
            }
          >
            <Icon name="close" /> Delete & re-upload
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
