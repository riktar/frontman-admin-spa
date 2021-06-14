import React from "react";
import { useLocation } from "react-router-dom";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import NavbarInput from "@material-tailwind/react/NavbarInput";
import Image from "@material-tailwind/react/Image";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import { UserIcon } from "@heroicons/react/solid";

export default function AdminNavbar({ showSidebar, setShowSidebar }) {
  const location = useLocation().pathname;

  return (
    <nav className="px-3 py-4 shadow md:ml-64">
      <div className="container flex items-center justify-between max-w-full mx-auto md:pr-8 md:pl-10">
        <div className="md:hidden">
          <Button
            color="indigo"
            buttonType="link"
            size="lg"
            iconOnly
            rounded
            ripple="light"
            onClick={() => setShowSidebar("left-0")}
          >
            <Icon name="menu" size="2xl" color="indigo" />
          </Button>
          <div
            className={`absolute top-2 md:hidden ${
              showSidebar === "left-0" ? "left-64" : "-left-64"
            } z-50 transition-all duration-300`}
          >
            <Button
              color="indigo"
              buttonType="link"
              size="lg"
              iconOnly
              rounded
              ripple="light"
              onClick={() => setShowSidebar("-left-64")}
            >
              <Icon name="close" size="2xl" color="indigo" />
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between w-full">
          <h4 className="mt-1 text-sm tracking-wider text-indigo-500 uppercase">
            {location === "/"
              ? "DASHBOARD"
              : location.toUpperCase().replace("/", "")}
          </h4>

          <div className="flex">
            <div className="ml-6 -mr-4">
              <Dropdown
                color="indigo"
                size="sm"
                buttonType="link"
                buttonText={<UserIcon className={"w-6 h-6"} />}
              >
                <DropdownItem color="indigo">Action</DropdownItem>
                <DropdownItem color="indigo">Another Action</DropdownItem>
                <DropdownItem color="indigo">Something Else</DropdownItem>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
