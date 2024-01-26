import {
  call,
  fuel3,
  fuel2,
  insurance,
  tanker,
  oil,
  car,
  wheel,
} from "../assets";
import { Button } from "@/components/ui/button";

const TableFiveTyre = () => {
  return (
    <div className="rounded-sm border border-stroke mt-8 bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5  ">
        <div className=" space-x-7 ">
          <Button className=" bg-orange-600"> Add Tyre</Button>
          {/* <Button className=" bg-red-600"> Delete</Button>
          <Button className=" bg-yellow-500"> Edit</Button> */}
        </div>
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Tyre Table
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Product Name</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Category</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Price</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Sold</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Profit</p>
        </div>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="h-12.5 w-15 rounded-md">
              <img
                src={wheel}
                alt="tyre "
                width={80}
                height={60}
                className=" rounded-full"
              />
            </div>
            <p className="text-sm text-black dark:text-white">insurance</p>
          </div>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-black dark:text-white">insurance</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">269 birr</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">22</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-meta-3">45 birr</p>
        </div>
      </div>
      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="h-12.5 w-15 rounded-md">
              <img
                src={fuel3}
                alt="Product "
                width={80}
                height={60}
                className=" rounded-full"
              />
            </div>
            <p className="text-sm text-black dark:text-white">Engine Oil</p>
          </div>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-black dark:text-white">Car oil</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">546 birr</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">34</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-meta-3">125 birr</p>
        </div>
      </div>
      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="h-12.5 w-15 rounded-md">
              <img
                src={fuel3}
                alt="Product "
                width={80}
                height={60}
                className=" rounded-full"
              />
            </div>
            <p className="text-sm text-black dark:text-white">This Is Your</p>
          </div>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-black dark:text-white">Cars</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">443 birr</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">64</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-meta-3">247 birr</p>
        </div>
      </div>
    </div>
  );
};

export default TableFiveTyre;
