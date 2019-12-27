var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var repos;

isLoading = () => {
    listElement.innerHTML = '';

    var loadingElement = document.createElement('li');
    var loadingText = document.createTextNode('Carregando...');

    loadingElement.appendChild(loadingText);
    listElement.appendChild(loadingElement);
};

renderRepos = () => {
    listElement.innerHTML = '';

    for (repo of repos) {
        var repoElement = document.createElement('li');
        var repoText = document.createTextNode(repo);

        repoElement.appendChild(repoText);
        listElement.appendChild(repoElement);
    }
}

addRepos = () => {
    isLoading();

    axios.get(`https://api.github.com/users/${inputElement.value}/repos`)
        .then(function (response) {
            repos = response.data.map(item => item.name) || [];
            renderRepos();
        })
        .catch(function (error) {
            listElement.innerHTML = '';
            console.error('Erro 404');
        });
    inputElement.value = '';
};

buttonElement.onclick = addRepos;