import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Button, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
const cards = [
  {
    text: 'Sofitel Hotel Ivoire',
    name: 'Room three place',
    image: require('../img/h-feature-1.jpg'),
  },
  {
    text: 'Sofitel Hotel Ivoire',
    name: 'Room two place',
    image: require('../img/hotel_ivoire.jpg'),
  },
];
export default class HotelIvoire extends Component {
  render() {
    return (
      <Container>
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>Abidjan</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="ios-contract" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
                <Button block success style={{
                  marginTop: 14
                }}>
                  <Text>Book</Text>
                </Button>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}