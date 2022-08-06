import React from "react";
import { useFormik } from "formik";
import * as yup from 'yup';
import { useRouter } from 'next/router'
import { fetchUser, createUser } from "../redux/action/index"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SignupForm() {
  const [message, setMessage] = React.useState(''); // This will be used to show a message if the submission is successful
  const [submitted, setSubmitted] = React.useState(false);
  React.useEffect(() => {
    fetchUser();
  }, []);
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
    },

    onSubmit: (values) => {
      console.log(values,'-----------------values')
      // setMessage('Form submitted');
      setSubmitted(true);
    },
    validationSchema: yup.object({
      name: yup.string().trim().required('Name is required'),
      email: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),
      password: yup.string()
        .min(3, "Password must be 3 characters at minimum")
        .required("Password is required")
    }),
  });

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      {/* <div hidden={!submitted} className="alert alert-primary" role="alert">
        {password}
      </div> */}

      <form className="w-50" onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="John Doe"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && (
            <div className="text-danger">{formik.errors.name}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="john@example.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && (
            <div className="text-danger">{formik.errors.email}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
          password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Your password ..."
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && (
            <div className="text-danger">{formik.errors.password}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}