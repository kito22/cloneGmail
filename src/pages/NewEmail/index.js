import React, { useState, useCallback, useEffect } from 'react';
import { ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import {
  NavigationContainer,
  Container,
  InfoInput,
  PrefixInput,
  MessageInput,
  InputContainer,
} from './styles';

export default function NewEmail({ navigation, route }) {
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [replyEmail, setReplyEmail] = useState(null);
  const [subject, setSubject] = useState(null);

  useEffect(() => {
    if (route.params && route.params.replyEmail) {
      setReplyEmail(route.params.replyEmail);
    }
    if (route.params && route.params.subject) {
      setSubject(route.params.subject);
    }
  }, [route.params]);

  const handleSendEmail = useCallback(() => {
    ToastAndroid.show('Email enviado com sucesso', ToastAndroid.LONG);
    navigation.goBack();
  }, [navigation]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: replyEmail ? 'Reply' : 'Compose',
      headerRight: () => (
        <NavigationContainer onPress={handleSendEmail}>
          <Icon name="send" size={26} color="#333" />
        </NavigationContainer>
      ),
    });
  }, [navigation, handleSendEmail, replyEmail]);

  return (
    <Container>
      <InputContainer key="from" show>
        <PrefixInput>From</PrefixInput>
        <InfoInput multiline>your_awesome_email@email.com</InfoInput>
      </InputContainer>

      <InputContainer key="to" show>
        <PrefixInput>To</PrefixInput>
        <InfoInput multiline defaultValue={replyEmail || null} />
        {showMoreOptions ? (
          <Icon
            name="expand-less"
            size={26}
            color="#333"
            onPress={() => setShowMoreOptions(!showMoreOptions)}
          />
        ) : (
          <Icon
            name="expand-more"
            size={26}
            color="#333"
            onPress={() => setShowMoreOptions(!showMoreOptions)}
          />
        )}
      </InputContainer>

      <InputContainer key="cc" show={showMoreOptions}>
        <PrefixInput>Cc</PrefixInput>
        <InfoInput multiline />
      </InputContainer>

      <InputContainer key="cco" show={showMoreOptions}>
        <PrefixInput>Bcc</PrefixInput>
        <InfoInput multiline />
      </InputContainer>

      <InputContainer key="subject" show>
        <InfoInput
          placeholder="Subject"
          defaultValue={subject ? `Re: ${subject}` : null}
          multiline
        />
      </InputContainer>
      <MessageInput
        key="message"
        multiline
        placeholder="Compose message"
        textContentType="none"
      />
    </Container>
  );
}

NewEmail.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    setOptions: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      replyEmail: PropTypes.string,
      subject: PropTypes.string,
    }),
  }).isRequired,
};
