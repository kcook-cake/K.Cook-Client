import React, { useState, useEffect } from "react";
import DaumPostcode from "react-daum-postcode";

// interface IProps {
//   parentCallback: (addressMain: string) => void;
// }

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
    props.onClose();
  };

  useEffect(()=>{
    props.parentCallback(addressMain);
  })

  return (
    <>
      <DaumPostcode className="postCodeStyle" onComplete={handlePostCode} />
    </>
  );
};

export default PostCode;
