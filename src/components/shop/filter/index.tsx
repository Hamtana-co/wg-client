"use client";

import { Icon } from "@iconify/react";
import { Accordion, AccordionItem, Input, Slider } from "@nextui-org/react";
import { useState } from "react";

export default function ShopFilter() {
  const [value, setValue] = useState([100, 300]);
  return (
    <div>
      <div>
        <div className=" bg-[#70737b1c]  w-72 rounded-[25px] border-2 border-[#ffffff4a] py-8  text-[#D1BBFF] flex flex-col gap-5">
          <div className="font-[montserrat] px-4">فیلتر ها</div>
          <Accordion defaultExpandedKeys={["1"]}>
            <AccordionItem  key="1" aria-label="Accordion 1" title="محدوده قیمت">
              <div className="flex flex-col gap-5 text-center">
                <Input
                  dir="ltr"
                  type="number"
                  defaultValue="0"
                  startContent={
                    <span className="text-default-400 text-small">از</span>
                  }
                  endContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">تومان</span>
                    </div>
                  }
                />
                <Input
                  dir="ltr"
                  startContent={
                    <span className="text-default-400 text-small">تا</span>
                  }
                  endContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">تومان</span>
                    </div>
                  }
                />
              </div>
              <Slider
                label="Price Range"
                step={1}
                minValue={0}
                maxValue={1000}
                marks={[
                  {
                    value: 0,
                    label: "ارزانترین",
                  },
                  {
                    value: 1000,
                    label: "گرانترین",
                  },
                ]}
                defaultValue={[0, 1000]}
                className="max-w-md px-5 text-[#D1BBFF]"
              />
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
