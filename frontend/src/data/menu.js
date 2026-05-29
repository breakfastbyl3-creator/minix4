// User-uploaded photos
const USER_STEAK = "https://customer-assets.emergentagent.com/job_akron-breakfast-gem/artifacts/hanau2if_493272669_1239756331489080_4450789584856567135_n.jpg";
const USER_STEAK_CROISSANT = "https://customer-assets.emergentagent.com/job_akron-breakfast-gem/artifacts/lt9w4old_519539986_1311056354359077_1522714898839125816_n.jpg";
const USER_BACON_CROISSANT = "https://customer-assets.emergentagent.com/job_akron-breakfast-gem/artifacts/6zyioith_493921059_1242264854571561_5046638522371871418_n.jpg";
const USER_FRENCH_TOAST_BISCUITS = "https://customer-assets.emergentagent.com/job_akron-breakfast-gem/artifacts/toibjyt0_567133473_1400256905439021_5249306100053636117_n.jpg";

export const FEATURED_MENU = [
  {
    name: "Big Breakfast w/ French Toast Biscuits",
    desc: "Signature french toast biscuits, scrambled eggs, sausage patty, & seasoned home fries.",
    price: "$19.99",
    img: USER_FRENCH_TOAST_BISCUITS,
    tag: "Customer Favorite",
  },
  {
    name: "Steak & Eggs Breakfast",
    desc: "Hand-cut steak, cheese eggs, sweet potato pancake & golden home fries.",
    price: "$22.99",
    img: USER_STEAK,
    tag: "Hearty",
  },
  {
    name: "Steak Egg & Cheese French Toast",
    desc: "Tender steak, melty cheese & soft scrambled eggs tucked between thick french toast.",
    price: "$16.99",
    img: USER_STEAK_CROISSANT,
    tag: "House Original",
  },
  {
    name: "Bacon Egg Croissant Sandwich",
    desc: "Buttery flaky croissant stacked with smoky bacon, egg & American cheese.",
    price: "$11.99",
    img: USER_BACON_CROISSANT,
    tag: "Top Seller",
  },
  {
    name: "Shrimp & Grits",
    desc: "Creamy stone-ground grits topped with Cajun-seasoned shrimp & house gravy.",
    price: "$17.99",
    img: "https://images.unsplash.com/photo-1768249731607-2b3ecaf27071?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    tag: "Soul Classic",
  },
  {
    name: "Chicken & Waffles",
    desc: "Crispy fried chicken on a fluffy golden waffle with warm syrup & butter.",
    price: "$16.99",
    img: "https://images.pexels.com/photos/31706934/pexels-photo-31706934.jpeg",
    tag: "Iconic",
  },
  {
    name: "Catfish Breakfast",
    desc: "Hand-breaded southern catfish, eggs your way, grits & a buttered biscuit.",
    price: "$18.99",
    img: "https://images.pexels.com/photos/29516766/pexels-photo-29516766.jpeg",
    tag: "Southern",
  },
  {
    name: "Veggie Omelet",
    desc: "Three-egg omelet folded with peppers, onions, tomatoes, spinach & cheese.",
    price: "$13.99",
    img: "https://images.unsplash.com/photo-1690983387986-fc2b59a0d7e6?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    tag: "Fresh",
  },
  {
    name: "Salmon Club",
    desc: "Pan-seared salmon, crisp bacon, lettuce, tomato & house aioli on toasted brioche.",
    price: "$18.99",
    img: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    tag: "Brunch Star",
  },
  {
    name: "Biscuits & Gravy",
    desc: "Two homemade buttermilk biscuits smothered in slow-simmered sausage gravy.",
    price: "$10.99",
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    tag: "Homemade",
  },
  {
    name: "Fish Sandwich Meal",
    desc: "Crispy whiting fillet, tartar, lettuce & tomato on a brioche bun w/ home fries.",
    price: "$14.99",
    img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    tag: "Lunch",
  },
  {
    name: "Pancakes (Stack of 3)",
    desc: "Huge fluffy buttermilk pancakes with whipped butter & warm syrup.",
    price: "$9.99",
    img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    tag: "Sweet",
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
  "https://images.unsplash.com/photo-1768249731607-2b3ecaf27071?crop=entropy&cs=srgb&fm=jpg&q=85&w=2000",
  "https://images.pexels.com/photos/31706934/pexels-photo-31706934.jpeg",
  USER_BACON_CROISSANT,
  "https://images.pexels.com/photos/29516766/pexels-photo-29516766.jpeg",
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
