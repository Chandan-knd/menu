import React from 'react';
import SingleItem from './SingleItem';

const MenuList = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        return <SingleItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default MenuList;
