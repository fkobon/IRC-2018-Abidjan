import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Icon, Body, Right, Button } from 'native-base';
import { WebBrowser } from 'expo';

export default class SessionOne extends Component {

  state = {
    resultOneA: null,
    resultOneB: null,
  };

  render() {
	return (
	  <Container>
		<Content>
			<List>
				<ListItem itemDivider>
					<Text>Sessions 1A : Agronomy & Good Practices</Text>
				</ListItem>
				<ListItem>
				<Body>
					<Text>Chairman: Dr. Eric GOHET</Text>
					<Text note numberOfLines={2}>CIRAD France</Text>
				</Body>
				<Right>
					<Button transparent onPress={this._handlePressButtonSessionAAsync}>
						<Icon type="FontAwesome" name="download" />
					</Button>
				</Right>
				</ListItem>

				<ListItem itemDivider>
					<Text>Sessions 1B : Agronomy & Good Practices</Text>
				</ListItem>  
				<ListItem>
				<Body>
					<Text>Chairman: Mak SOPHEAVEASNA</Text>
					<Text note numberOfLines={2}>RRI Coambodia</Text>
				</Body>
				<Right>
					<Button transparent onPress={this._handlePressButtonSessionBAsync}>
						<Icon type="FontAwesome" name="download" />
					</Button>
				</Right>
				</ListItem>
			</List>
		</Content>
	  </Container>
	);
	}
	
  _handlePressButtonSessionAAsync = async () => {
    let resultOneA = await WebBrowser.openBrowserAsync('https://fkobon.ci/irrdb_assets/files/ABSTRACTS%20AGRO%20GOOD%20PRACTICES%201A.pdf');
    this.setState({ resultOneA });
  };

  _handlePressButtonSessionBAsync = async () => {
    let resultOneB = await WebBrowser.openBrowserAsync('https://fkobon.ci/irrdb_assets/files/ABSTRACTS%20AGRO%20GOOD%20PRACTICES%201B.pdf');
    this.setState({ resultOneB });
  };

}