import React, {Component} from 'react';
import { Container, Header, Footer, Content, Left, Button, Icon, Body, Right, Title, FooterTab, Text, Card, CardItem, Thumbnail } from 'native-base';

export default class Main extends Component{
    render(){
        return(
            // flex:1이 자동 적용된 View
            <Container>
                {/* 크게 3개 영역으로 화면 구성 */}
                <Header>
                    <Left>
                        <Button>
                            <Icon name="menu"></Icon>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Native Base Library</Title>
                    </Body>
                    <Right>

                    </Right>
                </Header>
                <Content style={{padding:16}}>
                    <Button warning><Text>Button</Text></Button>
                    <Button danger bordered><Text>Button</Text></Button>
                    <Button success rounded><Text>Button</Text></Button>
                    <Button block info><Text>Button</Text></Button>
                    <Button>
                        <Icon name="home"></Icon>
                        <Text>Home</Text>
                    </Button>

                    <Card>
                        <CardItem>
                            <Text>Native Base</Text>
                        </CardItem>
                        <CardItem button onPress={()=>{ alert('clicked')}}>
                            <Body>
                                <Text>click on any Carditem</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                        <Thumbnail source='./ben3.jpg'></Thumbnail>
                            <Text style={{marginLeft:8}}>Native Base</Text>
                        </CardItem>
                        <CardItem button onPress={()=>{ alert('clicked')}}>
                            <Body>
                                <Text>click on any Carditem</Text>
                            </Body>
                        </CardItem>
                    </Card>

                </Content>
                <Footer>
                    {/* Bottom 탭 */}
                    <FooterTab>
                        <Button>
                            <Text>Tab1</Text>
                        </Button>
                    </FooterTab>
                    <FooterTab>
                        <Button>
                            <Text>Tab2</Text>
                        </Button>
                    </FooterTab>
                    <FooterTab>
                        <Button>
                            <Text>Tab3</Text>
                        </Button>
                    </FooterTab>

                </Footer>
            </Container>
        );
    }
}