import React, { Component } from 'react'
import { Text, View, StyleSheet, Picker } from 'react-native'
import { Container, Content, Body, Card, CardItem, Button, Form, Item, Input } from 'native-base'
import { AntDesign,Feather } from '@expo/vector-icons';
import Modal from 'react-native-modal';
//fierbase imports
import firebase from '../Database/firebase';

class Signup extends Component {

    constructor(props) {
        super(props)
        this.db = firebase.firestore().collection('signup');
        this.state = {
            personalVisiable: true,
            companyVisiable: false,
            isLoading: false,
            alert: false,
            //step-1
            fullName: '',
            gender: '',
            country: '',
            state: '',
            mobile: '',
            //step-2 
            comName: '',
            email: '',
            jobTitle: '',
            exp: '',

        }
    }

    //PersonalValidation ***

    PersonalValidation = () => {
        const showalert = this.setState({
            alert: true
        })
        if (this.state.fullName == "") {
            showalert

        } else if (this.state.gender == "") {
            showalert
        } else if (this.state.country == "") {
            showalert
        } else if (this.state.state == "") {
            showalert
        } else if (this.state.mobile == "") {
            showalert
        } else {
            this.setState({
                personalVisiable: false,
                companyVisiable: true,
                alert:false

            })

        }
    }

    //CompanyValidation ***

    CompanyValidation = () => {
        this.setState({
            alert:false
        })
        const showalert = this.setState({
            alert: true
        })
        if (this.state.comName == "") {
            showalert
        } else if (this.state.email == "") {
            showalert
        } else if (this.state.jobTitle == "") {
            showalert
        } else if (this.state.exp == "") {
            showalert
        } else {
            this.setState({
                alert:false
            })
            //post function called *****
            this.Post();

        }
    }




    //formPost funtion ***** 

