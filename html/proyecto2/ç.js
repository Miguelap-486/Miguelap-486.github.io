const mensaje=() =>{
    let mensaje1=prompt();
    let mensaje2=prompt();
    let cadena1=mensaje1.match(/a,e,i,o,u/);
    let cadena2=mensaje2.match(/a,e,i,o,u/);

    if (cadena1>cadena2){
        console.log(`el mensaje ${mensaje2} tiene mas vocales que ${mensaje1}`)
    }else{
        console.log(`el mensaje ${mensaje1} tiene mas vocales que ${mensaje2}`)
    }
}

mensaje();