// ==========================
// Product Data
// ==========================

const productData = {
  Chair: {
    "Boss Chair": [
      {
        id: 1,
        name: "Premium Boss Chair",
        description:
          "Executive Boss Chair With Auto Titing WoodenAmAnd Leather Finish & Hydraulic .",
        price: 18000,
        image:
          "/assets/images/Products/TSF-504.jpg",
      },
      {
        id: 2,
        name: "Royal Boss Chair",
        description:
          "Executive Boss Chair With Auto Titing Imported Arm And Leather Finish & Hydraulic .",
        price: 11300,
        image:
          "/assets/images/Products/TSF-512.jpg",
      },
      {
        id: 3,
        name: "Classic Boss Chair",
        description:
          "Executive Boss Chair With Hydrolic and Auto Tiling Wooden Arm With Leather Finish.",
        price: 18000,
        image:
          "/assets/images/Products/TSF-523.jpg",
      },
      {
        id: 4,
        name: "Luxury Boss Chair",
        description:
          "Executive HB Chair With Hydrolic and Imported Arm Auto Tiling With Leather Finish.",
        price: 11100,
        image:
          "/assets/images/Products/TSF-526.jpg",
      },
    ],

    "Executive Chair": [
      {
        id: 5,
        name: "Executive Elite Chair",
        description: "Executive HB Chair With Hydrolic and Imported Arm Auto Tiling With Leather Finish.",
        price: 11400,
        image:
          "/assets/images/Products/TSF-537.jpg",
      },
      {
        id: 6,
        name: "Comfort Executive Chair",
        description: "Executive Chair With Hydrolic and Auto Tilting Wooden Arm With LeatherFinish.",
        price: 11600,
        image:
          "/assets/images/Products/TSF-550.jpg",
      },
      {
        id: 7,
        name: "Office Executive Chair",
        description: "Executive Chair With Hydrolic and Auto Tilting Wooden Arm With LeatherFinish .",
        price: 11500,
        image:
          "/assets/images/Products/TSF-555.jpg",
      },
      {
        id: 8,
        name: "Leather Executive Chair",
        description: "Execulive Chair With Hydrolic and Auto Tilting Wooden Arm With LeatherFinish .",
        price: 11600,
        image:
          "/assets/images/Products/TSF-556.jpg",
      },
    ],

    "Mesh Chair": [
      {
        id: 9,
        name: "Mesh Comfort Chair",
        description: "Executive HB Chair With Mesh Back, Push Back And Hydrolic and Adjusting Arm .",
        price: 8300,
        image:
          "/assets/images/Products/TSF-559.jpg",
      },
      {
        id: 10,
        name: "Air Mesh Chair",
        description: "Executive Boss Chair Auto-Titing Wooden Arm Leather Finish and Hydraulic.",
        price: 10000,
        image:
          "/assets/images/Products/TSF-562.jpg",
      },
      {
        id: 11,
        name: "Premium Mesh Chair",
        description: "Executive HB Chair With Mesh Back . PushBack and Hydraulic.",
        price: 5800,
        image:
          "/assets/images/Products/TSF-571.jpg",
      },
      {
        id: 12,
        name: "Ergo Mesh Chair",
        description: "Executive HB Chair With Mesh Back With SS Pipe.",
        price: 4750,
        image:
          "/assets/images/Products/TSF-572.jpg",
      },
    ],

    "Visitor Chair": [
      {
        id: 13,
        name: "Premium Visitor Chair",
        description: "Computer Chair With Arm, PushBack and Hydraulic .",
        price: 3400,
        image:
          "/assets/images/Products/TSF-574.jpg",
      },
      {
        id: 14,
        name: "Visitor Plus Chair",
        description: "New Visitor Chair with Imported Arm And SS Pipe .",
        price: 5600,
        image:
          "/assets/images/Products/TSF-584.jpg",
      },
      {
        id: 15,
        name: "Executive Visitor Chair",
        description: "NewFour Leg Chair with SS Pipe And Without Arm.",
        price: 3500,
        image:
          "/assets/images/Products/TSF-595.jpg",
      },
      {
        id: 16,
        name: "Modern Visitor Chair",
        description: "New Bar Stool SS Pipe with Hydraulic Pipe And Foot Rest.",
        price: 3800,
        image:
          "/assets/images/Products/TSF-606.jpg",
      },
    ],
    "Restaurant Chair": [
      {
        id: 17,
        name: "Classic Restaurant Chair",
        description: "Bar Stool With Imported Metal Seat, Hydrauiic Pipe And Foot Rest.",
        price: 5200,
        image: "/assets/images/Products/TSF-608.jpg",
      },
      {
        id: 18,
        name: "Modern Dining Chair",
        description: "New Stool with SS Pipe and Foot Rest.",
        price: 2100,
        image: "/assets/images/Products/TSF-612.jpg",
      },
      {
        id: 19,
        name: "Metal Frame Restaurant Chair",
        description: "Bar Stool Imported Seat With HydraulicAnd FootRest.",
        price: 4400,
        image: "/assets/images/Products/TSF-613.jpg",
      },
      {
        id: 20,
        name: "Premium Upholstered Restaurant Chair",
        description: "New Stool MS Pipe And Foot Rest.",
        price: 3700,
        image: "/assets/images/Products/TSF-616.jpg",
      },
    ],

    "Student Chair": [
      {
        id: 21,
        name: "Standard Student Chair",
        description: "Writing Chair MS Pipe With Half Witing Pad.",
        price: 1700,
        image: "/assets/images/Products/TSF-630.jpg",
      },
      {
        id: 22,
        name: "Writing Pad Student Chair",
        description: "Wiiing Chair MS Pipe With Full Writing Pad.",
        price: 2700,
        image: "/assets/images/Products/TSF-632.jpg",
      },
      {
        id: 23,
        name: "Classroom Chair",
        description: "Classroom Double Desk Three Seater 1 MS Square Pipe Laminated Board .",
        price: 9600,
        image: "/assets/images/Products/TSF-637.jpg",
      },
      {
        id: 24,
        name: "Premium Classroom Chair",
        description: "Computer Chair.",
        price: 5200,
        image: "/assets/images/Products/TSF-642.jpg",
      },
    ],
    "Dining Chair": [
      {
        id: 25,
        name: "Classic Dining Chair",
        description: "Garden Dining Chair With Cusion And SS Pipe .",
        price: 2600,
        image: "/assets/images/Products/TSF-643.jpg",
      },
      {
        id: 26,
        name: "Modern Dining Chair",
        description: "Dining Set Four Seater With SS Pipe With Glass .",
        price: 33000,
        image: "/assets/images/Products/TSF-651.jpg",
      },
      {
        id: 27,
        name: "Wooden Dining Chair",
        description: "Dining Set Six Seater With S Pipe With Glass And Leather Finishing.",
        price: 40000,
        image: "/assets/images/Products/TSF-652.jpg",
      },
      {
        id: 28,
        name: "Luxury Upholstered Dining Chair",
        description: "Dining Set Four Seater With SS Pipe & Glass, Leather Finishing.",
        price: 23500,
        image: "/assets/images/Products/TSF-657.jpg",
      },
    ],
    "Chair Series": [
      {
        id: 29,
        name: "Comfort Chair Series",
        description: "Three seater waiting Chair With Chrome Finish .",
        price: 14600,
        image: "/assets/images/Products/TSF-699.jpg",
      },
      {
        id: 30,
        name: "Airport Chair Series",
        description: "Three Seater Airport Chair  With Arm & Leather Finishing.",
        price: 19000,
        image: "/assets/images/Products/TSF-700.jpg",
      },
      {
        id: 31,
        name: "Premium Chair Series",
        description: "Perforated Three Seater WithAm MS Pipe.",
        price: 8000,
        image: "/assets/images/Products/TSF-703.jpg",
      },
      {
        id: 32,
        name: "Luxury Chair Series",
        description: "New Xtreme Three Seater Waiting Chair With SS Pipe.",
        price: 9200,
        image: "/assets/images/Products/TSF-704.jpg",
      },
    ],
  },

  Sofa: {
  "Premium Sofa": [
    {
      id: 33,
      name: "Executive Office Sofa",
      description: "L' Sofa Five Seater With Cloth Finish & Imported Arm.",
      price: 62500,
      image: "/assets/images/Products/TSF-707.jpg",
    },
    {
      id: 34,
      name: "Luxury Reception Sofa",
      description: "Five Sealer Sofa With Leather Finish.",
      price: 44000,
      image: "/assets/images/Products/TSF-719.jpg",
    },
    {
      id: 35,
      name: "5 Seater Office Sofa",
      description: "Five Seater Sofa With Cloth Finish & Imported Wooden Arm .",
      price: 54000,
      image: "/assets/images/Products/TSF-720.jpg",
    },
    {
      id: 36,
      name: "Premium Lounge Sofa",
      description: "Five Seater Sofa With Leather Finish.",
      price: 32000,
      image: "/assets/images/Products/TSF-721.jpg",
    },
  ],
},

  Table: {
    "Office Table": [
      {
        id: 37,
        name: "Executive Office Table",
        description: "Office Table With Draws & Particle Board Table 60*36*30 .",
        price: 10600,
        image:
          "/assets/images/Products/TSF-726.jpg",
      },
      {
        id: 38,
        name: "Premium Office Table",
        description: "Conference Table With Particle Board 72*36*30.",
        price: 12800,
        image:
          "/assets/images/Products/TSF-730.jpg",
      },
      {
        id: 39,
        name: "Modern Office Desk",
        description: "Office Table With Draw, Particle Board 60*30*24*30.",
        price: 15800,
        image:
          "/assets/images/Products/TSF-734.jpg",
      },
      {
        id: 40,
        name: "Wood Office Table",
        description: "Office Table With Draw & Cubboard, Particle Board 60*36*30.",
        price: 9600,
        image:
          "/assets/images/Products/TSF-752.jpg",
      },
    ],

    "Dressing Table": [
      {
        id: 41,
        name: "Modern Dressing Table",
        description: "Dressing Table With Pllar Partcle Board 24*72.",
        price: 7000,
        image: "/assets/images/Products/TSF-762.jpg",
      },
      {
        id: 42,
        name: "Luxury Vanity Table",
        description: "Dressing Table With Cubboard, Particle Board 24*72 .",
        price: 7100,
        image: "/assets/images/Products/TSF-767.jpg",
      },
      {
        id: 43,
        name: "Wooden Dressing Table",
        description: "Dressing Table With Drawer & Cubboard Paricle Board 24*72.",
        price: 7100,
        image: "/assets/images/Products/TSF-772.jpg",
      },
      {
        id: 44,
        name: "Premium Dressing Table",
        description: "Dressing Table With Drawer & Cubboard, Particle Board  26*72 .",
        price: 6900,
        image: "/assets/images/Products/TSF-778.jpg",
      },
    ],
  },
};

export default productData;