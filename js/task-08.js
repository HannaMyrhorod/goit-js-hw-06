const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email === '' || password === '') {
       return alert(`All fields are required!`);
    };

    const formData = { email, password, };
    console.log(formData);
    
    event.currentTarget.reset();

    // // Using class FormData
    // const formData = new FormData(event.currentTarget);
    // console.log(formData);
    // formData.forEach((value, name) => {
    //     console.log(`${name}: ${value}`);
    // })
};
 
