import React, { useState, useEffect } from "react";

const LoginCheckbox = ({ id, description, show, checkedItems, checkedItemHandler }) => {
  const [isChecked, setIsChecked] = useState(false)

  const onCheck = ({ target }, id) => {
    checkedItemHandler(id, target.checked)
    setIsChecked(target.checked)
  }

  useEffect(() => {
    if (checkedItems.includes(id)) {
      setIsChecked(true)
    } else {
      setIsChecked(false)
    }
  }, [checkedItems])

  return (
    <div className="agree-list">
        <div className="check-agreement">
          <input
              type="checkbox"
              id={"signupAuto"+id}
              className="signup-checkbox-inner"
              checked={isChecked}
              value={description}
              onChange={(e) => {onCheck(e, id)}}
          ></input>
          <label htmlFor={"signupAuto"+id}></label>
          <div className="login-auto-contents">{description}</div>
        </div>
        <button type="button">{show}</button>
    </div>
  );
};

export default LoginCheckbox;
