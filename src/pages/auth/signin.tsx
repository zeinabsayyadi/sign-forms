import { SginInFormSchema } from "@/components/validation/formsYupValidation";
import { useFormik } from "formik";
import { FC, useState } from "react";

interface ISignInForm {
  userName: string;
  //email: string;
  //phone: string;
  password: string;
  //confirmPassword: string;
}

interface IFormStatus {
  message: string;
  type: string;
}

interface IFormStatusProps {
  [key: string]: IFormStatus;
}

const formstatusProps: IFormStatusProps = {
  success: {
    message: `welcome back!`,
    type: "success",
  },
  error: {
    message: `something went wrong please try again`,
    type: "error",
  },
};
const SignIn: FC = () => {
  const [fomrStatus, setFormStatus] = useState<IFormStatus>({
    message: "",
    type: "",
  });
 
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      validationSchema: SginInFormSchema,
      initialValues: {
        username: "",
        password: "",
      },
      onSubmit: (values) => {
        console.log("validation success✅");
        console.log(values);

        // send request and stuff
      },
    });
  return (<h1>sign in</h1>);
};
export default SignIn
