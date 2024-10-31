document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevents the page from reloading
  
    const formData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
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
        alert('Your message has been submitted successfully!'); // Notification to user
        document.getElementById('myForm').reset(); // Clear form fields
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('There was an error submitting your message. Please try again.');
      });
  });
    


