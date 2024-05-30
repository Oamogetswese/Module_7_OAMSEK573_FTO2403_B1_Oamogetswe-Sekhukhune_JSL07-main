document.addEventListener('DOMContentLoaded', function () {
  const cardForm = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const certificateContent = document.getElementById('certificateContent');
  const closeModal = document.querySelector('.close');

  // Hide the modal initially
  modal.style.display = 'none';

  cardForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // 🚨 Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage');
      const courseNameInput = document.getElementById('courseName'); 

      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput.value;

      if (studentName.trim() === '' || personalMessage.trim() === '' || courseName.trim() === '') {
          alert('Please fill in all fields');
          return;
      }

      // 🚨 Generate certificate content dynamically
      certificateContent.innerHTML = `
          <h2>Certificate of Achievement</h2>
          <p>This is to certify that</p>
          <h3>${studentName}</h3>
          <p>has almost completed the</p>
          <h3>${courseName}</h3>
          <p>with legendary perseverance and world-class bad-assert for never giving up</p>
          <img src="logo.png" alt="logo">
          <p>${personalMessage}</p>
      `;
  
      // Display the modal
      modal.style.display = 'block';

      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      courseNameInput.value = '';
  });

  // 🚨 Close the modal when the close button is clicked
  closeModal.addEventListener('click', function () {
      modal.style.display = 'none';
  });

  // Close the modal when clicking outside of the modal content
  window.addEventListener('click', function(event) {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });
});
