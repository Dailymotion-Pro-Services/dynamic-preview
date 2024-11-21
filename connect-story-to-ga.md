# Connect player from Dailymotion Story to Google Analytics 4 (GA4) :

> [!IMPORTANT]  
> Following this documentation is about providing extra steps that you need for connecting your player in [Dailymotion Story
](https://dailymotion-pro-services.github.io/dynamic-preview/story) to Google Analytics 4 (GA4). Please follow the steps first from [Connect your Dailymotion Player data to Google Analytics 4 (GA4)](https://developers.dailymotion.com/guides/connect-to-google-analytics/).

The player in Dailymotion Story is created by the [PLS player](https://developers.dailymotion.com/player/#player-library-script). You must always connect your Dailymotion player to the GTM script using `DM_GTM_INIT(player)`. [Read more](https://developers.dailymotion.com/guides/connect-to-google-analytics/#important-for-player-library-script).

With the help of [Events in Dailymotion Story](https://dailymotion-pro-services.github.io/dynamic-preview/story#events), you can get the dailymotion player object and call `DM_GTM_INIT(player)` method.

### Example : 
```html
<script>
    // get player object when dm story creates a player
    document.addEventListener("dmstory-player-create",(e)=>{
        console.log(e.detail); // {player: playerObject}
        DM_GTM_INIT(e.detail.player); // connecting player to GMT script
    })
</script>
```
