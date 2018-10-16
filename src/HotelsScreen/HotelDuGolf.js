import React, { Component } from 'react';
import { Image, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, View, DeckSwiper, Button, Card, CardItem, Thumbnail, Text, Left, Body, } from 'native-base';
const cards = [
  {
    text: 'Heden Golf Club',
    name: 'Booking now',
    image: require('../img/golf_hotel/1.jpg'),
  },
  {
    text: 'Heden Golf Club',
    name: 'Booking now',
    image: require('../img/golf_hotel/2.jpg'),
  },
  {
    text: 'Heden Golf Club',
    name: 'Booking now',
    image: require('../img/golf_hotel/3.jpg'),
  },
  {
    text: 'Heden Golf Club',
    name: 'Booking now',
    image: require('../img/golf_hotel/4.jpg'),
  },
];
export default class HotelDuGolf extends Component {
  render() {
    return (
      <Container>
        <View>
          <DeckSwiper
            ref={(c) => this._deckSwiper = c}
            dataSource={cards}
            renderEmpty={() =>
              <View style={{ alignSelf: "center" }}>
                <Text>Over</Text>
              </View>
              }
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>Abidjan, Côte d'Ivoire</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>                  
                  <Button light onPress={ ()=>{ Linking.openURL('http://irrdb-irc2018abidjan.com/#register')}}>
                  <Icon name="ios-checkmark-circle" style={{ paddingLeft:10, color: '#699658' }} size={30}/>
                  <Text>{item.name}</Text>
                  </Button>
                </CardItem>
              </Card>
            }
          />
        </View>
        <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 15, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
          <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
            <Text>Previous</Text>
          </Button>
          <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
            <Text>Next</Text>
          </Button>
        </View>
      </Container>
    );
  }
}