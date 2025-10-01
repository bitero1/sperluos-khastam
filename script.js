const categories = [
  {
    title: "قهوه‌های گرم",
    items: ["اسپرسو", "کاپوچینو", "لاته", "موکا", "آمریکانو", "ماکیاتو", "فلت وایت"]
  },
  {
    title: "نوشیدنی‌های سرد",
    items: ["فرپچینو", "آیس لاته", "آیس آمریکانو", "آیس موکا", "اسموتی توت‌فرنگی", "اسموتی موز", "لیموناد"]
  },
  {
    title: "چای و دمنوش",
    items: ["چای سیاه", "چای سبز", "چای ماسالا", "چای نعناع", "چای ترش", "بابونه"]
  },
  {
    title: "دسرها",
    items: ["چیزکیک", "براونی", "تیرامیسو", "پودینگ شکلات", "باقلوا", "ماکارون"]
  },
  {
    title: "اسنک / صبحانه",
    items: ["کرواسان", "پنینی", "تست آووکادو", "املت", "پنکیک", "فرنچ‌تست"]
  },
  {
    title: "ویژه‌های اسپِرلوس",
    items: ["کافه اسپِشل", "موکا دارچینی", "شیک اسپرسو", "لته کارامل", "اسموک اسپرسو"]
  }
];

const menu = document.getElementById("menu");

function renderMenu() {
  menu.innerHTML = "";
  categories.forEach((cat) => {
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h2");
    title.textContent = cat.title;
    card.appendChild(title);

    const itemsWrapper = document.createElement("div");
    itemsWrapper.className = "items";

    cat.items.forEach((item) => {
      const span = document.createElement("span");
      span.className = "item";
      span.textContent = item;
      itemsWrapper.appendChild(span);
    });

    card.appendChild(itemsWrapper);
    menu.appendChild(card);
  });
}

renderMenu();