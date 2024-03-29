# Offline Manager

Offline Manager is a utility that stores content for future offline usages, enabling you to download videos into the browser and play them (using the player) when online support is not available.

Media is currently saved in the indexedDB.


## Creating an Offline Manager

To use the Offline Manager features, you'll need to create an Offline Manager. The Offline Manager currently depends on the Vidiun Player provider, so you'll need to include the Vidiun Player library as well.

Here is a code snippet used for creating an instance of the Offline Manager:

```javascript
<script src="path/to/player/file/vidiun-tv-player.js"></script>
<script src="path/to/offline-manager/file/pakhshkit-offline-manager.js"></script>
<script>
const configuration = {
  provider: {
    partnerId: YOUR_PARTNER_ID,
    uiConfId: YOUR_UI_CONF_ID,
    env: {
      serviceUrl: ENVIRONMENT_URL
	}
  },
  player: {
    playback: {
      ...
  }
};
let offlineManager = new VidiunPlayer.OfflineManager(configuration)
</script>
```

You can read more about [configuration](https://github.com/vidiun/vidiun-player-js/blob/master/docs/configuration.md) in the Vidiun Player Configuration [document](https://github.com/vidiun/vidiun-player-js/blob/master/docs/configuration.md).

You can now use the Offline Manager [API](./api.md) to download, resume and perform other actions.

> API documentation can be found [here](./api.md).
> Errors documentation can be found [here](./errors.md)

Here's an example to download media and pause it.

```javascript
const ottMediaInfo = {
	entryId: SOME_GREAT_ENTRY_ID
	}
// First, you'll get the media info.
offlineManager.getMediaConfig(ottMediaInfo).then( res => {
  console.info("media info response:", res);
  // After the download manager has the info, you can download it.
  offlineManager.download(SOME_GREAT_ENTRY_ID);
})

// Pause a download
offlineManager.pause(SOME_GREAT_ENTRY_ID);
```

## Playing Stored Content
To play offline content, you'll have to provide the player with some configuration that was stored during the download process, and call the `setMedia` with it (instead of `loadMedia` when streaming content online).

Here's an example:
```javascript

offlineManager.getDownloadedMediaConfig(GREAT_STORED_ENTRY_ID).then(data=>{
  vidiunPlayer.setMedia(data);
});
```
The initialization of the Vidiun Player can be found [here](https://github.com/vidiun/vidiun-player-js/blob/master/docs/configuration.md), but the creation of the Vidiun player is the same for offline and online purposes.

## Writing a Player Plugin

Sometimes, you'll want to know if you are playing a media from storage (and not streaming it). This can come handy in terms of:

 - Error handling
 - Sending requests (e.g., analytics)

Currently, media that is local has only one dash source.
We've added the `isLocal: true` property to the source, so you that can verify that it's a local source.

