class Dropdown {
    constructor(dropdown) {
      this.dropdown= dropdown;
      this.button = this.dropdown.querySelector('.nav-dropdown-button');
      this.content = this.dropdown.querySelector('.dropdown-content');
      
      // Add a click handler to the button reference and call the toggleContent method.
      this.button.addEventListener('click', () => this.toggleContent())
    }
  
    toggleContent() {
      // Toggle the ".dropdown-hidden" class off and on
      this.content.classList.toggle('dropdown-content-hidden');
    }
}

const dropdowns = document.querySelectorAll('.nav-dropdown').forEach( dropdown => new Dropdown(dropdown));