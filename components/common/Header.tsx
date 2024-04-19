"use client";

import { Layout, Menu } from "antd";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import menuItems from "@/mocks/Header";
import Logo from "@/public/next.svg";

const Header = ({}) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleMenu = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="fixed w-full z-50 flex !flex-row justify-between">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto p-6 xl:px-0">
        {collapsed ? (
          <MenuOutlined className="trigger" onClick={toggleMenu} />
        ) : (
          <img src={Logo.src} alt="Logo" className="w-8 h-auto" />
        )}
        <Menu mode="horizontal" defaultSelectedKeys={["0"]}>
          {menuItems.map((item, index) => (
            <Menu.Item key={index.toString()}>
              <a href={item.link}>{item.label} </a>
            </Menu.Item>
          ))}{" "}
        </Menu>{" "}
      </div>
    </Layout>
  );
};

export default Header;
