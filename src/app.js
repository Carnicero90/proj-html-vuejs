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
                explore: ['Start here', 'Success story', 'Blog', 'Courses', 'Contact us'],
                information: ['Membership', 'Purchase guide', 'Privacy policy', 'Terms od services'],
                instaPreviews: ['insta_0.jpg', 'insta_1.jpg','insta_2.jpg'],
                socialsList: ['facebook', 'twitter', 'instagram', 'linkedin'],
                socialsStyle: 'fab' //uguale all'header, l'ho notato dopo
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