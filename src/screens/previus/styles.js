//import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1; 
    justify-content: center;
    align-items: center;
`;

export const ContainerImage = styled.ImageBackground`
    flex: 1;
    width: 100%;
`;

export const ViewList = styled.View`
    background-color: #ffffff;
    margin-top: 3%;
    margin-left: 3%;
    margin-right: 3%;
    align-items: center;
    height: 57px;
    border-radius: 17px;
    flex-direction: row;
`;

export const ViewListaNumber = styled.View`
    width: 100%;
    margin-left: 3%;
`;

export const TextPhone = styled.Text`
    
    font-size: 24px;
    color: #0CB51F;
`;

export const ViewListPhone = styled.View`
    width: 60px;
    height: 60px;
    justify-content: center;
    align-items: center;
`;

export const ButtonTalk = styled.TouchableOpacity`
    
`;



export const ViewePhoneSpaceNumber = styled.TextInput``;


export const ButtonText = styled.Text`
    font-size: 24px;
    margin-left: 10px;
    color: #FFF;
`;