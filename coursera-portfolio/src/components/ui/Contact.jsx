import { useFormik } from "formik";
import * as Yup from "yup";

export default function Contact() {
  const passwordRules =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const { handleChange, handleBlur, handleSubmit, values, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: "",
      password: "",
      confirm_password: "",
    },
    onSubmit: (values) => {
      console.log("onSubmit", values);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      age: Yup.number("Must be a number").required("Required"),
      password: Yup.string()
        .min(8, "Minimum 8 Characters")
        .matches(passwordRules, "Please create a stronger password")
        .required("Required"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
  });

  console.log(errors);

  return (
    <div>
      <h2>Contact me</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <label htmlFor="enquiry">Type of enquiry</label>
        <input type="text" onChange={handleChange} onBlur={handleBlur} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
