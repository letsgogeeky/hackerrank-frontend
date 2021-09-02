var result = document.getElementById('result');
var filter = document.getElementById('filter');
var userItems = []
getData();

filter.addEventListener('input', (e) => filterUsers(e.target.value))
// Read about promises in javascript
function getData() {
    fetch('https://randomuser.me/api?results=30', {
        method: 'GET'
    }).then(response => response.json()).then(data => {
        console.log(data);
        let {results} = data;
        
        result.innerHTML = '';
        results.forEach(user => {
            let userItem = document.createElement('li');
            userItem.id = user.login.uuid
            userItems.push(userItem);
            let userData = `
                <img src="${user.picture.large}"/>
                <div class="user-info">
                <h4>${user.name.title} | ${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city} ${user.location.country}</p>
                </div>
            `
            userItem.innerHTML = userData;
            result.appendChild(userItem);
        })
    })

}

function filterUsers(value){
    userItems.forEach(userListItem => {
        if(userListItem.innerText.toLowerCase().includes(value.toLowerCase())){
            userListItem.classList.remove('hide');
        }else {
            userListItem.classList.add('hide');
        }
    })
}

