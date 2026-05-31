// User-uploaded photos
const USER_STEAK = "https://customer-assets.emergentagent.com/job_akron-breakfast-gem/artifacts/hanau2if_493272669_1239756331489080_4450789584856567135_n.jpg";
const USER_STEAK_CROISSANT = "https://customer-assets.emergentagent.com/job_akron-breakfast-gem/artifacts/lt9w4old_519539986_1311056354359077_1522714898839125816_n.jpg";
const USER_BACON_CROISSANT = "https://customer-assets.emergentagent.com/job_akron-breakfast-gem/artifacts/6zyioith_493921059_1242264854571561_5046638522371871418_n.jpg";
const USER_FRENCH_TOAST_BISCUITS = "https://customer-assets.emergentagent.com/job_akron-breakfast-gem/artifacts/toibjyt0_567133473_1400256905439021_5249306100053636117_n.jpg";

export const FEATURED_MENU = [
  {
    name: "Big Breakfast",
    desc: "2 pancakes, 2 sausage, 2 bacon, 2 cheese eggs, potatoes & grits.",
    price: "$28.00",
    img: "https://scontent.fosu2-2.fna.fbcdn.net/v/t39.30808-6/548193151_24189854824047098_7118463460948886029_n.jpg?stp=cp6_dst-jpg_p526x296_tt6&_nc_cat=108&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=hGGspHK8m58Q7kNvwFQ9lCD&_nc_oc=AdriJC3FFcAJwu-DIZKJs4uJbUzAtBXEkD3xwtZA92ahhQ-aWXLY-frmFLmcKRbt-eAFhapfg5pACenXYOObeFlx&_nc_zt=23&_nc_ht=scontent.fosu2-2.fna&_nc_gid=F46gIgsNxbX0O0OzYioleA&_nc_ss=7b289&oh=00_Af_fJcy3vptyMP1bo78dr1v0ugPpYMe1lzAYNrWBbJ7oEQ&oe=6A218C2B",
    tag: "Customer Favorite",
  },
  {
    name: "Steak Omelet",
    desc: "With collard greens, pepper & onion, cheese, side of french toast biscuits, homefries & grits.",
    price: "",
    img: USER_STEAK,
    tag: "House Special",
  },
  {
    name: "Steak Egg & Bacon Sandwich Meal",
    desc: "Croissant sandwich with homefries.",
    price: "$17.99",
    img: USER_STEAK_CROISSANT,
    tag: "Hearty",
  },
  {
    name: "Bacon Egg Croissant Sandwich",
    desc: "Buttery flaky croissant with bacon, egg & cheese. Served with homefries.",
    price: "$12.99",
    img: USER_BACON_CROISSANT,
    tag: "Top Seller",
  },
  {
    name: "Sausage Egg Croissant Sandwich",
    desc: "Savory sausage, scrambled egg & melty cheese on a warm, flaky croissant.",
    price: "$12.00",
    img: "https://images.unsplash.com/photo-1700937624803-9c7c70b1b67d?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    tag: "Classic",
  },
  {
    name: "Fish And Grits",
    desc: "Fish and grits meal with cheese eggs & potatoes.",
    price: "$25.00",
    img: "https://images.pexels.com/photos/29516766/pexels-photo-29516766.jpeg",
    tag: "Soul Classic",
  },
  {
    name: "Fish Sandwich",
    desc: "Fish, egg, cheese & bacon sandwich with homefries. (Grits do not come with the sandwich.)",
    price: "$23.00",
    img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    tag: "Lunch",
  },
  {
    name: "Veggie Omelet",
    desc: "Peppers, onions, collard greens & cheese with homefries and grits.",
    price: "$16.50",
    img: "https://images.unsplash.com/photo-1690983387986-fc2b59a0d7e6?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    tag: "Fresh",
  },
  {
    name: "Kids Meal",
    desc: "1 pancake or 2 french toast biscuits, 2 bacon or 2 sausage, homefries & cheese eggs.",
    price: "$10.00",
    img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    tag: "Good for Kids",
  },
];

export const MENU_CATEGORIES = [
  { key: "breakfast", name: "Breakfast", note: "Served fresh all day" },
  { key: "brunch", name: "Brunch", note: "Mimosa-worthy plates" },
  { key: "lunch", name: "Lunch", note: "Sandwiches, plates & sides" },
  { key: "dinner", name: "Dinner", note: "Soul food classics" },
  { key: "coffee", name: "Coffee", note: "Locally brewed" },
  { key: "desserts", name: "Desserts", note: "Made in-house" },
  { key: "catering", name: "Catering", note: "Events of every size" },
];

export const AMENITIES = [
  { label: "4.8★ Rating", icon: "Star" },
  { label: "Delivery", icon: "Truck" },
  { label: "Pickup", icon: "Package" },
  { label: "Dine-In", icon: "UtensilsCrossed" },
  { label: "Catering", icon: "Users" },
  { label: "Family Friendly", icon: "Heart" },
  { label: "Cozy Atmosphere", icon: "Flame" },
  { label: "Free Wi-Fi", icon: "Wifi" },
  { label: "Great Coffee", icon: "Coffee" },
  { label: "Good for Kids", icon: "Baby" },
  { label: "Wheelchair Accessible", icon: "Accessibility" },
  { label: "Table Service", icon: "BellRing" },
];

export const HERO_IMAGES = [
  USER_FRENCH_TOAST_BISCUITS,
  USER_STEAK,
  USER_BACON_CROISSANT,
  USER_STEAK_CROISSANT,
];

export const INTERIOR_IMG = "https://static.prod-images.emergentagent.com/jobs/81746147-1ef7-4144-92b7-602ab32989ab/images/0be1cb14780341ef56ea3d1b429fa11dda852f07c257cf6b0d165fb59c952738.png";

export const PHONE = "+13308099126";
export const PHONE_DISPLAY = "(330) 809-9126";
export const ADDRESS = "183 S Portage Path, Akron, OH 44302";
export const DOORDASH_URL = "https://www.doordash.com/store/breakfast-in-bed-by-lacole-llc-akron-1137965/1659905/?pickup=true";

export const HOURS = [
  { day: "Monday", time: "Closed", closed: true },
  { day: "Tuesday", time: "9:00 AM – 2:00 PM" },
  { day: "Wednesday", time: "9:00 AM – 2:00 PM" },
  { day: "Thursday", time: "9:00 AM – 2:00 PM" },
  { day: "Friday", time: "9:00 AM – 2:00 PM" },
  { day: "Saturday", time: "9:00 AM – 2:00 PM" },
  { day: "Sunday", time: "9:00 AM – 2:00 PM" },
];
