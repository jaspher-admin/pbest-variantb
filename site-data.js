/* Pampanga's Best — shared site data + view logic (used by every page of every variant) */
window.PB_SITE = (function () {
const D = {
 "NAV": [
  "Home",
  "Our Story",
  "Products",
  "Recipes",
  "Where to Buy",
  "Business Opportunities",
  "News & Stories",
  "Contact"
 ],
 "CATS": [
  "Tocino",
  "Longaniza",
  "Hotdogs",
  "Sausages",
  "Hams",
  "Christmas Hams",
  "Bacon",
  "Tapa",
  "BBQ",
  "Burger Patties",
  "Corned Beef",
  "Embotido",
  "Chicken",
  "Sisig",
  "Meat Loaf",
  "Dimsum & Rolls",
  "Fish",
  "Fries",
  "Bottled",
  "Canned Goods",
  "Dairy Snacks"
 ],
 "PRODUCTS": [
  {
   "slug": "original-tocino",
   "name": "Original Pork Tocino",
   "category": "Tocino",
   "price": "From ₱63.06",
   "blurb": "The product which made Pampanga’s Best known not just in Pampanga but all over the world. The first and original.",
   "image": "assets/live/products/original-tocino.jpg",
   "url": "https://pampangasbest.store/products/original-tocino"
  },
  {
   "slug": "chicken-tocino",
   "name": "Boneless Chicken Tocino",
   "category": "Tocino",
   "price": "From ₱68.61",
   "blurb": "Another first from Pampanga’s Best! Same original Tocino recipe made from 100% premium chicken meat.",
   "image": "assets/live/products/chicken-tocino.jpg",
   "url": "https://pampangasbest.store/products/chicken-tocino"
  },
  {
   "slug": "tenderlicious-tocino",
   "name": "Tenderlicious Tocino",
   "category": "Tocino",
   "price": "From ₱53.61",
   "blurb": "Exact as its name implies: tender and delicious.",
   "image": "assets/live/products/tenderlicious-tocino.jpg",
   "url": "https://pampangasbest.store/products/tenderlicious-tocino"
  },
  {
   "slug": "fatless-pork-tocino",
   "name": "Fatless Pork Tocino",
   "category": "Tocino",
   "price": "From ₱73.89",
   "blurb": "The ORIGINAL Pampanga’s Best Tocino without the fat. All meat goodness!",
   "image": "assets/live/products/fatless-pork-tocino.jpg",
   "url": "https://pampangasbest.store/products/fatless-pork-tocino"
  },
  {
   "slug": "carabeef-tocino",
   "name": "Carabeef Tocino (Pindang Damulag)",
   "category": "Tocino",
   "price": "₱196.94",
   "blurb": "A Kapampangan delicacy aged to attain a distinct sweet and sour flavor.",
   "image": "assets/live/products/carabeef-tocino.jpg",
   "url": "https://pampangasbest.store/products/carabeef-tocino"
  },
  {
   "slug": "beef-tapa",
   "name": "Beef Tapa",
   "category": "Tapa",
   "price": "From ₱93.61",
   "blurb": "Choice cut beef aged to improve its tenderness, with a salty and peppery taste.",
   "image": "assets/live/products/beef-tapa.jpg",
   "url": "https://pampangasbest.store/products/beef-tapa"
  },
  {
   "slug": "pork-tapa",
   "name": "Pork Tapa",
   "category": "Tapa",
   "price": "From ₱64.44",
   "blurb": "Choice pork cuts with a combination of sweet and peppery taste.",
   "image": "assets/live/products/pork-tapa.jpg",
   "url": "https://pampangasbest.store/products/pork-tapa"
  },
  {
   "slug": "cabalen-longaniza",
   "name": "Cabalen Longaniza",
   "category": "Longaniza",
   "price": "₱135.00",
   "blurb": "The first ever longaniza processed by Pampanga’s Best.",
   "image": "assets/live/products/cabalen-longaniza.jpg",
   "url": "https://pampangasbest.store/products/cabalen-longaniza"
  },
  {
   "slug": "skinless-longaniza",
   "name": "Skinless Longaniza",
   "category": "Longaniza",
   "price": "From ₱66.94",
   "blurb": "A breakfast favorite typically served with eggs and garlic rice.",
   "image": "assets/live/products/skinless-longaniza.jpg",
   "url": "https://pampangasbest.store/products/skinless-longaniza"
  },
  {
   "slug": "native-longaniza",
   "name": "Native Longaniza",
   "category": "Longaniza",
   "price": "From ₱60.28",
   "blurb": "A short sausage with caramelized sugar, a dash of vinegar and garlic.",
   "image": "assets/live/products/native-longaniza.jpg",
   "url": "https://pampangasbest.store/products/native-longaniza"
  },
  {
   "slug": "chicken-longaniza",
   "name": "Chicken Longaniza",
   "category": "Longaniza",
   "price": "₱129.44",
   "blurb": "The same longaniza taste using premium chicken meat.",
   "image": "assets/live/products/chicken-longaniza.jpg",
   "url": "https://pampangasbest.store/products/chicken-longaniza"
  },
  {
   "slug": "smoked-beef-longaniza",
   "name": "Smoked Beef Longaniza",
   "category": "Longaniza",
   "price": "₱46.67",
   "blurb": "Grilled beef and special spices, a new variety for campers and backpackers.",
   "image": "assets/live/products/smoked-beef-longaniza.jpg",
   "url": "https://pampangasbest.store/products/smoked-beef-longaniza"
  },
  {
   "slug": "hamonado-longaniza",
   "name": "Hamonado Longaniza",
   "category": "Longaniza",
   "price": "₱116.39",
   "blurb": "A sweet sausage that tastes like Christmas morning.",
   "image": "assets/live/products/hamonado-longaniza.jpg",
   "url": "https://pampangasbest.store/products/hamonado-longaniza"
  },
  {
   "slug": "pampanga-longaniza",
   "name": "Pampanga Longaniza",
   "category": "Longaniza",
   "price": "₱133.89",
   "blurb": "A tastier, meatier version of the old favorite.",
   "image": "assets/live/products/pampanga-longaniza.jpg",
   "url": "https://pampangasbest.store/products/pampanga-longaniza"
  },
  {
   "slug": "smoked-longaniza",
   "name": "Smoked Longaniza",
   "category": "Longaniza",
   "price": "₱128.89",
   "blurb": "Smokey beef flavor stuffed in natural casing.",
   "image": "assets/live/products/smoked-longaniza.jpg",
   "url": "https://pampangasbest.store/products/smoked-longaniza"
  },
  {
   "slug": "premium-pork-longaniza",
   "name": "Premium Pork Longaniza 500G",
   "category": "Longaniza",
   "price": "₱135.00",
   "blurb": "Entirely different from any traditional Pampanga sweet longaniza.",
   "image": "assets/live/products/premium-pork-longaniza.jpg",
   "url": "https://pampangasbest.store/products/premium-pork-longaniza"
  },
  {
   "slug": "chorizo-macao",
   "name": "Chorizo Macao",
   "category": "Longaniza",
   "price": "₱57.78",
   "blurb": "Pampanga’s Best’s version of the classic Spanish sausage.",
   "image": "assets/live/products/chorizo-macao.jpg",
   "url": "https://pampangasbest.store/products/chorizo-macao"
  },
  {
   "slug": "tasty-meaty-hotdog",
   "name": "Tasty Meaty Hotdog with Cheese",
   "category": "Hotdogs",
   "price": "From ₱53.89",
   "blurb": "Plump and firm, perfect for feeding hungry kids, friends and office mates.",
   "image": "assets/live/products/tasty-meaty-hotdog.jpg",
   "url": "https://pampangasbest.store/products/tasty-meaty-hotdog"
  },
  {
   "slug": "bestdog-hotdog",
   "name": "Bestdog Hotdog",
   "category": "Hotdogs",
   "price": "From ₱104.44",
   "blurb": "Made with premium meat and ingredients, the BEST hotdog you will ever taste.",
   "image": "assets/live/products/bestdog-hotdog.jpg",
   "url": "https://pampangasbest.store/products/bestdog-hotdog"
  },
  {
   "slug": "cheezy-franks",
   "name": "Cheezy Franks",
   "category": "Hotdogs",
   "price": "From ₱63.89",
   "blurb": "A unique blend of meat and spices with creamy cheese bits.",
   "image": "assets/live/products/cheezy-franks.jpg",
   "url": "https://pampangasbest.store/products/cheezy-franks"
  },
  {
   "slug": "bigatin-hotdog",
   "name": "Bigatin Hotdog",
   "category": "Hotdogs",
   "price": "₱138.89",
   "blurb": "Tunay na magaan sa bulsa pero BIGATIN sa SARAP.",
   "image": "assets/live/products/bigatin-hotdog.jpg",
   "url": "https://pampangasbest.store/products/bigatin-hotdog"
  },
  {
   "slug": "boom-boom-hotdog",
   "name": "Boom Boom Hotdog",
   "category": "Hotdogs",
   "price": "From ₱55.83",
   "blurb": "Bite sized version of your classic hotdog. A birthday party favorite!",
   "image": "assets/live/products/boom-boom-hotdog.jpg",
   "url": "https://pampangasbest.store/products/boom-boom-hotdog"
  },
  {
   "slug": "chicken-white-cheese-hotdog",
   "name": "Chicken White with Cheese Hotdog",
   "category": "Hotdogs",
   "price": "From ₱63.33",
   "blurb": "Creamy salty taste which many kids and adults crave for.",
   "image": "assets/live/products/chicken-white-cheese-hotdog.jpg",
   "url": "https://pampangasbest.store/products/chicken-white-cheese-hotdog"
  },
  {
   "slug": "haba-haba-footlong",
   "name": "Haba Haba Footlong",
   "category": "Hotdogs",
   "price": "₱96.11",
   "blurb": "A foot long version of our Cheezy Franks.",
   "image": "assets/live/products/haba-haba-footlong.jpg",
   "url": "https://pampangasbest.store/products/haba-haba-footlong"
  },
  {
   "slug": "sarap-hotdog",
   "name": "Sarap Hotdog",
   "category": "Hotdogs",
   "price": "₱40.00",
   "blurb": "Everyday hotdog, Best-Sarap.",
   "image": "assets/live/products/sarap-hotdog.jpg",
   "url": "https://pampangasbest.store/products/sarap-hotdog"
  },
  {
   "slug": "bravo-hotdog",
   "name": "Bravo Hotdog",
   "category": "Hotdogs",
   "price": "From ₱88.33",
   "blurb": "Made for kids and kids-at-heart. Perfect for picnics and packed lunches.",
   "image": "assets/live/products/bravo-hotdog.jpg",
   "url": "https://pampangasbest.store/products/bravo-hotdog"
  },
  {
   "slug": "bestdog-cheese",
   "name": "Bestdog Hotdog with Cheese",
   "category": "Hotdogs",
   "price": "From ₱108.33",
   "blurb": "Our BEST hotdog made even better!",
   "image": "assets/live/products/bestdog-cheese.jpg",
   "url": "https://pampangasbest.store/products/bestdog-cheese"
  },
  {
   "slug": "chicken-franks",
   "name": "Chicken Franks",
   "category": "Hotdogs",
   "price": "₱83.33",
   "blurb": "Hot for hotdogs but worried about the fat? Made from chicken.",
   "image": "assets/live/products/chicken-franks.jpg",
   "url": "https://pampangasbest.store/products/chicken-franks"
  },
  {
   "slug": "chomps",
   "name": "Chomps Breakfast Sausage",
   "category": "Sausages",
   "price": "₱274.44",
   "blurb": "Often featured by vloggers, this bite sized sausage has pleased many food critics.",
   "image": "assets/live/products/chomps.jpg",
   "url": "https://pampangasbest.store/products/chomps"
  },
  {
   "slug": "chomps-chinese",
   "name": "Chomps Chinese Style Breakfast Sausages",
   "category": "Sausages",
   "price": "₱296.67",
   "blurb": "Chomps Chinese Style sweet breakfast sausages.",
   "image": "assets/live/products/chomps-chinese.jpg",
   "url": "https://pampangasbest.store/products/chomps-chinese"
  },
  {
   "slug": "chicken-chomps",
   "name": "Chicken Chomps Breakfast Sausage",
   "category": "Sausages",
   "price": "₱250.56",
   "blurb": "Chicken Chomps Breakfast Sausage.",
   "image": "assets/live/products/chicken-chomps.jpg",
   "url": "https://pampangasbest.store/products/chicken-chomps"
  },
  {
   "slug": "farmer-jun-hungarian",
   "name": "Farmer Jun Hungarian Sausage w/ Cheese",
   "category": "Sausages",
   "price": "From ₱127.22",
   "blurb": "Southern-style country sausages that burst with flavor.",
   "image": "assets/live/products/farmer-jun-hungarian.jpg",
   "url": "https://pampangasbest.store/products/farmer-jun-hungarian"
  },
  {
   "slug": "hungarian-sausage",
   "name": "Hungarian Sausage",
   "category": "Sausages",
   "price": "₱211.11",
   "blurb": "That unique casing only Pampanga’s Best can offer.",
   "image": "assets/live/products/hungarian-sausage.jpg",
   "url": "https://pampangasbest.store/products/hungarian-sausage"
  },
  {
   "slug": "farmer-jun-beef",
   "name": "Farmer Jun Beef Premium American Breakfast Sausage",
   "category": "Sausages",
   "price": "₱174.72",
   "blurb": "All American breakfast sausage craving, a hotel buffet mainstay.",
   "image": "assets/live/products/farmer-jun-beef.jpg",
   "url": "https://pampangasbest.store/products/farmer-jun-beef"
  },
  {
   "slug": "farmer-jun-pork",
   "name": "Farmer Jun Pork Premium American Breakfast Sausage",
   "category": "Sausages",
   "price": "₱173.06",
   "blurb": "All American breakfast sausage craving, a hotel buffet mainstay.",
   "image": "assets/live/products/farmer-jun-pork.jpg",
   "url": "https://pampangasbest.store/products/farmer-jun-pork"
  },
  {
   "slug": "sweet-ham",
   "name": "Sweet Ham",
   "category": "Hams",
   "price": "₱54.17",
   "blurb": "Quick, easy and hassle free way of enjoying a good tasting ham.",
   "image": "assets/live/products/sweet-ham.jpg",
   "url": "https://pampangasbest.store/products/sweet-ham"
  },
  {
   "slug": "sweet-ham-premium",
   "name": "Sweet Ham Premium",
   "category": "Hams",
   "price": "₱69.17",
   "blurb": "The modern version of the age-old delight.",
   "image": "assets/live/products/sweet-ham-premium.jpg",
   "url": "https://pampangasbest.store/products/sweet-ham-premium"
  },
  {
   "slug": "loaf-ham",
   "name": "Loaf Ham",
   "category": "Hams",
   "price": "From ₱61.67",
   "blurb": "Sliced, diced, or cut in any way you want.",
   "image": "assets/live/products/loaf-ham.jpg",
   "url": "https://pampangasbest.store/products/loaf-ham"
  },
  {
   "slug": "ham-pinoy",
   "name": "Ham Pinoy",
   "category": "Christmas Hams",
   "price": "₱263.16",
   "blurb": "Filipino cuisine brings memories and people together.",
   "image": "assets/live/products/ham-pinoy.jpg",
   "url": "https://pampangasbest.store/products/ham-pinoy"
  },
  {
   "slug": "pina-ham",
   "name": "Piña Ham",
   "category": "Christmas Hams",
   "price": "₱397.66",
   "blurb": "Glazed with sugar and all-natural pineapple juice.",
   "image": "assets/live/products/pina-ham.jpg",
   "url": "https://pampangasbest.store/products/pina-ham"
  },
  {
   "slug": "hanep-chicken-ham",
   "name": "Hanep! Chicken Ham",
   "category": "Christmas Hams",
   "price": "₱217.54",
   "blurb": "Hanep! Chicken Ham.",
   "image": "assets/live/products/hanep-chicken-ham.jpg",
   "url": "https://pampangasbest.store/products/hanep-chicken-ham"
  },
  {
   "slug": "chicken-ham-premium",
   "name": "Chicken Ham Premium",
   "category": "Christmas Hams",
   "price": "₱380.12",
   "blurb": "Chicken Ham Premium.",
   "image": "assets/live/products/chicken-ham-premium.jpg",
   "url": "https://pampangasbest.store/products/chicken-ham-premium"
  },
  {
   "slug": "american-ham",
   "name": "Old Fashioned American Ham",
   "category": "Christmas Hams",
   "price": "From ₱690.06",
   "blurb": "All muscle meat delicately processed in sugar and brine, plus western spices.",
   "image": "assets/live/products/american-ham.jpg",
   "url": "https://pampangasbest.store/products/american-ham"
  },
  {
   "slug": "american-ham-bilao",
   "name": "Old Fashioned Sliced American Ham (Bilao)",
   "category": "Christmas Hams",
   "price": "From ₱818.71",
   "blurb": "Sliced and designed for sharing.",
   "image": "assets/live/products/american-ham-bilao.jpg",
   "url": "https://pampangasbest.store/products/american-ham-bilao"
  },
  {
   "slug": "leg-ham-boneless",
   "name": "American Ham, Boneless Hind Leg",
   "category": "Christmas Hams",
   "price": "From ₱2,554.63",
   "blurb": "A combination of the old Chinese leg ham and the tenderized American ham.",
   "image": "assets/live/products/leg-ham-boneless.jpg",
   "url": "https://pampangasbest.store/products/leg-ham-boneless"
  },
  {
   "slug": "leg-ham-bone-in",
   "name": "American Ham, Bone-in Hind Leg",
   "category": "Christmas Hams",
   "price": "From ₱2,371.24",
   "blurb": "A combination of the old Chinese leg ham and the tenderized American ham.",
   "image": "assets/live/products/leg-ham-bone-in.jpg",
   "url": "https://pampangasbest.store/products/leg-ham-bone-in"
  },
  {
   "slug": "corned-beef-premium",
   "name": "Carne Norte de Brazil, Corned Beef Premium",
   "category": "Corned Beef",
   "price": "₱125.83",
   "blurb": "Premium corned beef.",
   "image": "assets/live/products/corned-beef-premium.jpg",
   "url": "https://pampangasbest.store/products/corned-beef-premium"
  },
  {
   "slug": "corned-beef",
   "name": "Corned Beef",
   "category": "Corned Beef",
   "price": "₱38.89",
   "blurb": "No corn kernels here. “Corned” refers to the ancient curing method.",
   "image": "assets/live/products/corned-beef.jpg",
   "url": "https://pampangasbest.store/products/corned-beef"
  },
  {
   "slug": "meaty-burger",
   "name": "Meaty Burger",
   "category": "Burger Patties",
   "price": "From ₱53.33",
   "blurb": "Best tasting hamburger patties known to all Filipinos.",
   "image": "assets/live/products/meaty-burger.jpg",
   "url": "https://pampangasbest.store/products/meaty-burger"
  },
  {
   "slug": "pork-barbecue",
   "name": "Pork Barbecue",
   "category": "BBQ",
   "price": "₱153.89",
   "blurb": "A classic Pinoy favorite marinated in our special blend of spices.",
   "image": "assets/live/products/pork-barbecue.jpg",
   "url": "https://pampangasbest.store/products/pork-barbecue"
  },
  {
   "slug": "baby-back-ribs",
   "name": "Baby Back Ribs",
   "category": "BBQ",
   "price": "₱196.67",
   "blurb": "The classic Pinoy pork barbecue on a rack of ribs.",
   "image": "assets/live/products/baby-back-ribs.jpg",
   "url": "https://pampangasbest.store/products/baby-back-ribs"
  },
  {
   "slug": "pork-bbq-ribs",
   "name": "Pork BBQ Ribs",
   "category": "BBQ",
   "price": "₱213.33",
   "blurb": "Tender pork belly in sweet and savory barbecue marinade.",
   "image": "assets/live/products/pork-bbq-ribs.jpg",
   "url": "https://pampangasbest.store/products/pork-bbq-ribs"
  },
  {
   "slug": "pork-barbecue-stick",
   "name": "Pork Barbecue on Stick",
   "category": "BBQ",
   "price": "₱164.44",
   "blurb": "A classic Pinoy favorite on skewers.",
   "image": "assets/live/products/pork-barbecue-stick.jpg",
   "url": "https://pampangasbest.store/products/pork-barbecue-stick"
  },
  {
   "slug": "honey-cured-bacon",
   "name": "Honey Cured Bacon",
   "category": "Bacon",
   "price": "₱303.33",
   "blurb": "Honey cured bacon.",
   "image": "assets/live/products/honey-cured-bacon.jpg",
   "url": "https://pampangasbest.store/products/honey-cured-bacon"
  },
  {
   "slug": "brickle-bacon",
   "name": "Brickle Bacon",
   "category": "Bacon",
   "price": "₱136.94",
   "blurb": "What’s not to love? Bacon is Bacon!",
   "image": "assets/live/products/brickle-bacon.jpg",
   "url": "https://pampangasbest.store/products/brickle-bacon"
  },
  {
   "slug": "bacon-strips",
   "name": "Bacon Strips",
   "category": "Bacon",
   "price": "₱114.72",
   "blurb": "The taste of bacon, on a budget.",
   "image": "assets/live/products/bacon-strips.jpg",
   "url": "https://pampangasbest.store/products/bacon-strips"
  },
  {
   "slug": "bacon-cubes",
   "name": "Bacon Cubes",
   "category": "Bacon",
   "price": "₱425.56",
   "blurb": "Bacon cubes.",
   "image": "assets/live/products/bacon-cubes.jpg",
   "url": "https://pampangasbest.store/products/bacon-cubes"
  },
  {
   "slug": "bacon",
   "name": "Bacon 1kg",
   "category": "Bacon",
   "price": "₱547.78",
   "blurb": "Vacuum-packed bacon, 1kg.",
   "image": "assets/live/products/bacon.jpg",
   "url": "https://pampangasbest.store/products/bacon"
  },
  {
   "slug": "pork-sisig",
   "name": "Pork Sisig",
   "category": "Sisig",
   "price": "₱81.67",
   "blurb": "A traditional dish that Kapampangans are known for.",
   "image": "assets/live/products/pork-sisig.jpg",
   "url": "https://pampangasbest.store/products/pork-sisig"
  },
  {
   "slug": "meat-loaf",
   "name": "Meat Loaf",
   "category": "Meat Loaf",
   "price": "₱80.00",
   "blurb": "Meat Loaf.",
   "image": "assets/live/products/meat-loaf.jpg",
   "url": "https://pampangasbest.store/products/meat-loaf"
  },
  {
   "slug": "el-embotido",
   "name": "El Embotido",
   "category": "Embotido",
   "price": "₱70.28",
   "blurb": "A typical fiesta dish, made with raisins, carrots and bell pepper.",
   "image": "assets/live/products/el-embotido.jpg",
   "url": "https://pampangasbest.store/products/el-embotido"
  },
  {
   "slug": "chicken-pops",
   "name": "Chicken Pops",
   "category": "Chicken",
   "price": "₱80.28",
   "blurb": "Quick and easy to prepare, a perfect partner to quality time with family.",
   "image": "assets/live/products/chicken-pops.jpg",
   "url": "https://pampangasbest.store/products/chicken-pops"
  },
  {
   "slug": "chicken-nuggets",
   "name": "Chicken Nuggets",
   "category": "Chicken",
   "price": "₱183.89",
   "blurb": "Chicken Nuggets.",
   "image": "assets/live/products/chicken-nuggets.jpg",
   "url": "https://pampangasbest.store/products/chicken-nuggets"
  },
  {
   "slug": "chicken-fingers",
   "name": "Chicken Fingers",
   "category": "Chicken",
   "price": "₱168.33",
   "blurb": "Chicken Fingers.",
   "image": "assets/live/products/chicken-fingers.jpg",
   "url": "https://pampangasbest.store/products/chicken-fingers"
  },
  {
   "slug": "kokok-tail",
   "name": "Kokok Tail on Stick",
   "category": "Chicken",
   "price": "₱154.44",
   "blurb": "This iconic Philippine street food made available by Pampanga’s Best.",
   "image": "assets/live/products/kokok-tail.jpg",
   "url": "https://pampangasbest.store/products/kokok-tail"
  },
  {
   "slug": "chicken-inasal",
   "name": "Chicken Inasal",
   "category": "Chicken",
   "price": "₱232.50",
   "blurb": "Quick and easy to prepare.",
   "image": "assets/live/products/chicken-inasal.jpg",
   "url": "https://pampangasbest.store/products/chicken-inasal"
  },
  {
   "slug": "lumpiang-shanghai",
   "name": "Lumpiang Shanghai",
   "category": "Dimsum & Rolls",
   "price": "From ₱87.50",
   "blurb": "A type of Filipino egg roll with ground pork and minced onion.",
   "image": "assets/live/products/lumpiang-shanghai.jpg",
   "url": "https://pampangasbest.store/products/lumpiang-shanghai"
  },
  {
   "slug": "siomai",
   "name": "Siomai",
   "category": "Dimsum & Rolls",
   "price": "₱40.56",
   "blurb": "Steamed or fried, best served with toyo calamansi.",
   "image": "assets/live/products/siomai.jpg",
   "url": "https://pampangasbest.store/products/siomai"
  },
  {
   "slug": "lumpiang-shanghai-chicken",
   "name": "Lumpiang Shanghai, Chicken",
   "category": "Dimsum & Rolls",
   "price": "₱150.56",
   "blurb": "Filipino egg roll, chicken version.",
   "image": "assets/live/products/lumpiang-shanghai-chicken.jpg",
   "url": "https://pampangasbest.store/products/lumpiang-shanghai-chicken"
  },
  {
   "slug": "daing-bangus",
   "name": "Daing na Bangus",
   "category": "Fish",
   "price": "From ₱100.25",
   "blurb": "Daing na Bangus.",
   "image": "assets/live/products/daing-bangus.jpg",
   "url": "https://pampangasbest.store/products/daing-bangus"
  },
  {
   "slug": "tinapang-bangus",
   "name": "Tinapang Bangus (Smoked Milkfish)",
   "category": "Fish",
   "price": "From ₱112.75",
   "blurb": "Smoked milkfish.",
   "image": "assets/live/products/tinapang-bangus.jpg",
   "url": "https://pampangasbest.store/products/tinapang-bangus"
  },
  {
   "slug": "french-fries",
   "name": "French Fries",
   "category": "Fries",
   "price": "From ₱57.78",
   "blurb": "Crispy, tasty and golden fries for your kids.",
   "image": "assets/live/products/french-fries.jpg",
   "url": "https://pampangasbest.store/products/french-fries"
  },
  {
   "slug": "pickled-red-chili",
   "name": "Pickled Red Chili",
   "category": "Bottled",
   "price": "₱86.25",
   "blurb": "Pickled red chili.",
   "image": "assets/live/products/pickled-red-chili.jpg",
   "url": "https://pampangasbest.store/products/pickled-red-chili"
  },
  {
   "slug": "garlic-bagoong",
   "name": "Garlic Bagoong",
   "category": "Bottled",
   "price": "₱104.75",
   "blurb": "Garlic bagoong.",
   "image": "assets/live/products/garlic-bagoong.jpg",
   "url": "https://pampangasbest.store/products/garlic-bagoong"
  },
  {
   "slug": "sweet-spicy-bagoong",
   "name": "Sweet & Spicy Bagoong",
   "category": "Bottled",
   "price": "₱98.50",
   "blurb": "Sweet and spicy bagoong.",
   "image": "assets/live/products/sweet-spicy-bagoong.jpg",
   "url": "https://pampangasbest.store/products/sweet-spicy-bagoong"
  },
  {
   "slug": "sweet-bagoong",
   "name": "Sweet Bagoong",
   "category": "Bottled",
   "price": "₱92.50",
   "blurb": "Sweet bagoong.",
   "image": "assets/live/products/sweet-bagoong.jpg",
   "url": "https://pampangasbest.store/products/sweet-bagoong"
  },
  {
   "slug": "burong-hipon",
   "name": "Burong Hipon",
   "category": "Bottled",
   "price": "₱80.00",
   "blurb": "Burong hipon.",
   "image": "assets/live/products/burong-hipon.jpg",
   "url": "https://pampangasbest.store/products/burong-hipon"
  },
  {
   "slug": "chili-garlic-oil",
   "name": "Chili Garlic Oil",
   "category": "Bottled",
   "price": "₱111.00",
   "blurb": "Chili garlic oil.",
   "image": "assets/live/products/chili-garlic-oil.jpg",
   "url": "https://pampangasbest.store/products/chili-garlic-oil"
  },
  {
   "slug": "chili-paste",
   "name": "Chili Paste",
   "category": "Bottled",
   "price": "₱104.75",
   "blurb": "Chili paste.",
   "image": "assets/live/products/chili-paste.jpg",
   "url": "https://pampangasbest.store/products/chili-paste"
  },
  {
   "slug": "pork-giniling",
   "name": "Pork Giniling",
   "category": "Canned Goods",
   "price": "₱46.39",
   "blurb": "Pork Giniling.",
   "image": "assets/live/products/pork-giniling.jpg",
   "url": "https://pampangasbest.store/products/pork-giniling"
  },
  {
   "slug": "meat-loaf-can",
   "name": "Meat Loaf (Canned)",
   "category": "Canned Goods",
   "price": "₱45.28",
   "blurb": "Canned meat loaf.",
   "image": "assets/live/products/meat-loaf-can.jpg",
   "url": "https://pampangasbest.store/products/meat-loaf-can"
  },
  {
   "slug": "pic-a-chizz",
   "name": "PIC-A CHIZZ",
   "category": "Dairy Snacks",
   "price": "₱39.72",
   "blurb": "PIC-A CHIZZ.",
   "image": "assets/live/products/pic-a-chizz.jpg",
   "url": "https://pampangasbest.store/products/pic-a-chizz"
  }
 ],
 "CAT_PHOTOS": {
  "Christmas Hams": "https://www.pampangasbest.com/wp-content/uploads/2016/10/featured-xmas-hams.jpg",
  "Tocino": "https://www.pampangasbest.com/wp-content/uploads/2016/04/featured-tocino-1.jpg",
  "Longaniza": "https://www.pampangasbest.com/wp-content/uploads/2016/04/featured-longaniza.jpg",
  "Hotdogs": "https://www.pampangasbest.com/wp-content/uploads/2016/04/featured-hotdogs-1.jpg",
  "Burger Patties": "https://www.pampangasbest.com/wp-content/uploads/2016/04/featured-patties-1-1.jpg",
  "Tapa": "https://www.pampangasbest.com/wp-content/uploads/2016/04/featured-tapa.jpg",
  "Hams": "https://www.pampangasbest.com/wp-content/uploads/2016/04/featured-hams-1.jpg",
  "BBQ": "https://www.pampangasbest.com/wp-content/uploads/2016/04/featured-bbq.jpg",
  "Sausages": "https://www.pampangasbest.com/wp-content/uploads/2016/04/featured-sausages.jpg",
  "Bacon": "https://www.pampangasbest.com/wp-content/uploads/2016/05/featured-bacon.jpg",
  "Embotido": "https://www.pampangasbest.com/wp-content/uploads/2016/05/featured-embotido.jpg",
  "Corned Beef": "https://www.pampangasbest.com/wp-content/uploads/2016/04/featured-corned-beef1.jpg",
  "Chicken": "https://www.pampangasbest.com/wp-content/uploads/2016/07/featured-chicken-pops.jpg"
 },
 "LOGO": "assets/live/logo-official.png",
 "LOLA": "https://www.pampangasbest.com/wp-content/uploads/2016/05/PBI-LOGO-Head.png",
 "AAA": "https://www.pampangasbest.com/wp-content/uploads/2015/10/AAA-250.png",
 "HERO_BANNER": "https://www.pampangasbest.com/wp-content/uploads/2016/06/The-Original-Tocino-final-layout.png",
 "BRAND_BANNER": "https://www.pampangasbest.com/wp-content/uploads/2015/10/Pampangas-Best.jpg",
 "NEGOSYO": "assets/live/home-negosyo.jpg",
 "NEGOSYO_FB": "assets/live/home-negosyo-fb.jpg",
 "HDE": "assets/live/store-og.jpg",
 "TESTIMONIALS": [
  {
   "quote": "Tikman ang sarap ng TUNAY at ORIHINAL na tocinong Pampanga, hatid sa inyo ng Pampanga’s BEST!",
   "name": "Kelven Clarin",
   "avatar": "https://www.pampangasbest.com/wp-content/uploads/2018/06/kelven.png"
  },
  {
   "quote": "When you thought of tocino, Pampanga’s BEST will surely cross your mind. The world class brand that every Filipino trust! #KapampangansPride #FilipinoPride",
   "name": "Lorylee Garcia",
   "avatar": "https://www.pampangasbest.com/wp-content/uploads/2018/06/lorylee.png"
  },
  {
   "quote": "The Best talaga ang Pampanga’s BEST products. My kids’ favorite is Pampanga’s Best Tocino kaya dapat palagi kaming may stock sa ref nito kasi palagi nilang hinahanap ito.",
   "name": "Diana Marcelo",
   "avatar": "https://www.pampangasbest.com/wp-content/uploads/2015/10/diane.png"
  },
  {
   "quote": "Ang Pampanga’s Best product na ang kinalakihan ko lalo na ang tocino na hanggang ngayon hinahanap ko at ng buong pamilya. Pampanga’s Best is ONLY THE BEST",
   "name": "Arlyn Martin",
   "avatar": "https://www.pampangasbest.com/wp-content/uploads/2015/10/arlyn.png"
  },
  {
   "quote": "Don’t settle for less, always choose the best — PAMPANGA’S BEST!",
   "name": "Anna Katrina Aniciete",
   "avatar": "https://www.pampangasbest.com/wp-content/uploads/2018/06/katrina.png"
  }
 ],
 "STORY": [
  "The story goes that Mrs. Lolita O. Hizon’s neighbor, a meat vendor, had some unsold pork at the end of a market day and, not wanting to let these spoil, asked Mrs. Hizon’s help in cooking them. Mrs. Hizon came up with a formula to cure the meat; she revised the traditional Capampangan pindang (fermented pork), causing the pork to acquire the unique salty-sweet taste that we have all come to love. She called it “Tocino”, derived from a Spanish delicacy that is sweet.",
  "Eventually, she refined the formula and the processing procedures that caused the birth of Pampanga’s Best Tocino, the original version of what has now become a national favorite. So, what started out as just a neighborly gesture to help a friend has turned out to be the cornerstone of a business and a staple item in the Filipino breakfast table.",
  "Today, Pampanga’s Best, Inc. is a multi-million meat processing corporation, operated and owned by the couple, Mr. Angelo D. Hizon Jr. and Mrs. Lolita O. Hizon, and their twelve children. True to its motto, Always the best from Pampanga’s BEST, the company puts prominence on the importance of high quality, and it acquired the AAA Category, the highest level for a manufacturing plant, from the National Meat Inspection Service."
 ],
 "STORY_QUOTE": {
  "text": "It’s love and compassion; and I believe it is more of a divine plan. All these years, I see a visible hand guiding us always for a purpose. I would say it is Divine Providence – that is the secret.",
  "name": "Mrs. Lolita O. Hizon, founder"
 },
 "HISTORY": [
  {
   "year": "1967",
   "body": "A neighborly favor becomes the first and original Tocino, cured in Lola Lolita’s kitchen in San Fernando.",
   "image": "assets/imagery/ref-history-1967.png"
  },
  {
   "year": "1970s–80s",
   "body": "Tocino, longaniza and hotdogs reach breakfast tables across Luzon through dealers and public markets.",
   "image": "assets/imagery/ref-history-truck.png"
  },
  {
   "year": "1990s–2000s",
   "body": "The plant earns the NMIS “AAA” accreditation, the highest category for a meat processing facility.",
   "image": "assets/imagery/ref-history-plant.png"
  },
  {
   "year": "Today",
   "body": "Over 80 products, company outlets, Home-Negosyo partners and Home Delivery Express nationwide.",
   "image": "assets/imagery/ref-history-store.png"
  }
 ],
 "NEWS": [
  {
   "title": "Be a Home-Negosyo Partner Today",
   "date": "Ongoing",
   "badge": "Home-Negosyo",
   "image": "assets/live/home-negosyo.jpg",
   "cta": "Learn more",
   "link": "Business Opportunities",
   "paragraphs": [
    "Ang Pampanga’s Best Home-Negosyo ay ang inyong Home-Negosyo Partner to Asenso. Kahit nasa bahay ka lang, pwedeng pwede ka kumita sa mga Best-Sarap na produkto ng Pampanga’s Best.",
    "Enjoy an automatic 10% Home-Negosyo discount for a minimum order of P2,000 on pampangasbest.store, with factory (wholesale) price applied.",
    "Orders are delivered within 24 to 48 hours in covered areas."
   ]
  },
  {
   "title": "Home Delivery Express Now Serving NCR",
   "date": "Ongoing",
   "badge": "Delivery",
   "image": "assets/live/store-og.jpg",
   "cta": "Shop online",
   "link": "Shop",
   "paragraphs": [
    "Get your favorite Pampanga’s Best products at the comfort of your home anytime, anywhere. Caloocan, Valenzuela, Quezon City, Malabon, Navotas, Marikina, Manila, San Juan, Mandaluyong, Pasig, Makati, Pateros, Pasay and Taguig.",
    "Best part of it: for a minimum order of P2,000.00 you get a FACTORY (wholesale) PRICE!"
   ]
  },
  {
   "title": "Sweet Taste of Home Promo",
   "date": "Promotions",
   "image": "https://www.pampangasbest.com/wp-content/uploads/2017/03/18009491_10202984609293886_553375714_n-320x202.jpg",
   "cta": "See all promos",
   "link": "News & Stories",
   "paragraphs": [
    "Open to all Mommies who are followers of Pampanga’s Best official Facebook account. Contestants must post a photo in the official Pampanga’s Best website with a short caption describing the photo.",
    "Full mechanics on pampangasbest.com/promotions."
   ]
  },
  {
   "title": "Best Ka Deal, Dagdag Negosyo",
   "date": "Promotions",
   "image": "https://www.pampangasbest.com/wp-content/uploads/2016/08/Best-Ka-Deal-Slide-320x202.png",
   "cta": "See all promos",
   "link": "News & Stories",
   "paragraphs": [
    "This promo is open to all Pampanga’s Best Dealers and walk-in customers. Purchase of Pampanga’s Best products (Tocino & Hotdogs) worth P5,000.00 per single-receipt purchase qualifies.",
    "Full mechanics on pampangasbest.com/promotions."
   ]
  },
  {
   "title": "Mother’s Day: Bakit the BEST ang MOM mo?",
   "date": "Promotions",
   "image": "https://www.pampangasbest.com/wp-content/uploads/2016/05/best-mom-header-320x202.jpg",
   "cta": "See all promos",
   "link": "News & Stories",
   "paragraphs": [
    "P2,000 worth of Pampanga’s Best Gift Certificates awaits each of 10 winners with the BEST MOMent photo with the BEST caption.",
    "Full mechanics on pampangasbest.com/promotions."
   ]
  },
  {
   "title": "Meaty Combo Promo",
   "date": "Promotions",
   "image": "https://www.pampangasbest.com/wp-content/uploads/2016/06/meaty_combo-320x202.jpg",
   "cta": "See all promos",
   "link": "News & Stories",
   "paragraphs": [
    "Details on pampangasbest.com/promotions."
   ]
  }
 ],
 "STORES": [
  {
   "region": "Outlets",
   "name": "Pampanga’s Best – Bestland Outlet",
   "address": "McArthur Hwy, near Holidayland, San Fernando, Pampanga",
   "phone": "0977-8376-048",
   "x": 203,
   "y": 316
  },
  {
   "region": "Outlets",
   "name": "Pampanga’s Best – Jollibest Outlet",
   "address": "Jose Abad Santos Avenue, City of San Fernando, Pampanga",
   "phone": "0977-8376-048",
   "x": 336,
   "y": 113
  },
  {
   "region": "Outlets",
   "name": "Pampanga’s Best – Main Building Outlet",
   "address": "Jose Abad Santos Avenue, Dolores, City of San Fernando, Pampanga",
   "phone": "0977-8376-048",
   "x": 430,
   "y": 437
  },
  {
   "region": "Metro Manila",
   "name": "Home Delivery Express – NCR",
   "address": "Caloocan, Valenzuela, Quezon City, Malabon, Navotas, Marikina, Manila, San Juan, Mandaluyong, Pasig, Makati, Pateros, Pasay, Taguig",
   "phone": "Smart (0919) 080-3815 · Globe (0917) 815-2544",
   "x": 517,
   "y": 258
  }
 ],
 "REGIONS": [
  "All",
  "Outlets",
  "Central Luzon",
  "Metro Manila",
  "Calabarzon",
  "Visayas",
  "Mindanao"
 ],
 "TYPES": [
  [
   "Outlets",
   "store"
  ],
  [
   "Distributors",
   "truck"
  ],
  [
   "Home-Negosyo",
   "handshake"
  ],
  [
   "Delivery",
   "globe"
  ]
 ],
 "STEPS": [
  {
   "n": "1",
   "title": "Inquire",
   "body": "Message us or order on pampangasbest.store. A minimum order of P2,000 already unlocks factory price and the 10% Home-Negosyo discount."
  },
  {
   "n": "2",
   "title": "Stock up",
   "body": "Choose from over 80 Best-Sarap products. Orders are delivered within 24 to 48 hours in covered areas."
  },
  {
   "n": "3",
   "title": "Sell the Best",
   "body": "Resell from home, online or in your sari-sari store, with promos and marketing materials from our team."
  }
 ],
 "JOBS": [
  {
   "title": "Production Associate",
   "meta": "San Fernando, Pampanga · Full-time"
  },
  {
   "title": "Sales Representative",
   "meta": "Metro Manila · Full-time"
  },
  {
   "title": "Quality Assurance Officer",
   "meta": "San Fernando, Pampanga · Full-time"
  }
 ],
 "CAREERS_URL": "http://ubitech.ubirecruit.com/career.php?org_id=52",
 "CONTACT": {
  "phoneSmart": "Smart (0919) 080-3815",
  "phoneGlobe": "Globe (0917) 815-2544",
  "email": "marketing@pampangasbest.com",
  "hours": "Monday to Saturday, 8:00 AM – 8:00 PM",
  "address": "City of San Fernando, Pampanga, Philippines"
 },
 "TAGS": [
  "All",
  "Tocino",
  "Longaniza",
  "Ham",
  "Chicken",
  "Sausage"
 ],
 "RECIPES": [
  {
   "title": "Tocino Fried Rice",
   "image": "assets/imagery/ref-recipe-tocino-fried-rice.png",
   "tag": "Tocino",
   "product": "Original Pork Tocino",
   "intro": "Yesterday’s rice, today’s favorite. Sweet tocino bits, garlic and egg tossed in a hot pan.",
   "ingredients": [
    "250g Pampanga’s Best Original Tocino, diced",
    "4 cups day-old cooked rice",
    "4 cloves garlic, minced",
    "2 eggs, beaten",
    "2 tbsp cooking oil",
    "Spring onions, salt and pepper to taste"
   ],
   "steps": [
    "Cook the tocino in a pan over medium heat until caramelized. Set aside, keeping the oil.",
    "Sauté the garlic in the same pan until golden.",
    "Add the rice and toss until every grain is coated and heated through.",
    "Push the rice to one side, pour in the eggs and scramble, then fold everything together with the tocino.",
    "Season, top with spring onions and serve hot."
   ],
   "prep": "10 min",
   "cook": "15 min",
   "serves": "4"
  },
  {
   "title": "Longaniza Pasta",
   "image": "assets/imagery/ref-recipe-longaniza-pasta.png",
   "tag": "Longaniza",
   "product": "Skinless Longaniza",
   "intro": "Kapampangan longaniza crumbled into a garlicky tomato sauce. Merienda or dinner, your call.",
   "ingredients": [
    "250g Pampanga’s Best Skinless Longaniza",
    "400g spaghetti",
    "1 can crushed tomatoes",
    "1 onion, chopped",
    "3 cloves garlic, minced",
    "Parmesan and basil to finish"
   ],
   "steps": [
    "Boil the pasta in salted water until al dente.",
    "Brown the longaniza in a pan, breaking it into crumbles.",
    "Add the onion and garlic and cook until soft.",
    "Pour in the tomatoes and simmer for 10 minutes.",
    "Toss with the pasta, finish with parmesan and basil."
   ],
   "prep": "10 min",
   "cook": "25 min",
   "serves": "4"
  },
  {
   "title": "Tocino Breakfast Bowl",
   "image": "assets/imagery/ref-recipe-tocino-breakfast-bowl.png",
   "tag": "Tocino",
   "product": "Tenderlicious Tocino",
   "intro": "The classic tocilog, rebuilt as a bowl: garlic rice, sunny-side egg, tomato and cucumber.",
   "ingredients": [
    "250g Pampanga’s Best Tenderlicious Tocino",
    "2 cups garlic fried rice",
    "2 eggs",
    "1 tomato, sliced",
    "½ cucumber, sliced",
    "Vinegar with garlic for dipping"
   ],
   "steps": [
    "Pan-fry the tocino with a splash of water until the sugar glazes.",
    "Fry the eggs sunny-side up.",
    "Build each bowl: rice at the base, tocino on one side, egg on the other.",
    "Add tomato and cucumber and serve with the vinegar dip."
   ],
   "prep": "5 min",
   "cook": "15 min",
   "serves": "2"
  },
  {
   "title": "Longaniza Pizza",
   "image": "assets/imagery/ref-recipe-longaniza-pizza.png",
   "tag": "Longaniza",
   "product": "Cabalen Longaniza",
   "intro": "Thin crust, mozzarella and sweet-garlicky longaniza. A party favorite.",
   "ingredients": [
    "250g Pampanga’s Best Cabalen Longaniza, sliced",
    "1 pizza dough or ready crust",
    "½ cup tomato sauce",
    "1½ cups mozzarella",
    "Red onion and bell pepper, sliced"
   ],
   "steps": [
    "Preheat the oven to 220°C.",
    "Brown the longaniza slices lightly in a pan.",
    "Spread the sauce on the crust, add the cheese, longaniza, onion and pepper.",
    "Bake for 12 to 15 minutes until the crust is golden."
   ],
   "prep": "15 min",
   "cook": "15 min",
   "serves": "4"
  },
  {
   "title": "Ham & Cheese Sandwich",
   "image": "assets/imagery/ref-recipe-ham-cheese-sandwich.png",
   "tag": "Ham",
   "product": "Sweet Ham",
   "intro": "Pan-toasted with butter until the cheese melts. Two minutes of work.",
   "ingredients": [
    "4 slices Pampanga’s Best Sweet Ham",
    "4 slices bread",
    "2 slices cheddar",
    "Butter"
   ],
   "steps": [
    "Butter the outside of each bread slice.",
    "Layer the ham and cheese between the slices.",
    "Toast in a pan over medium heat, 2 minutes per side, until golden."
   ],
   "prep": "5 min",
   "cook": "5 min",
   "serves": "2"
  },
  {
   "title": "Caesar Salad ala Chicken Pops",
   "image": "assets/imagery/recipe-caesar-salad.png",
   "tag": "Chicken",
   "product": "Chicken Pops",
   "intro": "Crispy chicken pops over romaine with a creamy Caesar dressing.",
   "ingredients": [
    "250g Pampanga’s Best Chicken Pops",
    "1 head romaine, chopped",
    "½ cup Caesar dressing",
    "Croutons and parmesan"
   ],
   "steps": [
    "Fry the chicken pops until golden and crisp.",
    "Toss the romaine with the dressing.",
    "Top with the chicken pops, croutons and parmesan."
   ],
   "prep": "10 min",
   "cook": "10 min",
   "serves": "4"
  },
  {
   "title": "Hungarian Truffle Pasta",
   "image": "assets/imagery/recipe-truffle-pasta.png",
   "tag": "Sausage",
   "product": "Hungarian Sausage",
   "intro": "Sliced Hungarian sausage in a cream sauce with a drizzle of truffle oil.",
   "ingredients": [
    "250g Pampanga’s Best Hungarian Sausage, sliced",
    "400g fettuccine",
    "1 cup cream",
    "2 cloves garlic",
    "1 tsp truffle oil",
    "Parmesan"
   ],
   "steps": [
    "Cook the pasta until al dente.",
    "Brown the sausage slices, then add the garlic.",
    "Pour in the cream and simmer for 3 minutes.",
    "Toss with the pasta, finish with truffle oil and parmesan."
   ],
   "prep": "10 min",
   "cook": "20 min",
   "serves": "4"
  },
  {
   "title": "Loaf Ham Clubhouse",
   "image": "assets/imagery/recipe-ham-clubhouse.png",
   "tag": "Ham",
   "product": "Loaf Ham",
   "intro": "Triple-decker with ham, egg, lettuce and tomato. Cut into triangles.",
   "ingredients": [
    "6 slices Pampanga’s Best Loaf Ham",
    "3 slices bread, toasted",
    "1 egg, fried",
    "Lettuce, tomato, mayonnaise"
   ],
   "steps": [
    "Spread mayonnaise on each toast slice.",
    "Layer ham and egg on the first, lettuce and tomato on the second.",
    "Stack, top with the third slice, secure with picks and cut into quarters."
   ],
   "prep": "10 min",
   "cook": "5 min",
   "serves": "1"
  },
  {
   "title": "Tocino Samgy Na!",
   "image": "assets/imagery/banner-tocino-samgyupsal.png",
   "tag": "Tocino",
   "product": "Original Pork Tocino",
   "intro": "Your favorite original tocino, grilled Korean-style with lettuce, garlic and dipping sauce.",
   "ingredients": [
    "450g Pampanga’s Best Original Tocino",
    "Lettuce leaves",
    "Garlic cloves, sliced",
    "Kimchi",
    "Ssamjang or vinegar-soy dip"
   ],
   "steps": [
    "Grill the tocino on a hot plate until charred at the edges.",
    "Grill the garlic slices alongside.",
    "Wrap tocino, garlic and kimchi in a lettuce leaf, dip and eat in one bite."
   ],
   "prep": "5 min",
   "cook": "15 min",
   "serves": "4"
  }
 ],
 "SPOTS": [
  {
   "word": "Tocino",
   "cat": "Tocino",
   "tone": "red",
   "body": "The first and original. Sweet-salty cured pork, the breakfast the Philippines grew up on.",
   "slugs": [
    "original-tocino",
    "chicken-tocino",
    "fatless-pork-tocino"
   ]
  },
  {
   "word": "Longaniza",
   "cat": "Longaniza",
   "tone": "green",
   "body": "Ten kinds, from Cabalen to Hamonado. Garlicky, sweet and made the Kapampangan way.",
   "slugs": [
    "skinless-longaniza",
    "cabalen-longaniza",
    "pampanga-longaniza"
   ]
  },
  {
   "word": "Hotdogs",
   "cat": "Hotdogs",
   "tone": "green",
   "body": "Bestdog, Cheezy Franks, Boom Boom. For merienda, lunch boxes and every party.",
   "slugs": [
    "bestdog-hotdog",
    "cheezy-franks",
    "boom-boom-hotdog"
   ]
  },
  {
   "word": "Hams",
   "cat": "Christmas Hams",
   "tone": "red",
   "body": "Piña Ham, Ham Pinoy and Old Fashioned American Ham for every Noche Buena.",
   "slugs": [
    "pina-ham",
    "ham-pinoy",
    "american-ham"
   ]
  },
  {
   "word": "Bacon",
   "cat": "Bacon",
   "tone": "green",
   "body": "Honey cured, brickle, strips and cubes. Crisp it up next to your tocino.",
   "slugs": [
    "brickle-bacon",
    "honey-cured-bacon",
    "bacon-strips"
   ]
  }
 ],
 "FEATURED_SLUGS": [
  "original-tocino",
  "skinless-longaniza",
  "bestdog-hotdog",
  "chomps",
  "pina-ham",
  "brickle-bacon"
 ],
 "HERO": [
  {
   "image": "assets/imagery/ref-hero-breakfast.png",
   "tag": "Tocino · Longaniza · Sunny-side up",
   "crop": true
  },
  {
   "image": "https://www.pampangasbest.com/wp-content/uploads/2016/06/The-Original-Tocino-final-layout.png",
   "tag": "Ang Original Tocino ng Bayan"
  },
  {
   "image": "assets/imagery/banner-tocino-samgyupsal.png",
   "tag": "Tocino Samgy Na!"
  }
 ]
};
const bySlug = Object.fromEntries(D.PRODUCTS.map(p => [p.slug, p]));
const slug = t => t.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const FILES = window.PB_STATIC_PAGES || null;
function fromURL() {
  const o = {}; if (typeof location === 'undefined') return o;
  const sp = new URLSearchParams(location.search);
  if (sp.get('r')) { const i = D.RECIPES.findIndex(x => slug(x.title) === sp.get('r')); if (i >= 0) o.recipe = i; }
  if (sp.get('a')) { const i = D.NEWS.findIndex(x => slug(x.title) === sp.get('a')); if (i >= 0) o.article = i; }
  if (sp.get('cat') && D.CATS.includes(sp.get('cat'))) o.cat = sp.get('cat');
  if (sp.get('subject')) o.subject = sp.get('subject');
  return o;
}
function initialState() {
  return { page: window.PB_PAGE || 'Home', w: window.innerWidth || 1280, menuOpen: false, recipe: -1, article: -1, hero: 0, spot: 0, paused: false, cat: 'Tocino', tag: 'All', q: '', store: 0, type: 'Outlets', region: 'All', name: '', email: '', subject: 'General inquiry', message: '', errors: {}, sent: false, ready: false, ...fromURL() };
}
function mount(vm) {
  vm.onResize = () => vm.setState({ w: window.innerWidth }); window.addEventListener('resize', vm.onResize);
  vm.acc = { hero: 0, spot: 0 };
  vm.tick = setInterval(() => {
    if (vm.props.autoplay === false || vm.state.page !== 'Home') return;
    vm.acc.hero += 200; vm.acc.spot += 200;
    const spotMs = (Number(vm.props.spotlightSpeed) || 4.6) * 1000;
    if (vm.acc.hero >= 5200) { vm.acc.hero = 0; vm.setState(s => ({ hero: (s.hero + 1) % D.HERO.length })); }
    if (vm.acc.spot >= spotMs) { vm.acc.spot = 0; if (!vm.state.paused) vm.setState(s => ({ spot: (s.spot + 1) % D.SPOTS.length })); }
  }, 200);
  vm.onScroll = () => reveal(vm); window.addEventListener('scroll', vm.onScroll, { passive: true });
  vm.tReveal = setInterval(() => { reveal(vm); measureMap(vm); }, 400);
  reveal(vm); measureMap(vm); vm.setState({ ready: true });
}
function update(vm) { reveal(vm); measureMap(vm); }
function unmount(vm) { window.removeEventListener('resize', vm.onResize); window.removeEventListener('scroll', vm.onScroll); clearInterval(vm.tick); clearInterval(vm.tReveal); }
function reveal(vm) {
  const root = vm.rootRef.current || document, vh = window.innerHeight || 800, all = vm.props.revealOnScroll === false; let i = 0;
  root.querySelectorAll('[data-reveal]:not([data-seen])').forEach(el => {
    const r = el.getBoundingClientRect();
    if (all || (r.top < vh * 0.94 && r.bottom > 0)) { el.dataset.seen = '1'; el.style.transitionDelay = (i++ % 8) * 70 + 'ms'; el.style.opacity = '1'; el.style.transform = el.dataset.reveal === 'tilt' ? 'rotate(-3deg)' : 'none'; }
  });
}
function measureMap(vm) {
  const el = vm.mapRef.current; if (!el) return;
  const r = el.getBoundingClientRect(), w = Math.round(r.width), h = Math.round(r.height);
  if (w && h && (w !== vm.state.mapW || h !== vm.state.mapH)) vm.setState({ mapW: w, mapH: h });
}
function nav(vm, p, extra) {
  if (p === 'Shop') return window.open('https://pampangasbest.store', '_blank');
  if (FILES) {
    const q = extra ? '?' + new URLSearchParams(extra).toString() : '';
    if (p === vm.state.page && !q && !location.search) { vm.setState({ menuOpen: false, recipe: -1, article: -1 }); window.scrollTo(0, 0); return; }
    window.location.href = (FILES[p] || FILES.Home) + q; return;
  }
  const st = { page: p, menuOpen: false, recipe: -1, article: -1 };
  if (extra) { if (extra.r != null) st.recipe = D.RECIPES.findIndex(x => slug(x.title) === extra.r); if (extra.a != null) st.article = D.NEWS.findIndex(x => slug(x.title) === extra.a); if (extra.cat) st.cat = extra.cat; if (extra.subject) st.subject = extra.subject; }
  vm.setState(st); window.scrollTo(0, 0);
}
function renderVals(vm, T, React) {
  const s = vm.state, mobile = s.w < 1000, spot = D.SPOTS[s.spot], store = D.STORES[s.store];
  const go = p => nav(vm, p), openRecipe = r => nav(vm, 'Recipes', { r: slug(r.title) }), openNews = n => nav(vm, 'News & Stories', { a: slug(n.title) });
  const goCat = c => { if (s.page === 'Products') { vm.setState({ cat: c }); window.scrollTo(0, 0); } else nav(vm, 'Products', { cat: c }); };
  const q = s.q.trim().toLowerCase();
  const mw = s.mapW || 800, mh = s.mapH || 460, mapScale = Math.max(mw / 645, mh / 696), mapOx = (mw - 645 * mapScale) / 2, mapOy = (mh - 696 * mapScale) * 0.38;
  const storeList = D.STORES.filter(st => (s.region === 'All' || st.region === s.region) && (!q || (st.name + ' ' + st.address + ' ' + st.region).toLowerCase().includes(q)));
  const catProducts = D.PRODUCTS.filter(p => p.category === s.cat);
  const recipes = D.RECIPES.filter(r => s.tag === 'All' || r.tag === s.tag);
  const recipe = s.recipe >= 0 ? D.RECIPES[s.recipe] : null, article = s.article >= 0 ? D.NEWS[s.article] : null;
  const set = k => e => vm.setState({ [k]: e.target.value });
  const pill = (list, cur, key) => list.map(l => ({ label: l, on: l === cur, bg: l === cur ? T.pillOnBg : T.pillOffBg, color: l === cur ? T.pillOnFg : T.pillOffFg, border: l === cur ? T.pillOnBg : T.pillBorder, go: () => vm.setState({ [key]: l }) }));
  const prod = p => ({ ...p, buy: () => window.open(p.url, '_blank'), go: () => goCat(p.category) });
  const shopUrl = 'https://pampangasbest.store';
  return {
    rootRef: vm.rootRef, mapRef: vm.mapRef, ready: !!s.ready, page: s.page, isMobile: mobile, isDesktop: !mobile, menuOpen: s.menuOpen, menuIcon: s.menuOpen ? 'x' : 'menu',
    toggleMenu: () => vm.setState(st => ({ menuOpen: !st.menuOpen })),
    logo: D.LOGO, lola: D.LOLA, aaa: D.AAA, heroBanner: D.HERO_BANNER, negosyo: D.NEGOSYO, negosyoFb: D.NEGOSYO_FB, hde: D.HDE, shopUrl, careersUrl: D.CAREERS_URL, contact: D.CONTACT,
    go, goHome: () => go('Home'), goProducts: () => go('Products'), goStory: () => go('Our Story'), goRecipes: () => go('Recipes'), goStores: () => go('Where to Buy'), goBusiness: () => go('Business Opportunities'), goCareers: () => go('Careers'), goNews: () => go('News & Stories'), goContact: () => go('Contact'), shop: () => go('Shop'),
    navItems: D.NAV.map(n => ({ label: n, on: n === s.page, color: n === s.page ? T.navOn : T.navOff, bg: n === s.page ? T.navOnBg : 'transparent', go: () => go(n) })),
    menuItems: [...D.NAV, 'Careers'].map(n => ({ label: n, on: n === s.page, color: n === s.page ? (T.menuOn || T.navOn) : (T.menuOff || T.navOff), go: () => go(n) })),
    isHome: s.page === 'Home', isStory: s.page === 'Our Story', isProducts: s.page === 'Products', isRecipes: s.page === 'Recipes', isStores: s.page === 'Where to Buy', isBusiness: s.page === 'Business Opportunities', isCareers: s.page === 'Careers', isNews: s.page === 'News & Stories', isContact: s.page === 'Contact',
    heroSlides: D.HERO.map((h, i) => ({ ...h, bg: 'url(' + h.image + ')', h: h.crop ? '114%' : '100%', op: i === s.hero ? 1 : 0, scale: i === s.hero ? 'scale(1.06)' : 'scale(1)', dotBg: i === s.hero ? T.dotOn : T.dotOff, go: () => vm.setState({ hero: i }) })),
    heroTag: D.HERO[s.hero].tag, heroIdx: '0' + (s.hero + 1),
    spot: { ...spot, idx: '0' + (s.spot + 1), total: '0' + D.SPOTS.length, bg: spot.tone === 'red' ? T.spotRed : T.spotGreen, products: spot.slugs.map(sl => prod(bySlug[sl])), hero: bySlug[spot.slugs[0]].image, heroName: bySlug[spot.slugs[0]].name, heroPrice: bySlug[spot.slugs[0]].price },
    spotWord: React.createElement('span', { key: s.spot, style: { display: 'inline-block', animation: 'pbWord .6s var(--ease-out) both' } }, spot.word),
    spotPack: React.createElement('img', { key: s.spot, src: bySlug[spot.slugs[0]].image, alt: bySlug[spot.slugs[0]].name, style: { width: '100%', height: '100%', objectFit: 'contain', display: 'block', animation: 'pbPop .7s var(--ease-out) both, pbFloat 6s ease-in-out .7s infinite' } }),
    spotDots: D.SPOTS.map((x, i) => ({ bg: i === s.spot ? T.spotDotOn : T.spotDotOff, go: () => vm.setState({ spot: i }) })),
    spotPrev: () => vm.setState(st => ({ spot: (st.spot + D.SPOTS.length - 1) % D.SPOTS.length })), spotNext: () => vm.setState(st => ({ spot: (st.spot + 1) % D.SPOTS.length })),
    spotEnter: () => vm.setState({ paused: true }), spotLeave: () => vm.setState({ paused: false }), goSpotCat: () => goCat(spot.cat),
    featured: D.FEATURED_SLUGS.map(sl => prod(bySlug[sl])),
    catTiles: D.CATS.slice(0, 12).map(c => ({ name: c, count: D.PRODUCTS.filter(p => p.category === c).length + ' products', image: (D.PRODUCTS.find(p => p.category === c) || {}).image, photo: D.CAT_PHOTOS[c] || '', go: () => goCat(c) })),
    history: D.HISTORY.map((h, i) => ({ ...h, bg: 'url(' + h.image + ')', first: i === 0, last: i === D.HISTORY.length - 1 })),
    story: D.STORY, storyQuote: D.STORY_QUOTE, testimonials: D.TESTIMONIALS, testimonialsHome: D.TESTIMONIALS.slice(0, 3),
    recipesHome: D.RECIPES.slice(0, 4).map(r => ({ ...r, go: () => openRecipe(r) })),
    news: D.NEWS.map(n => ({ ...n, go: () => openNews(n), open: () => openNews(n) })), newsHome: D.NEWS.slice(0, 3).map(n => ({ ...n, go: () => openNews(n), open: () => openNews(n) })),
    isRecipeDetail: s.page === 'Recipes' && !!recipe, isRecipeList: s.page === 'Recipes' && !recipe,
    recipe: recipe ? { ...recipe, bg: 'url(' + recipe.image + ')', steps: recipe.steps.map((text, i) => ({ n: i + 1, text })) } : { ingredients: [], steps: [] },
    moreRecipes: recipe ? D.RECIPES.filter(r => r !== recipe).slice(0, 4).map(r => ({ ...r, go: () => openRecipe(r) })) : [],
    backToRecipes: () => nav(vm, 'Recipes'),
    isNewsDetail: s.page === 'News & Stories' && !!article, isNewsList: s.page === 'News & Stories' && !article,
    article: article ? { ...article, bg: 'url(' + article.image + ')', badgeText: article.badge ? '· ' + article.badge : '', go: () => go(article.link) } : { paragraphs: [] },
    moreNews: article ? D.NEWS.filter(n => n !== article).slice(0, 3).map(n => ({ ...n, open: () => openNews(n) })) : [],
    backToNews: () => nav(vm, 'News & Stories'),
    steps: D.STEPS, jobs: D.JOBS.map(j => ({ ...j, go: () => window.open(D.CAREERS_URL, '_blank') })),
    cats: D.CATS.map(c => ({ name: c, on: c === s.cat, bg: c === s.cat ? T.pillOnBg : T.pillOffBg, color: c === s.cat ? T.pillOnFg : T.pillOffFg, border: c === s.cat ? T.pillOnBg : T.pillBorder, go: () => { vm.setState({ cat: c }); } })),
    cat: s.cat, catProducts: catProducts.map(prod), catCount: catProducts.length + (catProducts.length === 1 ? ' product' : ' products'), allCount: D.PRODUCTS.length + ' products',
    recipeTags: pill(D.TAGS, s.tag, 'tag'), recipes: recipes.map(r => ({ ...r, go: () => openRecipe(r) })),
    q: s.q, onQ: set('q'),
    storeTypes: D.TYPES.map(([label, icon]) => ({ label, icon, on: label === s.type, op: label === s.type ? 1 : 0.7, bg: label === s.type ? T.typeOnBg : 'transparent', border: label === s.type ? T.typeOnBg : T.typeBorder, iconColor: label === s.type ? T.typeOnFg : T.typeOffFg, go: () => vm.setState({ type: label }) })),
    pins: D.STORES.map((st, i) => ({ name: st.name, left: (mapOx + st.x * mapScale) + 'px', top: (mapOy + st.y * mapScale) + 'px', bg: i === s.store ? T.pinOn : T.pinOff, scale: i === s.store ? '1.2' : '1', go: () => vm.setState({ store: i }) })),
    store, directions: () => window.open('https://www.google.com/maps/search/' + encodeURIComponent(store.name + ' ' + store.address), '_blank'),
    regions: pill(D.REGIONS, s.region, 'region'),
    storeList: storeList.map(st => ({ ...st, on: st === store, border: st === store ? T.pillOnBg : T.pillBorder, go: () => vm.setState({ store: D.STORES.indexOf(st) }) })),
    noStores: storeList.length === 0,
    fName: s.name, fEmail: s.email, fSubject: s.subject, fMessage: s.message, onName: set('name'), onEmail: set('email'), onSubject: set('subject'), onMessage: set('message'),
    errName: s.errors.name || '', errEmail: s.errors.email || '', errMessage: s.errors.message || '',
    submit: () => { const errors = {}; if (!s.name.trim()) errors.name = 'Please tell us your name.'; if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s.email)) errors.email = 'Enter a valid email address.'; if (s.message.trim().length < 10) errors.message = 'A few more words, please (10 characters minimum).'; vm.setState({ errors, sent: Object.keys(errors).length === 0 }); },
    sent: s.sent, notSent: !s.sent, resetForm: () => vm.setState({ sent: false, name: '', email: '', message: '', errors: {} }),
  };
}
return { D, initialState, mount, update, unmount, renderVals, slug };
})();
