

    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');
    selectHeader.forEach (item => {
        item.addEventListener('click', selectToggle )
    });

    selectItem.forEach (item => {
        item.addEventListener('click', selectChoose)
    });

    // document.addEventListener('click', () => {
        
    // });        
   

    function selectToggle() {
        this.parentElement.classList.toggle('is-active')
    }

    function selectChoose() {
        let text = this.innerText;
            perentItem = this.closest('.select'),
            currentText = this.closest('.select').querySelector('.select__curent');
        currentText.innerText = text;
        perentItem.classList.remove('is-active');
        perentItem.classList.add('is-selected');
    }



const form = document.querySelector('.modal__form__birth');
const selects = document.querySelectorAll('.select');

form.addEventListener('submit', event => {  
    event.preventDefault();
    selects.forEach (item => {        
        if(!item.classList.contains('is-selected')) {

            item.classList.add('error')
            
        }
    });
});
