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
        "Executive Boss Chair With Auto Titing Wooden Arm And Leather Finish & Hydraulic.",
      price: 18000,
      image: "/assets/images/Products/TSF-504.jpg",
    },
    {
      id: 2,
      name: "Royal Boss Chair",
      description:
        "Executive Boss Chair With Auto Titing Imported Arm And Leather Finish & Hydraulic.",
      price: 11300,
      image: "/assets/images/Products/TSF-512.jpg",
    },
    {
      id: 3,
      name: "Classic Boss Chair",
      description:
        "Executive Boss Chair With Hydraulic and Auto Tiling Wooden Arm With Leather Finish.",
      price: 18000,
      image: "/assets/images/Products/TSF-523.jpg",
    },
    {
      id: 4,
      name: "Luxury Boss Chair",
      description:
        "Executive HB Chair With Hydraulic and Imported Arm Auto Tiling With Leather Finish.",
      price: 11100,
      image: "/assets/images/Products/TSF-526.jpg",
    },
    {
      id: 5,
      name: "Deluxe Boss Chair",
      description:
        "Executive Boss Chair With Adjustable Hydraulic Lift, Wooden Armrest And Premium Leather Finish.",
      price: 11000,
      image: "/assets/images/Products/TSF-510.jpg",
    },
    {
      id: 6,
      name: "Imperial Boss Chair",
      description:
        "High Back Executive Boss Chair With Auto Tilting Mechanism, Padded Armrest And Leather Finish.",
      price: 9000,
      image: "/assets/images/Products/TSF-513.jpg",
    },
{
  id: 65,
  name: "Premium Leather Executive Chair",
  description:
    "Premium High Back Executive Chair With A Durable Leather Finish, Smooth Hydraulic Height Adjustment, Imported Armrests And Auto Tilting Mechanism For Enhanced Comfort.",
  price: 11100,
  image: "/assets/images/Products/TSF-509.jpg",
},
{
  id: 66,
  name: "Modern High Back Boss Chair",
  description:
    "Stylish High Back Boss Chair Featuring A Comfortable Padded Seat, Leather Finish, Hydraulic Lift, Imported Armrests And Smooth Auto Tilt Function For Everyday Office Use.",
  price: 9000,
  image: "/assets/images/Products/TSF-516.jpg",
},
  ],

  "Executive Chair": [
    {
      id: 7,
      name: "Executive Elite Chair",
      description:
        "Executive HB Chair With Hydraulic and Imported Arm Auto Tiling With Leather Finish.",
      price: 11400,
      image: "/assets/images/Products/TSF-537.jpg",
    },
    {
      id: 8,
      name: "Comfort Executive Chair",
      description:
        "Executive Chair With Hydraulic and Auto Tilting Wooden Arm With Leather Finish.",
      price: 11600,
      image: "/assets/images/Products/TSF-550.jpg",
    },
    {
      id: 9,
      name: "Office Executive Chair",
      description:
        "Executive Chair With Hydraulic and Auto Tilting Wooden Arm With Leather Finish.",
      price: 11500,
      image: "/assets/images/Products/TSF-555.jpg",
    },
    {
      id: 10,
      name: "Leather Executive Chair",
      description:
        "Executive Chair With Hydraulic and Auto Tilting Wooden Arm With Leather Finish.",
      price: 11600,
      image: "/assets/images/Products/TSF-556.jpg",
    },
    {
      id: 11,
      name: "Premium Executive Chair",
      description:
        "High Back Executive Chair With Hydraulic Lift, Adjustable Tilt Mechanism And Comfortable Padded Seat.",
      price: 11100,
      image: "/assets/images/Products/TSF-538.jpg",
    },
    {
      id: 12,
      name: "Modern Executive Chair",
      description:
        "Stylish Executive Chair With Adjustable Armrest, Hydraulic Lift And Premium Cushioning.",
      price: 11500,
      image: "/assets/images/Products/TSF-549.jpg",
    },
{
  id: 67,
  name: "Classic High Back Executive Chair",
  description:
    "Elegant High Back Executive Chair Featuring A Sturdy Frame, Hydraulic Height Adjustment, Smooth Tilt Mechanism And Thick Cushioned Seat For Comfortable Long Hours Of Work.",
  price: 10800,
  image: "/assets/images/Products/TSF-543.jpg",
},
{
  id: 68,
  name: "Luxury Padded Office Chair",
  description:
    "Comfortable Padded Office Chair Designed With A High Backrest, Hydraulic Lift, Adjustable Tilt Function And Supportive Cushioning For Professional Workspaces.",
  price: 10800,
  image: "/assets/images/Products/TSF-545.jpg",
},
{
  id: 69,
  name: "Deluxe Manager Executive Chair",
  description:
    "Premium Manager Chair With A Spacious High Back Design, Smooth Hydraulic Height Adjustment, Adjustable Reclining Mechanism And Comfortable Padded Seating.",
  price: 11400,
  image: "/assets/images/Products/TSF-553.jpg",
},

  ],

  "Mesh Chair": [
    {
      id: 13,
      name: "Mesh Comfort Chair",
      description:
        "Executive HB Chair With Mesh Back, Push Back And Hydraulic and Adjusting Arm.",
      price: 8300,
      image: "/assets/images/Products/TSF-559.jpg",
    },
    {
      id: 14,
      name: "Air Mesh Chair",
      description:
        "Executive Mesh Chair With Auto Tilting Wooden Arm, Leather Finish And Hydraulic.",
      price: 10000,
      image: "/assets/images/Products/TSF-562.jpg",
    },
    {
      id: 15,
      name: "Premium Mesh Chair",
      description:
        "Executive HB Chair With Mesh Back, Push Back And Hydraulic.",
      price: 5800,
      image: "/assets/images/Products/TSF-571.jpg",
    },
    {
      id: 16,
      name: "Ergo Mesh Chair",
      description:
        "Executive HB Chair With Mesh Back With SS Pipe.",
      price: 4750,
      image: "/assets/images/Products/TSF-572.jpg",
    },
    {
      id: 17,
      name: "Ergonomic Mesh Chair",
      description:
        "Ergonomic High Back Mesh Chair With Adjustable Armrest, Push Back Mechanism And Hydraulic Lift.",
      price: 12400,
      image: "/assets/images/Products/TSF-558.jpg",
    },
    {
      id: 18,
      name: "Office Air Mesh Chair",
      description:
        "Comfortable Office Mesh Chair With Breathable Back, Hydraulic Lift And Adjustable Armrest.",
      price: 5100,
      image: "/assets/images/Products/TSF-567.jpg",
    },
  ],

  "Visitor Chair": [
    {
      id: 19,
      name: "Premium Visitor Chair",
      description:
        "Computer Chair With Arm, PushBack and Hydraulic.",
      price: 3400,
      image: "/assets/images/Products/TSF-574.jpg",
    },
    {
      id: 20,
      name: "Visitor Plus Chair",
      description:
        "New Visitor Chair With Imported Arm And SS Pipe.",
      price: 5600,
      image: "/assets/images/Products/TSF-584.jpg",
    },
    {
      id: 21,
      name: "Executive Visitor Chair",
      description:
        "New Four Leg Chair With SS Pipe And Without Arm.",
      price: 3500,
      image: "/assets/images/Products/TSF-595.jpg",
    },
    {
      id: 22,
      name: "Modern Visitor Chair",
      description:
        "New Bar Stool SS Pipe With Hydraulic Pipe And Foot Rest.",
      price: 3800,
      image: "/assets/images/Products/TSF-606.jpg",
    },
    {
      id: 23,
      name: "Comfort Visitor Chair",
      description:
        "Modern Visitor Chair With Cushioned Seat, Strong Metal Frame And Comfortable Back Support.",
      price: 4800,
      image: "/assets/images/Products/TSF-583.jpg",
    },
    {
      id: 24,
      name: "Deluxe Visitor Chair",
      description:
        "Premium Visitor Chair With Padded Seat, Imported Armrest And Durable Metal Frame.",
      price: 4300,
      image: "/assets/images/Products/TSF-588.jpg",
    },
  ],

  "Restaurant Chair": [
    {
      id: 25,
      name: "Classic Restaurant Chair",
      description:
        "Bar Stool With Imported Metal Seat, Hydraulic Pipe And Foot Rest.",
      price: 5200,
      image: "/assets/images/Products/TSF-608.jpg",
    },
    {
      id: 26,
      name: "Modern Dining Chair",
      description:
        "New Stool With SS Pipe And Foot Rest.",
      price: 2100,
      image: "/assets/images/Products/TSF-612.jpg",
    },
    {
      id: 27,
      name: "Metal Frame Restaurant Chair",
      description:
        "Bar Stool Imported Seat With Hydraulic And Foot Rest.",
      price: 4400,
      image: "/assets/images/Products/TSF-613.jpg",
    },
    {
      id: 28,
      name: "Premium Upholstered Restaurant Chair",
      description:
        "New Stool MS Pipe And Foot Rest.",
      price: 3700,
      image: "/assets/images/Products/TSF-616.jpg",
    },
    {
      id: 29,
      name: "Deluxe Restaurant Chair",
      description:
        "Modern Restaurant Chair With Cushioned Seat, Metal Frame And Durable Upholstered Finish.",
      price: 2500,
      image: "/assets/images/Products/TSF-623.jpg",
    },
    {
      id: 30,
      name: "Premium Dining Restaurant Chair",
      description:
        "Premium Restaurant Chair With Comfortable Cushion, Strong Metal Legs And Elegant Finish.",
      price: 2100,
      image: "/assets/images/Products/TSF-624.jpg",
    },
  ],

  "Student Chair": [
    {
      id: 31,
      name: "Standard Student Chair",
      description:
        "Writing Chair MS Pipe With Half Writing Pad.",
      price: 1700,
      image: "/assets/images/Products/TSF-630.jpg",
    },
    {
      id: 32,
      name: "Writing Pad Student Chair",
      description:
        "Writing Chair MS Pipe With Full Writing Pad.",
      price: 2700,
      image: "/assets/images/Products/TSF-632.jpg",
    },
    {
      id: 33,
      name: "Classroom Chair",
      description:
        "Classroom Double Desk Three Seater 1 MS Square Pipe Laminated Board.",
      price: 9600,
      image: "/assets/images/Products/TSF-637.jpg",
    },
    {
      id: 34,
      name: "Premium Classroom Chair",
      description:
        "Computer Chair.",
      price: 5200,
      image: "/assets/images/Products/TSF-642.jpg",
    },
    {
      id: 35,
      name: "Deluxe Student Chair",
      description:
        "Student Writing Chair With Strong MS Pipe Frame, Comfortable Seat And Attached Writing Pad.",
      price: 3500,
      image: "/assets/images/Products/TSF-635.jpg",
    },
    {
      id: 36,
      name: "Smart Classroom Chair",
      description:
        "Classroom Chair With Full Writing Pad, Durable Frame And Comfortable Back Support.",
      price: 6800,
      image: "/assets/images/Products/TSF-639.jpg",
    },
  ],

  "Dining Chair": [
    {
      id: 37,
      name: "Classic Dining Chair",
      description:
        "Garden Dining Chair With Cushion And SS Pipe.",
      price: 2600,
      image: "/assets/images/Products/TSF-643.jpg",
    },
    {
      id: 38,
      name: "Modern Dining Chair",
      description:
        "Dining Set Four Seater With SS Pipe With Glass.",
      price: 33000,
      image: "/assets/images/Products/TSF-651.jpg",
    },
    {
      id: 39,
      name: "Wooden Dining Chair",
      description:
        "Dining Set Six Seater With SS Pipe With Glass And Leather Finishing.",
      price: 40000,
      image: "/assets/images/Products/TSF-652.jpg",
    },
    {
      id: 40,
      name: "Luxury Upholstered Dining Chair",
      description:
        "Dining Set Four Seater With SS Pipe & Glass, Leather Finishing.",
      price: 23500,
      image: "/assets/images/Products/TSF-657.jpg",
    },
    {
      id: 41,
      name: "Premium Dining Chair",
      description:
        "Elegant Dining Chair With Comfortable Cushion, Strong Frame And Premium Upholstered Finish.",
      price: 19500,
      image: "/assets/images/Products/TSF-650.jpg",
    },
    {
      id: 42,
      name: "Modern Comfort Dining Chair",
      description:
        "Modern Dining Chair With Padded Seat, Durable Metal Frame And Stylish Finish.",
      price: 41000,
      image: "/assets/images/Products/TSF-663.jpg",
    },
  ],

  "Chair Series": [
    {
      id: 43,
      name: "Comfort Chair Series",
      description:
        "Three Seater Waiting Chair With Chrome Finish.",
      price: 14600,
      image: "/assets/images/Products/TSF-699.jpg",
    },
    {
      id: 44,
      name: "Airport Chair Series",
      description:
        "Three Seater Airport Chair With Arm & Leather Finishing.",
      price: 19000,
      image: "/assets/images/Products/TSF-700.jpg",
    },
    {
      id: 45,
      name: "Premium Chair Series",
      description:
        "Perforated Three Seater With Arm MS Pipe.",
      price: 8000,
      image: "/assets/images/Products/TSF-703.jpg",
    },
    {
      id: 46,
      name: "Luxury Chair Series",
      description:
        "New Xtreme Three Seater Waiting Chair With SS Pipe.",
      price: 9200,
      image: "/assets/images/Products/TSF-704.jpg",
    },

  ],
},
  Sofa: {
  "Premium Sofa": [
    {
      id: 47,
      name: "Executive Office Sofa",
      description: "L' Sofa Five Seater With Cloth Finish & Imported Arm.",
      price: 62500,
      image: "/assets/images/Products/TSF-707.jpg",
    },
    {
      id: 48,
      name: "Luxury Reception Sofa",
      description: "Five Seater Sofa With Leather Finish.",
      price: 44000,
      image: "/assets/images/Products/TSF-719.jpg",
    },
    {
      id: 49,
      name: "5 Seater Office Sofa",
      description: "Five Seater Sofa With Cloth Finish & Imported Wooden Arm.",
      price: 54000,
      image: "/assets/images/Products/TSF-720.jpg",
    },
    {
      id: 50,
      name: "Premium Lounge Sofa",
      description: "Five Seater Sofa With Leather Finish.",
      price: 32000,
      image: "/assets/images/Products/TSF-721.jpg",
    },
    {
      id: 51,
      name: "Modern Office Sofa",
      description: "Three Seater Sofa With Comfortable Cushioning, Cloth Finish And Wooden Arm.",
      price: 41000,
      image: "/assets/images/Products/TSF-711.jpg",
    },
    {
      id: 52,
      name: "Deluxe Reception Sofa",
      description: "Premium Reception Sofa With Leather Finish, Comfortable Seating And Durable Frame.",
      price: 58000,
      image: "/assets/images/Products/TSF-722.jpg",
    },
  ],
},

