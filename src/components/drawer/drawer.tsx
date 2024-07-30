"use client";

import { useState } from "react";
import DrawerItem from "./items";
import {
  Analytics,
  Call,
  Chat,
  Dashboard,
  Newspaper,
  Task,
} from "@mui/icons-material";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const drawerItems = [
  { id: 0, label: "Dashboard", icon: <Dashboard /> },
  { id: 1, label: "Tasks", icon: <Task /> },
  { id: 2, label: "Chats", icon: <Chat /> },
  { id: 3, label: "Analytics", icon: <Analytics /> },
  { id: 4, label: "News", icon: <Newspaper /> },
  { id: 5, label: "Calls", icon: <Call /> },
];

const Drawer = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <>
      {/* <div className="w-[250px] bg-[#176B87]">
        <div className="w-[100%] h-20 flex items-center justify-center font-bold text-2xl text-white bg-[#13495b]">
          Tick Monitor
        </div>
        <div className="mt-4"/>
        {drawerItems.map((item) => (
          <div key={item.id} onClick={() => setSelectedItem(item.id)}>
            <DrawerItem
              icon={item.icon}
              label={item.label}
              selected={item.id === selectedItem}
            />
          </div>
        ))}
      </div> */}
      <div className="flex h-screen w-[78px] items-center flex-col justify-between border-e bg-[#2d62ed]">
  <div>
    <div className="inline-flex size-16 items-center justify-center">
      <span className="grid text-sm place-content-center text-white">
        TM
      </span>
    </div>

    <div className="border-t border-gray-100">
      <div className="px-2">
        <div className="py-4">
          <a
            href="#"
            className="group relative flex justify-center rounded px-2 py-1.5   text-white hover:bg-gray-50 hover:text-gray-700 mt-5"
          >
          <GridViewOutlinedIcon  />

            <span
              className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible z-[99]"
            >
              Dashboard
            </span>
          </a>
        </div>

        <ul className="">
          <li>
            <a
              href="#"
              className="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700 mt-5"
            >
              <TaskOutlinedIcon  />

              <span
                className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible z-[99]"
              >
                Tasks
              </span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="group relative flex justify-center rounded px-2 py-1.5   text-white hover:bg-gray-50 hover:text-gray-700 mt-5"
            >
              <ChatOutlinedIcon  />

              <span
                className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible z-[99]"
              >
                Chats
              </span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="group relative flex justify-center rounded px-2 py-1.5   text-white hover:bg-gray-50 hover:text-gray-700 mt-5"
            >
            <AnalyticsOutlinedIcon  />

              <span
                className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible z-[99]"
              >
                Analytics
              </span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="group relative flex justify-center rounded px-2 py-1.5   text-white hover:bg-gray-50 hover:text-gray-700 mt-5"
            >
              <NewspaperOutlinedIcon  />

              <span
                className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible z-[99]"
              >
                News
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="group relative flex justify-center rounded px-2 py-1.5   text-white hover:bg-gray-50 hover:text-gray-700 mt-5"
            >
              <PhoneOutlinedIcon  />

              <span
                className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible z-[99]"
              >
                Calls
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div className="sticky p-2">
    <form >
            <button
        
        className="group relative flex justify-center rounded px-2 py-1.5  text-white hover:bg-gray-50 hover:text-gray-700"
      >
        <NotificationsNoneOutlinedIcon />

        <span
          className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
        >
          Notifications
        </span>
      </button>
      <button
        
        className="group relative flex justify-center rounded px-2 py-1.5  text-white hover:bg-gray-50 hover:text-gray-700 mt-5"
      >
        <AccountCircleOutlinedIcon />

        <span
          className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
        >
          Account
        </span>
      </button>
    </form>
  </div>
</div>
    </>
  );
};

export default Drawer;
