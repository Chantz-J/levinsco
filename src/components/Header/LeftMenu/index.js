import React from 'react'
import { Link as NavLink } from 'react-router-dom'
import { Menu, Icon } from 'antd'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup


export default function LeftMenu(){
    return (
   <Menu mode="horizontal">
       <Menu.Item key="mail">
          <NavLink to="/">Home</NavLink >
        </Menu.Item>
        <SubMenu title={<span>Blogs</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <NavLink  to="/search">Plants</NavLink >
        </Menu.Item>
      </Menu>
    )
}
