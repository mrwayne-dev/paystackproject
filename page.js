/* ============================================================
   Refunds page — mock data + interactions
   All data below is fabricated for UI demo purposes only.
   ============================================================ */

const REFUNDS = [
  {
    id: 1,
    customer: "oliviabennett@gmail.com",
    customerName: "Olivia Bennett",
    reference: "rfd_k3mpibydvyfrhclzpypq",
    amount: 50900.00,
    status: "Processed",
    date: "Oct 7, 2026, 10:06 AM",
    channel: "Bank",
    fees: 876.65,
    refundedAt: "Oct 7, 2026, 10:06 AM UTC",
    message: "Refund successful",
    requestedAmount: 50900.00,
    cardType: "IBANK_OPAY",
    authorization: "AUTH_kth033chjj",
    bankCountry: "OPay Digital Services Limited (OPay) (NG)",
    ip: "197.211.57.27",
    duration: "09:34",
    device: "Phone",
    attempts: "0 attempts",
    errors: "0 errors",
    refundNote: "This transaction was refunded in full to the original payment method.",
    timeline: [
      { time: "00:09", text: "Refund request created", success: false },
      { time: "00:37", text: "Set payment method to: null", success: false },
      { time: "05:50", text: "Set payment method to: opay", success: false },
      { time: "06:08", text: "Third-party authentication window opened", success: false },
      { time: "09:25", text: "Successfully refunded with ibank", success: true },
      { time: "09:34", text: "Third-party authentication window closed", success: false },
    ],
  },
  {
    id: 2,
    customer: "marcusreid@yahoo.com",
    customerName: "Marcus Reid",
    reference: "rfd_9ztqw1xplm7bncd0asdf",
    amount: 12500.00,
    status: "Pending",
    date: "Oct 6, 2026, 4:21 PM",
    channel: "Card",
    fees: 312.50,
    refundedAt: "Oct 6, 2026, 4:21 PM UTC",
    message: "Awaiting bank confirmation",
    requestedAmount: 12500.00,
    cardType: "VISA DEBIT",
    authorization: "AUTH_p09alsm22x",
    bankCountry: "Guaranty Trust Bank (NG)",
    ip: "102.89.34.11",
    duration: "02:11",
    device: "Desktop",
    attempts: "1 attempt",
    errors: "0 errors",
    refundNote: "Partial refund is pending settlement from the acquiring bank.",
    timeline: [
      { time: "00:04", text: "Refund request created", success: false },
      { time: "00:18", text: "Set payment method to: card", success: false },
      { time: "01:02", text: "Refund queued for processing", success: false },
      { time: "02:11", text: "Awaiting bank confirmation", success: false },
    ],
  },
  {
    id: 3,
    customer: "aishaokafor@gmail.com",
    customerName: "Aisha Okafor",
    reference: "rfd_bb72kqplznm4rt9wxcvf",
    amount: 7800.00,
    status: "Processing",
    date: "Oct 6, 2026, 11:47 AM",
    channel: "Bank",
    fees: 195.00,
    refundedAt: "Oct 6, 2026, 11:47 AM UTC",
    message: "Refund processing",
    requestedAmount: 7800.00,
    cardType: "IBANK_KUDA",
    authorization: "AUTH_z1x2c3v4b5",
    bankCountry: "Kuda Microfinance Bank (NG)",
    ip: "154.113.22.90",
    duration: "01:48",
    device: "Phone",
    attempts: "0 attempts",
    errors: "0 errors",
    refundNote: "Refund is being processed and should complete within 24 hours.",
    timeline: [
      { time: "00:07", text: "Refund request created", success: false },
      { time: "00:29", text: "Set payment method to: bank_transfer", success: false },
      { time: "01:48", text: "Refund processing", success: false },
    ],
  },
  {
    id: 4,
    customer: "danielosei@outlook.com",
    customerName: "Daniel Osei",
    reference: "rfd_mn45pokqwe8rtyu1zxcv",
    amount: 143200.00,
    status: "Processed",
    date: "Oct 5, 2026, 9:02 PM",
    channel: "Card",
    fees: 2148.00,
    refundedAt: "Oct 5, 2026, 9:02 PM UTC",
    message: "Refund successful",
    requestedAmount: 143200.00,
    cardType: "MASTERCARD",
    authorization: "AUTH_qwe098zxc1",
    bankCountry: "Access Bank (NG)",
    ip: "41.203.77.14",
    duration: "12:05",
    device: "Desktop",
    attempts: "2 attempts",
    errors: "1 error",
    refundNote: "This transaction was refunded in full after a duplicate charge.",
    timeline: [
      { time: "00:11", text: "Refund request created", success: false },
      { time: "01:20", text: "Set payment method to: card", success: false },
      { time: "04:33", text: "First attempt failed — retrying", success: false },
      { time: "10:52", text: "Successfully refunded with card", success: true },
      { time: "12:05", text: "Authentication window closed", success: false },
    ],
  },
  {
    id: 5,
    customer: "fatimahbello@gmail.com",
    customerName: "Fatimah Bello",
    reference: "rfd_lkj098hgf765dsa432mn",
    amount: 3400.00,
    status: "Failed",
    date: "Oct 5, 2026, 2:15 PM",
    channel: "Bank",
    fees: 85.00,
    refundedAt: "Oct 5, 2026, 2:15 PM UTC",
    message: "Refund declined by bank",
    requestedAmount: 3400.00,
    cardType: "IBANK_OPAY",
    authorization: "AUTH_rty456uio78",
    bankCountry: "OPay Digital Services Limited (OPay) (NG)",
    ip: "197.210.65.33",
    duration: "03:22",
    device: "Phone",
    attempts: "3 attempts",
    errors: "2 errors",
    refundNote: "Refund failed — the destination account could not be credited.",
    timeline: [
      { time: "00:05", text: "Refund request created", success: false },
      { time: "00:44", text: "Set payment method to: bank_transfer", success: false },
      { time: "02:10", text: "Attempt failed — insufficient details", success: false },
      { time: "03:22", text: "Refund declined by bank", success: false },
    ],
  },
  {
    id: 6,
    customer: "jamesadeyemi@yahoo.com",
    customerName: "James Adeyemi",
    reference: "rfd_cvb234nmk567qwe890rt",
    amount: 26750.00,
    status: "Processed",
    date: "Oct 4, 2026, 8:39 AM",
    channel: "Card",
    fees: 401.25,
    refundedAt: "Oct 4, 2026, 8:39 AM UTC",
    message: "Refund successful",
    requestedAmount: 26750.00,
    cardType: "VERVE",
    authorization: "AUTH_mnb098vcx12",
    bankCountry: "Zenith Bank (NG)",
    ip: "105.112.44.201",
    duration: "07:48",
    device: "Phone",
    attempts: "1 attempt",
    errors: "0 errors",
    refundNote: "This transaction was refunded in full at the customer's request.",
    timeline: [
      { time: "00:08", text: "Refund request created", success: false },
      { time: "00:52", text: "Set payment method to: card", success: false },
      { time: "06:30", text: "Successfully refunded with verve", success: true },
      { time: "07:48", text: "Authentication window closed", success: false },
    ],
  },
  {
    id: 7,
    customer: "ngozieze@gmail.com",
    customerName: "Ngozi Eze",
    reference: "rfd_poi765uyt432rew098qa",
    amount: 9900.00,
    status: "Pending",
    date: "Oct 3, 2026, 6:12 PM",
    channel: "Bank",
    fees: 148.50,
    refundedAt: "Oct 3, 2026, 6:12 PM UTC",
    message: "Awaiting settlement",
    requestedAmount: 9900.00,
    cardType: "IBANK_GTB",
    authorization: "AUTH_asd321fgh654",
    bankCountry: "Guaranty Trust Bank (NG)",
    ip: "197.149.90.77",
    duration: "00:58",
    device: "Desktop",
    attempts: "0 attempts",
    errors: "0 errors",
    refundNote: "Refund queued and awaiting the next settlement cycle.",
    timeline: [
      { time: "00:06", text: "Refund request created", success: false },
      { time: "00:33", text: "Set payment method to: bank_transfer", success: false },
      { time: "00:58", text: "Awaiting settlement", success: false },
    ],
  },
  {
    id: 8,
    customer: "tundelawal@outlook.com",
    customerName: "Tunde Lawal",
    reference: "rfd_zxc987vbn654mlk321po",
    amount: 61300.00,
    status: "Processed",
    date: "Oct 2, 2026, 1:28 PM",
    channel: "Card",
    fees: 919.50,
    refundedAt: "Oct 2, 2026, 1:28 PM UTC",
    message: "Refund successful",
    requestedAmount: 61300.00,
    cardType: "MASTERCARD",
    authorization: "AUTH_hjk159lot753",
    bankCountry: "First Bank of Nigeria (NG)",
    ip: "160.152.33.8",
    duration: "10:41",
    device: "Phone",
    attempts: "1 attempt",
    errors: "0 errors",
    refundNote: "This transaction was refunded in full following a cancelled order.",
    timeline: [
      { time: "00:10", text: "Refund request created", success: false },
      { time: "01:05", text: "Set payment method to: card", success: false },
      { time: "09:20", text: "Successfully refunded with card", success: true },
      { time: "10:41", text: "Authentication window closed", success: false },
    ],
  },
];

