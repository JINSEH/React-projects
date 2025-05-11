import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "../modules/contact.module.css";
export default function Contact() {
  const passwordRules =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  // const { handleChange, handleBlur, handleSubmit, values, errors } = useFormik({
  //   initialValues: {
  //     name: "",
  //     email: "",
  //     age: "",
  //     password: "",
  //     confirm_password: "",
  //   },
  //   onSubmit: (values) => {
  //     console.log("onSubmit", values);
  //   },
  //   validationSchema: Yup.object({
  //     name: Yup.string()
  //       .max(15, "Must be 15 characters or less")
  //       .required("Required"),
  //     email: Yup.string().email("Invalid email address").required("Required"),
  //   }),
  // });

  // console.log(errors);

  return (
    <div className={styles.contact}>
      <h2>Contact me</h2>
      <Formik initialvalues={{ name: "", email: "", enquiry: "", message: "" }}>
        {() => (
          <Form>
            <label htmlFor="name">Name: </label>
            <Field name="name"></Field>

            <label htmlFor="email">Email: </label>
            <Field name="email" type="email"></Field>

            <label htmlFor="enquiry">Type of enquiry: </label>
            <Field as="select" name="enquiry">
              <option value="freelance">Freelance Project Proposal</option>
              <option value="price">Pricing Enquiries</option>
              <option value="general">General Enquiries</option>
            </Field>

            <label htmlFor="message">Message: </label>
            <Field as="textarea"></Field>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
