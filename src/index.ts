interface Hogar{
    readonly residente: {nombre: string; edad:number}
}
function visitaCumple (hogar:Hogar){
    console.log("feliz cumple, "+ hogar.residente.nombre +"!");
    hogar.residente.edad++;
}

// intenta SOBRE ESCRIBIR, error
/* function evict(hogar:Hogar){
    hogar.residente={
        nombre:"tomas tomar",
        edad: 21,
    }
} */