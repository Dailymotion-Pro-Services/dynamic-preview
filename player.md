# Dailymotion Previews

Dailymotion Previews are another implementation with [Dynamic Previews](https://www.canva.com/design/DAEGDbSibZE/cvoKs-MEOdq3paAehFLkbQ/view?website#4:l-equipe-case). Previews let you surface top stories from your newsroom(s) and surface them across your site. By default, the previews redirect to your Dailymotion video page to improve monetization options.

### Start Embedding

You need to do 2 things to embed the Previews.

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
| numOfVideos | number | To specify the number of videos in the playlist. Default value : `5` |
| syndication | string | Syndication key. Needed if the video content does not belong to your channel/network of channels AND/OR if you embed the Dailymotion Previews into specific 3rd party environments (Google AMP, Facebook IA, OTT products, in-app, operated but not owned web domains…). This enables tracking and targeting. |
| type | string | Can be set as `vertical`/ `horizontal` type of the preview. By default its `horizontal` i.e., `16:9` aspect-ratio |

### Example Links
- [DM Preview demo](https://dmvs-apac.github.io/dynamic-preview/examples/dm_preview_player/basic/index.html)
- [DM Preview fixed](https://dmvs-apac.github.io/dynamic-preview/examples/dm_preview_player/basic/index_fixed.html)
- [DM Preview vertical](https://dmvs-apac.github.io/dynamic-preview/examples/dm_preview_player/basic/index_vertical.html)

### Features:

- Dailymotion Previews also provide features to customize the title and its CTA ( Call to Action ). By default clicking on a title will redirect to the Dailymotion video page.  
To customize title, you need to add `<script type="application/json" id="dm_preview_text" >` tag before [embed code for Previews](https://dmvs-apac.github.io/dynamic-preview/player#start-embedding).  
Data for title card can be set inside `<script type="application/json">` as `JSON` format.  
Here is an example.
```html
<script type="application/json" id="dm_preview_text">
    {
        "title_card": [
            {
                "video_id": "x847mil",
                "text": "Custom title for rahul gandhi"
            },
            {
                "video_id": "x82qaiq",
                "link": "https://www.example.com/customlink"
            }
        ]
    }
</script>
```  
> As you see above data, the title/CTA link of the video can be replaced from the default value where `video_id` is the `mandatory` field.

- We provide [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) to change the color of the progress bar at the top the Dailymotion Previews.  
Here is an example.  
```css
.dm-preview{
    /* To change background color of progress bar */
    --dm-preview-progress-bg: rgba(88, 89, 104,.5);
    /* To change color of progress bar */
    --dm-preview-progress-color: rgba(255,255,255,.5);
}
```

**Example:**
- [Title CTA card - playground](https://dmvs-apac.github.io/dynamic-preview/examples/dm_preview_player/title_card/index.html)
