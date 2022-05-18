import React, { useState } from 'react';
import TextInputPhone from '../components/TextInputPhone';
import { Alert, Linkin, TouchableWithoutFeedback, Keyboard } from 'react-native';
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

const BatePapoIcon = require('../../assets/bate-papo.svg');

const ImageFundo = require('../../assets/fundo.jpg');

export default () => {

    const [phone, setPhone] = useState('')
    const [descript, setDescrip] = useState("")


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

                </InputArea>
            </ContainerImage>
        </Container>
        </TouchableWithoutFeedback>
    )
}