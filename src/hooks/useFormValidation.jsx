import { useState } from "react";

function useFormValidation(initialState, validate) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    const validationError = validate(name, value);
    setErrors({
      ...errors,
      [name]: validationError,
    });
  };

  return { values, errors, handleChange };
}

export default useFormValidation;
