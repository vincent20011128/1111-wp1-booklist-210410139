import { useState } from "react";
import Category_39 from "./components/Category_39.js";
import Menu_39 from "./components/Menu_39.js";
import items from "./data.js";

const allCategories = ["all", "breakfast", "lunch", "shakes", "39"];

const App_39 = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);


  const filterItems = (category) => {
    if(category=== 'all') {
      setMenuItems(items);
    } else {
      const newItems = items.filter((item) => item.category ===category );
      setMenuItems(newItems);
    }
  }
  console.log("menuItems", menuItems);
  return (
    <section className="menu">
      {/* title */}
      <div className="title">
        <h2>our menu 210410139</h2>
        <div className="underline"></div>
      </div>
      {/* filter buttons */}
      <Category_39 categories={categories} filterItems={filterItems} />
      {/* menu items */}
      <Menu_39 items={menuItems} />
    </section>
  );
};

export default App_39;
