# Dailymotion Story

To use Dailymotion Story you must create a player first through [Partner HQ](https://www.dailymotion.com/partner/x1wzpns/embed/players) and get the `{PLAYER_ID}`.
> Set player's Aspect ratio as `9:16` 

You also need to create or find a playlist to embed for your story. Learn more on [how to create, sort, feed and embed playlist](https://faq.dailymotion.com/hc/en-us/sections/360003674799-Playlist). When you are finished, add the `{PLAYLIST_ID}` to your embed code below.

### Start Embedding

You need to do 2 things to embed the Player.

1. Put the [script](https://staging.dmvs-apac.com/dmStory/dm-story.js) at the very bottom before `body` end in your website
```js
<script src="https://staging.dmvs-apac.com/dmStory/dm-story.js"></script>
```
3. Add `<div class="dm-story" `[{PARAMS}](#parameters-available)`></div>` in your target of body content.


### Standard Embed Tag

```html
<div class="dm-story" playlistId="{PLAYLIST_ID}" playerId="{PLAYER_ID}" style="height: 230px;"></div>
```
> Add height to `dm-story` div as your requirements

### Parameters Available

| Name | Type | Description |
| :---: | :---: | --- |
| playlistId <br /> `Mandatory` | string | Set playlist xid directly to the tag to embed playlist|
| PlayerId <br /> `Mandatory` | string | You can get `{PLAYER_ID}` from [Dailymotion partner HQ](https://www.dailymotion.com/partner/x1wzpns/embed/players) in the player tab, inside the embed menu. |
| numOfVideos | number | To specify number of videos in the playlist. Default value : `7` |
| adsParams | string	 | To add custom ad prameters. Default value : `story` |

### Example Links
- [DM Story demo](https://staging.dmvs-apac.com/dmStory/index.html)
