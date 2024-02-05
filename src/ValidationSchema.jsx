import * as yup from "yup";
const formValidationSchema = yup.object({
    fname : yup.string().min(5,"minimum 5 character required").max(15,"maximum 15 character required"),
    lname : yup.string().min(5,"minimum 5 character required").max(15,"maximum 15 character required"),
    email : yup.string().email("please enter valid email"),
    password : yup.string().min(10,"please enter minimum 10 values").max(20,"please enter maximum 20 values")
  });

  export default formValidationSchema;