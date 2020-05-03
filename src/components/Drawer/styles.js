import styled from 'styled-components/native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const HeaderTitle = styled.Text`
  font-size: ${hp(3.2)}px;
  margin-bottom: ${hp(3)}px;
  margin-top: ${hp(1.5)}px;
  padding-left: ${wp(3)}px;
  font-family: 'Roboto';
  color: #d93025;
`;

export const LabelSection = styled.Text`
  margin-top: ${hp(1.5)}px;
  padding-left: ${wp(3)}px;
  font-size: ${hp(2)}px;
  color: #555;
  margin: ${hp(1.3)}px 0;
  font-family: 'Roboto';
`;

export const Divider = styled.View`
  background: #555;
  width: 100%;
  height: ${hp(0.1)}px;
  margin: ${hp(1)}px 0;
`;
