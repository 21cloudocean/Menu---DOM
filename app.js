//items
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
//选择element
const sectionCenter = document.querySelector(".section-center");
// DOMContentLoaded event listener
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
});

//btn方法1：选择parent element，使用e.target
/*//选择element
const btnContainer = document.querySelector(".btn-container");
//给parent增加eventlistener
btnContainer.addEventListener("click", function (e) {
  // console.log(e.target.textContent);
  let filtedMenu = menu.filter(function (selectedItem) {
    return selectedItem.category === e.target.textContent;
  });
  //点击all按钮时，由于没有叫all的分类，什么都不显示。因此加了下面的代码：
  e.target.textContent === "all" ? (filtedMenu = [...menu]) : null;
  displayMenuItems(filtedMenu);
});*/
//btn方法2：选择所有button，用forEach
const filterBtns = document.querySelectorAll(".filter-btn");
//filter items:
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    //这里用dataset而不是用textContent，是为了防止text和category不一致
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function (menuItem) {
      //如果不设置任何筛选条件，则会返回所有Item；
      //但此处设置了这个条件，当按钮是all时，什么都不会返回。
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    //display：这个方法是在display阶段设置all显示的内容，即直接显示menu；第一个方法是在filter阶段，直接更改筛选过的array，因此只用一次displayMenuItems function。
    if (category === "all") {
      displayMenuItems(menu);
    } else {
      displayMenuItems(menuCategory);
    }
  });
});

//将之前DOMContentLoaded event listener的callback function单独存为function。
//注意parameter。menu用作argument。
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
          <img class="photo" src=${item.img} alt=${item.title} />
          <!-- 需要layout,所以文字放在div里 -->
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}
