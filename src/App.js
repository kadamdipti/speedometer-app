import React from 'react';
import ReactDOM from "react-dom";
import './App.css';

var canv = document.getElementById("canv"),
  ctx = canv.getContext("2d");
canv.width = 700;
canv.height = 400;
var center_x = canv.width / 2,
  center_y = canv.height / 2 + 100,
  radius = 200;
ctx.lineWidth = 15;
ctx.strokeStyle = "#492528";
ctx.beginPath();
ctx.arc(center_x, center_y, radius, -0.2, Math.PI + 0.2, true);
ctx.stroke();
var l_ = -2.93,
  l_t = -2.3,
  simpleAnimationTimer = setInterval(function () {
    ctx.fillStyle = "#301618";
    ctx.beginPath();
    ctx.arc(center_x, center_y, radius, l_, Math.PI + 0.2, true);
    ctx.lineTo(center_x - 20, center_y);
    ctx.lineTo(center_x, center_y - 40);
    ctx.fill();
    var grad = ctx.createRadialGradient(
      center_x,
      center_y,
      50,
      center_x,
      center_y,
      radius
    ); // grad.addColorStop(0.2, 'rgba(246,178,86, 0.2)');
    // grad.addColorStop(0.3, 'rgba(246,178,86, 0.1)');
    // grad.addColorStop(.5, 'rgba(45, 14, 16, 0.5)');

    grad.addColorStop(1, "#53301A");
    grad.addColorStop(0, "rgba(45, 14, 16, 1)");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(center_x, center_y, radius, l_, Math.PI + 0.2, true);
    ctx.lineTo(center_x - 20, center_y);
    ctx.lineTo(center_x, center_y - 40);
    ctx.fill();
    ctx.lineWidth = 15;
    ctx.strokeStyle = "#F7B349";
    ctx.beginPath();
    ctx.arc(center_x, center_y, radius, l_, Math.PI + 0.2, true);
    ctx.stroke();
    l_ += .01;

    if (l_ > -0.199) {
      clearInterval(simpleAnimationTimer);
    }
  }, 20);

function drawTick(angle, from, to) {
  var angle = angle,
    // 168 is start
    xs = center_x + radius * Math.cos((-angle * Math.PI) / 180) * from,
    ys = center_y + radius * Math.sin((-angle * Math.PI) / 180) * from,
    xe = center_x + radius * Math.cos((-angle * Math.PI) / 180) * to,
    ye = center_y + radius * Math.sin((-angle * Math.PI) / 180) * to;
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#8A6047";
  ctx.beginPath();
  ctx.moveTo(xs, ys);
  ctx.lineTo(xe, ye);
  ctx.stroke();
} // first level outer ticks

for (var i = 0; i < 157; i++)
 {
  drawTick(168 - i * 1, 1.1, 1.06);
} // dots

for (i = 0; i < 157; i++) {
  drawTick(168 - i * 1, 1.25, 1.255);
}

ctx.lineWidth = 1;
ctx.strokeStyle = "#603738";
ctx.beginPath();
ctx.arc(center_x, center_y, radius + 55, -0.2, Math.PI + 0.2, true);
ctx.stroke(); // first level outer ticks

for (i = 0; i < 58; i++) {
  drawTick(167 - i * 2.7, 1.3, 1.35);
}
export default canv;

