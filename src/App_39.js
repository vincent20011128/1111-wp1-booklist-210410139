import { useState } from 'react';
import Menu_39 from './components/Menu_39.js';
import items from './data.js';


const App_39 = () => {
  const [menuItems, setMenuItems] = useState(items);
  console.log('menuItems', menuItems);
  return (
    <section className="menu">
      {/* title */}
      <div className="title">
      <h2>our menu</h2>
      <div className="underline"></div>
      </div>

      <div className="btn-container">
      <button type="button" className="filter-btn" data-id="all">all</button>
      <button type="button" className="filter-btn" data-id="breakfast">   breakfast</button >
      <button type="button" className="filter-btn" data-id="lunch">lunch</button >
      <button type="button" className="filter-btn" data-id="shakes">shakes</button>
      <button type="button" className="filter-btn" data-id="dinner">
        dinner
      </button>
      </div>
    </section>
  );
};

export default App_39;