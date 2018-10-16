import React from "react";
import { Modal, View, TouchableHighlight } from "react-native";
import { Left, Button, Icon, Body, Title, Right, Subtitle, Container, Header, Content, List, ListItem, Text, Separator } from 'native-base';

export default class CommitteesScreen extends React.Component {
	
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
						<Title>Committees</Title>
						<Subtitle>IRC 2018 Abidjan</Subtitle>
					</Body>
					<Right />
				</Header>
				<Content>

                    <List>
                        <ListItem itemDivider>
                            <Text>Organizing Committees</Text>
                        </ListItem>                    
                        <ListItem>
                            <Body>
                                <Text>Mr. CAMARA Issouf</Text>
                                <Text note numberOfLines={1}>Safety and Health.</Text>
                                <Text note numberOfLines={1}>(+225) 07 84 87 83</Text>
                                <Text note numberOfLines={1}>camaraissouf@yahoo.fr</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text>Mr. KOUAO Francis</Text>
                                <Text note numberOfLines={1}>Welcome and Accommodation.</Text>
                                <Text note numberOfLines={1}>(+225) 07 29 68 83</Text>
                                <Text note numberOfLines={1}>fkouao@fdh.ci</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text>Mr. TOGUILA Brice</Text>
                                <Text note numberOfLines={1}>Transport and Logistics.</Text>
                                <Text note numberOfLines={1}>(+225) 03 38 14 41</Text>
                                <Text note numberOfLines={1}>toguilabr@firca.ci</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text>Mr. YAO BOUE Justin</Text>
                                <Text note numberOfLines={1}>Catering.</Text>
                                <Text note numberOfLines={1}>(+225) 07 83 13 69</Text>
                                <Text note numberOfLines={1}>yaoboue@yahoo.fr</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text>Mr. ZORO BI Michael</Text>
                                <Text note numberOfLines={1}>Communication.</Text>
                                <Text note numberOfLines={1}>(+225) 07 30 20 61</Text>
                                <Text note numberOfLines={1}>zorobi@firca.ci</Text>
                            </Body>
                        </ListItem>

                        <ListItem itemDivider>
                            <Text>Scientific Committees</Text>
                        </ListItem>  
                        <ListItem>
                            <Body>
                                <Text>Dr ADIKO Amoncho</Text>
                                <Text note numberOfLines={1}>President.</Text>
                                <Text note numberOfLines={1}>(+225) 01 01 10 84</Text>
                                <Text note numberOfLines={1}>amoncho.adiko@cnra.ci</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text>Mr N'DIAYE Oumar</Text>
                                <Text note numberOfLines={1}>Vice-President.</Text>
                                <Text note numberOfLines={1}>(+225) 05 53 14 15</Text>
                                <Text note numberOfLines={1}>ndiayeo@firca.ci</Text>
                            </Body>
                        </ListItem>
                    </List>

				</Content>
			</Container>
		);
	}
}
