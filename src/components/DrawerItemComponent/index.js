import React from 'react';
import PropTypes from 'prop-types';

import { DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function DrawerItemComponent({ label, icon }) {
  return (
    <DrawerItem
      style={{ borderBottomRightRadius: 100, borderTopRightRadius: 100 }}
      label={label}
      icon={() => <Icon name={icon} size={hp(4)} color="#777" />}
    />
  );
}

DrawerItemComponent.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
