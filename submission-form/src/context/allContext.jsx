import { createContext, useContext, useMemo, useState } from "react";
const MyContext = createContext(null);
export function MyContextProvider({ children }) {
  //GenderSubject Inputs
  const [selectedGenderValue, setSelectedGenderValue] = useState("");
  const [checkedItems, setCheckedItems] = useState({});

  //Personal Particulars input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  //ResumeURL input
  const [selectedFile, setSelectedFile] = useState("");
  const [programmingChoice, setProgrammingChoice] = useState("");
  const [urlValue, setUrlvalue] = useState("");
  const [aboutValue, setAboutValue] = useState("");

  const personalInfo = useMemo(
    () => ({
      firstName,
      lastName,
      email,
      contact,
      setLastName,
      setEmail,
      setFirstName,
      setContact,
    }),
    [firstName, lastName, email, contact]
  );

  const preferences = useMemo(
    () => ({
      selectedGenderValue,
      setSelectedGenderValue,
      checkedItems,
      setCheckedItems,
    }),
    [selectedGenderValue, checkedItems]
  );

  const resume = useMemo(
    () => ({
      selectedFile,
      setSelectedFile,
      programmingChoice,
      setProgrammingChoice,
      urlValue,
      setUrlvalue,
      aboutValue,
      setAboutValue,
    }),
    [selectedFile, programmingChoice, urlValue, aboutValue]
  );

  //Function to reset all input fields
  const resetAll = () => {
    setSelectedGenderValue("");
    setCheckedItems({});
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setSelectedFile("");
    setProgrammingChoice("");
    setUrlvalue("");
    setAboutValue("");
  };

  //Function to collate all input values and display them in console.
  const submitAll = (e) => {
    e.preventDefault();
    const all = {
      "First Name": firstName,
      "Last Name": lastName,
      Email: email,
      Contact: contact,
      Gender: selectedGenderValue,
      "Best Subject/Subjects": checkedItems,
      Resume: selectedFile,
      URL: urlValue,
      "Programming Choice": programmingChoice,
      About: aboutValue,
    };

    console.log(all);
  };

  const value = useMemo(
    () => ({
      personalInfo,
      preferences,
      resume,
      resetAll,
      submitAll,
    }),
    [personalInfo, preferences, resume, resetAll, submitAll]
  );

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

export function useMyContext() {
  const context = useContext(MyContext);
  return context;
}
