import { main } from "./flow-sim";
// import { main } from "./heatmap";

const draw = document.getElementById("draw") as HTMLCanvasElement;

draw.width = window.innerWidth;
draw.height = window.innerHeight;

main(draw);
