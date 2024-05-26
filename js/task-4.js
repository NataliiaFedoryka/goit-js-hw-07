
document.querySelector(`.login-form`).addEventListener(`submit`, (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get(`email`).trim;
    const password = formData.get(`password`).trim;
    if(!email || !password) {
      return  alert (`All form fields must be filled in`)
    }
    const formObject = {
        email: email,
        password: password,
    };
    console.log(formObject);
    e.target.removeEventListener();
} );