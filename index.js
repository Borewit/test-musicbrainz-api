import {MusicBrainzApi} from "musicbrainz-api";

const mbApi = new MusicBrainzApi({
  appName: 'test-musicbrainz-api',
  appVersion: '0.1.0',
  appContactInfo: 'https://github.com/Borewit'
});


(async () => {
const artist = await mbApi.lookup('artist', 'ab2528d9-719f-4261-8098-21849222a0f2');
console.log(artist);
})();