document.addEventListener("DOMContentLoaded", function () {
  // Find all comparison sliders
  console.log("slider file loaded");
  const compSliders = document.querySelectorAll(".comparison-slider");

  if (compSliders.length > 0) {
      compSliders.forEach((slider) => {
          let resizeElement = slider.querySelector(".resize img");
          let divider = slider.querySelector(".divider");
          let containerWidth = slider.offsetWidth + "px";

          // Set initial image width
          resizeElement.style.width = containerWidth;

          // Initialize drag function
          enableDrag(divider, resizeElement, slider);

          // Resize event to update width
          window.addEventListener("resize", () => {
              let newWidth = slider.offsetWidth + "px";
              resizeElement.style.width = newWidth;
          });
      });
  }
});

// Enable dragging functionality
function enableDrag(dragElement, resizeElement, container) {
  let dragging = false;

  function startDrag(e) {
      dragging = true;
      document.body.style.userSelect = "none"; // Prevent text selection

      let startX = e.pageX || e.touches[0].pageX;
      let containerRect = container.getBoundingClientRect();
      let dragWidth = dragElement.offsetWidth;
      let minLeft = containerRect.left + 10;
      let maxLeft = containerRect.right - dragWidth - 10;

      function moveDrag(event) {
          if (!dragging) return;
          let moveX = event.pageX || event.touches[0].pageX;
          let leftValue = moveX - dragWidth / 2;

          // Ensure slider stays within bounds
          if (leftValue < minLeft) leftValue = minLeft;
          if (leftValue > maxLeft) leftValue = maxLeft;

          let widthPercent = ((leftValue - containerRect.left + dragWidth / 2) / container.offsetWidth) * 100;
          dragElement.style.left = widthPercent + "%";
          resizeElement.style.width = widthPercent + "%";
      }

      function stopDrag() {
          dragging = false;
          document.body.style.userSelect = ""; // Enable text selection
          document.removeEventListener("mousemove", moveDrag);
          document.removeEventListener("mouseup", stopDrag);
          document.removeEventListener("touchmove", moveDrag);
          document.removeEventListener("touchend", stopDrag);
      }

      document.addEventListener("mousemove", moveDrag);
      document.addEventListener("mouseup", stopDrag);
      document.addEventListener("touchmove", moveDrag, { passive: false });
      document.addEventListener("touchend", stopDrag);
  }

  // Attach pointer event listeners
  dragElement.addEventListener("mousedown", startDrag);
  dragElement.addEventListener("touchstart", startDrag, { passive: false });
}
