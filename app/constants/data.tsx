export type Products = {
    title :string;
    value : string;
    price?: string | number;
    image?: string;

}

export const quickLinkData = [
    { title :"About Us" , href : "/about"},
    { title :"Contact Us" , href : "/contact"},
    { title :"Terms & Conditions" , href : "/terms"},
    { title :"FAQ" , href : "/faq"},

];

export const categories = [
    {title: "Mobiles" , href: "/mobiles"},
    {title: "Appliances" , href: "/appliances"},
    {title: "Gadget Accessories" , href: "/accessories"},
    {title: "Air Conditioners" , href: "/accessories"},

]

export const products: Products[]  =[
    {title: "Gadgets" , value: "gadgets"},
    {title: "Appliances" , value: "appliances"},
    {title: "Others" , value: "others"},
]

export const gadgetsacessories:Products[] =[
    {title : "Apple AirPods 3rd generation with Charging Case",
    price : "$170000", 
    image : "/card-images/airdots.avif",
    value : "apple-airpods-3rd-generation-with-charging-case"
    },
    {title : "Apple AirPods Max",
    price : "$699", 
    image : "/card-images/headphones.avif", 
    value : "apple-airpods-max"
},
     {title : "Canon EOS 250D 24.1MP Full HD WI-FI",
     price : "$750", 
    image : "/card-images/camera.avif", 
    value : "canon-camera"
},

 {title : "HP Laptop, AMD Ryzen 5 5500U Processor",
     price : "$16590", 
    image : "/card-images/laptop.avif", 
    value : "hp-laptop"
},

 {title : "Intel 13th Gen Core i9 13900KF Raptor Lake Processor",
     price : "$799", 
    image : "/card-images/intelcore.avif", 
    value : "intel-processor"
},
 {title : "JBL E55BT Wireless Bluetooth Headphone",
     price : "$259", 
    image : "/card-images/headphones-black.avif", 
    value : "headphones"
},
 {title : "Realme Note 60x (4/64GB)",
     price : "$699", 
    image : "/card-images/realme_mobile.avif", 
    value : "realme-mobile"
},
 {title : "Samsung Galaxy S25 Ultra 5G 12/256GB",
     price : "$699", 
    image : "/card-images/samsungS25.avif", 
    value : "samsung-mobile"
},
 {title : "Wireless Bluetooth Speaker for Softphone",
     price : "$2699", 
    image : "/card-images/bluetooth_speaker.avif", 
    value : "bluetooth-speaker"
},
{title : "iPhone 16 Pro Max 128GB",
     price : "$1699", 
    image : "/card-images/iphone-16.avif", 
    value : "iphone-16"
},





]