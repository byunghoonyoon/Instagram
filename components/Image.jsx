import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3001";

const Image = () => {
  const [content, setContent] = useState("");
  const [uploadedImg, setUploadedImg] = useState({
    fileName: "",
    fillPath: "",
  });

  const fileAdd = () => {
    let file = document.getElementById("fileAdd");
    file.click();
  };

  const onChange = (e) => {
    setContent(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", content);
    axios
      .post("http://localhost:3001/upload", formData)
      .then((res) => {
        const { fileName } = res.data;
        console.log(fileName);
        setUploadedImg({ fileName });
        alert("The file is successfully uploaded");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <form
        onSubmit={onSubmit}
        style={{
          display: "inline-block",
          border: "1px red solid",
        }}
      >
        <div onClick={fileAdd} id="uploadDiv">
          <input id="fileAdd" type="file" onChange={onChange} />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};
export default Image;
// 문제점 1.이미지를 업로드 해도 02.jpg처럼 파일명이 그대로남아있음.
// 2. 스크롤 바가 두개임.
// 3. 이미지 업로드한건 public / img 폴더에 잘 들어가긴 하는데,
// 이를 어떻게 회원별로 구분할지.(구분이 필요한가?)
