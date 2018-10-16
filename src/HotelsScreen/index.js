import React, { Component } from "react";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";

const PartnersScreenRouter = DrawerNavigator(
  {
    Hotels: { screen: HotelsScreen },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default PartnersScreenRouter;
