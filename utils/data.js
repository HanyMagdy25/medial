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
      { name: "products 1", link: "/products1" },
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
