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

const servicesList = [
    {
        id: "services1",
        iconClass: "bi bi-briefcase-fill",
        title: "Employment and Staffing Services",
        description: "Providing top talent and employment solutions tailored to your business needs."
    },
    {
        id: "services2",
        iconClass: "bi bi-person-badge-fill",
        title: "Workforce Development and Training",
        description: "Developing your workforce with cutting-edge training and skill-building programs."
    },
    {
        id: "services3",
        iconClass: "bi bi-gear-fill",
        title: "Business Management and Consulting",
        description: "Expert consulting services to manage and grow your business effectively."
    },
    {
        id: "services4",
        iconClass: "bi bi-person-lines-fill",
        title: "HR Solutions and Support",
        description: "Comprehensive HR solutions to manage your workforce and support your business."
    },
    {
        id: "services5",
        iconClass: "bi bi-cash-stack",
        title: "Payroll and Benefits Administration",
        description: "Efficient payroll processing and benefits administration tailored to your needs."
    },
    {
        id: "services6",
        iconClass: "bi bi-bar-chart-line-fill",
        title: "Operational Efficiency Consulting",
        description: "Optimizing your business operations for maximum efficiency and performance."
    },
    {
        id: "services7",
        iconClass: "bi bi-puzzle-fill",
        title: "Customized Business Solutions",
        description: "Tailored business solutions to meet the unique challenges of your organization."
    }
];

const hiwList = [
    {
        id: "hiw1",
        icon: "bi bi-chat-left-text-fill",
        title: "1. Consultation",
        description: "We begin with an in-depth consultation to understand your needs and goals."
    },
    {
        id: "hiw2",
        icon: "bi bi-gear-fill",
        title: "2. Customized Solutions",
        description: "Our team develops tailored solutions that align with your business objectives."
    },
    {
        id: "hiw3",
        icon: "bi bi-check-circle-fill",
        title: "3. Implementation",
        description: "We work alongside you to implement the solutions and ensure a smooth transition."
    }
];

const successStoriesList = [
    {
        icon: "bi bi-award-fill",
        title: "Company A's Transformation",
        description: "With our business consulting services, Company A increased their efficiency by 40% and expanded their market reach."
    },
    {
        icon: "bi bi-trophy-fill",
        title: "Growth for Company B",
        description: "Our tailored HR solutions helped Company B scale their operations and double their workforce in just one year."
    },
    {
        icon: "bi bi-graph-up-arrow",
        title: "Success for Company C",
        description: "Company C leveraged our training programs to upskill their team, leading to a 50% increase in productivity."
    }
];


export {
    menuList,
    homeData,
    aboutData,
    servicesList,
    hiwList,
    successStoriesList,
    
}