# Dailymotion Story

To use Dailymotion Story you must create a player first through [Partner HQ](https://www.dailymotion.com/partner/x1wzpns/embed/players) and get the `{PLAYER_ID}`.
> Set the player's Aspect ratio as `9:16` in the player creation menu.

> Disable First-time viewable, Automatic recommendations, Autonext, player controls, and PIP from player settings

> Set player "AutoStart" on

You also need to create or find a playlist to embed for your story. Learn more on [how to create, sort, feed and embed playlists](https://faq.dailymotion.com/hc/en-us/sections/360003674799-Playlist). When you are finished, add the `{PLAYLIST_ID}` to your embed code below.

### Start Embedding

You need to do 2 things to embed the Player.

1. Put the [script](https://srvr.dmvs-apac.com/dm-story/dm-story.min.js) at the very bottom before the `body` ends in your website
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
| baseStyle | string | You can set the base styling of your video thumbnail gallery. The default value is `carousel`  i.e., thumbnails will show as a carousel. Or you can set it to `grid` style. To visualize the effects, please check [examples below](#example-links)|
| thumbnail | string | You can set thumbnail resolution. Available values are [here](https://developers.dailymotion.com/api/#playlist-thumbnail_60_url-field). By default, it is `thumbnail_480_url`|
| customConfig | string | To add advertising Config to pass unique keys for advertising purposes. You can add multiple values. See the embed example below. |

### Embed Example :
```html
<div class="dm-story"
   playerId="xxxx"
   numOfVideos="10"
   baseStyle="carousel"
   thumbnail="thumbnail_360_url"
   customConfig="[dynamiciu]=23328537%2FAdParams_Test;[keyvalues]=category%3Dsports%26section%3Dvideo"
></div>
```
In the sample above for customConfig value, you can see the following text: %2f, %3d, and %26. These bits of text represent URL encoding, standing respectively for special characters /, =, and &. You can visit this [URL encoding reference]([url](https://www.w3schools.com/tags/ref_urlencode.ASP)) for a complete list.

## Features:

### CTA button:

The Dailymotion Story provides a feature to add CTA (Call to Action) button over the content of the video. To add CTA button you need to add `<script type="application/json" id="dm_story_text">` tag before [embed code for Stories](#start-embedding). Data for CTA button can be set inside `<script type="application/json">` as JSON format. Here is an example,
```html
<script type="application/json" id="dm_story_text">
  {
    "x8cjx3c" : {
      "cta_card" :{
        "text": "Read the article",
        "link": "www.example.com"
      }
    },
    "x8cjx34" : {
      "cta_card" :{
        "text": "Explore more",
        "link": "www.example3.com"
      }
    }
  }
</script>
```
> CTA buttons are implemented in [the example pages](#example-links) as a demo.

### Customizing styles:

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
- You can modify the style of many features/buttons by selecting classes. For more info, please contact [Dailymotion Professional Services team](mailto:professional-services@dailymotion.com).
   ```css
   /*Changing color of CTA button */
   .dm-story .dm-story-cta-button{
       background: #ae3a0c !important;
   }
   ```

### Setting `customConfig` dynamically: 

Dailymotion story provides a way to set two different `customConfig` based on the position of the video in the story. Below, the example shows how it can be achieved
```html
<script type="application/json" id="dm_story_text">
  {
      "customConfig":{
         "value": "[premium]=true",
         "position": [2,4,7,10]
       }
  }
</script>
<div class="dm-story" playlistId="x6hzyp" numOfVideos="10" playerId="xfgl5" customConfig="[premium]=false"></div> 
```
As you can see in the embed code, `"[premium]=false"` is the default value of customConfig for all videos in the story. `"[premium]=true"` will be applied to those videos having positions `2`, `4` and so on. The position of the first video of the story is always considered `1`.
We have a [demo](https://staging.dmvs-apac.com/dmStory/lab/carousel_adtest.html) in staging with the above configuration. Please contact us ([Dailymotion Professional-Services
](mailto:professional-services@dailymotion.com)) for partner specific requests.


### Lazy Loading Enhancement:

We've introduced Lazy Loading for image thumbnails in the card component to enhance performance. This implementation aligns with Core Web Vitals guidelines. No action is required on your part. If your story is located below the visible part of the webpage (below the fold), the image will automatically load in a lazy manner. You also can read to the official documentation [here](https://developer.chrome.com/docs/lighthouse/performance/offscreen-images/)


### Search Engine Friendly HTML Structure:

To enhance crawlability, we've restructured our HTML to be more search engine-friendly. You can simply sit back and enjoy the benefits without needing to take any action. Click this [link](https://developers.google.com/search/docs/crawling-indexing) to know further the overview on how search engine crawling and indexing our website.

### Interstitial Ads:

Web banners or banner ads can be added dynamically over a side in the fullscreen mode of the dailymotion story. It comes with a `close ad` button which enables you to close the ad and play the video of the current slide. You can target any slide based on their indexes (starting from `0` ). Here is an example of showing interstitial ads for slides `3`,`5`,`7`,`...`.

```html

<script>
  window.DailymotionStory = {};
  // to activate interstitial ads
  window.DailymotionStory.interstitialAds = {
      // set condition for slide index
      condition : (index) =>{
          if( index%2 == 0 ){
              return true;
          }else {
              return false;
          }
      },
      /**
       * @description :  if condition satisfied, story will create
       * adContainer then call this function
       * 
       * @param {HTMLElement} adContainer a htmlElement object for ads
       * @param {number} index slide index value, starts from 0
       */
      onCondition: (adContainer,index)=> {
          console.log(index);
          // add html for ads
          /**
           * example : 
           *  adContainer.innerHTML = `<div id="newswell-side-1" style="width: 300px; height: 250px;"></div>`;
           */
          // trigger the ad
          /**
           * example : 
           *    (adsbygoogle = window.adsbygoogle || []).push({});
           *     googletag.cmd.push(function() {
           *          googletag.display('newswell-side-1');
           *     });
           */
      }
  }
</script>

```
> `window.DailymotionStory` is a global object that will be checked from the story script if present on the page.

> `window.DailymotionStory.interstitialAds` is to set up the interstitialAds.
>
> - `condition` function where you can set conditions to target slides. It invokes every time you go to a new slide giving the current `index`. It has a parameter `index` of the current slide.
>    - `index%2 == 0`  is an example of a condition that can be customized
> - `onCondition` is a callback function invoked when the provided condition is satisfied. You can use it to set up your ads. It has an adContainer and index (current slide's index) as parameters.
>    - `adContainer` is an HtmlElement container where the ad's HTML part can be attached. After that, it can be triggered if needed as shown above in the example code block.



### Events:

Dailymotion Story provides some [CustomEvents](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) on `document` to inform special activity.
Example : 
```html
<script>
    // When the Dailymotion story enters fullscreen mode
    document.addEventListener("dm-story-enter-fullscreen",()=>{
        //Do something after the story enter the fullscreen
    })
</script>
```

### Events Available: 

| Name | Type | Info | Description |
| :---: | :---: | :---: |--- |
| `dm-story-enter-fullscreen` | CustomEvent | Fire when the Dailymotion story enters fullscreen mode. |
| `dm-story-exit-fullscreen` | CustomEvent | Fire when the Dailymotion story exits the fullscreen mode. |

### Example Links
- [DM Story carousel](https://dmvs-apac.github.io/dynamic-preview/examples/dm_story/carousel.html)
- [DM Story grid](https://dmvs-apac.github.io/dynamic-preview/examples/dm_story/grid.html)
