 const noUserNavlinks = [
    {
        text: 'About',
        // href: '/',
        sublinks: [
            {
                href: '/',
                subtext: 'Example'
            }
    ]
    },
    {
        text: 'Home',
        href: '/',
    },
    {
        text: 'Sign In',
        href: '/login',
    },
    {
        text: 'Sign Up',
        href: '/registration',
    },
    
    {
        text: 'Plants',
        href: '/search',
    },
    
]

const userNavlinks = [
    {
        text: 'About',
        // href: '/',
        sublinks: [
            {
                href: '/',
                subtext: 'Example'
            }
    ]
    },
    {
        text: 'Home',
        href: '/',
    },
    // {
    //     text: 'Profile',
    //     href: '/dashboard',
    // },
    {
        text: 'Settings',
        href: '/dashboard',
    },
    {
        text: 'Plants',
        href: '/search',
    },
    
]

export {
    noUserNavlinks,
    userNavlinks
} 