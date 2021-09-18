// import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links=[
    {
        id: 1,
        text: "about",
        url: "/about"

    },
    {
        id: 2,
        text: "products",
        url: "/products"
    }
];

export const services = [
    {
      id: 1,
      icon: <GiCompass />,
      title: "mission",
      text:
        "Committed to crafting products from the best quality materials to give you furniture that will last a lifetime"
    },
    {
      id: 2,
      icon: <GiDiamondHard />,
      title: "vision",
      text:
        "To give our customers the best possible product not only best in terms of looks but also performance. We believe you are forming a long association with our furniture"
    },
    {
      id: 3,
      icon: <GiStabbedNote />,
      title: "history",
      text:
        "Established in 2007 with the sole aim of creating best product with a small team and a great dream of providing a connection to our customers with our best design and material"
    }
  ];

  export const categories = [
        {
          id: 1,
          image:"https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160",
          title: "Office"
        },
        {
          id: 2,
          image: "https://dl.airtable.com/.attachmentThumbnails/0be1af59cf889899b5c9abb1e4db38a4/d631ac52",
          title: "Living Room"
        },
        {
          id:3,
          image: "https://dl.airtable.com/.attachmentThumbnails/7478483f40a2f56662a87b304bd4e104/707d397f",
          title: "Kitchen"
        },
        {
          id: 4,
          image: "https://dl.airtable.com/.attachmentThumbnails/530c07c5ade5acd9934c8dd334458b86/cf91397f",
          title: "Bedroom"
        },
        {
          id: 5,
          image: "https://dl.airtable.com/.attachmentThumbnails/a6119fabf7256049cc0e8dbcdf536c9c/b0153f66",
          title: "Dining"
        },
        {
          id: 6,
          image: "https://dl.airtable.com/.attachmentThumbnails/1e4a818f5184993e430420a152315b40/873c7094",
          title: "Kids"
        }

  ]

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
