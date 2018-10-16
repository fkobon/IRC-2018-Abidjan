import React from "react";
import { Modal, View, TouchableHighlight } from "react-native";
import { Container, Header, Left, Button, Icon, Body, Title, Right, Text, H1, H2, Content, List, ListItem, Thumbnail, Subtitle, Card, CardItem } from "native-base";

export default class PartnersScreen extends React.Component {
	
	state = {
		gouvci: false,
		irrdb: false,
		modalVisible: false,
		apromac: false,
		cnra: false,
	};

	setGouvci(visible) {
		this.setState({gouvci: visible});
	}

	setIrrdb(visible) {
		this.setState({irrdb: visible});
	}

	setModalVisible(visible) {
		this.setState({modalVisible: visible});
	}
	
	setApromac(visible) {
		this.setState({apromac: visible});
	}

	setCnra(visible) {
		this.setState({cnra: visible});
	}
	
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
						<Title>Partners</Title>
						<Subtitle>IRC 2018 Abidjan</Subtitle>
					</Body>
					<Right />
				</Header>
				<Content padder>
					
					<H1>Institutionals Partners</H1>
					
					{/* Modal GOUVCI */}
					<Modal
					style={{ alignSelf: "center", height: 1000 }}
					animationType={'slide'}
					transparent={false}
					visible={this.state.gouvci}
					onRequestClose={() => { alert('Modal has been closed.'); }}>
						<Content style={{ marginTop: 22, }}>
							<Container style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 500, }}>
								<Thumbnail
								large source={{
									uri: 'http://irrdb-irc2018abidjan.com/wp-content/uploads/2018/08/armoirie.png'
								}}
								/>
								<H2>Government of Côte d'Ivoire</H2>
								<Content style = {{ marginTop: 20, width: 350 }}>
									<Text>Cocody II Plateaux</Text>
									<Text>7e tranche</Text>
									<Text>01 BP 3726 Abidjan 17</Text>
									<Text></Text>
									<Text>Phone : +225 22 52 81 81</Text>
									<Text>Fax : +225 22 52 81 87</Text>
									<Text></Text>
									<Text>Email Adrress : firca@firca.ci</Text>
									<Text>Website : www.firca.ci</Text>
								</Content>
								<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
									<Button
									onPress={() => { this.setGouvci(!this.state.gouvci); }}
									bordered dark iconLeft >
									<Icon name='ios-arrow-dropleft-circle' />
									<Text>Go back</Text>
									</Button>
								</View>
							</Container>
						</Content>
					</Modal>
					
					{/* Modal IRRDB */}
					<Modal
					style={{ alignSelf: "center", height: 1000 }}
					animationType={'slide'}
					transparent={false}
					visible={this.state.irrdb}
					onRequestClose={() => { alert('Modal has been closed.'); }}>
						<Content style={{ marginTop: 22, }}>
							<Container style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 600, }}>
								<Thumbnail
								large source={{
									uri: 'http://irrdb-irc2018abidjan.com/wp-content/uploads/2018/06/irrdb_logo.png'
								}}
								/>
								<H2 style={{ padding: 20, }}>International Rubber Research and Development Board</H2>
								<Content style = {{ marginTop: 20, width: 350 }}>
									<Text>260 Jalan Ampang,</Text>
									<Text>50450 Kuala Lumpur,</Text>
									<Text>Malaysia</Text>
									<Text>POBox 10150,50908 Kuala Lumpur</Text>
									<Text></Text>
									<Text>Phone : +6 03 42521612</Text>
									<Text>Fax : +6 03 42560487</Text>
									<Text></Text>
									<Text>Email Adrress : sec_gen@theirrdb.org</Text>
									<Text>Website : www.firca.ci</Text>
								</Content>
								<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
									<Button
									onPress={() => { this.setIrrdb(!this.state.irrdb); }}
									bordered dark iconLeft >
									<Icon name='ios-arrow-dropleft-circle' />
									<Text>Go back</Text>
									</Button>
								</View>
							</Container>
						</Content>
					</Modal>
					
					{/* Modal FIRCA */}
					<Modal
					style={{ alignSelf: "center", height: 1000 }}
					animationType={'slide'}
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={() => { alert('Modal has been closed.'); }}>
						<Content style={{ marginTop: 22, }}>
							<Container style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 600, }}>
								<Thumbnail
								large source={{
									uri: 'http://irrdb-irc2018abidjan.com/wp-content/uploads/2018/06/logo_firca-2.png'
								}}
								/>
								<H2 style={{ padding: 15, }}>Interprofessional Fund for Research and Agricultural Advice</H2>
								<Content style = {{ marginTop: 20, width: 350 }}>
									<Text>Cocody II Plateaux</Text>
									<Text>7e tranche</Text>
									<Text>01 BP 3726 Abidjan 17</Text>
									<Text></Text>
									<Text>Phone : +225 22 52 81 81</Text>
									<Text>Fax : +225 22 52 81 87</Text>
									<Text></Text>
									<Text>Email Adrress : firca@firca.ci</Text>
									<Text>Website : www.firca.ci</Text>
								</Content>
								<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
									<Button
									onPress={() => { this.setModalVisible(!this.state.modalVisible); }}
									bordered dark iconLeft >
									<Icon name='ios-arrow-dropleft-circle' />
									<Text>Go back</Text>
									</Button>
								</View>
							</Container>
						</Content>
					</Modal>
					
					{/* Modal APROMAC */}
					<Modal
					style={{ alignSelf: "center", height: 1000 }}
					animationType={'slide'}
					transparent={false}
					visible={this.state.apromac}
					onRequestClose={() => { alert('Modal has been closed.'); }}>
						<Content style={{ marginTop: 22, }}>
							<Container style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 600, }}>
								<Thumbnail
								large source={{
									uri: 'http://irrdb-irc2018abidjan.com/wp-content/uploads/2018/06/apromac.png'
								}}
								/>
								<H2 style={{ padding: 20, }}>Association of Natural Rubber Professionals of Côte d'Ivoire</H2>
								<Content style = {{ marginTop: 20, width: 350 }}>
									<Text>Cocody II Plateaux</Text>
									<Text>Vallon, Rue 115</Text>
									<Text>04 BP 2112 Abidjan 04</Text>
									<Text></Text>
									<Text>Phone : +225 22 41 46 16</Text>
									<Text>Fax : +225 22 41 91 58</Text>
									<Text></Text>
									<Text>Email Adrress : apromak@aviso.ci</Text>
									<Text>Website : www.apromac.ci</Text>
								</Content>
								<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
									<Button
									onPress={() => { this.setApromac(!this.state.apromac); }}
									bordered dark iconLeft >
									<Icon name='ios-arrow-dropleft-circle' />
									<Text>Go back</Text>
									</Button>
								</View>
							</Container>
						</Content>
					</Modal>
					
					{/* Modal CNRA */}
					<Modal
					style={{ alignSelf: "center", height: 1000 }}
					animationType={'slide'}
					transparent={false}
					visible={this.state.cnra}
					onRequestClose={() => { alert('Modal has been closed.'); }}>
						<Content style={{ marginTop: 22, }}>
							<Container style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 600, }}>
								<Thumbnail
								large source={{
									uri: 'http://irrdb-irc2018abidjan.com/wp-content/uploads/2018/06/cnra_2-150x150.png'
								}}
								/>
								<H2 style={{ padding: 20, }}>National Center for Agronomic Research</H2>
								<Content style = {{ marginTop: 20, width: 350 }}>
									<Text>Adiopodoumé, Km 17</Text>
									<Text>Route de Dabou</Text>
									<Text>01 BP 1740 Abidjan 17</Text>
									<Text></Text>
									<Text>Phone : +225 22 48 96 24</Text>
									<Text>Fax : +225 22 48 96 11</Text>
									<Text></Text>
									<Text>Email Adrress : info@cnra.ci</Text>
									<Text>Website : www.cnra.ci</Text>
								</Content>
								<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
									<Button
									onPress={() => { this.setCnra(!this.state.cnra); }}
									bordered dark iconLeft >
									<Icon name='ios-arrow-dropleft-circle' />
									<Text>Go back</Text>
									</Button>
								</View>
							</Container>
						</Content>
					</Modal>

					<List>
						<ListItem thumbnail>
							<Left>
								<Thumbnail square source={{ uri: 'http://irrdb-irc2018abidjan.com/wp-content/uploads/2018/08/armoirie.png' }} />
							</Left>
							<Body>
								<Text>Government of Côte d'Ivoire</Text>
							</Body>
						</ListItem>

						<ListItem thumbnail>
							<Left>
								<Thumbnail square source={{ uri: 'http://irrdb-irc2018abidjan.com/wp-content/uploads/2018/06/irrdb_logo.png' }} />
							</Left>
							<Body>
								<Text>IRRDB</Text>
								<Text note numberOfLines={4}>International Rubber Research and Development Board</Text>
							</Body>
							<Right>
								<Button transparent>
									<Text onPress={() => { this.setIrrdb(true); }}>Detail</Text>
								</Button>
							</Right>
						</ListItem>

						<ListItem thumbnail>
							<Left>
								<Thumbnail square source={{ uri: 'http://irrdb-irc2018abidjan.com/wp-content/uploads/2018/06/logo_firca-2.png' }} />
							</Left>
							<Body>
								<Text>FIRCA</Text>
								<Text note numberOfLines={3}>Interprofessional Fund for Research and Agricultural Advice</Text>
							</Body>
							<Right>
								<Button transparent>
									<Text onPress={() => { this.setModalVisible(true); }}>Detail</Text>
								</Button>
							</Right>
						</ListItem>

						<ListItem thumbnail>
							<Left>
								<Thumbnail square source={{ uri: 'http://irrdb-irc2018abidjan.com/wp-content/uploads/2018/06/apromac.png' }} />
							</Left>
							<Body>
								<Text>APROMAC</Text>
								<Text note numberOfLines={4}>Association of Natural Rubber Professionals of Côte d'Ivoire</Text>
							</Body>
							<Right>
								<Button transparent>
								<Text onPress={() => { this.setApromac(true); }}>Detail</Text>
								</Button>
							</Right>
						</ListItem>

						<ListItem thumbnail>
							<Left>
								<Thumbnail square source={{ uri: 'http://irrdb-irc2018abidjan.com/wp-content/uploads/2018/06/cnra_2-150x150.png' }} />
							</Left>
							<Body>
								<Text>CNRA</Text>
								<Text note numberOfLines={3}>National Center for Agronomic Research</Text>
							</Body>
							<Right>
								<Button transparent>
									<Text onPress={() => { this.setCnra(true); }}>Detail</Text>
								</Button>
							</Right>
						</ListItem>
					</List>

				</Content>
			</Container>
		);
	}
}
