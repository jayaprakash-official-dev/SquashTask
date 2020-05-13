import React, { Component } from 'react'
import { Text, View, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Container, Header, Left, Body, Right, Content, Form, Item, Input, Button, Card, Grid, Col } from 'native-base'
import { MaterialIcons, Entypo, AntDesign } from '@expo/vector-icons';

class Signin extends Component {
  
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        return (
            <Container>
              {/* Header */}

                <Header style={style.header}>
                    <Left>
                        <MaterialIcons name="account-circle" size={25} color="white" />
                    </Left>
                    <Body>
                        <Text style={style.whiteTxt}>Signin</Text>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate('success')}>
                            <AntDesign name="eyeo" size={24} color="white" />
                        </Button>
                    </Right>
                </Header>

               {/* Content */}
                <Content padder style={{ backgroundColor: "#212245" }}>

                    <KeyboardAvoidingView behavior='position'>

                        <Card style={{ borderRadius: 10, marginTop: 30, paddingBottom: 50, padding: 20 }}>
                            <View style={{ marginTop: 30, alignItems: 'center' }}>
                                <Entypo name="leaf" size={50} color="#ED5901" />
                                {/* <Text style={{ fontSize: 18, textAlign: 'center', color: '#ED5901' }} >Hey Welcome !</Text> */}
                                <Text style={{ fontSize: 22, textAlign: 'center', paddingTop: 20 }}>Squash Task</Text>
                            </View>
                            <View>
                                <Form style={{ marginTop: 30 }}>
                                    <Item style={style.inpad}>
                                        <Input placeholder='username' />
                                    </Item>
                                    <Item style={style.inpad}>
                                        <Input placeholder='password' secureTextEntry={true} />
                                    </Item>
                                    <Button rounded block style={style.btn}>
                                        <Text style={{ color: 'white' }}> Sign in</Text>
                                    </Button>
                                    <Grid>
                                        <Col style={{ padding: 2 }}>
                                            <Button transparent onPress={() => this.props.navigation.navigate('signup')} rounded block style={{ marginTop: 10 }}>
                                                <Text style={{ color: 'black' }}>Are you new user ? <Text style={{ color: "#ED5901" }}> Sign up</Text></Text>

                                            </Button>
                                        </Col>
                                    </Grid>
                                </Form>
                            </View>
                        </Card>
                    </KeyboardAvoidingView>
                </Content>


            </Container>
        )
    }
}

export default Signin

const style = StyleSheet.create({
    header: {
        backgroundColor: "#212245"
    },
    whiteTxt: {
        color: 'white',
        fontSize: 20
    },
    btn: {
        backgroundColor: '#ED5901',
        marginTop: 20
    },
    inpad: {
        marginBottom: 20
    }
})