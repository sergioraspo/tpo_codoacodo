const validarFormulario = (event) => {
    event.preventDefault();

    const firstname = document.querySelector('#firstname');
    const lastname = document.querySelector('#lastname');
    const contact = document.querySelector('#contact');
    const email = document.querySelector('#email');

    let validation = true;

    if(firstname.value===''){
        firstname.classList.add('error');
        const divError = document.querySelector('#error-firstname');
        divError.textContent = 'Agregar el nombre, por favor';
        validation = false;
    }
    if(lastname.value===''){
        lastname.classList.add('error');
        const divError = document.querySelector('#error-lastname');
        divError.textContent = 'Agregar el apellido, por favor';
        validation = false;
    }
    if(contact.value===''){
        alert('Agregar el celular, por favor');
        contact.classList.add('error');
        const divError = document.querySelector('#error-contact');
        divError.textContent = 'Agregar el celular, por favor';
        validation = false;
    }
    if(email.value===''){
        alert('Agregar el email, por favor');
        email.classList.add('error');
        const divError = document.querySelector('#error-email');
        divError.textContent = 'Agregar el email, por favor';
        validation = false;
    }
    if(validation){
        formRegister.submit();
    }else{
        return false;
    }

}

formRegister.addEventListener('submit', validarFormulario);

