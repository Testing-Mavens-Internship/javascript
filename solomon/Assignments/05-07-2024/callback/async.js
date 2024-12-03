let getApi = async () => {
    let response = await fetch('https://reqres.in/api/users?page=2');
    let json = await response.json();
    console.log(json)
}
getApi();