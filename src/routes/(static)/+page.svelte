<div id="main" class="h-[300vh]">
    <div id="Dijkstra" class="bottom-0 text-center bg-gray-1080px pt-[33vh] space-y-3">
        <div class="text-6xl tracking-wide flex justify-center items-center font-SFPro-Display-Bold">Dijkstra</div>
        <div class="text-lg opacity-50 flex justify-center items-center font-SFPro-Text-Regular">(dikes-straw)</div>
        <div class="text-lg opacity-30 flex justify-center items-center font-SFPro-Text-Regular">pronoun</div>
        <div class="text-lg flex justify-center items-center font-SFPro-Text-Regular">an algorithm for finding the shortest paths between nodes in a weighted graph</div>
    </div>
</div>

<script>
    const isBrowser = typeof window !== "undefined";
  
    function updateBackgroundColor() {
      const scrollPosition = isBrowser ? window.scrollY : 0;
      const body = isBrowser ? document.body : null;
  
      if (body) {
        const maxScroll = body.scrollHeight - window.innerHeight;
        const color = `rgb(${Math.min(255, (scrollPosition / maxScroll) * 243)}, ${Math.min(255, (scrollPosition / maxScroll) * 244)}, ${Math.min(255, (scrollPosition / maxScroll) * 246)})`;
        body.style.backgroundColor = color;
      }
    }
  
    if (isBrowser) {
      updateBackgroundColor();
      window.addEventListener("scroll", updateBackgroundColor);
    }
  </script>