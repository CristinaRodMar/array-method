type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
    id: number;
    nombre: string;
    apellidos: string;
    sexo: string;
    temperatura: number;
    frecuenciaCardiaca: number;
    especialidad: Especialidad;
    edad: number;
}

const pacientes: Pacientes[] = [
{
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
},
{
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
},
{
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
},
{
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
},
{
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
},
{
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
},
];

//Apartado 1
//Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría

const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
    
    const pacientesPediatria: Pacientes[] = pacientes.filter((pacientes) => pacientes.especialidad === "Pediatra")
    
    console.log(pacientesPediatria);
    return pacientesPediatria;

};
console.log(obtenPacientesAsignadosAPediatria);

//Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {

    const pacientesPediatriaMenores = pacientes.filter((pacientes) => pacientes.edad < 10 && pacientes.especialidad === "Pediatra")

    return pacientesPediatriaMenores;
};
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios);

//Apartado 2
//Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un 
//ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {

    let activarProtocolo = pacientes.some(paciente => paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39)

    return activarProtocolo;
};
console.log(activarProtocoloUrgencia);

//Apartado 3
//El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.

const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
    
    const reasignarPacientes: Pacientes[] = pacientes.map(
        (pacientes: Pacientes): Pacientes => {
            return {
                ...pacientes,
                especialidad: pacientes.especialidad === "Pediatra" ? "Medico de familia" : pacientes.especialidad
            }
        }
    )

    return reasignarPacientes;
};
console.log(reasignaPacientesAMedicoFamilia);

//Apartado 4
// Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {

    const asignarPacientesPediatria = pacientes.some((pacientes) => pacientes.especialidad === "Pediatra");

    return asignarPacientesPediatria;
};
console.log(HayPacientesDePediatria);

//Apartado 5
//Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología

interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[] ): NumeroPacientesPorEspecialidad => {
    
    const pacientePorTipoEspecialidad: NumeroPacientesPorEspecialidad = {
        cardiologia: 0,
        medicoDeFamilia: 0,
        pediatria: 0
    };

    const resultado: NumeroPacientesPorEspecialidad = pacientes.reduce((acc, paciente) => {
        if (paciente.especialidad === 'Cardiólogo') {
            acc.cardiologia++;
        } else if (paciente.especialidad === 'Medico de familia') {
            acc.medicoDeFamilia++;
        } else if (paciente.especialidad === 'Pediatra') {
            acc.pediatria++;
        }
        return acc;
    }, pacientePorTipoEspecialidad);

    return resultado;
};
console.log(cuentaPacientesPorEspecialidad(pacientes))