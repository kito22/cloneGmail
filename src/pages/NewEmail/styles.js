import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const NavigationContainer = styled(RectButton)`
  padding: 0 ${wp(3.5)}px;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 0 ${wp(3.5)}px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  margin-top: ${hp(1.5)}px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  align-items: center;

  display: ${props => (props.show ? 'flex' : 'none')};
`;

export const PrefixInput = styled.Text`
  font-size: ${hp(2.5)}px;
  margin-right: ${wp(2.5)}px;
  width: ${wp(11)}px;
  font-family: 'Roboto';
  color: #777;
`;

export const InfoInput = styled.TextInput`
  font-size: ${hp(2.35)}px;
  flex: 1;
  font-family: 'Roboto';
  color: #333;
`;

export const MessageInput = styled.TextInput`
  font-size: ${hp(2.6)}px;
  font-family: 'Roboto';
  color: #333;
`;
