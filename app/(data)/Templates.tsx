export default [
    {
        name:'Blog Title',
        desc:'Ai tool that generate blog title based on your blog outlines or description',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt:'Give me 5 blog titles based on the niche, and the outlines of the blog provided, also give the result in rich text editor format',
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true,
            },
            {
                label:'Enter blog outlines (optional)',
                field:'textarea',
                name:'outline',
            }
        ]
    },

    {
        name: 'Blog Outline Generator',
        desc: 'AI tool that generates a detailed blog outline based on the provided topic or niche.',
        category:'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/2593/2593549.png',
        aiPrompt: 'Generate a detailed blog outline based on the niche and topic provided. Provide the result in rich text editor format.',
        slug: 'generate-blog-outline',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true,
            },
            {
                label: 'Enter your blog topic (optional)',
                field: 'textarea',
                name: 'topic',
            }
        ]
    },
    
    {
        name: 'Content Generator',
        desc: 'AI tool that generates content based on the provided outline or topic.',
        category:'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/9079/9079294.png',
        aiPrompt: 'Generate detailed content based on the provided outline or topic. Provide the result in rich text editor format.',
        slug: 'generate-content',
        form: [
            {
                label: 'Enter your content topic',
                field: 'input',
                name: 'topic',
                required: true,
            },
            {
                label: 'Enter content outline (optional)',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    
    {
        name: 'YouTube Tags Generator',
        desc: 'AI tool that generates YouTube tags based on the provided video information.',
        category:'Youtube',
        icon: 'https://cdn-icons-png.flaticon.com/128/10884/10884883.png',
        aiPrompt: 'Generate a list of YouTube tags based on the provided video information. Provide the result in rich text editor format.',
        slug: 'generate-youtube-tags',
        form: [
            {
                label: 'Enter your video title',
                field: 'input',
                name: 'title',
                required: true,
            },
            {
                label: 'Enter video description (optional)',
                field: 'textarea',
                name: 'description',
            }
        ]
    },
    
    {
        name: 'Instagram Tags Generator',
        desc: 'AI tool that generates Instagram tags based on the provided information.',
        category:'Instagram',
        icon: 'https://cdn-icons-png.flaticon.com/128/174/174855.png',
        aiPrompt: 'Generate a list of Instagram tags based on the provided information. Provide the result in rich text editor format.',
        slug: 'generate-instagram-tags',
        form: [
            {
                label: 'Enter your Instagram post topic',
                field: 'input',
                name: 'topic',
                required: true,
            },
            {
                label: 'Enter additional details (optional)',
                field: 'textarea',
                name: 'details',
            }
        ]
    },
    
    {
        name: 'Instagram Caption Generator',
        desc: 'AI tool that generates Instagram captions based on the provided information.',
        category:'Instagram',
        icon: 'https://cdn-icons-png.flaticon.com/128/174/174855.png',
        aiPrompt: 'Generate an engaging Instagram caption based on the provided information. Provide the result in rich text editor format.',
        slug: 'generate-instagram-caption',
        form: [
            {
                label: 'Enter your Instagram post topic',
                field: 'input',
                name: 'topic',
                required: true,
            },
            {
                label: 'Enter additional details (optional)',
                field: 'textarea',
                name: 'details',
            }
        ]
    },
    
    {
        name: 'Product Description Generator',
        desc: 'AI tool that generates product descriptions based on the provided information.',
        category:'Others',
        icon: 'https://cdn-icons-png.flaticon.com/128/4129/4129571.png',
        aiPrompt: 'Generate a detailed product description based on the provided information. Provide the result in rich text editor format.',
        slug: 'generate-product-description',
        form: [
            {
                label: 'Enter your product name',
                field: 'input',
                name: 'product',
                required: true,
            },
            {
                label: 'Enter product features (optional)',
                field: 'textarea',
                name: 'features',
            }
        ]
    }
    
]