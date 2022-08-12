'use strict';

window.onload = (event) => {
    const filterItems = document.querySelectorAll('.portfolio--filter__item');
    const portfolioItem = document.querySelectorAll('.portfolio-box');
    const portfolioGrid = document.querySelector('.portfolio-change');


    filterItems.forEach((item) => {
        item.addEventListener('click', (e) => {
            let dataId = e.target.getAttribute('data-id');


            // check if data-id is equal to ALL if it's true it set portfolio template into grid, if not it change template into FlexBox
            if(dataId === 'all') {
                portfolioGrid.classList.remove('portfolio--flex');
                portfolioGrid.classList.add('portfolio--grid');
            } else {
                portfolioGrid.classList.add('portfolio--flex');
                portfolioGrid.classList.remove('portfolio--grid');
            }


            // Set active class on button which is already clicked
            for (let i = 0; i < filterItems.length; i++) {
                filterItems[i].addEventListener("click", function() {
                    let activeNow = document.getElementsByClassName('active');
                    activeNow[0].className = activeNow[0].className.replace(" active", "");
                    this.className += " active";
                });
              }


            //   Check if photo got class name equal to checked data-id.
           portfolioItem.forEach((photo) => {
                if(!photo.classList.contains(dataId)) {
                    photo.classList.add('hidden');
                    photo.classList.remove(`photo_${photo.id}`);
                } else {
                    photo.classList.remove('hidden');
                    photo.classList.add(`photo_${photo.id}`);
                }
            })

        
        })
    })


    const openMenuBtn = document.querySelector('.burger-container');
    const mobileMenu = document.querySelector('.navbar--menu__mobile');

    const menuToggle = () => {
        document.querySelector('.bar_1').classList.toggle('changed-bar_1');
        document.querySelector('.bar_2').classList.toggle('changed-bar_2');
        document.querySelector('.bar_3').classList.toggle('changed-bar_3');
        openMenuBtn.classList.toggle('open')
    }


        openMenuBtn.addEventListener('click', () => {
            if(openMenuBtn.classList.contains('open')) {
                mobileMenu.style.width = '40%';
                menuToggle();
            } else {
                mobileMenu.style.width = '0%';
                menuToggle();
            }
    
        })


        const mobileSub = document.querySelector('.mobile--services');
        const mobileSubMenu = document.querySelector('.services--link__mobile');
        mobileSub.addEventListener('click', () => {
            mobileSubMenu.classList.toggle('services--dropdown__toggle');
        })


  };