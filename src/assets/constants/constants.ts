/* WORK */
import { Routes } from "@/app/models/route.model"
import detox from '../images/Work/DDetox 1.png'
import canil from '../images/Work/MockupCanil 1.png'
import petxi from '../images/Work/Petxi 2 1.png'
import imdb from '../images/Work/IMDb 1.png'
import vector from '../images/Clouds.svg'
import days from '../images/Days.svg'
import mePicture from '../images/About/IMG_8600 1.png'
import pino from '../images/About/IMG_20220227_140432 1.png'
import megan from '../images/About/IMG_0681.png'
import wally from '../images/About/VID_20211205_154709 1.png'
import iGa from '../images/Work/iGa.png'
import panificadora from '../images/Work/panificadora.png'
import helper from '../images/Work/Helper.png'
import vintex from '../images/Work/vintex.png'
import vintexBran from '../images/Work/vintexBran.png'







export const routes: Routes[] = [
    {name: "Work", route: "#work"},
    { name: "About", route: "/about" }
]

export const dataProject = [
    {
        img: vintexBran,
        linkWeb: 'https://www.behance.net/gallery/204765659/Vintex-Website-Design-Early-Stage',
        title: 'Vintex',
        tags: [
            { text: 'Web Design' },
            { text: 'Early Stage' }
        ],
        subTitle: 'Your Film & Series Guide',
        description: 'IMDb, your go-to source for all things movies and TV shows. Explore a world of cinematic details and discover what to watch next!'
    },
    {
        img: vintex,
        linkWeb: 'https://www.behance.net/gallery/204813471/Vintex-Branding',
        title: 'Vintex Branding',
        tags: [
            { text: 'Brand Identity' },
            { text: 'Logo Design' }
        ],
        subTitle: 'Your Film & Series Guide',
        description: 'IMDb, your go-to source for all things movies and TV shows. Explore a world of cinematic details and discover what to watch next!'
    },
    {
        img: helper,
        linkWeb: 'https://www.behance.net/gallery/204555383/The-Ai-Helper-Landing-Page-Early-Stage',
        title: 'The AI Helper',
        tags: [
            { text: 'Landing Page' },
            { text: 'Web Design' },
            { text: 'Early Stage' }
        ],
        subTitle: 'Your Film & Series Guide',
        description: 'IMDb, your go-to source for all things movies and TV shows. Explore a world of cinematic details and discover what to watch next!'
    },
    {
        img: iGa,
        linkWeb: 'https://www.behance.net/gallery/204247201/iGadget-Brand-Guidelines',
        title: 'iGadget',
        span: 'app',
        tags: [
            { text: 'Brand Guidelines' },
            { text: 'Logo' }
        ]
    },
    {
        img: panificadora,
        linkWeb: 'https://www.behance.net/gallery/204025323/Panificadora-Mauri-Redesign',
        title: 'Panificadora Mauri',
        span: 'app',
        tags: [
            { text: 'Web' },
            { text: 'Redesign'},
            { text: 'Landing Page' }
        ]
    },
    {
        img: detox,
        linkWeb: 'https://www.behance.net/gallery/202891765/Digital-Detox-Design-Sytem',
        title: 'Digital Detox',
        span: 'app',
        tags: [
            { text: 'Design System' },
            { text: 'UI'},
            { text: 'App redesign' }
        ],
        subTitle: 'Design system',
        description: 'Take control of your screen time. This app empowers you to set focused periods and reclaim your offline moments.'
    },
    {
        img: imdb,
        linkWeb: 'https://www.behance.net/gallery/159736439/UXUI-Case-Study-Redesign-IMDb-website',
        title: 'IMDB',
        tags: [
            { text: 'landing page' },
            { text: 'UX/UI' },
            { text: 'web redesign' }
        ],
        subTitle: 'Your Film & Series Guide',
        description: 'IMDb, your go-to source for all things movies and TV shows. Explore a world of cinematic details and discover what to watch next!'
    },
    {
        img: petxi,
        vector: days,
        linkWeb: 'https://www.behance.net/gallery/152072115/Petxi-ProyectoFinal-Flores',
        title: 'Petxi',
        span: 'app',
        tags: [
            { text: 'UX/UI' },
            { text: 'app' },
            { text: 'transportation'}
        ],
        subTitle: 'Simplified Pet Travel',
        description: 'Discover the easiest way to journey alongside your best friend. Your passport to seamless adventures with your furry companion!'
    },
    {
        img: canil,
        vector1: vector,
        linkWeb: 'https://www.behance.net/gallery/144847397/Canil',
        title: 'Canil',
        tags: [
            { text: 'branding' },
            { text: 'logo'},
            { text: 'graphic design' }
        ],
        subTitle: 'Pet-Friendly Coffee Shop Branding',
        description: 'Where coffee meets companionship. Discover our heartwarming journey in crafting a welcoming space for coffee lovers and their furry friends, enriched by meaningful initiatives.'
    }
]
/* STAND */



export const standFor = [
    {  title: 'Prioritize', subtitle: 'People/', description: "Putting people's needs and experiences first, even when it seems challenging." },
    {  title: 'Seamless', subtitle: 'Functionality/', description: "Designing for usability that's as reliable as clockwork, ensuring a smooth experience." },
    {  title: 'Empathy', subtitle: 'Drives Results/', description: "Harnessing empathy to overcome challenges and drive progress for both users and businesses." }
]


type ImageType = typeof mePicture;


export const aboutInfo = [
    { content: mePicture as ImageType },
    { content: "Soley would describe herself as a creative, driven, and highly motivated individual with a strong passion for designing beautiful UIs and user experiences." },
    { content: pino as ImageType},
    {
        paragraphs: [
            { paragraph: "Her experience ranges from being a spinning instructor, serving at restaurants, providing customer services, and designing graphics for a friend's brand." },
            { paragraph1: "All these experiences allowed her to diversify her outlook, build more empathy toward users and pay attention to details." },
            { paragraph2: "She believes that creating user-centered designs will solve real problems improving the user experience and enhancing the overall aesthetic appeal of the product." },
            { paragraph3: "Above all, Soley has a keen eye for details, and she takes pride in her ability to create visually compelling designs that are intuitive, easy to use, and accessible." }]
    },
    { content: megan as ImageType},
    { content: wally as ImageType}
]

export const extraInfo = [
    {text: "Outside design, you can find her walking her dog Pino, and he's not shy to ask you to pet him."},
    {text: "Soley loves to explore new things on Pinterest."},
    {text: "She is obsessed with greyhounds and decided to volunteer to be a foster home."}
]