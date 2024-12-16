---
date: "2021-04-22"
---
<p >
  A minimal, dark blue theme for <a href="https://marketplace.visualstudio.com/items?itemName=terryfu.momentum-vscode">VS Code</a>.
</p>
<p ">
  <a href="https://marketplace.visualstudio.com/items?itemName=terryfu.momentum-vscode">
    <img alt="Version" src="https://img.shields.io/visual-studio-marketplace/v/terryfu.momentum-vscode?color=brightgreen" />
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=terryfu.momentum-vscode">
    <img alt="Downloads" src="https://img.shields.io/visual-studio-marketplace/d/terryfu.momentum-vscode" />
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=terryfu.momentum-vscode">
    <img alt="Installs" src="https://img.shields.io/visual-studio-marketplace/i/terryfu.momentum-vscode" />
  </a>
</p>
  

![demo](https://raw.githubusercontent.com/terryfu33/momentum-vscode/master/images/demo.jpg)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

[github](https://github.com/terryfu2/momentum-vscode) [site](https://marketplace.visualstudio.com/items?itemName=TerryFu.momentum-vscode&ssr=false#overview)
 <h2>Color Palette</h2>
<div class = "grid-container">
    <div class = "colorButton" style = "background-color:#1A1C23">
        <span class="tooltiptext">#1A1C23</span>
    </div>
    <div class = "colorButton" style = "background-color:#6C6F9380">
        <span class="tooltiptext">#6C6F9380</span>
    </div>
    <div class = "colorButton" style = "background-color:#3c93f7">
        <span class="tooltiptext">#3c93f7</span>
    </div>
    <div class = "colorButton" style = "background-color:#25B0BCE6">
        <span class="tooltiptext">#25B0BCE6</span>
    </div>
    <div class = "colorButton" style = "background-color:#8ef3fa">
        <span class="tooltiptext">#8ef3fa</span>
    </div>
    <div class = "colorButton" style = "background-color:#27D797B3">
        <span class="tooltiptext">#27D797B3</span>
    </div>
    <div class = "colorButton" style = "background-color:#77db90e6">
        <span class="tooltiptext">#77db90e6</span>
    </div>
    <div class = "colorButton" style = "background-color:#fff788">
        <span class="tooltiptext">#fff788</span>
    </div>
    <div class = "colorButton" style = "background-color:#E9436D80">
        <span class="tooltiptext">#E9436D80</span>
    </div>
    <div class = "colorButton" style = "background-color:#F43E5C">
        <span class="tooltiptext">#F43E5C</span>
    </div>
    <div class = "colorButton" style = "background-color:#B877DBE6">
        <span class="tooltiptext">#B877DBE6</span>
    </div>
    <div class = "colorButton" style = "background-color:#F075B5">
        <span class="tooltiptext">#F075B5</span>
    </div>
    <div class = "colorButton" style = "background-color:#D5D8DA80">
        <span class="tooltiptext">#D5D8DA80</span>
    </div>
    <div class = "colorButton" style = "background-color:#D5D8DA">
        <span class="tooltiptext">#D5D8DA</span>
    </div>
</div>
<br><br><br><br><br>


## Installation via VS Code

1. Open **Extensions** sidebar panel in VS Code. `View → Extensions`
2. Search for `Momentum`
3. Click **Install** to install it
4. Click **Reload** to reload the editor
5. Code > Preferences > Color Theme > **Momentum**

<style>
    .grid-container {
    display: grid;
    grid-gap: 0px;
    grid-template-columns: auto auto auto auto auto auto auto;
    width:400px;
    position: absolute;
}
.colorButton{
    width: 35px;
    height: 35px;
    padding: 0;
    border-radius: 100%;
    position: relative;
    display: inline-block;
    transition: top 0.4s;
    margin-left:15px;
    margin-bottom:15px;
}
.colorButton .tooltiptext {
    visibility: hidden;
    width: 90px;
    background-color: #1B1E25;
    color: #FFF0E4;
    text-align: center;
    border-radius: 6px;
    top: 110%;
    left: 50%;
    margin-left: -45px;
    /* Position the tooltip text - see examples below! */
    position: absolute;
    z-index: 1;
  }
  .colorButton:hover{
    top: -10px;

  }
  /* Show the tooltip text when you mouse over the tooltip container */
  .colorButton:hover .tooltiptext {
    visibility: visible;
  }
</style>