/* ---------------------- Helpers ---------------------- */
const fmtNGN = (n) =>
  "NGN " + n.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const statusClass = (s) => "status-" + s.toLowerCase();

const $ = (sel) => document.querySelector(sel);

function avatarGradient(seed) {
  const hues = [(seed * 47) % 360, (seed * 47 + 40) % 360];
  return `linear-gradient(135deg, hsl(${hues[0]} 45% 82%), hsl(${hues[1]} 45% 68%))`;
}

/* ---------------------- List view ---------------------- */
function renderSummary() {
  const processed = REFUNDS.filter((r) => r.status === "Processed");
  const total = processed.reduce((sum, r) => sum + r.amount, 0);
  const pending = REFUNDS.filter((r) => r.status === "Pending" || r.status === "Processing").length;

  $("#sum-total").textContent = fmtNGN(total);
  $("#sum-activity").textContent =
    REFUNDS.length + (REFUNDS.length === 1 ? " refund" : " refunds");
  $("#sum-pending").textContent = pending + " pending";
}

function renderTable() {
  const body = $("#refunds-body");
  body.innerHTML = "";

  REFUNDS.forEach((r) => {
    const tr = document.createElement("tr");
    tr.dataset.id = r.id;
    tr.innerHTML = `
      <td class="cell-customer">
        ${r.customerName}
        <span class="cust-sub">${r.customer}</span>
      </td>
      <td class="cell-ref">${r.reference}</td>
      <td class="cell-amount">${fmtNGN(r.amount)}</td>
      <td><span class="status-badge ${statusClass(r.status)}">${r.status}</span></td>
      <td class="cell-date">${r.date}</td>
    `;
    tr.addEventListener("click", () => showDetail(r.id));
    body.appendChild(tr);
  });
}

