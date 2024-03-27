"use client";

import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import LoginPage from "./login";
import RegisterPage from "./register";

export default function AuthPage() {
  let tabs = [
    {
      id: "register",
      label: "ثبت نام در سایت",
      content: <RegisterPage />,
    },
    {
      id: "login",
      label: "ورود به حساب",
      content: <LoginPage />,
    },
  ];

  return (
    <div className="pt-36 flex flex-col items-center">
      <Tabs aria-label="Dynamic tabs" items={tabs} size="lg" className="pb-12">
        {(item) => (
          <Tab key={item.id} title={item.label}>
            {item.content}
          </Tab>
        )}
      </Tabs>
    </div>
  );
}