    Post = () => {
        this.setState({
            isLoading: true
        })
        console.log('post funtion called !');
        //timestamp *****
        const timestamp = new Date().getTime();;

        this.db.add({
            timestamp: timestamp,
            //step-1 details  *****
            fullName: this.state.fullName,
            gender: this.state.gender,
            country: this.state.country,
            state: this.state.state,
            mobile: this.state.mobile,
            //step-2 details ****
            comName: this.state.comName,
            email: this.state.email,
            jobTitle: this.state.jobTitle,
            exp: this.state.exp
        }).then(() => {
            console.log('successfully Posted !!!');
            this.setState({
                //step-1  ****
                fullName: '',
                gender: '',
                country: '',
                state: '',
                mobile: '',
                //step-2 
                comName: '',
                email: '',
                jobTitle: '',
                exp: '',
                isLoading: false
            })
            this.props.navigation.navigate('success');
        }).catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                {/* content */}
                <Content padder style={{ backgroundColor: "#212245" }}>


                   {/* personalform */}
                    {this.state.personalVisiable &&
                        <Modal isVisible={this.state.personalVisiable} animationIn='pulse' animationOut='slideOutUp'>
                            <View style={{ alignItems: 'center', marginBottom: 10 }}>
                                <Button transparent onPress={() => this.props.navigation.navigate('initial')}>
                                    <AntDesign name="closecircle" size={45} color="white" />
                                </Button>
                            </View>
                            <Card style={{ borderRadius: 10, marginTop: 10, paddingBottom: 20, padding: 20 }}>
                                <View style={{ marginTop: 10, alignItems: 'center' }}>
                                    <Text style={{ fontSize: 15, textAlign: 'center', paddingBottom: 5, color: '#ED5901' }}>Step 1</Text>
                                    <Text style={{ fontSize: 22, textAlign: 'center', paddingTop: 0, color: '#212245' }}>Personal Details</Text>
                                </View>
                                <View>
                                    <Form style={{ marginTop: 20 }}>
                                        <Item style={style.inpad}>
                                            <Input placeholder='Full Name' onChangeText={(Text) => this.setState({ fullName: Text })} />
                                        </Item>
                                        <Item style={style.inpad} >
                                            <Text style={{ color: 'gray', fontSize: 17, marginLeft: 5 }}>Gender : </Text>
                                            <Picker
                                                selectedValue={this.state.gender}
                                                style={{ height: 50, width: 150 }}
                                                onValueChange={(Text) => this.setState({ gender: Text })}
                                            >
                                                <Picker.Item label="Select" />
                                                <Picker.Item label="Male" value="Male" />
                                                <Picker.Item label="Female" value="Female" />
                                                <Picker.Item label="Others" value="Others" />
                                            </Picker>
                                        </Item>
                                        <Item style={style.inpad}>
                                            <Input placeholder='Country' onChangeText={(Text) => this.setState({ country: Text })} />
                                        </Item>
                                        <Item style={style.inpad}>
                                            <Input placeholder='State' onChangeText={(Text) => this.setState({ state: Text })} />
                                        </Item>
                                        <Item style={style.inpad}>
                                            <Input placeholder='Mobile' onChangeText={(Text) => this.setState({ mobile: Text })} />
                                        </Item>
                                        <Button onPress={() => this.PersonalValidation()} rounded block style={style.btn}>
                                            <Text style={{ color: 'white' }}>Next</Text>
                                        </Button>
                                    </Form>
                                </View>
                            </Card>
                        </Modal>

                    }

                    {/* companyForm */}
                    {this.state.companyVisiable &&
                        <Modal isVisible={this.state.companyVisiable} animationIn='pulse' animationOut='slideOutUp'>
                            <View style={{ alignItems: 'center', marginBottom: 10 }}>
                                <Button transparent onPress={() => this.props.navigation.navigate('initial')}>
                                    <AntDesign name="closecircle" size={45} color="white" />
                                </Button>
                            </View>
                            <Card style={{ padding: 20, borderRadius: 10 }}>
                                <View style={{ marginBottom: 20 }}>
                                    <Text style={{ fontSize: 15, textAlign: 'center', paddingBottom: 5, color: '#ED5901' }}>Step 2</Text>
                                    <Text style={{ textAlign: 'center', color: "#212245", fontSize: 22 }}>Company Details</Text>
                                </View>
                                <Form>
                                    <Item style={{ marginBottom: 7 }}>
                                        <Input placeholder='Company Name' onChangeText={(Text) => this.setState({ comName: Text })} />
                                    </Item>
                                    <Item>
                                        <Input placeholder='Email ID' onChangeText={(Text) => this.setState({ email: Text })} />
                                    </Item>
                                    <Item style={{ marginBottom: 7 }}>
                                        <Input placeholder='Job Title' onChangeText={(Text) => this.setState({ jobTitle: Text })} />
                                    </Item>
                                    <Item>
                                        <Input placeholder='Experience' onChangeText={(Text) => this.setState({ exp: Text })} />
                                    </Item>

                                    <Button rounded block style={{ backgroundColor: '#212245', marginTop: 20 }}>
                                        <Text style={{ color: 'white' }}>Upload Company Logo</Text>
                                    </Button>
                                    <Button rounded onPress={() => this.CompanyValidation()} block style={{ backgroundColor: '#ED5901', marginTop: 20 }}>
                                        <Text style={{ color: 'white' }}>Submit</Text>
                                    </Button>
                                </Form>
                            </Card>
                        </Modal>

                    }
                    
                    {/* ValidationAlert */}
                    {
                        this.state.alert &&
                        <Modal isVisible={this.state.alert} animationIn='pulse' animationOut='slideOutUp'>
                            <Card style={{borderRadius:10}}>
                                <CardItem style={{borderRadius:10}}>
                                    <Body style={{ alignItems: 'center', paddingBottom: 20 }}>
                                    <Feather name="alert-circle" size={35} color="#ff9400" />
                                        <Text style={{ paddingTop: 10 }}>Please fill everything !!!</Text>
                                        <View style={{ marginTop: 10 }}>
                                            <Button onPress={() => this.setState({ alert: false })} rounded bordered style={{ borderColor: '#ff9400', width: 70, height: 30 }} block>
                                                <Text style={{ color: '#ff9400', textAlign: 'center' }}>OK</Text>
                                            </Button>
                                        </View>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Modal>
                    }
                </Content>
            </Container>
        )
    }
}

export default Signup


//styles

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
