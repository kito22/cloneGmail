import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const NavigationContainer = styled(RectButton)`
  padding: ${wp(2.2)}px;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 0 ${wp(3.5)}px;
`;

export const SubjectText = styled.Text`
  font-size: ${hp(3.2)}px;
  color: #222;
`;

export const EmailHeaderContent = styled.View`
  flex-direction: row;
  margin-top: ${hp(3)}px;
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

export const EmailInfo = styled.View`
  justify-content: space-around;
  flex: 1;
`;

export const OriginInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SenderName = styled.Text`
  font-size: ${hp(2.5)}px;

  font-weight: bold;
  color: #222;
`;

export const DispatchTime = styled.Text`
  margin-left: ${wp(1.5)}px;
  color: #666;
  font-size: ${hp(2)}px;
`;

export const RecipientInfo = styled.Text`
  color: #555;
`;

export const EmailBodyContent = styled.View`
  margin-top: ${hp(2.8)}px;
`;

export const BodyText = styled.Text`
  font-size: ${wp(3.9)}px;
  line-height: ${hp(3.2)}px;
`;
