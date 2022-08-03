# Dailymotion Story

To use Dailymotion Story you must create a player first through [Partner HQ](https://www.dailymotion.com/partner/x1wzpns/embed/players) and get the `{PLAYER_ID}`.
> Set player's Aspect ratio as `9:16` 

You also need to create or find a playlist to embed for your story. Learn more on [how to create, sort, feed and embed playlist](https://faq.dailymotion.com/hc/en-us/sections/360003674799-Playlist). When you are finished, add the `{PLAYLIST_ID}` to your embed code below.

### Start Embedding

You need to do 2 things to embed the Player.

1. Put the [script](https://srvr.dmvs-apac.com/dm-stories/dm-stories.min.js) at the very bottom before `body` end in your website
```js
<script src="https://srvr.dmvs-apac.com/dm-stories/dm-stories.min.js"></script>
```
3. Add `<div class="dm-story" `[{PARAMS}](#parameters-available)`></div>` in your target of body content.


### Standard Embed Tag

```html
<div class="dm-story" playlistId="{PLAYLIST_ID}" playerId="{PLAYER_ID}" ></div>
```

### Parameters Available

| Name | Type | Description |
| :---: | :---: | --- |
| playlistId <br /> `Mandatory` | string | Set playlist xid directly to the tag to embed playlist|
| PlayerId <br /> `Mandatory` | string | You can get `{PLAYER_ID}` from [Dailymotion partner HQ](https://www.dailymotion.com/partner/x1wzpns/embed/players) in the player tab, inside the embed menu. |
| numOfVideos | number | To specify number of videos in the playlist. Default value : `7` |
| customParams | string | To add custom ad prameters. Default value : `story-lazy-preroll` |
| baseStyle | string | You can set the base styling of Initially thumbnails of videos. The default value is `carousel`  i.e., thumbnails will show as a carousel. Or you can set it to `grid` style. To visualize the effect please check [examples below](#example-links)|

### Features:
- To change the default height of thumbnails, we provide a CSS variable `--dm-item-height`. By default it is set to `230px` for carousel and `400px` for grid base style.
```css
.dm-story{
    --dm-item-height : 200px;
}
```


### Example Links
- [DM Story carousel](https://dmvs-apac.github.io/dynamic-preview/examples/dm_story/carousel.html)
- [DM Story grid](https://dmvs-apac.github.io/dynamic-preview/examples/dm_story/grid.html)
