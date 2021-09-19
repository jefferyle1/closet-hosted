import React, { useState, useEffect } from "react";
import { storage } from "../../firebase"
import styled from 'styled-components'


export function ImageUpload(props) {
  const [image, setImage] = useState(null);
  let setUrl = props.setUrl;
  let url = props.url;

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }

  };

  const handleUpload = () => {
    if (image) {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "stage_changed",
        snapshot => { },
        error => {
          console.log(error);
        },
        () => {
          storage.ref("images").child(image.name)
            .getDownloadURL()
            .then(url => {
              setUrl(url);
            });
        }
      );
    }
  };

  return (
    <Right>
      <Img src={url} alt={"Choose and Upload an Image Below"} />
      <Upload>
        <hr/>
        <Input type="file" onChange={handleChange} />
        <Button onClick={handleUpload}> Upload Image </Button>
      </Upload>
    </Right>
  );
}

const Img = styled.img`
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 25px;
  vertical-align: top;
  height: 65%;
`;

const Button = styled.button` 
  background-color: white;
  cursor: pointer;
`;

const Upload = styled.div`
  margin-bottom: 25px;
`;

const Input = styled.input`
  margin-bottom: 25px;
  
`;


const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-right: 2px solid black;
  padding: 10px;
  border: 2px solid black;
`;