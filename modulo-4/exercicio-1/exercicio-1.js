var inputElement = document.querySelector('#app input');

inputElement.addEventListener('keyup', function (key) {
    if (key.keyCode == 13) {
        let age = inputElement.value;
        inputElement.value = '';
        checaIdade(age)
            .then(function (result) {
                setTimeout(() => {
                    alert('O usuário é maior que 18 anos');
                }, 2000)

            })
            .catch(function (error) {
                setTimeout(() => {
                    alert('O usuário é menor que 18 anos');
                }, 2000)
            });
    }

});

checaIdade = (num) => {
    return new Promise(function (resolve, reject) {
        return num > '18' ? resolve('sucess') : reject(Error('Not'))
    });
};
