document.addEventListener("DOMContentLoaded", () => {
  // Select the node that will be observed for mutations
  const targetNode = document.querySelector("#root");

  // Options for the observer (which mutations to observe)
  const config = { attributes: true, childList: true, subtree: true };

  // Callback function to execute when mutations are observed
  const callback = (mutationList, observer) => {
    const slider = document.querySelector(
      ".player button + div > input[type=range]"
    );
    if (slider && !slider.classList.contains("mono")) {
      slider.setAttribute("step", "1");
      slider.classList.add("mono");
    }
  };

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(targetNode, config);
});
