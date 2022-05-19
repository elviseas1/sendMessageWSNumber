import React, { useState } from 'react';
import TextInputPhone from '../components/TextInputPhone';
import { Alert, Linking, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {
    Container,
    InputArea,
    ViewPhone,
    ViewPhoneText,
    ContainerImage,
    ButtonView,
    ButtonOpenWhats,
    ButtonText,
    ButtonOther,
} from './styles';

const ImageFundo = require('../../assets/fundo.jpg');
const CompartilharIcon = require('../../assets/compartilhar.svg');

import AsyncStorage from '@react-native-async-storage/async-storage';

export default () => {

    const [phone, setPhone] = useState('')
    const [descript, setDescrip] = useState("")

    const savePhone = async () => {
        console.log('To aqui 1');
        try {
           
          const jsonPhone = JSON.stringify(phone)
          await AsyncStorage.setItem(phone, jsonPhone)
          Alert.alert("Salvo:" + phone)
          console.log('To aqui 3');
        } catch (e) {
            console.log(e);
            console.log('To aqui 4');
        }
      }

    const myCustomShare = async() => {
        if(descript != ''){
            const shareOptions = {
                title: 'Contato: ',
                recipient: phone,
                message: descript,
            }

            try {
                const ShareResponse = await Share.open(shareOptions);
            } catch(error) {
            //console.log('Error => ', error)
            }
        }else{
            Alert.alert("O campo texto está em branco!!!");
        }
    };

    const onOpenWhats = () => {
        
        if (phone != '' && (phone.length == 13 || phone.length == 14)){
            
            let vPhone = phone.replace('(', '').replace(')', '').replace('-', '').replace(' ', '');

            //let url = 'https://api.whatsapp.com/send?phone=55'+vPhone+'&text='+ encodeURIComponent(descript)

            //Alert.alert("Abrindo Whats!!! ");

            //Linking.openURL(url);

            savePhone()
        }
        else {
            Alert.alert("O campo contato está em branco ou menor que o padrão do país!!!");
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Container>
            <ContainerImage source={ImageFundo}>
            
                <InputArea>
                    <ViewPhone>
                        <ViewPhoneText>Digite o numero do telefone que quer falar aqui:</ViewPhoneText>                               
                    </ViewPhone>
                    
                    <TextInputPhone 
                    typeText={1} 
                    value = {phone}
                    onChangeText={t=>setPhone(t)}/>

                    <ViewPhone>
                        <ViewPhoneText>Digite a mensagem:</ViewPhoneText>                               
                    </ViewPhone>

                    <TextInputPhone 
                    typeText={2}
                    value={descript}
                    onChangeText={t=>setDescrip(t)}
                    />
                    <ButtonView>
                        <ButtonOpenWhats onPress={onOpenWhats} source={CompartilharIcon}>
                            <ButtonText>Conversar</ButtonText>
                        </ButtonOpenWhats>

                        <ButtonOther onPress={myCustomShare}>
                            <ButtonText>Ok</ButtonText>
                        </ButtonOther>
                    </ButtonView>
                </InputArea>
            </ContainerImage>
        </Container>
        </TouchableWithoutFeedback>
    )
}