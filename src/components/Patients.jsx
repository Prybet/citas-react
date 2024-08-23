import Patient from "./Patient";


const Patients = ({ setPatient, patients = [], deletePatient }) => {

    return (
        <div >
            {patients && patients.length ? (
                <>
                    <h2 className='font-black text-3xl text-center'>Listado de Pacientes</h2>
                    <p className='text-xl mt-5 mb-10 text-center'>
                        Admistra tus {""}
                        <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
                    </p>
                    <div className="overflow-y-scroll p-container">
                        {patients.map(patient => (
                            <Patient key={patient.id} patient={patient} setPatient={setPatient} deletePatient={deletePatient} />
                        ))}

                    </div>
                </>
            ) : (
                <>
                    <h2 className='font-black text-3xl text-center'>No hay Pacientes</h2>
                    <p className='text-xl mt-5 mb-10 text-center'>
                        Comienza agregando paciente y {""}
                        <span className='text-indigo-600 font-bold'> Aparecerán en este Lugar</span>
                    </p>
                </>
            )}



        </div>
    )
}

export default Patients;

