<script>
// ฟังก์ชันจำลองข้อมูล Launchpad
const launchpadData = [
  {
    name: "Div Coin",
    rate: "1 MATIC = 10,000 DIV",
    soft: 1788,
    hard: 7150,
    raised: 1167,
    liquidity: 55,
    lockup: "30 days",
    endTime: "00:18:39:10",
    chain: "Polygon",
    status: "live"
  },
  {
    name: "Levessa",
    rate: "1 USDT = 5 LVSS",
    soft: 5000,
    hard: 10000,
    raised: 0,
    liquidity: 0,
    lockup: "Unlocked",
    endTime: "15:13:57:10",
    chain: "Polygon",
    status: "live"
  },
  {
    name: "SAUDI",
    rate: "Fair Launch",
    soft: 1000,
    hard: 1000,
    raised: 0,
    liquidity: 51,
    lockup: "180 days",
    endTime: "11:01:40:10",
    chain: "Polygon",
    status: "upcoming"
  }
];

function loadLaunchpads() {
  const container = document.querySelector(".launchpad-grid");
  launchpadData.forEach(data => {
    const card = document.createElement("div");
    card.className = "launchpad-card";
    card.innerHTML = `
      <div class="launchpad-status ${data.status === 'live' ? 'status-live' : 'status-upcoming'}">${data.status === 'live' ? 'Sale Live' : 'Upcoming'}</div>
      <div class="launchpad-title">${data.name}</div>
      <div class="launchpad-rate">${data.rate}</div>
      <div class="launchpad-cap">Soft/Hard: ${data.soft} - ${data.hard}</div>
      <div class="launchpad-progress">
        Progress: ${(data.raised / data.hard * 100).toFixed(2)}%
        <div class="progress-bar"><div class="fill" style="width: ${(data.raised / data.hard * 100).toFixed(2)}%"></div></div>
      </div>
      <div class="launchpad-details">
        Liquidity: ${data.liquidity}%<br>
        Lockup: ${data.lockup}<br>
        Sale Ends In: ${data.endTime}
      </div>
      <button class="btn-view">View</button>
    `;
    container.appendChild(card);
  });
}

// เรียกฟังก์ชันหลังโหลดหน้า
window.onload = loadLaunchpads;
</script>
