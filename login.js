
const handleFormSubmit = (e) => {
    let name = document.querySelector(".login").value
    let password = document.querySelector(".password").value
    let login = document.querySelector("button").value
    
        e.preventDefault();
    const userData = {
name: name,
 password: password,
 login: login,
    };
    const userDataAsJson = JSON.stringify(userData);
    console.log(userData);
    console.log(
        "================================================================="
      );
    