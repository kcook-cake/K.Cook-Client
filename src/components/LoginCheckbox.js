import React, { useState, useEffect } from "react";

const LoginCheckbox = ({ description, show, checkedItems, checkedItemHandler }) => {
  const [isChecked, setIsChecked] = useState(null)

  const onCheck = ({ target }) => {
    checkedItemHandler(target.value, target.checked)
    setIsChecked(target.checked)
  }

  useEffect(() => {
    if (checkedItems.includes(description)) {
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
            id="autoLogin"
            checked={isChecked}
            value={description}
            onChange={e => onCheck(e)}
        ></input>
        <label for="cb1">{description}</label>
        </div>
        <button type="button">{show}</button>
    </div>
  );
};

export default LoginCheckbox;
