const d = document;

export function shortcuts(e){
    console.log(e.type);
    console.log(e.key);
    console.log(e.code);
    console.log(`ctrl: ${e.ctrlKey}`);
    console.log(`alt: ${e.altKey}`);
    console.log(`shift: ${e.shiftKey}`);
    console.log(e);

    if(e.key === "a" && e.altKey){
        alert("Haz lanzado una alerta con el teclado"); 
    }

    if(e.key === "c" && e.altKey){
        confirm("Haz lanzado una confirmación con el teclado");
    }

    if(e.key === "f" && e.altKey){
        prompt("Haz lanzado un aviso con el teclado");
    }
}