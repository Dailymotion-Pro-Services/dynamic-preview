# Dailymotion Preview Player

Dailymotion Preview Player is another implementation with [Dynamic Previews](https://www.canva.com/design/DAEGDbSibZE/cvoKs-MEOdq3paAehFLkbQ/view?website#4:l-equipe-case)

### Start Embedding

You need to do 2 things to embed the Player.

1. Put the [script](https://staging.dmvs-apac.com/dm-preview-player/dm-preview.js) at the very bottom before `body` end in your website
```js
<script src="https://staging.dmvs-apac.com/dm-preview-player/dm-preview.js"></script>
```
3. Add `<div class="dm-preview" `[{PARAMS}](#parameters-available)`></div>` in your target of body content.


### Standard Embed Tag

```html
<div class="dm-preview" playlistId="{PLAYLIST_ID}"></div>
```

### Parameters Available

| Name | Type | Description |
| :---: | :---: | --- |
| playlistId <br /> `Mandatory` | string | Set playlist xid directly to the tag to embed playlist|
| numOfVideos | number | To specify number of videos in the playlist. Default value : `5` |

### Example Links
- [DM Preview Player demo](https://staging.dmvs-apac.com/dm-preview-player/index.html)
