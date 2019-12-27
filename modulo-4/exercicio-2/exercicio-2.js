var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var repos;

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
    axios.get(`https://api.github.com/users/${inputElement.value}/repos`)
        .then(function (response) {
            repos = response.data.map(item => item.name) || [];
            console.log(repos);
            renderRepos();
        })
        .catch(function (error) {
            repos = [];
            console.warn(error);
        });
    inputElement.value = '';
};

buttonElement.onclick = addRepos;