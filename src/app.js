var app = new Vue({
    el: '#root',
    data: {
        socials: {
            'twitter': {
                link: 'https://twitter.com/maxcoach',
                awesome: 'fa-twitter'
            },
            'facebook': {
                link: 'https://facebook.com/maxcoach',
                awesome: 'fa-facebook'
            },
            'instagram': {
                    link: 'https://instagram.com/maxcoach',
                     awesome: 'fa-instagram' },
            'linkedin': {
                link: 'https://linkedin.com/maxcoach',
                awesome: 'fa-linkedin'}
            },
        header: {
            ul: [
                'Home',
                'Pages',
                'Courses',
                'Features',
                'Blog',
                'Shop'
            ],
            socialsList: ['twitter', 'facebook', 'instagram', 'linkedin'],
            socialsStyle: 'fab'

            },
            footer: {
                socialsList: ['facebook', 'twitter', 'instagram', 'linkedin'],
                socialsStyle: 'fas'
            }
        }




    })

socials = [
    { 'twitter': '#' },
    { 'facebook': '#' },
    { 'instagram': '#' },
    { 'linkedin': '#' }
];
headerUl = [];

footerUls = {
    'Explore': [],
    'Information': []
};