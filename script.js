// Step 1: Create a new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";

// Step 2: Create a list with multiple items
const list = document.createElement("ul");
for (let i = 1; i <= 5; i++) {
  const item = document.createElement("li");
  item.textContent = `Item ${i}`;
  list.appendChild(item);
}

// Step 3: Add new elements to the DOM
const contentDiv = document.getElementById("content");

// Append the new paragraph at the end
contentDiv.prepend(newParagraph);

// Append the list at the end
contentDiv.appendChild(list);

// Step 4: Remove an element (after some time)
// Let's say we want to remove the first paragraph (created above)
const firstParagraph = contentDiv.querySelector("p");
firstParagraph.remove();  // Modern method to remove an element

// A button to change text or color
document.getElementById('changeTextColorButton').addEventListener('click', function() {
  const textElement = document.getElementById('textToChange');
  textElement.textContent = "Text has been changed!";
  textElement.style.color = "red";
});

// Tabs or accordion-style content display
const tabButtons = document.querySelectorAll('.tabButton');
  const tabContents = document.querySelectorAll('.tabContent');

  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      tabContents.forEach(content => content.style.display = 'none');
      document.getElementById(this.dataset.tab).style.display = 'block';
    });
  });

// Form Validation 
  const form = document.getElementById('validationForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

  form.addEventListener('submit', function(event) {
    let isValid = true;

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      emailError.style.display = 'inline';
      isValid = false;
    } else {
      emailError.style.display = 'none';
    }

    // Password validation
    if (passwordInput.value.length < 8) {
      passwordError.style.display = 'inline';
      isValid = false;
    } else {
      passwordError.style.display = 'none';
    }

    if (!isValid) {
      event.preventDefault();
    }
  });
