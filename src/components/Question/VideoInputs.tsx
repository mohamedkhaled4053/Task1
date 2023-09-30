import { Form, FormListFieldData, Input, InputNumber, Select } from "antd";
import React from "react";
import { Icon } from "../Icon/Icon";

type Props = { field: FormListFieldData };

const VideoInputs = ({ field }: Props) => {
  return (
    <>
      <Form.Item name={[field.name, "additionalInformation"]}>
        <Input.TextArea placeholder="additional information" />
      </Form.Item>

      <div className="video-duration">
        <Form.Item className="duration" name={[field.name, "duration"]}>
          <InputNumber min={0} placeholder="Max duration of video" />
        </Form.Item>

        <Form.Item
          className="duration-unit"
          name={[field.name, "durationUnit"]}
        >
          <Select placeholder="in (sec/min)" suffixIcon={<Icon name="arrow" />}>
            <Select.Option value="minutes">minutes</Select.Option>
            <Select.Option value="seconds">seconds</Select.Option>
          </Select>
        </Form.Item>
      </div>
    </>
  );
};

export default VideoInputs;
