/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';

import React from 'react';
import { Text, StyleSheet, ImageBackground } from 'react-native';
import theme from './theme';

const Header = () => (
  <ImageBackground
    accessibilityRole={'image'}
    source={require('./logo.png')}
    style={styles.background}
    imageStyle={styles.logo}
  >
    <Text style={styles.text}>DrumFun</Text>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
    backgroundColor: theme.lighter,
  },
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
    /*
     * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
     *
     * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
     * source image's size.
     */
    marginLeft: -128,
    marginBottom: -192,
  },
  text: {
    fontFamily: 'Changa-Regular',
    fontSize: 40,
    fontWeight: '500',
    textAlign: 'center',
    color: theme.black,
  },
});

export default Header;
