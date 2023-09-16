const renderCanvas = function(label, enableDPR, enableScaling) {
  const container = document.createElement('div');
  const labelEl = document.createElement('h2');
  labelEl.textContent = label;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const dpr = enableDPR ? window.devicePixelRatio : 1;

  // If our canvas was already on the page instead of being created,
  // we could get the width and height using canvas.getBoundingClientRect()
  const width = 300;
  const height = 300;

  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  if (enableScaling) {
    ctx.scale(dpr, dpr);
  }
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(100, 100);
  ctx.lineTo(200, 200);
  ctx.arc(200, 150, 50, Math.PI / 2, Math.PI * 3/2, true);
  ctx.stroke();
  ctx.closePath();

  const renderLegend = function(list) {
    var result = '';
    for (var li of list) {
      result += renderLegendItem(li.label, li.value);
    }
    return `<ul>${result}</ul>`;
  }
  const renderLegendItem = function(label, value) {
    return `<li><span class="label">${label}</span>: ${value}</li>`;
  }

  const legendList = [
    { label: 'Device Pixel Ratio', value: dpr },
    { label: 'Canvas Internal Width', value: canvas.width },
    { label: 'Canvas Internal Height', value: canvas.height},
    { label: 'Canvas CSS Width', value: canvas.style.width },
    { label: 'Canvas CSS Height', value: canvas.style.height },
  ];
  const legendEl = document.createElement('section');
  legendEl.innerHTML = renderLegend(legendList);

  container.append(labelEl);
  container.append(canvas);
  container.append(legendEl);

  return container;
}