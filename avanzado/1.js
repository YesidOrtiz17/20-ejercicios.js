const buscarPersona = () => {
    const personas = [
        { nombre: 'Ana', edad: 25 },
        { nombre: 'Carlos', edad: 30 },
        { nombre: 'sara', edad: 22 }
    ];
    const nombrebuscar = 'Carlos'; 
    const personaEncontrada = personas.find(persona => persona.nombre === nombrebuscar);
    console.log(personaEncontrada);
}

buscarPersona();