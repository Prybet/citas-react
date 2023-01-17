import { useEffect, useState } from "react";
import Error from "./Error";

const Form = ({ patient, setPatient, patients, setPatients }) => {
    const [name, setName] = useState("");
    const [owner, setOwner] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [symptoms, setSymptoms] = useState("");

    const [error, setError] = useState(false);

    useEffect(() => {
        if (Object.keys(patient).length > 0) {
            setName(patient.name);
            setOwner(patient.owner);
            setEmail(patient.email);
            setDate(patient.date);
            setSymptoms(patient.symptoms);
        }
    }, [patient]);

    const makeID = () => (Math.random().toString(36).substring(2) + Date.now().toString(36));
    const handleSubmit = (e) => {
        e.preventDefault();
        if ([name, owner, email, date, symptoms].includes("")) {
            setError(true);
            return;
        }
        setError(false);

        const ObjPatient = { name, owner, email, date, symptoms }

        if (patient.id) {
            ObjPatient.id = patient.id;
            setPatients(patients.map(pat => pat.id === patient.id ? ObjPatient : pat));
            setPatient({});
        } else {
            ObjPatient.id = makeID();
            setPatients([...patients, ObjPatient]);
        }



        setName("");
        setOwner("");
        setEmail("");
        setDate("");
        setSymptoms("");
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-3 ">
            <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {""} <span className="text-indigo-600 font-bold">Adminitralos</span></p>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-md py-5 px-5 mt-5 mb-5">
                {error &&
                    <Error msg={"todos los campos son obligatorios"} />
                }
                <div className="mb-5">
                    <label htmlFor="name" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input
                        id="name"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="text"
                        placeholder="Nombre de la mascota"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">
                        Nombre Propietario
                    </label>
                    <input
                        id="owner"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="text"
                        placeholder="Nombre del Propietario"
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="discharged" className="block text-gray-700 uppercase font-bold">
                        Alta
                    </label>
                    <input
                        id="discharged"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">
                        Sintomas
                    </label>
                    <textarea
                        id="symptoms"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los sintomas"
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                    />
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
                     hover:bg-indigo-700 cursor-pointer transition-colors"
                    value={patient.id ? "Editar Paciente" : "Agregar Paciente"}
                />
            </form>
        </div>
    );
}

export default Form;