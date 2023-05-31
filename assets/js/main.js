//Mobile responsive navbar

const hamburger = document.querySelector('.navbar-toggle');
const nav_menu = document.querySelector('.navbar-collapse');

hamburger.addEventListener('click', () => {
    nav_menu
        .classList
        .toggle('show');
})

// Search bar tab
const tabs = document.querySelectorAll('.tab-btn');
const all_content = document.querySelectorAll('.single-tab-content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab
                .classList
                .remove('active')
        });
        tab
            .classList
            .add('active');
        all_content.forEach(content => {
            content
                .classList
                .remove('active')
        });
        all_content[index]
            .classList
            .add('active');
    })
})