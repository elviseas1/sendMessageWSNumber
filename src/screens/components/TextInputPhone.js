import React from 'react';
import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

export const ViewePhoneSpaceView = styled.SafeAreaView``;

export const ViewePhoneSpaceA = styled.View`
    margin-top: 15px;
    margin-left: 10%;
    margin-right: 10%;
    background-color: #FFFFFF; 
    border-radius: 17px; 
    width: 342px;
    height: 79px;
    flex-direction: row;
    border-width: 3px;
    border-color: #707070;
`;

export const ViewePhoneSpaceB = styled.View`
    margin-top: 15px;
    margin-left: 10%;
    margin-right: 10%;
    background-color: #FFFFFF; 
    border-radius: 17px; 
    width: 342px;
    height: 152px;
    flex-direction: row;
    border-width: 3px;
    border-color: #707070;
`;

export const ViewePhoneSpacePais = styled.Text`
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 24px;
    margin-left: 5%;
`;

export const ViewPhoneNumber = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ViewPhoneDesc = styled.View`
    flex: 1;
    padding-left: 10px;
    margin-top: 15px;
`;
   
export const ViewPhoneText = styled.TextInput``;

export default ({typeText,value, onChangeText}) => {

    //const [internacional, setInternacional] = useState('')


    return (
        <ViewePhoneSpaceView>
        { typeText === 1 ? 
            <ViewePhoneSpaceA >
                <ViewePhoneSpacePais>+55</ViewePhoneSpacePais>
                <ViewPhoneNumber>
                    <TextInputMask
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99)',
                        }}
                        keyboardType= 'number-pad'
                        placeholder= '(00) 00000-0000'
                        value={value}
                        //onChangeText={t=>setInternacional(t)}
                        onChangeText={onChangeText}
                        style={{fontSize: 24}}/>
                </ViewPhoneNumber>
            </ViewePhoneSpaceA>
            :
            <ViewePhoneSpaceB>
                <ViewPhoneDesc>
                    <ViewPhoneText 
                        editable
                        maxLength={280}
                        multiline
                        numberOfLines={4}
                        value={value}
                        onChangeText={onChangeText}
                        placeholder= 'Digite o texto…'/>
                </ViewPhoneDesc>
            </ViewePhoneSpaceB>
            
        }
        </ViewePhoneSpaceView>
    )
}


                        