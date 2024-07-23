import { usePage } from "@/providers/PageProvider";
import { NavLink, Text } from "@mantine/core";
import { useState } from "react";

const LinkData = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Monster Drops',
    href: 'monster-drops'
  }
]


export const RootNavBar = () => {
  const { activeIndex } = usePage(); 
  return LinkData.map((route, index) => {
    return (
      <NavLink
        key={route.name}
        href={route.href}
        active={activeIndex === index}
        color='gray'
        variant="filled"
        label={
        <Text fw='600' fz='20'>
            {route.name}
        </Text>
      }/>
    )
  });
}