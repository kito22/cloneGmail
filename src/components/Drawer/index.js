import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5';

import { HeaderTitle, LabelSection, Divider } from './styles';
import DrawerItemComponent from '../DrawerItemComponent';

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <HeaderTitle>Gmail</HeaderTitle>
      <DrawerItemList
        {...props}
        activeBackgroundColor="#FCE8E6"
        activeTintColor="#D93025"
        itemStyle={{ borderBottomRightRadius: 100, borderTopRightRadius: 100 }}
      />
      <DrawerItemComponent label="Social" icon="group" />
      <DrawerItemComponent label="Promotions" icon="local-offer" />

      <LabelSection>ALL LABELS</LabelSection>

      <DrawerItemComponent label="Starred" icon="star-border" />
      <DrawerItemComponent label="Snoozed" icon="access-time" />
      <DrawerItemComponent label="Important" icon="bookmark-border" />
      <DrawerItemComponent label="Sent" icon="send" />
      <DrawerItemComponent label="Scheduled" icon="event" />
      <DrawerItem
        style={{ borderBottomRightRadius: 100, borderTopRightRadius: 100 }}
        label="Outbox"
        icon={() => (
          <IconCommunity name="forwardburger" size={hp(4)} color="#777" />
        )}
      />
      <DrawerItem
        style={{ borderBottomRightRadius: 100, borderTopRightRadius: 100 }}
        label="Drafts"
        icon={() => (
          <IconCommunity
            name="file-document-edit-outline"
            size={hp(4)}
            color="#777"
          />
        )}
      />
      <DrawerItem
        style={{ borderBottomRightRadius: 100, borderTopRightRadius: 100 }}
        label="All mail"
        icon={() => (
          <IconFontAwesome name="mail-bulk" size={hp(4)} color="#777" />
        )}
      />
      <DrawerItemComponent label="Spam" icon="info-outline" />
      <DrawerItem
        style={{ borderBottomRightRadius: 100, borderTopRightRadius: 100 }}
        label="Trash"
        icon={() => (
          <IconCommunity name="delete-outline" size={hp(4)} color="#777" />
        )}
      />
      <DrawerItemComponent label="Personal" icon="label-outline" />
      <DrawerItemComponent label="Receipts" icon="label-outline" />
      <DrawerItem
        style={{ borderBottomRightRadius: 100, borderTopRightRadius: 100 }}
        label="Work"
        icon={() => (
          <IconCommunity name="briefcase-outline" size={hp(4)} color="#777" />
        )}
      />

      <LabelSection>GOOGLE APPS</LabelSection>

      <DrawerItemComponent label="Calendar" icon="event" />

      <DrawerItemComponent label="Contacts" icon="person-outline" />

      <Divider />

      <DrawerItemComponent label="Settings" icon="settings" />

      <DrawerItemComponent label="Help & feedback" icon="help-outline" />
    </DrawerContentScrollView>
  );
}
