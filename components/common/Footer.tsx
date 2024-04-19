"use client";

import { Layout, List } from "antd";
import Link from "next/link";
import menuItems from "@/mocks/Footer";
import Logo from "@/public/next.svg";

const Footer = () => {
  return (
    <Layout style={{ textAlign: "center", background: "#f0f2f5" }}>
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto p-6 xl:px-0">
        <div>
          <List
            itemLayout="horizontal"
            dataSource={menuItems}
            renderItem={(item, index) => (
              <List.Item
                key={index}
                style={{ display: "inline-block", marginRight: "20px" }}
              >
                <Link href={item.link}>{item.label}</Link>
              </List.Item>
            )}
          />
        </div>
        <div>
          <img src={Logo.src} alt="Logo" style={{ height: "40px" }} />
        </div>
      </div>
    </Layout>
  );
};

export default Footer;
