import React from "react";
import { Container, Header, Subtitle, Button, Body, Title, Right, Icon, Left, Tab, Tabs } from 'native-base';

import HotelIvoire from './HotelIvoire';
import HotelDuGolf from './HotelDuGolf';


export default class HotelsScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
          <Button
			  transparent
			  onPress={() => this.props.navigation.navigate("DrawerOpen")}
			>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
          <Title>Hotels</Title>
			<Subtitle>IRC 2018 Abidjan</Subtitle>
          </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab heading="Sofitel Hotel Ivoire">
            <HotelIvoire />
          </Tab>
          <Tab heading="Heden Golf Club">
            <HotelDuGolf />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