Table: {
  "Office Table": [
    {
      id: 53,
      name: "Executive Office Table",
      description: "Office Table With Draws & Particle Board Table 60*36*30.",
      price: 10600,
      image: "/assets/images/Products/TSF-726.jpg",
    },
    {
      id: 54,
      name: "Premium Office Table",
      description: "Conference Table With Particle Board 72*36*30.",
      price: 12800,
      image: "/assets/images/Products/TSF-730.jpg",
    },
    {
      id: 55,
      name: "Modern Office Desk",
      description: "Office Table With Draw, Particle Board 60*30*24*30.",
      price: 15800,
      image: "/assets/images/Products/TSF-734.jpg",
    },
    {
      id: 56,
      name: "Wood Office Table",
      description: "Office Table With Draw & Cubboard, Particle Board 60*36*30.",
      price: 9600,
      image: "/assets/images/Products/TSF-752.jpg",
    },
    {
      id: 57,
      name: "Deluxe Executive Table",
      description: "Executive Office Table With Drawers, Storage Space And Durable Particle Board Finish.",
      price: 15000,
      image: "/assets/images/Products/TSF-733.jpg",
    },
    {
      id: 58,
      name: "Modern Workstation Table",
      description: "Modern Office Work Table With Spacious Top, Drawers And Particle Board Construction.",
      price: 10800,
      image: "/assets/images/Products/TSF-736.jpg",
    },
  ],

  "Dressing Table": [
    {
      id: 59,
      name: "Modern Dressing Table",
      description: "Dressing Table With Pillar Particle Board 24*72.",
      price: 7000,
      image: "/assets/images/Products/TSF-762.jpg",
    },
    {
      id: 60,
      name: "Luxury Vanity Table",
      description: "Dressing Table With Cubboard, Particle Board 24*72.",
      price: 7100,
      image: "/assets/images/Products/TSF-767.jpg",
    },
    {
      id: 61,
      name: "Wooden Dressing Table",
      description: "Dressing Table With Drawer & Cubboard Particle Board 24*72.",
      price: 7100,
      image: "/assets/images/Products/TSF-772.jpg",
    },
    {
      id: 62,
      name: "Premium Dressing Table",
      description: "Dressing Table With Drawer & Cubboard, Particle Board 26*72.",
      price: 6900,
      image: "/assets/images/Products/TSF-778.jpg",
    },
    {
      id: 63,
      name: "Classic Dressing Table",
      description: "Dressing Table With Mirror, Drawer And Storage Cabinet With Particle Board Finish.",
      price: 6800,
      image: "/assets/images/Products/TSF-780.jpg",
    },
    {
      id: 64,
      name: "Elegant Vanity Dressing Table",
      description: "Modern Dressing Table With Spacious Storage, Drawer And Premium Particle Board Finish.",
      price: 5200,
      image: "/assets/images/Products/TSF-781.jpg",
    },
  ],
},
};

export default productData;