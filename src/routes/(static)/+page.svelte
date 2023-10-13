<!-- <div id="homepage">
  <div id="main1" class="h-[300vh] bg-white">
      <div id="Dijkstra" class="top-0 text-center bg-gray-1080px pt-[230vh] space-y-3">
          <div class="text-6xl tracking-wide flex justify-center items-center font-SFPro-Display-Bold">Dijkstra</div>
          <div class="text-lg opacity-50 flex justify-center items-center font-SFPro-Text-Regular">(dikes-straw)</div>
          <div class="text-lg opacity-30 flex justify-center items-center font-SFPro-Text-Regular">pronoun</div>
          <div class="text-lg flex justify-center items-center font-SFPro-Text-Regular">an algorithm for finding the shortest paths between nodes in a weighted graph</div>
      </div>
  </div>
  <div id="scale" class="h-[300vh]">
  </div>
</div>

<script>
    const isBrowser = typeof window !== "undefined";
  
    function updateBackgroundColor() {
      const scrollPosition = isBrowser ? window.scrollY : 0;
      const homepage = isBrowser ? document.getElementById("homepage") : null;
      const mainDiv = isBrowser ? document.getElementById("main1") : null;
  
      if (homepage && mainDiv) {
        const maxScroll = homepage.clientHeight - mainDiv.scrollHeight;
        console.log(homepage.clientHeight);
        console.log(mainDiv.scrollHeight);
        console.log(maxScroll);
        const color = `rgb(${Math.min(243, (scrollPosition / maxScroll) * 243)}, ${Math.min(244, (scrollPosition / maxScroll) * 244)}, ${Math.min(246, (scrollPosition / maxScroll) * 246)})`;
        mainDiv.style.backgroundColor = color;
      }
    }
  
    if (isBrowser) {
      updateBackgroundColor();
      window.addEventListener("scroll", updateBackgroundColor);
    }
  </script> -->
  
  <div id="homepage">
    <div id="main1" class="h-[300vh] bg-white">
      <div id="Dijkstra" class="bottom-0 text-center pt-[230vh] space-y-3">
        <div class="text-6xl tracking-wide flex justify-center items-center font-SFPro-Display-Bold">Dijkstra</div>
        <div class="text-lg opacity-50 flex justify-center items-center font-SFPro-Text-Regular">(dikes-straw)</div>
        <div class="text-lg opacity-30 flex justify-center items-center font-SFPro-Text-Regular">pronoun</div>
        <div class="text-lg flex justify-center items-center font-SFPro-Text-Regular">an algorithm for finding the shortest paths between nodes in a weighted graph</div>
      </div>
    </div>
    <div id="scale" class="h-[300vh]">
    </div>
  </div>
  
  <script>
    const isBrowser = typeof window !== "undefined";
    
    function updateBackgroundColor() {
      // const scrollPosition = isBrowser ? window.scrollY : 0;
      const mainDiv = isBrowser ? document.getElementById("main1") : null;
    
      if (mainDiv) {
        const mainDivRect = mainDiv.getBoundingClientRect(); // returns the different properties of the main div 
        const mainDivTop = mainDivRect.top;
        const mainDivHeight = mainDivRect.height;
        const viewportHeight = window.innerHeight;
        console.log(mainDivRect);
        console.log(mainDivTop);
        console.log(mainDivRect);
        console.log(viewportHeight);
        if (mainDivTop < viewportHeight && mainDivTop + mainDivHeight > 0) {
          const progress = Math.min(1, (viewportHeight - mainDivTop) / mainDivHeight);
          const mathlol = progress + 1
          const r = Math.min(255, Math.min(mathlol * 243));
          const g = Math.min(255, Math.min(mathlol * 244));
          const b = Math.min(255, Math.min(mathlol * 246));
          mainDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
      }
    }
    
    if (isBrowser) {
      updateBackgroundColor();
      window.addEventListener("scroll", updateBackgroundColor);
    }
  </script>
  