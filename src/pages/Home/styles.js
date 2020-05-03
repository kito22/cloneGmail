import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  padding: 0 ${wp(3.5)}px;
  background: #fff;
`;

export const HeaderActions = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-width: ${wp(0.3)}px;
  border-color: #ddd;
  margin: ${hp(1.5)}px 0;
  border-radius: ${wp(1.5)}px;
  padding: ${hp(0.7)}px ${wp(2.5)}px;
`;

export const Search = styled.TextInput`
  font-size: ${hp(2.5)}px;
  margin-left: ${wp(5)}px;
  flex: 1;
`;

export const UserAvatar = styled.Image`
  width: ${wp(9)}px;
  height: ${wp(9)}px;
  border-radius: ${wp(9)}px;
  margin-right: ${wp(1)}px;
`;

export const SectionName = styled.Text`
  font-size: ${hp(2.2)}px;
  color: #555;
  margin-bottom: ${hp(0.7)}px;
  font-family: 'Roboto';
`;

export const EmailList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const EmailItem = styled(RectButton)`
  display: flex;
  flex-direction: row;
  padding: ${hp(1.5)}px 0;
  margin-bottom: ${hp(0.7)}px;
`;

export const AvatarContainer = styled.View`
  width: ${wp(9.5)}px;
  height: ${wp(9.5)}px;
  border-radius: ${wp(9.5)}px;
  margin-right: ${wp(3.5)}px;
  background: ${props => props.avatarColor};
  align-self: flex-start;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Text`
  color: #fff;
  font-size: ${hp(4)}px;
`;

export const MailContent = styled.View`
  flex: 1;
  margin-right: ${wp(1)}px;
`;

export const Name = styled.Text`
  font-size: ${hp(2.2)}px;
  font-weight: ${props => (props.read ? '500' : 'bold')};
`;

export const Subject = styled.Text`
  font-size: ${hp(2.2)}px;
  font-weight: ${props => (props.read ? '500' : 'bold')};
`;

export const MailMessage = styled.Text`
  font-size: ${hp(2.1)}px;
`;

export const InfoContainer = styled.View``;

export const Time = styled.Text`
  font-weight: ${props => (props.read ? '500' : 'bold')};
`;

export const NewEmailButton = styled(RectButton)`
  position: absolute;
  bottom: ${hp(3)}px;
  right: ${wp(4)}px;
  z-index: 5;
  elevation: 10;
  border-radius: ${hp(10)}px;
  background: #fff;
`;

export const NewEmail = styled.Image`
  width: ${hp(9)}px;
  height: ${hp(9)}px;
`;
