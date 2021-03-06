// @flow

import {
  NativeModules,
} from 'react-native';

// On Android we pass the manifest in JSON form so this step is necessary
let manifest = NativeModules.ExponentConstants.manifest;
if (typeof manifest === 'string') {
  manifest = JSON.parse(manifest);
}

module.exports = {
  ...NativeModules.ExponentConstants,
  manifest,
};