/* ---------------------- Detail view ---------------------- */
function showDetail(id) {
  const r = REFUNDS.find((x) => x.id === id);
  if (!r) return;

  // Breadcrumb
  $("#breadcrumb").innerHTML = `
    <span class="crumb-root" id="crumb-back">Refunds</span>
    <span class="crumb-sep">›</span>
    <span class="crumb-current">${r.reference}</span>
  `;
  $("#crumb-back").addEventListener("click", showList);

  // Left column
  $("#d-amount").textContent = fmtNGN(r.amount);
  const badge = $("#d-status");
  badge.textContent = r.status;
  badge.className = "status-badge " + statusClass(r.status);

  $("#d-reference").textContent = r.reference;
  $("#d-channel").textContent = r.channel;
  $("#d-fees").textContent = fmtNGN(r.fees);
  $("#d-paidat").textContent = r.refundedAt;
  $("#d-message").textContent = r.message;
  $("#d-requested").textContent = fmtNGN(r.requestedAmount);

  $("#d-avatar").style.background = avatarGradient(r.id);
  $("#d-customername").textContent = r.customerName;
  $("#d-customeremail").textContent = r.customer;

  // Right column / analytics
  $("#d-cardtype").textContent = r.cardType;
  $("#d-auth").textContent = r.authorization;
  $("#d-bank").textContent = r.bankCountry;
  $("#d-ip").textContent = r.ip;
  $("#d-duration").textContent = r.duration;
  $("#d-device").textContent = r.device;
  $("#d-attempts").textContent = r.attempts;
  $("#d-errors").textContent = r.errors;
  $("#d-refund-note").textContent = r.refundNote;

  const tl = $("#d-timeline");
  tl.innerHTML = "";
  r.timeline.forEach((ev) => {
    const li = document.createElement("li");
    if (ev.success) li.classList.add("success");
    li.innerHTML = `<span class="tl-time">${ev.time}</span><span class="tl-text">${ev.text}</span>`;
    tl.appendChild(li);
  });

  // Reset to Analytics tab
  switchTab("analytics");

  // Swap views
  $("#list-view").classList.add("hidden");
  $("#detail-view").classList.remove("hidden");
  window.scrollTo(0, 0);
}

function showList() {
  $("#breadcrumb").innerHTML = `<span class="crumb-root">Refunds</span>`;
  $("#detail-view").classList.add("hidden");
  $("#list-view").classList.remove("hidden");
  window.scrollTo(0, 0);
}

/* ---------------------- Tabs ---------------------- */
function switchTab(name) {
  document.querySelectorAll(".tab").forEach((t) =>
    t.classList.toggle("active", t.dataset.tab === name)
  );
  document.querySelectorAll(".tab-panel").forEach((p) => p.classList.add("hidden"));
  const panel = $("#panel-" + name);
  if (panel) panel.classList.remove("hidden");
}

/* ---------------------- Toast ---------------------- */
let toastTimer;
function showToast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 1800);
}

/* ---------------------- Init ---------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderSummary();
  renderTable();

  document.querySelectorAll(".tab").forEach((tab) =>
    tab.addEventListener("click", () => switchTab(tab.dataset.tab))
  );

  $("#copy-ref").addEventListener("click", () => {
    const ref = $("#d-reference").textContent;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(ref).then(() => showToast("Reference copied"));
    } else {
      showToast("Reference copied");
    }
  });

  $("#export-btn").addEventListener("click", () => showToast("Exporting CSV…"));
});
