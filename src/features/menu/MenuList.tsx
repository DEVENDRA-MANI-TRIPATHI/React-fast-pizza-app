import React from "react";

type Pizza = {
  id: number;
  imageUrl: string;
  ingredients: string[];
  name: string;
  unitPrice: number;
  soldOut?: boolean;
};

type MenuListProps = {
  pizza: Pizza;
};

const MenuList: React.FC<MenuListProps> = ({ pizza }) => {
  const { imageUrl, ingredients, name, unitPrice } = pizza;

  return (
    <div>
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
      <p>{unitPrice}</p>
      <ul>
        {ingredients.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
