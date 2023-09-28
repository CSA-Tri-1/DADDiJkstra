<div>
  <p>Step 1</p>
</div>



<style>
  #canvas {
    border: 1px solid #000;
  }
</style>
<div class="relative h-[800px] w-[1088px]">
  <canvas id="canvas" class="absolute bottom-0 right-0" width="1088" height="750"></canvas>
  <button id="toggleModeButton">Toggle Mode</button>

  <script>
    const toggleModeButton = document.getElementById("toggleModeButton");
    let isNodePlacingMode = true; // Initially, start with node placing mode

    toggleModeButton.addEventListener("click", () => {
        isNodePlacingMode = !isNodePlacingMode; // Toggle the mode
    });


    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    const ghostCircle = { x: 0, y: 0, radius: 0, color: "#ccc" }
    const circles = []

    let circleCounter = 0
    let selectedNode = null;
    let pathStartPoint = null;

    canvas.addEventListener("mousemove", (e) => {
        if (isNodePlacingMode) {
            const mouseX = e.clientX - canvas.getBoundingClientRect().left
            const mouseY = e.clientY - canvas.getBoundingClientRect().top

            ghostCircle.x = mouseX
            ghostCircle.y = mouseY
            ghostCircle.radius = 30
        } else {
            if (!isNodePlacingMode && selectedNode && pathStartPoint) {
                const mouseX = e.clientX - canvas.getBoundingClientRect().left;
                const mouseY = e.clientY - canvas.getBoundingClientRect().top;

                // Clear the canvas and redraw everything
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawCircles();
                drawConnections(); // Draw connections as well

                // Draw the path from the selected node to the mouse position
                ctx.beginPath();
                ctx.moveTo(selectedNode.x, selectedNode.y);
                ctx.lineTo(mouseX, mouseY);
                ctx.strokeStyle = "#000"; // Adjust the path color as needed
                ctx.lineWidth = 2;
                ctx.stroke();
                ctx.closePath();
            }
        }
    });

    canvas.addEventListener("click", (e) => {
        if (isNodePlacingMode) {
            const circleRadius = 30
            const circleColor = `#000`

            const newCircle = { id: ++circleCounter, x: ghostCircle.x, y: ghostCircle.y, radius: circleRadius, color: circleColor }
            circles.push(newCircle)

            ghostCircle.radius = 0

            drawCircles()

            
        } else {
            const mouseX = e.clientX - canvas.getBoundingClientRect().left;
            const mouseY = e.clientY - canvas.getBoundingClientRect().top;

            // Check if the click is inside a node
            for (const circle of circles) {
                const distance = Math.sqrt(
                    (mouseX - circle.x) ** 2 + (mouseY - circle.y) ** 2
                );
                
                if (distance < circle.radius) {
                    // Clicked inside a node, select it
                    selectedNode = circle;
                    return;
                }
            }

            pathStartPoint = { x: selectedNode.x, y: selectedNode.y };
            console.log(pathStartPoint)

            // If not inside a node, start a path if a node is selected
            if (selectedNode) {
                
                
            }
            
        }
    });

    canvas.addEventListener("mouseup", (e) => {
        if (isNodePlacingMode) {
            // Handle node placing mode
            // ...
        } else {
            if (selectedNode && pathStartPoint) {
                const mouseX = e.clientX - canvas.getBoundingClientRect().left;
                const mouseY = e.clientY - canvas.getBoundingClientRect().top;


                // Check if the release is inside a node
                for (const circle of circles) {
                    const distance = Math.sqrt(
                        (mouseX - circle.x) ** 2 + (mouseY - circle.y) ** 2
                    );
                    if (distance < circle.radius) {
                        // Released inside a node, create a connection
                        const newConnection = {
                            from: selectedNode.id,
                            to: circle.id,
                        };
                        
                        drawConnections()

                        break;
                    }
                }
            }

            // Reset selection and path start point
            selectedNode = null;
            pathStartPoint = null;
            }
    });

    function drawCircle(x, y, radius, color, id) {
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()
        ctx.closePath()

        ctx.fillStyle = "#fff"
        ctx.font = "25px SFPro-Text-Regular"
        const textWidth = ctx.measureText(id).width;
        const textX = x - textWidth / 2;
        const textY = y + 7;

        ctx.fillText(id, textX, textY);
    }

    function drawCircles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        circles.forEach((circle) => {
            drawCircle(circle.x, circle.y, circle.radius, circle.color, circle.id)
        })
        drawGhostCircle()
    }

    function drawGhostCircle() {
        const { x, y, radius, color } = ghostCircle

        if (radius > 0) {
            ctx.beginPath()
            ctx.arc(x, y, radius, 0, Math.PI * 2)
            ctx.strokeStyle = color
            ctx.lineWidth = 2
            ctx.stroke()
            ctx.closePath()
        }
    }

    function drawConnections() {
        for (const connection of connections) {
            const fromNode = circles.find(circle => circle.id === connection.from);
            const toNode = circles.find(circle => circle.id === connection.to);

            ctx.beginPath();
            ctx.moveTo(fromNode.x, fromNode.y);
            ctx.lineTo(toNode.x, toNode.y);
            ctx.strokeStyle = "#000"; // Adjust the path color as needed
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.closePath();
        }
    }

    function animate() {
        drawCircles()
        requestAnimationFrame(animate)
    }

    animate()
</script>
</div>
