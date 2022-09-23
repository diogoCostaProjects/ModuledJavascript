
const Request = async function getUser() {
    let response = await fetch(`https://swapi.dev/api/people/1`);
    let userData = await response.json();
    
    document.getElementById('load').innerHTML = `<h2>Carregado via API: ${userData.name}</h2>`;
}

export { Request };