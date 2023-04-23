import React from "react";
import AboutCompo from "../components/AboutCompo";
import Collections from "../components/Collections";
import ProductsCompo from "../components/ProductsCompo";

const collectionList = [
  {
    id: 1,
    text: "Copper Enamelled Wires",
    title: "Insulating Varnish",
    cover:
      "https://5.imimg.com/data5/GL/CK/SB/ANDROID-82860117/product-jpeg-250x250.jpg",
  },
  {
    id: 2,
    text: "Aluminium Enamelled Wires",
    title: "Super Enameled Copper Winding Wire",
    cover:
      "https://5.imimg.com/data5/SELLER/Default/2021/10/SB/NI/IB/82860117/super-enameled-aluminium-winding-wire-250x250.jpg",
  },
  {
    id: 3,
    text: "Insulation Paper",
    title: "Motor winding Wire",
    cover:
      "https://5.imimg.com/data5/SELLER/Default/2021/10/SB/NI/IB/82860117/super-enameled-aluminium-winding-wire-250x250.jpg",
  },
  {
    id: 4,
    text: "Enameled Copper Wire    ",
    title: "Copper Winding Wire",
    cover:
      "https://5.imimg.com/data5/MZ/BI/SJ/SELLER-82860117/enameled-aluminium-wire-250x250.jpg",
  },
  {
    id: 5,
    text: "Electrical Insulating Varnish",
    title: "Polyester Tape",
    cover:
      "https://5.imimg.com/data5/JN/QM/MK/SELLER-82860117/whatsapp-image-2020-07-06-at-11-13-26-am-250x250.jpeg",
  },
  {
    id: 6,
    text: "Winding Wire",
    title: "Electrical Insulation Polyester Film",
    cover:
      "https://5.imimg.com/data5/PX/RX/EI/SELLER-82860117/polyster-film-250x250.jpeg",
  },
  {
    id: 7,
    text: "Copper Winding Wire",
    title: "Enameled Copper Wire",
    cover:
      "https://5.imimg.com/data5/SE/DX/SM/SELLER-82860117/enameled-copper-aluminium-wire-250x250.jpg",
  },
  {
    id: 8,
    text: "Polyester And Adhesive Tapes",
    title: "Enameled Aluminium Wire",
    cover:
      "https://5.imimg.com/data5/MR/ST/XR/SELLER-82860117/sew2-250x250.jpg",
  },
];

const AboutCompoList = [
  {
    id: 1,
    title: "Nature of Business",
    text: "Exporter and Manufacturer",
    cover:
      "https://5.imimg.com/data5/GL/CK/SB/ANDROID-82860117/product-jpeg-250x250.jpg",
  },
  {
    id: 2,
    title: "Total Number of Employees",
    text: "Upto 10 People",
    cover:
      "https://5.imimg.com/data5/SELLER/Default/2021/10/SB/NI/IB/82860117/super-enameled-aluminium-winding-wire-250x250.jpg",
  },
  {
    id: 3,
    title: "Year of Establishment",
    text: "2005",
    cover:
      "https://5.imimg.com/data5/SELLER/Default/2021/10/SB/NI/IB/82860117/super-enameled-aluminium-winding-wire-250x250.jpg",
  },
  {
    id: 4,
    title: "Legal Status of Firm",
    text: "Individual - Proprietor",
    cover:
      "https://5.imimg.com/data5/MZ/BI/SJ/SELLER-82860117/enameled-aluminium-wire-250x250.jpg",
  },
  {
    id: 5,
    title: "Annual Turnover",
    text: "Rs. 1 - 2 Crore    ",
    cover:
      "https://5.imimg.com/data5/JN/QM/MK/SELLER-82860117/whatsapp-image-2020-07-06-at-11-13-26-am-250x250.jpeg",
  },
  {
    id: 6,
    title: "Import Export Code (IEC)",
    text: "ADGPB*****",
    cover:
      "https://5.imimg.com/data5/PX/RX/EI/SELLER-82860117/polyster-film-250x250.jpeg",
  },
  {
    id: 7,
    title: "07ADGPB3479B1ZX",
    text: "Exporter and Manufacturer",
    cover:
      "https://5.imimg.com/data5/SE/DX/SM/SELLER-82860117/enameled-copper-aluminium-wire-250x250.jpg",
  },
];
const Home = () => {
  return (
    <div>
      <Collections list={collectionList} />
      <AboutCompo list={AboutCompoList} />
      <ProductsCompo list={collectionList} />
    </div>
  );
};

export default Home;
