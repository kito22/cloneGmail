import React, { useEffect, useState } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import api from '../../service/api';

import NewEmailImage from '../../assets/new.png';

import {
  Container,
  HeaderActions,
  Search,
  UserAvatar,
  SectionName,
  EmailList,
  EmailItem,
  AvatarContainer,
  Avatar,
  MailContent,
  Name,
  Subject,
  MailMessage,
  InfoContainer,
  Time,
  NewEmailButton,
  NewEmail,
} from './styles';

export default function Home({ navigation, route }) {
  const [mails, setMails] = useState([]);

  useEffect(() => {
    if (route.params && route.params.email) {
      const emailToDelete = route.params.email;
      const arrayFiltered = mails.filter(mail => mail.id !== emailToDelete);
      setMails(arrayFiltered);
    }
  }, [route.params]);

  useEffect(() => {
    async function loadMails() {
      const response = await api.get('/items');
      setMails(response.data);
    }

    loadMails();
  }, []);

  async function handleReadEmail(item) {
    const updateEmails = mails.map(mail =>
      mail.id === item.id ? { ...mail, read: true } : mail,
    );

    setMails(updateEmails);
    navigation.navigate('ReadEmail', {
      email: item,
    });
  }

  return (
    <Container>
      <HeaderActions>
        <Icon
          name="menu"
          size={26}
          color="#333"
          onPress={() => navigation.openDrawer()}
        />
        <Search placeholder="Search Mail" placeholderTextColor="#333" />
        <UserAvatar
          source={{
            uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
          }}
        />
      </HeaderActions>
      <SectionName>PRIMARY</SectionName>
      <EmailList
        data={mails}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <EmailItem onPress={() => handleReadEmail(item)}>
            <AvatarContainer avatarColor={item.color}>
              <Avatar>{item.sender.charAt(0)}</Avatar>
            </AvatarContainer>
            <MailContent>
              <Name read={item.read}>{item.sender}</Name>
              <Subject read={item.read}>{item.subject}</Subject>
              <MailMessage numberOfLines={1}>{item.message}</MailMessage>
            </MailContent>
            <InfoContainer onPress={() => navigation.navigate('New')}>
              <Time read={item.read}>{item.time}</Time>
            </InfoContainer>
          </EmailItem>
        )}
      />
      <NewEmailButton onPress={() => navigation.navigate('New')}>
        <NewEmail source={NewEmailImage} />
      </NewEmailButton>
    </Container>
  );
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    setOptions: PropTypes.func.isRequired,
    openDrawer: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      email: PropTypes.number,
    }),
  }).isRequired,
};
