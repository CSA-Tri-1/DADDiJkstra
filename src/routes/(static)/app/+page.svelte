<style>
  :root {
    --bg-blue: #4666E5;
    --toggle-height: 20px;
    --toggle-width: 35px;
  }
  #interactive-graph {
    border: 3px solid black;
    border-radius: 10px;
    margin: 0 auto;
    top: 5%;
    width: 500px;
    height: 500px;
    overflow: hidden;
  }
  .checkbox-label {
      display: block;
      background: #f3f3f3;
      transition: background-color .2s ease-in-out, box-shadow .2s ease-in-out;
      height: var(--toggle-height);
      width: var(--toggle-width);
      border-radius: -90px;
      position: relative;
      box-shadow: 0 0 0 2px #dddddd;
      margin-right: 124px;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
  }

  .checkbox-label > span {
      min-width: 80px;
      text-align: start;
      position: absolute;
      z-index: 0;
      font-size: 12px;
      top: calc(var(--toggle-height) / 2 - 6px);
      left: calc(var(--toggle-width) + 10px);
  }

  .checkbox-label:before {
      transition: left .2s ease-in-out;
      content: '';
      display: block;
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      border-radius: 50px;
      height: var(--toggle-height);
      width: var(--toggle-height);
      background: white;
      box-shadow: 0 3px 3px rgba(0, 0, 0, .2), 0 0 0 2px #dddddd;
  }
</style>
<label for="edit-mode-toggle" class="checkbox-label">
  <span>Edit mode</span>
</label>
<p>testing canvas</p>
<div id="interactive-graph"></div>