const sections = document.querySelectorAll('.section');
const sect_controllers = document.querySelectorAll('.controllers');
const sect_button = document.querySelectorAll('.control');

const all_Sections = document.querySelector('.main-content');

//Button click active class
function Transition_of_Page(){
    for(let i =0; i<sect_button.length; i++){
        sect_button[i].addEventListener('click', function(){
            let curr_button = document.querySelectorAll('.active-button');
            curr_button[0].className = curr_button[0].className.replace('active-button', '');
            this.className += ' active-button';
        })
    }

    //Moving through sections active class
    //Removing selected from the other buttons
    //hiding other sections 
    all_Sections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            sect_controllers.forEach((button) =>{
                button.classList.remove('active')
            })

            e.target.classList.add('active')

            sections.forEach((section) =>{

                section.classList.remove('active')
            })

            const elm = document.getElementById(id);
            elm.classList.add('active');

        }
    })

    /* Switch lights */

    const themeButton = document.querySelector('.theme-button');

    themeButton.addEventListener('click', () => {
        let elem= document.body;
        elem.classList.toggle('light-mode');
    })
}

Transition_of_Page();