import icon1 from "../assets/icons/icon-1.png";
import icon2 from "../assets/icons/icon-2.png";
import icon3 from "../assets/icons/icon-3.png";
import icon4 from "../assets/icons/icon-4.png";
import icon5 from "../assets/icons/icon-5.png";
import icon6 from "../assets/icons/icon-6.png";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";

export const navTitle = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "/about",
    subRoutes: [
      { name: "about 1", link: "/about1" },
      { name: "about 2", link: "/about2" },
    ],
  },
  {
    title: "Products",
    path: "/products",
    subRoutes: [
      { name: "Testimonials", link: "/testimonials" },
      { name: "products 2", link: "/products2" },
      { name: "products 3", link: "/products3" },
    ],
  },
  {
    title: "Media",
    path: "/media",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export const featuresData = [
  {
    title: "Cardiac Clinic",
    descripiton:
      "Lorem ipsum dolor sit amet, cons ectetuer. Proin gravida nibh vel velit auctor aliquet aenean",
    image: icon1,
  },
  {
    title: "Cardiac Clinic",
    descripiton:
      "Lorem ipsum dolor sit amet, cons ectetuer. Proin gravida nibh vel velit auctor aliquet aenean",
    image: icon2,
  },
  {
    title: "Cardiac Clinic",
    descripiton:
      "Lorem ipsum dolor sit amet, cons ectetuer. Proin gravida nibh vel velit auctor aliquet aenean",
    image: icon3,
  },
  {
    title: "Vascular Surgery",
    descripiton:
      "Lorem ipsum dolor sit amet, cons ectetuer. Proin gravida nibh vel velit auctor aliquet aenean",
    image: icon4,
  },
  {
    title: "Vascular Surgery",
    descripiton:
      "Lorem ipsum dolor sit amet, cons ectetuer. Proin gravida nibh vel velit auctor aliquet aenean",
    image: icon5,
  },
  {
    title: "Vascular Surgery",
    descripiton:
      "Lorem ipsum dolor sit amet, cons ectetuer. Proin gravida nibh vel velit auctor aliquet aenean",
    image: icon6,
  },
];
export const galleryData = [
  {
    image: gallery1,
  },
  {
    image: gallery2,
  },
  {
    image: gallery1,
  },
  {
    image: gallery2,
  },
  {
    image: gallery1,
  },
  {
    image: gallery2,
  },
];

export const newsData = [
  {
    id: 1,
    image: [
      "https://res.cloudinary.com/dia1kfg4m/image/upload/v1677459178/who-we-are-img-1_e0goiy.jpg",
      "https://res.cloudinary.com/dia1kfg4m/image/upload/v1677459163/who-we-are-img-3_szhxfi.jpg",
      "https://res.cloudinary.com/dia1kfg4m/image/upload/v1677459157/who-we-are-img-2_tzbpn0.jpg",
      "https://res.cloudinary.com/dia1kfg4m/image/upload/v1677459157/who-we-are-img-2_tzbpn0.jpg",
    ],
    title: "Power To Heal",
    article:
      "Ut wisi enimfacit eorum suscipit lobortis nisl aliquip",
  },
  {
    id: 2,
    image: [
      "https://res.cloudinary.com/dia1kfg4m/image/upload/v1677459163/who-we-are-img-3_szhxfi.jpg",
      "https://res.cloudinary.com/dia1kfg4m/image/upload/v1677459178/who-we-are-img-1_e0goiy.jpg",
      "https://res.cloudinary.com/dia1kfg4m/image/upload/v1677459157/who-we-are-img-2_tzbpn0.jpg",
      "https://res.cloudinary.com/dia1kfg4m/image/upload/v1676853652/kelly-sikkema-JN0SUcTOig0-unsplash_gdxq0w.jpg",
      "https://res.cloudinary.com/dia1kfg4m/image/upload/v1677459178/who-we-are-img-1_e0goiy.jpg",
      "https://res.cloudinary.com/dia1kfg4m/image/upload/v1677459157/who-we-are-img-2_tzbpn0.jpg",
      "https://res.cloudinary.com/dia1kfg4m/image/upload/v1672063700/1155116670_qbjby9.webp",
      "https://res.cloudinary.com/dia1kfg4m/image/upload/v1672063699/iStock-824167622-e1551971548372-640x393_kwhseb.jpg",
      "https://res.cloudinary.com/dia1kfg4m/image/upload/v1671967693/home1_npwizn.jpg",
      "https://res.cloudinary.com/dia1kfg4m/image/upload/v1671967692/services_arjaov.jpg",
      "https://res.cloudinary.com/dia1kfg4m/image/upload/v1671243661/18ab1ca2-a759-48de-a55b-1cb67c25c637_kmkowc.webp",
      "https://res.cloudinary.com/dia1kfg4m/image/upload/v1672063700/1155116670_qbjby9.webp",
      "https://res.cloudinary.com/dia1kfg4m/image/upload/v1672063699/iStock-824167622-e1551971548372-640x393_kwhseb.jpg",
      "https://res.cloudinary.com/dia1kfg4m/image/upload/v1671967693/home1_npwizn.jpg",
      "https://res.cloudinary.com/dia1kfg4m/image/upload/v1671967692/services_arjaov.jpg",
      "https://res.cloudinary.com/dia1kfg4m/image/upload/v1671243661/18ab1ca2-a759-48de-a55b-1cb67c25c637_kmkowc.webp",
    ],
    title: "Powerful Medicine",
    article:
      "Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud exerci tation ulm hedi corper turet suscipit lobortis nisl aliquip",
  },
  {
    id: 3,
    image: [
      "https://res.cloudinary.com/dia1kfg4m/image/upload/v1677459157/who-we-are-img-2_tzbpn0.jpg",
      "https://res.cloudinary.com/dia1kfg4m/image/upload/v1677459163/who-we-are-img-3_szhxfi.jpg",
      "https://res.cloudinary.com/dia1kfg4m/image/upload/v1677459178/who-we-are-img-1_e0goiy.jpg",
    ],
    title: "Keeping You Well",
    article:
      "Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud exerci tation ulm hedi corper turet suscipit lobortis nisl aliquip",
  },
  {
    id: 4,
    image: [
      "https://res.cloudinary.com/dia1kfg4m/image/upload/v1677459157/who-we-are-img-2_tzbpn0.jpg",
      "https://res.cloudinary.com/dia1kfg4m/image/upload/v1677459163/who-we-are-img-3_szhxfi.jpg",
      "https://res.cloudinary.com/dia1kfg4m/image/upload/v1677459178/who-we-are-img-1_e0goiy.jpg",
    ],
    title: "Keeping You Well",
    article:
      "Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud exerci tation ulm hedi corper turet suscipit lobortis nisl aliquip",
  },
  {
    id: 5,
    image: [
      "https://res.cloudinary.com/dia1kfg4m/image/upload/v1677459157/who-we-are-img-2_tzbpn0.jpg",
      "https://res.cloudinary.com/dia1kfg4m/image/upload/v1677459163/who-we-are-img-3_szhxfi.jpg",
      "https://res.cloudinary.com/dia1kfg4m/image/upload/v1677459178/who-we-are-img-1_e0goiy.jpg",
    ],
    title: "Keeping You Well Keeping You Well Keeping You Well Keeping You Well",
    article:
      "Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud exerci tation ulm hedi corper turet suscipit lobortis nisl aliquip",
  },
];
