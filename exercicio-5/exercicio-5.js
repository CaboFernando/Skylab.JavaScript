var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", " ReactJS", " Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", " Ruby on Rails", " Elixir"]
    }
];

exibeMsg = (vet) => {
    vet.forEach(element => {
        console.log(`O ${element.nome} possui as habilidades: ${element.habilidades}`);
    });
};