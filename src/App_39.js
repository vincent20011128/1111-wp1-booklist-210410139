import { useState } from 'react';
import items from './data.js'

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
    {/* filter buttons */}
    <div className="btn-container">
    <button type="button" className="filter-btn" data-id="all">all</button
        ><button type="button" className="filter-btn" data-id="breakfast">
          breakfast</button
        ><button type="button" className="filter-btn" data-id="lunch">lunch</button
        ><button type="button" className="filter-btn" data-id="shakes">
          shakes</button
        ><button type="button" className="filter-btn" data-id="dinner">
          dinner
        </button>
    </div>
  {/* menu items */}
    <div className="section-center">
    <article class="menu-item">
          <img
            src="/images/item-1.jpeg"
            alt="buttermilk"
            pancakes=""
            class="photo"
          />
          <div class="item-info">
            <header>
              <h4>buttermilk pancakes</h4>
              <h4 class="price">$15.99</h4>
            </header>
            <p class="item-text">
              I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock
              freegan copper mug whatever cold-pressed
            </p>
          </div>
        </article>
        <article class="menu-item">
          <img src="/images/item-2.jpeg" alt="diner" double="" class="photo" />
          <div class="item-info">
            <header>
              <h4>diner double</h4>
              <h4 class="price">$13.99</h4>
            </header>
            <p class="item-text">
              vaporware iPhone mumblecore selvage raw denim slow-carb leggings
              gochujang helvetica man braid jianbing. Marfa thundercats
            </p>
          </div>
        </article>
        <article class="menu-item">
          <img
            src="/images/item-3.jpeg"
            alt="godzilla"
            milkshake=""
            class="photo"
          />
          <div class="item-info">
            <header>
              <h4>godzilla milkshake</h4>
              <h4 class="price">$6.99</h4>
            </header>
            <p class="item-text">
              ombucha chillwave fanny pack 3 wolf moon street art photo booth
              before they sold out organic viral.
            </p>
          </div>
        </article>
    </div>
    </section>
    )
};

export default App_39;
