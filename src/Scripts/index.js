import {
    about1, about2
} from './assets';

const menuList = [
    {
        name: "Home",
        link: "#home",
        class: "nav-link active"
    },
    {
        name: "About",
        link: "#about",
        class: "nav-link "
    },
    {
        name: "Services",
        link: "#services",
        class: "nav-link "
    },
    {
        name: "Contact",
        link: "#contact",
        class: "nav-link "
    },
]

const homeData = {
    title: "Empowering Businesses, Elevating Careers",
    desc: "Your Trusted Partner in Employment and Business Management Solutions"
}

const aboutData = {
    paragraph1: "At Nextvision Management, we provide tailored employment services and business management solutions to meet the unique needs of our clients.",
    paragraph2: "Our comprehensive approach ensures that businesses can focus on their core operations while we handle the complexities of workforce management and operational efficiency. We pride ourselves on our ability to deliver customized solutions that drive success and foster growth.",
    paragraph3: "Nextvision Management is a premier employment and business management provider dedicated to helping businesses and individuals achieve their goals.",
    paragraph4: "We offer a comprehensive suite of services designed to streamline operations, enhance productivity, and support workforce development. Our team of experts is committed to delivering innovative solutions that drive success and foster growth.", 
    img1: about1,
    img2: about2,
}

export {
    menuList,
    homeData,
    aboutData,
}