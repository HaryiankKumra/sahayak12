document.getElementById('patientForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var disability = document.getElementById('disability').value;
    
    
    // Display patient details
    var patientDetailsDiv = document.getElementById('patientDetails');
    patientDetailsDiv.innerHTML = "<h2>Patient Details:</h2>" +
                                   "<p><strong>Name:</strong> " + name + "</p>" +
                                   "<p><strong>Age:</strong> " + age + "</p>" +
                                   "<p><strong>Gender:</strong> " + gender + "</p>";
                                   "<p><strong>Disability:</strong> " + disability + "</p>";
    
    // Reset form fields
    document.getElementById('patientForm').reset();
  });
  