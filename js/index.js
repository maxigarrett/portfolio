const toggleTheme=document.getElementById('toggle-theme')
const toggleIcon=document.getElementById('toggle-icon')
const toggleText=document.getElementById('toggle-text')

//divs de colores para cambiar de color texto de la app
const toggleColors=document.getElementById('toggle-colors')

const rootStyles=document.documentElement.style//accedemos a nuestra hojas de estilos css a las var globales
//poner el drak mode o quitarcelo
toggleTheme.addEventListener('click',(e)=>{
    document.body.classList.toggle('dark');
    if(toggleIcon.src.includes('moon.svg')){
        toggleText.textContent='ligth';
        toggleIcon.src='./assets/icons/sun.png'; 
    }
    else {
        toggleText.textContent='Dark'
        toggleIcon.src='./assets/icons/moon.svg'
    }

})

toggleColors.addEventListener('click',(e)=>{
    //accedemos a una variable global de css y le cambiamos el valor por lo que viene del 
    // dataset de los div de colores

    //corregimos el problema de que si cliqueamos afuera del div de colores lo pinte blanco
    if(e.target.dataset.color)rootStyles.setProperty('--primary-color',e.target.dataset.color)

})