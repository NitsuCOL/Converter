const BOTON_MENU = document.querySelector('.hamburger__menu');
const MENU_SECTION = document.getElementById('links__section');
const ICONO_MENU = document.getElementById('cambio-color__menu');

BOTON_MENU.addEventListener('click', () => {
    const visible = !MENU_SECTION.classList.contains('hiden');

    if (!visible) {
        // Mostrar menú con animación de entrada
        ICONO_MENU.classList.add('color-activado');
        MENU_SECTION.classList.remove('hiden', 'animacion__salida');
        void MENU_SECTION.offsetWidth;
        MENU_SECTION.classList.add('animacion__entrada');
    } else {
        // Ocultar menú con animación de salida
        ICONO_MENU.classList.remove('color-activado');
        MENU_SECTION.classList.remove('animacion__entrada');
        MENU_SECTION.classList.add('animacion__salida');

        // Esperar que termine la animación antes de ocultar
        setTimeout(() => {
            MENU_SECTION.classList.add('hiden');
        }, 300);
    }
});
