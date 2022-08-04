const { FluxDispatcher } = require('powercord/webpack');
const { FluxActions } = require('../constants');
const SpotifyAPI = require('../SpotifyAPI');

module.exports = {
  fetchDevices: async () => {
    const { devices } = await SpotifyAPI.getDevices();
    FluxDispatcher.dispatch({
      type: FluxActions.DEVICES_FETCHED,
      devices
    });
  },

  updateCurrentTrack: (newTrack) => {
    FluxDispatcher.dispatch({
      type: FluxActions.CURRENT_TRACK_UPDATED,
      track: newTrack
    });
  },

  updatePlayerState: (newState) => {
    FluxDispatcher.dispatch({
      type: FluxActions.PLAYER_STATE_UPDATED,
      state: {
        ...newState,
        spotifyRecordedProgressAt: Date.now()
      }
    });
  },

  updateCurrentLibraryState: (newState) => {
    FluxDispatcher.dispatch({
      type: FluxActions.LIBRARY_STATE_UPDATED,
      state: newState
    });
  }
};
