import React, { useState } from 'react';
import data from './data';
import MenuList from './MenuList';
import Title from './Title';
import MenuButtons from './MenuButtons';

const tempCategories = data.map((item) => item.category);
const uniqueCat = ['all', ...new Set(tempCategories)];

const App = () => {
  const [items, setItems] = useState(data);
  const [foodItems, setFoodItems] = useState(uniqueCat);

  const filterMenu = (category) => {
    if (category !== 'all') {
      const newItems = data.filter((item) => item.category === category);
      setItems(newItems);
      return;
    }
    setItems(data);
  };

  return (
    <main>
      <section className="menu">
        <Title text="menu" />
        <MenuButtons foodItems={foodItems} filterMenu={filterMenu} />
        <MenuList items={items} />
      </section>
    </main>
  );
};

export default App;
