interface Preguntas {

    edad: number;
    nombre: string;
    sexo?: string;

}
function retorna (pregunta:Preguntas){

    let edad = pregunta.edad;
    let nombre = pregunta.nombre;
    let sexo = pregunta.sexo;

    console.log("Su nombre es " + nombre + ",su edad es " + edad)
    if (sexo != undefined){
        console.log(",su sexo es " + sexo)
    }
    let persona: Preguntas ={
        edad: 12,
        nombre: "Sebastian",
        sexo: "m",
    }
    retorna(persona);
}

