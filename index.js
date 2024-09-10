const inputSearch = document.getElementById('inputPesquisar')


inputSearch.addEventListener('focus', () => {
    const menuCenter = document.getElementById('center-left')
    menuCenter.style.border ='1px solid #1c60f3'
    inputSearch.style.border = 'none'
    const leftSeacrch = document.getElementById('left-seacrch')
    leftSeacrch.style.display = "flex"
})

inputSearch.addEventListener('focusout', () => {
    const menuCenter = document.getElementById('center-left')
    inputSearch.style.border ="1px solid #CCC"
    menuCenter.style.border ='none'
    const leftSeacrch = document.getElementById('left-seacrch')
    leftSeacrch.style.display = "none"
})