import React, { Component } from "react";
import ScheduleScreen from "./ScheduleScreen.js";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";

const InformationsScreenRouter = DrawerNavigator(
  {
    Information: { screen: InformationsScreen },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default InformationsScreenRouter;
