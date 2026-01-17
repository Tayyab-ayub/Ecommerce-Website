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
    value : "accessories"
    },
    {title : "Apple AirPods Max",
    price : "$699", 
    image : "/card-images/headphones.avif", 
    value : "accessories"
},
     {title : "Canon EOS 250D 24.1MP Full HD WI-FI",
     price : "$750", 
    image : "/card-images/camera.avif", 
    value : "accessories"
},

 {title : "HP Laptop, AMD Ryzen 5 5500U Processor",
     price : "$16590", 
    image : "/card-images/laptop.avif", 
    value : "accessories"
},

 {title : "Intel 13th Gen Core i9 13900KF Raptor Lake Processor",
     price : "$799", 
    image : "/card-images/intelcore.avif", 
    value : "accessories"
},
 {title : "JBL E55BT Wireless Bluetooth Headphone",
     price : "$259", 
    image : "/card-images/headphones-black.avif", 
    value : "accessories"
},
 {title : "Realme Note 60x (4/64GB)",
     price : "$699", 
    image : "/card-images/realme_mobile.avif", 
    value : "accessories"
},
 {title : "Samsung Galaxy S25 Ultra 5G 12/256GB",
     price : "$699", 
    image : "/card-images/samsungS25.avif", 
    value : "accessories"
},
 {title : "Wireless Bluetooth Speaker for Softphone",
     price : "$2699", 
    image : "/card-images/bluetooth_speaker.avif", 
    value : "accessories"
},
{title : "iPhone 16 Pro Max 128GB",
     price : "$1699", 
    image : "/card-images/iphone-16.avif", 
    value : "accessories"
},
]

export const appliances : Products[]=[
    {title : "Philips NA221 4.2 Liter 1500 Watt Air Fryer",
    price : "$99.00",
    image : "/appliances/Airfryer.avif",
    value : "appliances"
    },
    {title : "Apple Watch Series 10",
    price : "$99.00",
    image : "/appliances/apple-watch.avif",
    value : "appliances"
    },
    {title : "High Performance Cooling Fan, 4-Pin, 1500 RPM",
    price : "$280.00",
    image : "/appliances/fan.avif",
    value : "appliances"
    },
    {title : "Panasonic MX-EX1081 1.35L Blender",
    price : "$330.00",
    image : "/appliances/juicer-blender.avif",
    value : "appliances"
    },
    {title : "Series 65″ 4K Smart OLED TV with AI ThinQ",
    price : "$2299.00",
    image : "/appliances/Led.avif",
    value : "appliances"
    },
    {title : "Walton 1.25 Ton Inverter AC",
    price : "$499.00",
    image : "/appliances/split_ac.avif",
    value : "appliances"
    },
    {title : "Laundry Wash Machine Washer/Spinner Pump",
    price : "$1,199.00",
    image : "/appliances/Washing Machine.avif",
    value : "appliances"
    },
     {title : "Portable Mini Washing Machine, White",
    price : "$1,199.00",
    image : "/appliances/washingmachine-round.avif",
    value : "appliances"
    },
     {title : "Apple Watch Ultra 2 GPS + Cellular, 49mm Black Titanium",
    price : "$175.00",
    image : "/appliances/watch.avif",
    value : "appliances"
    },
    
    
    

]
export const others: Products[] =[
     {title : "Bottom Freezer Refrigerator Stainless Wide 10.8",
    price : "$1399.00",
    image : "/others/single refrigerator.avif",
    value : "appliances"
    },
     {title : "Energy Star Stainless Steel Compact Freezer",
    price : "$2055.00",
    image : "/others/double_door fridge.avif",
    value : "appliances"
    },
]

export const productsByCategory: Record<string, Products[]> = {
  gadgets: gadgetsacessories,
  appliances: appliances,
  others: others,
}