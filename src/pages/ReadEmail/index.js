import React, { useCallback, useLayoutEffect } from 'react';
import { View, ToastAndroid } from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';

import {
  NavigationContainer,
  Container,
  SubjectText,
  EmailHeaderContent,
  AvatarContainer,
  Avatar,
  SenderName,
  EmailInfo,
  OriginInfo,
  DispatchTime,
  RecipientInfo,
  EmailBodyContent,
  BodyText,
} from './styles';

export default function ReadEmail({ navigation, route }) {
  const { email } = route.params;
  const handleDelete = useCallback(() => {
    navigation.navigate('Primary', {
      email: email.id,
    });

    ToastAndroid.show('Email excluido com sucesso', ToastAndroid.LONG);
  }, [navigation, email]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: 'row' }}>
          <NavigationContainer onPress={handleDelete}>
            <IconAnt name="delete" size={26} />
          </NavigationContainer>
          <NavigationContainer>
            <IconCommunity name="email-outline" size={26} color="#333" />
          </NavigationContainer>
        </View>
      ),
    });
  }, [navigation, handleDelete]);

  return (
    <Container>
      <SubjectText>{email.subject}</SubjectText>

      <EmailHeaderContent>
        <AvatarContainer avatarColor={email.color}>
          <Avatar>{email.sender.charAt(0)}</Avatar>
        </AvatarContainer>
        <EmailInfo>
          <OriginInfo>
            <SenderName>{email.sender}</SenderName>
            <DispatchTime>{email.time}</DispatchTime>
          </OriginInfo>
          <RecipientInfo>to me</RecipientInfo>
        </EmailInfo>

        <NavigationContainer style={{ marginRight: 20 }}>
          <Icon
            name="reply"
            size={32}
            color="#777"
            onPress={() =>
              navigation.navigate('New', {
                replyEmail: email.senderEmail,
                subject: email.subject,
              })
            }
          />
        </NavigationContainer>
      </EmailHeaderContent>

      <EmailBodyContent>
        <BodyText>{email.message}</BodyText>
      </EmailBodyContent>
    </Container>
  );
}

ReadEmail.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    setOptions: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      email: PropTypes.shape({
        id: PropTypes.number.isRequired,
        subject: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        sender: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        senderEmail: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
