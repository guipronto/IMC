export const alertErro = {
    element:document.querySelector('.alert-error'),

  open() { alertErro.element.classList.add("open")

},

close(){
    alertErro.element.classList.remove('open')
}

}


