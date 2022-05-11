import React, { useState } from 'react';
//import TextInputPhone from '../../components/TextInputPhone';
//import { Alert, Linking } from 'react-native';
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
import { StyleSheet, Text, View } from 'react-native';

const ImageFundo = require('../../assets/fundo.jpg');

export default () => {

    return (
        <Container>
            <ContainerImage source={ImageFundo}>
                <InputArea>
                    <ViewPhone>
                        <ViewPhoneText>Digite o numero do telefone que quer falar aqui:</ViewPhoneText>                               
                    </ViewPhone>

                </InputArea>
            </ContainerImage>
        </Container>
    )
}