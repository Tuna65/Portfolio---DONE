const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
//========================
const setHeader = $('h1');
const options = $$('.sidebar__optionals-select')
const inputs = $$('.contact__form-input')
const messages = $$ ('.warning')
const btnSend = $('.contact__btn-send')
const formElement = $('.contact__form')
var isSend = true

options.forEach((option, index) => {
    // const chose = Choose[index]
    option.onclick = () => {
        $('.actived').classList.remove('actived')
        option.classList.add('actived')
        if(index === 0) {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        } 
        if(index === 1) {
            document.body.scrollTop = 1570;
            document.documentElement.scrollTop = 1570;
        }
        if(index === 2) {
            document.body.scrollTop = 2730;
            document.documentElement.scrollTop = 2730;
        }
    }
});

// document.onscroll = function () {
//     console.log(window.scrollY)
// }



//handleform
function handle(element,message, index) {
    if(element.value === '') {
        message.innerText = 'Trường này không thể trống!';
        element.classList.add('invalid')
    } else {
        message.innerText = ''
        element.classList.remove('invalid')
    }
    element.onfocus = () => {
        message.innerText = ''
        element.classList.remove('invalid')
    }
}

inputs.forEach((input, index) => {
    const message = messages[index]
    input.onblur = () => {
        if(index === 0) {
            handle(input, message, index)
        }
        if(index === 1) {
            handle(input, message, index)
        }
        if(index === 2) {
            handle(input, message, index)
        }
    }
    
})
btnSend.onclick = (e) => {
    inputs.forEach((input, index) => {
        const message = messages[index]
        if(input.value === '') {
            isSend = false
            message.innerText = 'Trường này không thể trống!';
            input.classList.add('invalid')
        }else {
            isSend = true
        }    
        input.onfocus = () => {
            message.innerText = ''
            input.classList.remove('invalid')
        }
    })
    if (!isSend) {
        e.preventDefault();
    } else {
        
        var getValue = formElement.querySelectorAll('[name]')
        var inputValue = Array.from(getValue).reduce((values, input) => {
            values[input.name] = input.value
            return values 
        },{})
        console.log(inputValue)
    }
    
}

setInterval(() => {
    setHeader.classList.toggle('sidebar__header-color');
},1000);