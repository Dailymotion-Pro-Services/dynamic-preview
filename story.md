# Dailymotion Story

To use Dailymotion Story you must create a player first through [Partner HQ](https://www.dailymotion.com/partner/x1wzpns/embed/players) and get the `{PLAYER_ID}`.
> Set the player's Aspect ratio as `9:16` in the player creation menu.

> Disable First-time viewable, Automatic recommendations, Autonext, player controls, and PIP from player settings

> Set player "AutoStart" on

You also need to create or find a playlist to embed for your story. Learn more on [how to create, sort, feed and embed playlists](https://faq.dailymotion.com/hc/en-us/sections/360003674799-Playlist). When you are finished, add the `{PLAYLIST_ID}` to your embed code below.

### Start Embedding

You need to do 2 things to embed the Player.

1. Put the [script](https://srvr.dmvs-apac.com/dm-story/dm-story.min.js) at the very bottom before the `body` end in your website
```js
<script src="https://srvr.dmvs-apac.com/dm-story/dm-story.min.js"></script>
```
3. Add `<div class="dm-story" `[{PARAMS}](#parameters-available)`></div>` in your target body content.


### Standard Embed Tag

```html
<div class="dm-story" playlistId="{PLAYLIST_ID}" playerId="{PLAYER_ID}" ></div>
```

### Parameters Available

| Name | Type | Description |
| :---: | :---: | --- |
| playlistId <br /> `Mandatory` | string | Set playlist `xid` directly to the tag to embed playlist|
| PlayerId <br /> `Mandatory` | string | You can get `{PLAYER_ID}` from [Dailymotion partner HQ](https://www.dailymotion.com/partner/embed/players) in the player tab, inside the embed menu. |
| numOfVideos | number | To specify the number of videos in the playlist. Default value: `7` |
| customParams | string | To add a declarative parameter. Default value: `story-lazy-preroll` |
| baseStyle | string | You can set the base styling of your video thumbnail gallery. The default value is `carousel`  i.e., thumbnails will show as a carousel. Or you can set it to `grid` style. To visualize the effects, please check [examples below](#example-links)|
| thumbnail | string | You can set thumbnail resolution. Available values are [here](https://developers.dailymotion.com/api/#playlist-thumbnail_60_url-field). By default, it is `thumbnail_480_url`|

### Features:
- To change the default height of thumbnails, we provide a CSS variable `--dm-item-height`. By default, it is set to `230px` for the carousel and `400px` for the grid base style.
```css
.dm-story{
    --dm-item-height : 200px;
}
```

- You can change the SVG of the share and mute buttons by a predefined CSS variable.
    - `--dmstory-share-button-path` to update the share button
    - `--dmstory-muteoff-button-path` to update the mute-off button
    - `--dmstory-muteon-button-path` to update the mute-on button
```css
.dm-story{
    --dmstory-muteoff-button-path : path('M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z');
}
```
- You can modify the style of many features/buttons by selecting classes. For more Please contact [DPS team](professional-services@dailymotion.com).
```css
/*Changing color of CTA button */
.dm-story .dm-story-cta-button{
    background: #ae3a0c !important;
}
```
### Events:

Dailymotion Story provides some [CustomEvents](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) on `document` to inform special activity.

### Example : 
```html
<script>
    // When the Dailymotion story enters fullscreen mode
    document.addEventListener("dm-story-enter-fullscreen",()=>{
        //Do something after the story enter the fullscreen
    })
</script>
```

### Events : 

| Name | Type | Info | Description |
| :---: | :---: | :---: |--- |
| `dm-story-enter-fullscreen` | CustomEvent | Fire when the Dailymotion story enters fullscreen mode. |
| `dm-story-exit-fullscreen` | CustomEvent | Fire when the Dailymotion story exits the fullscreen mode. |

### Example Links
- [DM Story carousel](https://dmvs-apac.github.io/dynamic-preview/examples/dm_story/carousel.html)
- [DM Story grid](https://dmvs-apac.github.io/dynamic-preview/examples/dm_story/grid.html)
