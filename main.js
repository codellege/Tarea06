let jumb = document.getElementById('fadeIn');
let input = document.getElementById('inputTxt');
let alertNew = document.getElementById('alert');

/*  
<div class="alert alert-primary" role="alert">
    <strong>primary</strong>
</div> 
*/

input.addEventListener('keyup', (e) => {

    let persons = Number(e.target.value);
    let cost = 0;
    let text = '';

    if (!isNaN(persons)) {
        if (persons < 200) {
            cost = persons * 95;
        } else if ((persons >= 200) && (persons < 300)) {
            cost = persons * 85;
        } else if ((persons >= 300)) {
            cost = persons * 75;
        }

        text = `<div class="alert alert-primary" role="alert">
                <strong>El costo es $${cost}MXN</strong>
                </div>`
    } else {
        text = `<div class="alert alert-danger" role="alert">
                <strong>Ingresa un numero</strong>
                </div>`
    }

    alertNew.innerHTML = text;

});

setTimeout(() => {
    jumb.classList.remove('d-none');
    jumb.classList.add('fadeIn');
}, 1000);