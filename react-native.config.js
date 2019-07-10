module.exports = {
  dependencies: {
    'react-native-gesture-handler': {
      platforms: {
        android: null, // disable Android platform, other platforms will still autolink
      },
    },
  },
  rnpm: {
    assets: ['assets/fonts'],
  },
};
