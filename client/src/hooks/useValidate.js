import { toast } from "react-hot-toast";

export const useValidate = (state) => {
  let validateConfig = {
    ...(state !== "login" && {
      name: [{ required: true, message: "name is required" }],
    }),
    email: [{ required: true, message: "email is required" }],
    password: [{ required: true, message: "password is required" }],
  };

  const validateForm = (userData) => {
    let isValid = true;

    Object.entries(userData).forEach(([key, value]) => {
      if (validateConfig[key]) {
        validateConfig[key].some((rule) => {
          if (rule.required && !value) {
            isValid = false;
            toast.success(rule.message);
          }
        });
      }
    });
    return isValid;
  };

  return { validateForm };
};
