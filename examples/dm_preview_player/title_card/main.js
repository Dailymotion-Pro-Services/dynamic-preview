
(()=>{

    const controlDesk = document.getElementById("controlDesk");
    const controlMob = document.getElementById("controlMob");
    const pageWrapper = document.getElementById("pageWrapper");
    const controlWrapper = document.getElementById("controlWrapper");
    const controlMinMax = document.getElementById("controlMinMax");
    const codeWrapper = document.getElementById("codeWrapper");
    const applyBtn = document.getElementById("applyBtn");
    const codeSample1 = document.getElementById("codeSample1");
    const progressBg = document.getElementById("progressBg");
    const progressCl = document.getElementById("progressCl");

    controlDesk.addEventListener("click",()=>{
        if(!controlDesk.classList.contains("selected")){
            controlDesk.classList.add("selected");
            controlMob.classList.remove("selected");
            pageWrapper.classList.remove("mobile");
        }   
    });
    controlMob.addEventListener("click",()=>{
        if(!controlMob.classList.contains("selected")){
            controlMob.classList.add("selected");
            controlDesk.classList.remove("selected");
            pageWrapper.classList.add("mobile");
        }
    });

    controlMinMax.addEventListener("click",()=>{
        if(controlWrapper.classList.contains("expand")){
            controlWrapper.classList.remove("expand");
            controlMinMax.innerHTML = '<svg ><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>';
        }else{
            controlWrapper.classList.add("expand");
            controlMinMax.innerHTML = '<svg ><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path></svg>';
        }
    });

    applyBtn.addEventListener("click",()=>{
        window.DM_data = editor.get();
        window.DM_data_color = {
            progress_cl : progressCl.value,
            progress_bg:  progressBg.value,
        };
        refresh();
    });
    
    codeSample1.addEventListener("click",()=>{
        editor.set(initialJson1);
    });

    // create the editor
    const options = {
        modes: ['text', 'code', 'tree', 'form', 'view'],
        mode: 'code',
        ace: ace
    };
    const editor = new JSONEditor(codeWrapper, options);

    // set json
    let initialJson1 = {
        "title_card": [
          {
            "video_id": "x847mil",
            "text": "Custome title for rahul gandhi"
          },
          {
            "video_id": "x82qaiq",
            "link": "https://www.example.com/customelink"
          }
        ]
    }
    editor.set(initialJson1);

    let dataColor = {
        progress_cl : "#b3b3b3",
        progress_bg: "#5f6067"
    }

    window.DM_data = initialJson1;
    window.DM_data_color = dataColor;

    refresh();

    function refresh(){
        pageWrapper.innerHTML = '<iframe src="base.html"></iframe> ';
    }
})();





