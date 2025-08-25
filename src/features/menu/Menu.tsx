import React from 'react'
import { getMenu } from '../../utils/apiRestaurant'
import { useLoaderData } from 'react-router-dom'
import MenuList from './MenuList';

type Pizza = {
  id: number;
  name: string;
  unitPrice: number;
  ingredients: string[];
  imageUrl: string;
};

const Menu: React.FC  = () => {
  const data = useLoaderData() as {data: Pizza[]};
  return (
  <>
    {data.data.map((pizza) => (
      <MenuList pizza={pizza} key={pizza.id} />
    ))}
  </>
);

}

export const loader = async () => {
  const menu = await getMenu();
  return menu;
}

export default Menu