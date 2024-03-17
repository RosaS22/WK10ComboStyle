var idCounter = 2; //Start at 2 because of the example row

// Function to add dashes to phone number input field
function addDashes(input) {
    // Get the phone number from the input field.
    var phoneNumber = input.value;

    // Remove all non-numeric characters from the phone number.
    phoneNumber = phoneNumber.replace(/[^0-9]/g, '');

    // Add dashes to the phone number.
    phoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');

    // Set the phone number back to the input field.
    input.value = phoneNumber;
}

document.getElementById('add-entry-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission without input filled
    // Get input values
    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('emailInput').value;
    var telInput = document.getElementById('telInput'); // Get the tel input field
    addDashes(telInput); // Add dashes to the tel input field
    var tel = telInput.value; // Get the tel input field value
    // Generate a unique ID (incremental 1, 2, 3, etc.)
    var id = idCounter++;
    // Create new row HTML
    var newRowHtml = `
      <tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${tel}</td>
      </tr>
    `;
    // Append the new row to the table body
    document.getElementById('table-body').innerHTML += newRowHtml;
    // Reset form fields
    document.getElementById('nameInput').value = '';
    document.getElementById('emailInput').value = '';
    document.getElementById('telInput').value = '';
});

// Add an event listener to the phone number input field.
document.getElementById('telInput').addEventListener('keyup', function() {
    addDashes(this);
});
