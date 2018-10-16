import React, { Component } from "react";
import { DrawerNavigator } from "react-navigation";

import SideBar from "../SideBar/SideBar.js";
import ScheduleScreen from "./ScheduleScreen.js";
import InformationsScreen from "../InformationsScreen/InformationsScreen";
import HotelsScreen from "../HotelsScreen/HotelsScreen";
import PartnersScreen from "../PartnersScreen/PartnersScreen";
import CommitteesScreen from "../CommitteesScreen/CommitteesScreen";
import MapScreen from "../MapScreen/MapScreen";
import SpeakersScreen from "../SpeakersScreen/SpeakersScreen";

const ScheduleScreenRouter = DrawerNavigator(
  {
    Schedule: { screen: ScheduleScreen },
    Informations: { screen: InformationsScreen },
    Hotels: { screen: HotelsScreen },
    Partners: { screen: PartnersScreen },
    Committees: { screen: CommitteesScreen },
    Map: { screen: MapScreen },
    Speakers: { screen: SpeakersScreen },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default ScheduleScreenRouter;
