import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";
const routes = ["Schedule", "Abstract", "Speakers", "Committees", "Partners", "Hotels", "Map", "Informations", "Tweets feeds"];
// const routes = ["Schedule", "Abstract", "Committees", "Speakers", "Institutional Partners", "Map", "News", "Tweets feeds", "Informations", "Home", "Agenda", "Profile"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={{
              uri:
                "https://fkobon.ci/irrdb_assets/drawer-cover.png"
            }}
            style={{
              height: 120,
              width: "100%",
              alignSelf: "stretch",
              position: "absolute"
            }}
          />
          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 120 }}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
          <Text style={{margin: 20, textAlign: "center"}}>
          &copy; IRRDB Conference 2018 {'\n'}
          Version 1.0
          </Text>
        </Content>
      </Container>
    );
  }
}
