import { useEffect, useState } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import Patients from "./components/Patients";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const getLS = () => {
      setPatients(JSON.parse(localStorage.getItem("patients")) ?? [])
    }
    getLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const deletePatient = id => {
    setPatients(patients.filter(pat => pat.id !== id));
  }

  return (
    <div className="container mx-auto">
      <Header />
      <div className="md:grid grid-cols-2 h-3/4">
        <Form patients={patients} setPatients={setPatients} patient={patient} setPatient={setPatient} />
        <Patients patients={patients} setPatient={setPatient} deletePatient={deletePatient} />
      </div>
    </div>
  )
}

export default App
