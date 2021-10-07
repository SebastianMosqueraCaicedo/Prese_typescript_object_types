interface DatosBasicos {

    nombre: string;
    edad: number;
    sexo: string;
}

interface DatosDetallados {

    altura: number;
    peso: number;
    estadocivil: string;
}

interface DatosCompletos extends DatosBasicos, DatosDetallados{}

const cc: DatosCompletos = {

    nombre: "Alejandra",
    edad: 26,
    sexo: "Femenino",
    altura: 1.75,
    peso: 67,
    estadocivil: "casada",
}