import React, {useState} from 'react';
import data from '../../final_data_39';


const F2Page_39 = () => {
    const {clearall} = useState();
    return ( 
    <button className='clear-btn' onClick={clearall}>
    clear all
    </button>
    );
  };
    // const {ClearAll} = useState;
    // const mainData = useGlobalContext_39();
    // return (
    //   <div className='persons'>
    //     {mainData.persons.map((persons) => {
    //       const { id, img, age} = persons;
    //       return (
    //         <F2_39
    //           key={id}
    //           id={id}
    //           age={age}
    //           img={img}
    //         />
    //       );
    //     })}
    //   </div>
    // );



    //   );
    // // return (
    //   <body>
    //   <main class="persons">
    //     <section class="container">
    //       <h3>5 birthdays today</h3>
    //       <article class="person">
    //         <img src="./images/person-1.jpg" alt="Bertie Yates" />
    //         <div>
    //           <h4>Bertie Yates</h4>
    //           <p>29 years</p>
    //         </div>
    //       </article>
    //       <article class="person">
    //         <img src="./images/person-2.jpg" alt="Hester Hogan" />
    //         <div>
    //           <h4>Hester Hogan</h4>
    //           <p>32 years</p>
    //         </div>
    //       </article>
    //       <article class="person">
    //         <img src="./images/person-3.jpg" alt="Larry Little" />
    //         <div>
    //           <h4>Larry Little</h4>
    //           <p>36 years</p>
    //         </div>
    //       </article>
    //       <article class="person">
    //         <img src="./images/person-4.jpg" alt="Sean Walsh" />
    //         <div>
    //           <h4>Sean Walsh</h4>
    //           <p>34 years</p>
    //         </div>
    //       </article>
    //       <article class="person">
    //         <img src="./images/person-5.jpg" alt="Lola Gardner" />
    //         <div>
    //           <h4>Lola Gardner</h4>
    //           <p>29 years</p>
    //         </div>
    //       </article>
    //       <button>clear all</button>
    //     </section>
    //   </main>
    //   </body>
    //   );
  


  export default F2Page_39;