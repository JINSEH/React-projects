import { useFormik, Formik, Form } from "formik";
import * as Yup from "yup";

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
    <div>
      <h2>Contact me</h2>
      <Formik>
        {()=>(
            
        )}
      </Formik>
    </div>
  );
}
