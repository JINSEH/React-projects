import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import styles from "../modules/contact.module.css";

export default function Contact() {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <div id="contact" className={styles.contactContainer}>
      <h2>Contact me</h2>
      <div className={styles.contact}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            enquiry: "",
            message: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .required("Required")
              .max(15, "Must be 15 characters or less"),
            email: Yup.string().email("Must be a valid email"),
            message: Yup.string().max(200, "Must be 200 words or less"),
            enquiry: Yup.string().required("Required"),
          })}
          onSubmit={async (values, { resetForm }) => {
            await sleep(500);
            console.log(JSON.stringify(values, null, 2));
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form className={styles.formik}>
              <div className={styles.formContainer}>
                <label htmlFor="name">Name: </label>
                <Field className={styles.input} name="name"></Field>
                {errors.name && touched.name ? (
                  <div className={styles.errors}>{errors.name}</div>
                ) : null}
              </div>

              <div className={styles.formContainer}>
                <label htmlFor="email">Email: </label>
                <Field
                  className={styles.input}
                  name="email"
                  type="email"
                ></Field>
                {errors.email && touched.email ? (
                  <div className={styles.errors}>{errors.email}</div>
                ) : null}
              </div>

              <div className={styles.formContainer}>
                <label htmlFor="enquiry">Type of enquiry: </label>
                <Field className={styles.input} as="select" name="enquiry">
                  <option value="" disabled></option>
                  <option value="freelance">Freelance Project Proposal</option>
                  <option value="price">Pricing Enquiries</option>
                  <option value="general">General Enquiries</option>
                </Field>
                {errors.enquiry && touched.enquiry ? (
                  <div className={styles.errors}>{errors.enquiry}</div>
                ) : null}
              </div>

              <div className={styles.formContainer}>
                <label htmlFor="message">Message: </label>
                <Field
                  className={styles.input}
                  as="textarea"
                  rows="7"
                  name="message"
                ></Field>
                {errors.message && touched.message ? (
                  <div className={styles.errors}>{errors.message}</div>
                ) : null}
              </div>

              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
