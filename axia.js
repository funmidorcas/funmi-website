document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const formData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      age: document.getElementById('age').value,
      message: document.getElementById('message').value,
    };
  
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        alert('Your message has been submitted successfully!'); 
        document.getElementById('myForm').reset(); 
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('There was an error submitting your message. Please try again.');
      });
  });
    






  let form = document.querySelector("form");
const handleFormSubmit = (e) => {
  let firstName = document.querySelector("#firstName").value;
  let lastName = document.querySelector("#lastName").value;
  let email = document.querySelector("#email").value;
  let age = document.querySelector("#age").value;
  let resultView = document.querySelector("#result-view");
  e.preventDefault();
  const userData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    age: age,
  };
  const userDataAsJson = JSON.stringify(userData);
  console.log(userData);
  console.log(
    "================================================================="
  );
  console.log(userDataAsJson);
  resultView.innerHTML = `<li>First Name: ${userData.firstName}</li><li>Last Name: ${userData.lastName}</li><li>Email: ${userData.email}</li><li>Age: ${userData.age}</li>`;
};
form.addEventListener("submit", handleFormSubmit);

