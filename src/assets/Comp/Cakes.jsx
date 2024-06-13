import React from 'react';
import { useCart } from 'react-use-cart';

const Cakes = () => {
  const { addItem, inCart } = useCart();

  let cakes_displayed = [
    {
      name: "Redvelvet",
      id: 1,
      price: 2000,
      desc: "This classic American cake features vibrant red velvet layers with a tangy cream cheese frosting. Its origins are debated, but its popularity is undeniable.",
      img: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_5:4/v1/img/recipes/89/72/z1waTloRRUeZkdkAPS7A_rvcc1.jpg"
    },
    {
        name:"Black Forest",
        id:2,
        price:1500,
        desc:"This German chocolate cake features layers of chocolate cake, whipped cream, cherries, and kirsch liqueur.",
        img:"https://houseofnasheats.com/wp-content/uploads/2016/10/Black-Forest-Cake-Square-1.jpg"
    },
    {
        name:"Classic Vanilla",
        id:3,
        price:2000,
        desc:"This is a timeless favorite, featuring light and fluffy vanilla cake layers frosted with smooth buttercream.",
        img:"https://thescranline.com/wp-content/uploads/2021/07/Classic-Vanilla-Funfetti-Cake-01_1.jpg"
    },
    {
        name:"Chocolate Cake",
        id:4,
        price:2000,
        desc:"Another crowd-pleaser, this decadent cake features rich chocolate cake layers frosted with chocolate ganache or buttercream.",
        img:"https://stephaniessweets.com/wp-content/uploads/2020/05/IMG_0243.jpg"
    },
    {
        name:"Carrot Cake",
        id:5,
        price:2000,
        desc:"This moist and flavorful cake is packed with grated carrots, raisins, walnuts, and spices, often frosted with cream cheese frosting.",
        img:"https://www.spoonforkbacon.com/wp-content/uploads/2021/03/carrot_cake_recipe_card.jpg"
    },
    {
        name:"Cheesecake",
        id:6,
        price:2000,
        desc:"This creamy and decadent dessert features a baked cheese filling on a crumbly cookie crust. It can be flavored with various ingredients like vanilla, berries, or chocolate.",
        img:"https://emmaduckworthbakes.com/wp-content/uploads/2022/01/Chocolate-Cheesecake-1.jpg"
    },
    {
        name:"New York-Style Cheesecake",
        id:7,
        price:2000,
        desc:"This dense and rich cheesecake is a classic version, baked without a water bath for a thicker texture.",
        img:"https://www.marthastewart.com/thmb/m6R1D2iuHvVxM8u7RJz7c-Us8Rg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSL-865202-new-york-cheesecake-hero-horiz-0723-84e3c796119d408581d1ef4d02d801cd.jpg"
    },
    {
        name:"Japanese Cheesecake",
        id:8,
        price:2000,
        desc:"This light and fluffy cheesecake is known for its airy texture and delicate flavor.",
        img:"https://bakewithshivesh.com/wp-content/uploads/2020/07/5C20062B-BEBF-4D70-827A-D412AF90C0B8.jpeg"
    },
    {
        name:"Fruit Cake",
        id:9,
        price:2000,
        desc:"This traditional cake is packed with dried fruits, nuts, and spices, and often soaked in alcohol for a richer flavor.",
        img:"https://chefalina.com/wp-content/uploads/2022/12/fruitcake-slice-scaled.jpg"
    },
    {
        name:"Angel Food Cake",
        id:10,
        price:2000,
        desc:"This light and airy cake is made with egg whites and no yolks, creating a fluffy and delicate texture.",
        img:"https://www.sweetrecipeas.com/wp-content/uploads/2021/04/Cake-Batter-Angel-Food-Cake-Slider.jpeg"
    },
    {
        name:"Devil's Food Cake",
        id:11,
        price:2000,
        desc:"This dense and chocolatey cake is the opposite of Angel Food Cake, featuring a rich and decadent flavor profile.",
        img:"https://realfood.tesco.com/media/images/RFO-1400x919-DevilsFoodCake-5a69df04-114b-491c-838d-5c112ede8a27-0-1400x919.jpg"
    },
    {
        name:"Coffee Cake",
        id:12,
        price:2000,
        desc:"This breakfast cake is typically flavored with coffee and cinnamon, and sometimes topped with a streusel crumble.",
        img:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/coffee-cake-4d37cac.jpg?quality=90&resize=440,400"
    },
    {
        name:"Pound Cake",
        id:13,
        price:2000,
        desc:"This dense and buttery cake is made with a 1:1:1:1 ratio of eggs, sugar, butter, and flour, resulting in a heavy and poundy texture.",
        img:"https://www.livewellbakeoften.com/wp-content/uploads/2022/04/Strawberry-Pound-Cake-10.jpg"
    },
    {
        name:"Genoise Cake",
        id:14,
        price:2000,
        desc:"This Italian sponge cake is light and airy, often used as a base for layer cakes and soaked with flavored syrups.",
        img:"https://www.seriouseats.com/thmb/Y4Rly4jyV7r1uEsVb2ZtwWmbZ8I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20221205-GenoiseSponge-AmandaSuarez-hero-03-e8b8ddd754964e289a92cfb96139eda8.JPG"
    },
    {
        name:"Ladyfingers",
        id:15,
        price:2000,
        desc:"These light and airy ladyfingers are ladyfinger-shaped sponge cake biscuits, often used in tiramisu desserts.",
        img:"https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2014/7/9/0/CC_icebox-berries-and-cream-ladyfinger-icebox-cake-recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1404936539503.jpeg"
    },
    {
        name:"Chiffon Cake",
        id:16,
        price:2000,
        desc:"This light and airy cake is similar to Angel Food Cake but uses vegetable oil and egg yolks for a slightly denser texture.",
        img:"https://teakandthyme.com/wp-content/uploads/2023/03/strawberry-chiffon-cake-DSC_2139-1x1-1200.jpg"
    },
    {
        name:"Tres Leches Cake",
        id:17,
        price:2000,
        desc:"This light and refreshing cake is a Latin American dessert soaked in three kinds of milk - evaporated milk, condensed milk, and whole milk.",
        img:"https://www.cookingclassy.com/wp-content/uploads/2017/05/tres-leches-cake-66.jpg"
    },
    {
        name:"Opera Cake",
        id:18,
        price:2000,
        desc:"his French layered cake features coffee-soaked ladyfingers, coffee buttercream, and a chocolate ganache glaze.",
        img:"https://greenspoon.co.ke/wp-content/uploads/2022/07/Greenspoon-LGP-Opera-Cake.jpg"
    },
    {
        name:"Flan",
        id:19,
        price:2000,
        desc:"This creamy custard dessert is similar to cheesecake but has a denser and smoother texture. It's often flavored with vanilla and caramelized on top.",
        img:"https://www.thespruceeats.com/thmb/krgKXXbTSX15Fr_RcQanQExxS4c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chocoflan-recipe-5191594-hero-01-a25aa7130adf484a975374500e1b2296.jpg"
    },
    {
        name:"Gateau Basque",
        id:20,
        price:2000,
        desc:"This French cake features a creamy custard filling sandwiched between buttery shortbread crust.",
        img:"https://rebeccasherrowcom.files.wordpress.com/2021/04/gateau-basque-cherries-cream-recipe.jpeg?w=757"
    }

    
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {cakes_displayed.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <section className="relative h-48 overflow-hidden">
            <img src={item.img} alt={item.name} className="w-full h-full object-cover hover:object-contain" />
          </section>
          <section className="p-4 flex flex-col justify-between">
            <div>
              <h1 className="text-xl font-semibold text-gray-800">{item.name}</h1>
              <p className="text-gray-600">{item.desc}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-lg font-semibold text-gray-800">Ksh {item.price} /=</span>
              {inCart(item.id) ?
                <button className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-500 transition">
                  In Cart
                </button>
                :
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition" onClick={() => addItem(item)}>
                  Add to Cart
                </button>
              }
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}

export default Cakes;
