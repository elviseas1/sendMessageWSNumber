import React, { Component } from 'react';
import { Alert, Linking, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {
    Container,
    ContainerImage,
    ViewList,
    TextPhone,
    ButtonTalk,
    ViewListPhone,
    ViewListaNumber,
    ButtonText
} from './styles';

const ImageFundo = require('../../assets/fundo.jpg');
import AsyncStorage from '@react-native-async-storage/async-storage';
 
export default class Previus extends Component {

    constructor(props){
        super(props);
        this.state= {
            data: [],
        }
    }

    componentDidMount(){
        //console.log('Olá Mundo!!!')
        this.getPhones()
    }

    getPhones = async () => {
        
        AsyncStorage.getAllKeys((err, keys) => {
    
            this.setState({
                data: keys || ['Elvis']
            })

        })
    
    }

    removePhone = async (key) => {
        try {
            await AsyncStorage.removeItem(key);
            //console.log('Valor removido: ' + key)
            this.getPhones()
            return true;
        }
        catch(exception) {
            return false;
        }

        
    }

    openWthasStore(sPhone) {
        //console.log('Teste: ' + sPhone + ' - ' + sPhone.length)
        if (sPhone != '' && (sPhone.length == 13 || sPhone.length == 14)){
            
            let vPhone = sPhone.replace('(', '').replace(')', '').replace('-', '').replace(' ', '');
    
            let url = 'https://api.whatsapp.com/send?phone=55'+vPhone+'&text='
    
            //Alert.alert(url);
    
            Linking.openURL(url);
        }
        else {
            Alert.alert("O contato em branco ou menor que o padrão do país!!!");
        }
    }
    render(){
        return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <Container>
                <ContainerImage source={ImageFundo}>
                <FlatList  
                    data={this.state.data}
                    renderItem={ ({item}) => (
                        <ViewList>
                            <ViewListaNumber>
                                <TextPhone>+55 {item}</TextPhone>
                            </ViewListaNumber>
                            <ViewListPhone>
                                <ButtonTalk onPress={ () => {this.openWthasStore(item)}}>
                                    <ButtonText>OK</ButtonText>
                                </ButtonTalk>
                            </ViewListPhone>
                        </ViewList>
                    )}
                    
                    />

                </ContainerImage>
            </Container>
        </TouchableWithoutFeedback>
    )
}}