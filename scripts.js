
function toggleTheme() {
  document.body.classList.toggle('light-mode');
}

document.addEventListener("DOMContentLoaded", function () {
  const fxData = [
    { pair: "EUR/USD", rate: "1.0843", change: 0.12 },
    { pair: "USD/JPY", rate: "142.89", change: -0.21 },
    { pair: "GBP/USD", rate: "1.2711", change: 0.18 }
  ];

  const container = document.getElementById("fxRates");
  fxData.forEach(item => {
    const div = document.createElement("div");
    div.className = `card ${item.change >= 0 ? 'up' : 'down'}`;
    div.innerHTML = \`
      <h3>\${item.pair}</h3>
      <p class="rate">\${item.rate}</p>
      <p class="change \${item.change >= 0 ? 'up' : 'down'}">\${item.change > 0 ? '+' : ''}\${item.change}%</p>
    \`;
    container.appendChild(div);
  });

  const ctx = document.getElementById('strategyChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      datasets: [{
        label: 'EUR/USD',
        data: [1.07, 1.08, 1.076, 1.081, 1.0843],
        borderColor: '#facc15',
        backgroundColor: 'transparent',
        tension: 0.4
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: { x: { display: false }, y: { display: false } }
    }
  });
});
