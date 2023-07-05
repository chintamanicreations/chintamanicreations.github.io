import { Category } from "./category";

export class Categories{
    static LogoDesign: Category = {
        name:'Logo Design',
        description: "Experience impactful logo designs that embody your brand's essence and objectives, leaving a lasting impression. Elevate your business with our expertly crafted designs. ",
        image: "logo/bg.jpg",
        samples: ['logo/1.png','logo/2.png','logo/3.png','logo/4.png','logo/5.png','logo/6.png','logo/7.png','logo/8.png'],
        route: "logo-design"
    }

    static FlyerDesign: Category = {
        name: "Flyer Design",
        description: "Captivate and drive results with eye-catching flyers that leave a lasting impact. Persuasive messaging and captivating visuals ensure effective communication with your audience.",
        image: "logo/bg.png",
        samples: ['logo/1.png','logo/2.png','logo/3.png','logo/4.png','logo/5.png','logo/6.png','logo/7.png','logo/8.png'],
        route: "logo-design"
    }

    static BrochureDesign: Category = {
        name: "Brochure Design",
        description: "Communicate effectively with visually stunning brochures that engage your audience and showcase your message and offerings. Leave a lasting impression with our designs.",
        image: "brochure/bg.png",
        samples: ['brochure/1.png','brochure/2.png','brochure/3.png','brochure/4.png','brochure/5.png','brochure/6.png','brochure/7.png','brochure/8.png'],
        route: "brochure-design"
    }

    static OfficeStationaryDesign : Category = {
        name: "Office Stationary",
        description: "Enhance professionalism with eye-catching calendars, folders, business cards, and letterheads. Stand out in every interaction with our visually appealing office stationery designs.",
        image: "office-stationary/bg.png",
        samples: [
            'office-stationary/1.png','office-stationary/2.png','office-stationary/3.png',
            'office-stationary/4.png','office-stationary/5.png','office-stationary/6.png',
            'office-stationary/7.png','office-stationary/8.png',
        ],
        route: "office-stationary"
    }

    static BookPrinting : Category = {
        name: "Book Printing",
        description: "Bring your publications to life with exceptional quality, vibrant colors, and precise finishing. Trust us for professional book printing services that make your content shine.",
        image: "logo/bg.png",
        samples: ['logo/1.png','logo/2.png','logo/3.png','logo/4.png','logo/5.png','logo/6.png','logo/7.png','logo/8.png'],
        route: "logo-design"
    }

    static PosterDesign : Category = {
        name: "Poster Design",
        description: "Unleash creativity with captivating posters that grab attention and effectively communicate your message. Leave a lasting impact with our professional poster designs.",
        image: "logo/bg.png",
        samples: ['logo/1.png','logo/2.png','logo/3.png','logo/4.png','logo/5.png','logo/6.png','logo/7.png','logo/8.png'],
        route: "logo-design"
    }

    static WebAndAppDesign : Category = {
        name: "Web and App Design",
        description: "Transform your digital presence with stunning user interfaces and seamless experiences. Drive conversions and elevate your brand with our expert web and app designs.",
        image: "logo/bg.png",
        samples: ['logo/1.png','logo/2.png','logo/3.png','logo/4.png','logo/5.png','logo/6.png','logo/7.png','logo/8.png'],
        route: "logo-design"
    }

    static InvitationCardDesign : Category = {
        name: "Invitation Cards",
        description: "Create unforgettable moments with exquisite designs, from elegant wedding cards to personalized invitations. Leave a lasting impression with our expertly crafted designs.",
        image: "invitation-cards/bg.jpg",
        samples: ['invitation-cards/1.png','invitation-cards/2.jpg','invitation-cards/3.png','invitation-cards/4.png','invitation-cards/5.png','invitation-cards/6.png','invitation-cards/7.png','invitation-cards/8.png',
        'invitation-cards/9.png','invitation-cards/10.png','invitation-cards/11.png',
        'invitation-cards/12.png',],
        route: "invitation-cards"
    }
}
const categories: Category[] = [
    Categories.LogoDesign,
    Categories.OfficeStationaryDesign,
    Categories.FlyerDesign,
    Categories.WebAndAppDesign,
    Categories.BookPrinting,
    Categories.BrochureDesign,
    Categories.InvitationCardDesign,
    Categories.PosterDesign,
];
export {categories};