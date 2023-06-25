import { SignUpFormSchema } from "@/components/validation/formsYupValidation";
import { useFormik } from "formik";
import Link from "next/link";
import { FC } from "react";

interface ISignInForm {
  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const SignUp: FC = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      validationSchema: SignUpFormSchema,
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
                          htmlFor="exampleFormControlInputusername"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          username
                        </label>
                        <input
                          name="username"
                          onBlur={handleBlur}
                          onFocus={() => console.log("focuse")}
                          value={values.username}
                          onChange={handleChange}
                          type="text"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500"
                          id="exampleFormControlInputusername"
                          //placeholder="username"
                        />
                      </div>
                      {touched.username && errors.username && (
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                          {errors.username}
                        </p>
                      )}

                      {/* email input */}
                      <div
                        className="relative mb-4"
                        data-te-input-wrapper-init
                      >
                        <label
                          htmlFor="exampleFormControlInputemail"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          email
                        </label>

                        <input
                          type="email"
                          name="email"
                          onBlur={handleBlur}
                          value={values.email}
                          onChange={handleChange}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500"
                          id="exampleFormControlInputemail"
                        />
                      </div>
                      {touched.email && errors.email && (
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                          {errors.email}
                        </p>
                      )}

                      {/* phone input */}
                      <div
                        className="relative mb-4"
                        data-te-input-wrapper-init
                      >
                        <label
                          htmlFor="exampleFormControlInputphone"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          phone
                        </label>
                        <input
                          type="text"
                          name="phone"
                          onBlur={handleBlur}
                          value={values.phone}
                          onChange={handleChange}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500"
                          id="exampleFormControlInputphone"
                        />
                      </div>
                      {touched.phone && errors.phone && (
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                          {errors.phone}
                        </p>
                      )}

                      {/* Password input */}
                      <div
                        className="relative mb-4"
                        data-te-input-wrapper-init
                      >
                        <label
                          htmlFor="exampleFormControlInputpassword"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          password
                        </label>
                        <input
                          name="password"
                          onBlur={handleBlur}
                          value={values.password}
                          onChange={handleChange}
                          type="password"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500"
                          id="exampleFormControlInputpassword"
                        />
                      </div>
                      {touched.password && errors.password && (
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                          {errors.password}
                        </p>
                      )}

                      {/* confrim Password input */}
                      <div
                        className="relative mb-4"
                        data-te-input-wrapper-init
                      >
                        <label
                          htmlFor="exampleFormControlInputconfirmpassword"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          confirm password
                        </label>
                        <input
                          name="confirmPassword"
                          onBlur={handleBlur}
                          value={values.confirmPassword}
                          onChange={handleChange}
                          type="password"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500"
                          id="exampleFormControlInputconfirmpassword"
                          //placeholder="Password"
                        />
                      </div>
                      {touched.confirmPassword && errors.confirmPassword && (
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                          {errors.confirmPassword}
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
                          sign up
                        </button>
                        {/* Forgot password link */}
                        <a href="#!">Forgot password?</a>
                      </div>

                      {/* Register button */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">already have an account?</p>
                        <button
                          type="button"
                          className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                        >
                          <Link href="/auth/signin">login</Link>
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
export default SignUp;
