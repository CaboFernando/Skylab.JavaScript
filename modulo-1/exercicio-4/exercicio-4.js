var anosEstudo = 7;

experiencia = (anos) => {
    if (anos == 0 || anos == 1)
        console.log('Iniciante');
    if (anos == 2 || anos == 3)
        console.log('Intermediário');
    if (anos == 4 || anos == 5 || anos == 6)
        console.log('Avançado');
    if (anos > 6)
        console.log('Jedi Master');
};