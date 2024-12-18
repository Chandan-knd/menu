import React from 'react';

const MenuButtons = ({ foodItems, filterMenu }) => {
  return (
    <div className="btn-container">
      {foodItems.map((category) => {
        return (
          <button
            type="button"
            className="btn"
            key={category}
            onClick={() => filterMenu(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default MenuButtons;
