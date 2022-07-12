import React, { useState, useEffect } from "react";
import DaumPostcode from "react-daum-postcode";

interface IProps {
  parentCallback: (addressMain: string) => void;
}

const PostCode = (props) => {
  const [addressMain, setAddressMain] = useState("");
  // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
  const handlePostCode = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setAddressMain(fullAddress.split('(')[0]);
    // console.log(data);
    // console.log(fullAddress); //메인
    // console.log(data.zonecode); //우편번호
    props.onClose();
  };

  const postCodeStyle = {
    display: "block",
    position: "relative",
    // top: "10%",
    width: "100%",
    height: "300px",
    padding: "7px 0",
    border: "1px solid #ddd",
  };

  useEffect(()=>{
    props.parentCallback(addressMain);
  })

  return (
    <div>
      <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
    </div>
  );
};

export default PostCode;
