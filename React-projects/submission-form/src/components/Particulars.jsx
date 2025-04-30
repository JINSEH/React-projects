import { useMyContext } from "../context/allContext";

export default function Particulars() {
  const { personalInfo } = useMyContext();
  const { setFirstName, setLastName, setEmail, setContact } = personalInfo;

  return (
    <>
      <label htmlFor="first_name">First Name*</label>
      <input
        type="text"
        name="first_name"
        id="first_name"
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Enter First Name"
      />

      <label htmlFor="last_name">Last Name*</label>
      <input
        type="text"
        name="last_name"
        id="last_name"
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Enter Last Name"
      />

      <label htmlFor="email">Enter Email*</label>
      <input
        type="text"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />

      <label htmlFor="contact">Contact*</label>
      <input
        type="text"
        name="contact"
        id="contact"
        onChange={(e) => setContact(e.target.value)}
        placeholder="Enter Mobile Number"
      />
    </>
  );
}
