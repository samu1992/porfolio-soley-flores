import { Routes } from "@/app/models/route.module"
import detox from '../images/Work/DDetox 1.png'
import canil from '../images/Work/MockupCanil 1.png'
import petxi from '../images/Work/Petxi 2 1.png'
import imdb from '../images/Work/IMDb 1.png'


export const routes: Routes[] = [
    { name: "HOME", route: "/" },
    { name: "RESUME", route: "https://www.linkedin.com/in/soleyflores/" },
    { name: "ABOUT", route: "/about" }
]

export const dataProject = [
    {
        img: detox,
        linkWeb: 'https://www.linkedin.com/in/soleyflores/',
        title: 'Digital Detox',
        span: 'app',
        tags: [
            { text: 'Design System', link: 'https://www.linkedin.com/in/soleyflores/' },
            { text: 'UI', link: 'https://www.linkedin.com/in/soleyflores/' },
            { text: 'App redesign', link: 'https://www.linkedin.com/in/soleyflores/' }
        ],
        subTitle: 'Design system',
        description: 'Take control of your screen time. This app empowers you to set focused periods and reclaim your offline moments.'
    },
    {
        img: canil,
        linkWeb: 'https://www.linkedin.com/in/soleyflores/',
        title: 'Canil',
        tags: [
            { text: 'branding', link: 'https://www.linkedin.com/in/soleyflores/' },
            { text: 'logo', link: 'https://www.linkedin.com/in/soleyflores/' },
            { text: 'graphic design', link: 'https://www.linkedin.com/in/soleyflores/' }
        ],
        subTitle: 'Pet-Friendly Coffee Shop Branding',
        description: 'Where coffee meets companionship. Discover our heartwarming journey in crafting a welcoming space for coffee lovers and their furry friends, enriched by meaningful initiatives.'
    },
    {
        img: petxi,
        linkWeb: 'https://www.linkedin.com/in/soleyflores/',
        title: 'Petxi',
        span: 'app',
        tags: [
            { text: 'UX/UI', link: 'https://www.linkedin.com/in/soleyflores/' },
            { text: 'app', link: 'https://www.linkedin.com/in/soleyflores/' },
            { text: 'transportation', link: 'https://www.linkedin.com/in/soleyflores/' }
        ],
        subTitle: 'Simplified Pet Travel',
        description: 'Discover the easiest way to journey alongside your best friend. Your passport to seamless adventures with your furry companion!'
    },
    {
        img: imdb,
        linkWeb: 'https://www.linkedin.com/in/soleyflores/',
        title: 'IMDB',
        tags: [
            { text: 'landing page', link: 'https://www.linkedin.com/in/soleyflores/' },
            { text: 'UX/UI', link: 'https://www.linkedin.com/in/soleyflores/' },
            { text: 'web redesign', link: 'https://www.linkedin.com/in/soleyflores/' }
        ],
        subTitle: 'Your Film & Series Guide',
        description: 'IMDb, your go-to source for all things movies and TV shows. Explore a world of cinematic details and discover what to watch next!'
    }
]