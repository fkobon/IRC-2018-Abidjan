import React from "react";
import { Image, StyleSheet } from "react-native";
import { Container, Header, Left, Button, Icon, Body, Title, H1, Right, Content, Text, Subtitle } from "native-base";

export default class InformationsScreen extends React.Component {

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Map</Title>
            <Subtitle>IRC 2018 Abidjan</Subtitle>
          </Body>
          <Right />
        </Header>
        
        <Content padder>

          <H1 style={{margin: 10}}>Mass Map of the Hotel</H1>

          {/* <Image
            source={{
              uri:
                "https://fkobon.ci/irrdb_assets/plan_sofitel_hotel_ivoire.jpg"
            }}
            style={styles.container}
          /> */}

          <Image
        style={styles.container}
        // source={{uri: 'http://singlesmediacontent.com/properties/photos/3835/locationmap/locationmap.jpg'}} />
        source={{uri: 'https://fkobon.ci/irrdb_assets/plan_sofitel_hotel_ivoire.jpg'}} />

        </Content>
      </Container>
    );
  }
}

var styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'transparent',
      width: "100%",
      height: 500,
      justifyContent:'center'
    },
});