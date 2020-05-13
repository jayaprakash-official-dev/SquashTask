import React, { Component } from 'react'
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native'
import { Content, Container, Header, Left, Body, Right, Button, Card, CardItem } from 'native-base'
import { Entypo, AntDesign } from '@expo/vector-icons';
//fierbase imports
import firebase from '../Database/firebase';

class Success extends Component {
    constructor(props) {
        super(props)
        this.db = firebase.firestore().collection('signup').orderBy('timestamp', 'desc')
        this.state = {
            signupData: null,
            isLoading: false
        }
    }

    componentDidMount() {
        this._Get();
    }

    _Get = () => {
        this.setState({
            isLoading: true
        })
        const myArray = [] //storing fetch data in array

        this.db.get()
            .then((snapshot) => {
                snapshot.forEach((result) => {

                    //destructureing
                    const { conName, country, email, exp, fullName, gender, jobTitle, state, mobile } = result.data();
                    const docId = result.id;

                    myArray.push({
                        conName,
                        country,
                        email,
                        exp,
                        fullName,
                        gender,
                        jobTitle,
                        state,
                        mobile,
                        docId,

                    })
                })
               console.log('data fetched successfully !')
            }).then(() => [
                this.setState({
                    signupData: myArray,
                    isLoading: false
                })
            ])
    }

    render() {

        return (
            <Container>
                <Header style={{ backgroundColor: "#212245" }}>
                    <Left>
                        <Entypo name="list" size={24} color="white" />
                    </Left>
                    <Body>
                        <Text style={{ color: "white", fontSize: 18 }}>Signup list</Text>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate('initial')}>
                            <AntDesign name="logout" size={20} color="white" />
                        </Button>
                    </Right>
                </Header>
                <Content padder >
                    {
                        this.state.isLoading &&
                        <View style={styles.activity}>
                            <ActivityIndicator color='#56c222' size='large' />
                        </View>
                    }

                    {/* dataLooped */}
                    {
                        this.state.signupData && this.state.signupData.map((item, index) => {
                            return (
                                <Card key={index}>
                                    <CardItem header style={{ alignItems: 'center' }}>
                                        <Body style={{ alignItems: 'center', }}>
                                            <AntDesign name="checkcircleo" size={35} color="green" />
                                        </Body>
                                    </CardItem>
                                    <CardItem style={{ alignItems: 'center' }}>
                                        <Body style={{alignItems:'center'}}>
                                            <Text style={{ textAlign: 'center' }}>Name : {item.fullName}</Text>
                                            <Text>Country : {item.country}</Text>
                                            <Text>Mobile : {item.mobile}</Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                            );
                        })
                    }
                </Content>
            </Container>
        )
    }
}

export default Success

const styles = StyleSheet.create({

    activity: {
        flex: 1,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


