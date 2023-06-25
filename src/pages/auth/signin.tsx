import { SginInFormSchema } from "@/components/validation/formsYupValidation";
import { useFormik } from "formik";
import Link from "next/link";
import { FC, useState } from "react";

interface ISignInForm {
  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
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
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit: (values: ISignInForm) => {
        console.log("validation success✅");
        console.log(values);

        // send request and stuff
      },
    });
  return (
    <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* Left column container */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* Logo */}
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        alt="logo"
                      />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        We are The Lotus Team
                      </h4>
                    </div>

                    <form onSubmit={handleSubmit}>
                      {/* username input */}
                      <div
                        className="relative mb-4"
                        data-te-input-wrapper-init
                      >
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          username
                        </label>
                        <input
                          name="username"
                          onBlur={handleBlur}
                          value={values.username}
                          onChange={handleChange}
                          type="text"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500"
                          id="exampleFormControlInput1"
                          placeholder="username"
                        />
                      </div>
                      {touched.username && errors.username && (
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                          {errors.username}
                        </p>
                      )}

                      {/* Password input */}
                      <div
                        className="relative mb-4"
                        data-te-input-wrapper-init
                      >
                        <label
                          htmlFor="exampleFormControlInput11"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Password
                        </label>

                        <input
                          name="password"
                          onBlur={handleBlur}
                          value={values.password}
                          onChange={handleChange}
                          type="password"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500"
                          id="exampleFormControlInput11"
                          //placeholder="Password"
                        />
                      </div>
                      {touched.password && errors.password && (
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                          {errors.password}
                        </p>
                      )}
                      {/* Submit button */}
                      <div className="mb-12 mt-3 pb-1 pt-1 text-center">
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="submit"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          style={{
                            background:
                              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                          }}
                        >
                          Log in
                        </button>
                        {/* Forgot password link */}
                        <a href="#!">Forgot password?</a>
                      </div>

                      {/* Register button */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        <button
                          type="button"
                          className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                        >
                          <Link href="/auth/signup">Register</Link>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Right column container with background and description */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignIn;
