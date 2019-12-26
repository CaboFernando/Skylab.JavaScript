// Sem Promises
// var xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github.com/users/CaboFernando');
// xhr.send(null);

// xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4){
//         console.log(JSON.parse(xhr.responseText));
//     }
// }

// Com Promises
// var myPromise = () => {
//     return new Promise(function (resolve, reject) {
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', 'https://api.github.com/users/CaboFernando');
//         xhr.send(null);

//         xhr.onreadystatechange = () => {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200)
//                     resolve(JSON.parse(xhr.responseText));
//                 else
//                     reject('Erro na Requisição');
//             }
//         }
//     });
// };

// Com Axios
axios.get('https://api.github.com/users/CaboFernando')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.warn(error);
    });