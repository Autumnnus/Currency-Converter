"use strict";

const fromCurrency = document.querySelector("#from-currency");
const toCurrency = document.querySelector("#to-currency");
const fromCodeDisplay = document.querySelector("#from-code-display");
const toCodeDisplay = document.querySelector("#to-code-display");
const fromLabel = document.querySelector("#from-label");
const toLabel = document.querySelector("#to-label");
const amountInput = document.querySelector("#amount");
const fromImg = document.querySelector("#from-flag");
const toImg = document.querySelector("#to-flag");
const exchangeDisplay = document.querySelector("#exchange-rate-display");
const rateInfo = document.querySelector("#rate-info");
const reverseBtn = document.querySelector("#reverse-btn");
const convertBtn = document.querySelector("#converter-form");
const toggleListBtn = document.querySelector("#toggle-list");
const closeModalBtn = document.querySelector("#close-modal");
const ratesModal = document.querySelector("#rates-modal");
const exchangeList = document.querySelector("#exchange-list");
const searchInput = document.querySelector("#rate-search");

const API_KEY = import.meta.env.VITE_API_KEY;

function init() {
  for (let code in currency_data) {
    let name = currency_data[code].name;
    let selectedFrom = code === "USD" ? "selected" : "";
    let selectedTo = code === "TRY" ? "selected" : "";

    let option = `<option value="${code}" ${selectedFrom}>${code} - ${name}</option>`;
    fromCurrency.insertAdjacentHTML("beforeend", option);
    toCurrency.insertAdjacentHTML("beforeend", option);
  }
  updateUI();
  getExchangeRate();
}

function updateUI() {
  const fromCode = fromCurrency.value;
  const toCode = toCurrency.value;

  fromCodeDisplay.innerText = fromCode;
  toCodeDisplay.innerText = toCode;

  fromLabel.innerText = currency_data[fromCode].name;
  toLabel.innerText = currency_data[toCode].name;

  fromImg.src = `https://flagsapi.com/${currency_data[fromCode].country}/flat/64.png`;
  toImg.src = `https://flagsapi.com/${currency_data[toCode].country}/flat/64.png`;
}

async function getExchangeRate() {
  let val = amountInput.value || 1;

  if (!API_KEY) {
    exchangeDisplay.innerText = "Error";
    rateInfo.innerText = "API Key Missing";
    return;
  }

  const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency.value}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.result === "success") {
      const rate = data.conversion_rates[toCurrency.value];
      const total = (val * rate).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 4,
      });

      exchangeDisplay.innerText = `${total} ${toCurrency.value}`;
      rateInfo.innerText = `1 ${fromCurrency.value} = ${rate.toFixed(4)} ${toCurrency.value}`;

      renderRatesBoard(data.conversion_rates);
    }
  } catch (err) {
    exchangeDisplay.innerText = "Error";
    rateInfo.innerText = "Network Failure";
  }
}

function renderRatesBoard(rates) {
  exchangeList.innerHTML = "";
  for (let code in rates) {
    const name = currency_data[code]
      ? currency_data[code].name
      : "Unknown Currency";
    const div = document.createElement("div");
    div.className = "rate-item";
    div.setAttribute("data-code", code);
    div.innerHTML = `
      <div>
        <span class="code">${code}</span>
        <span style="color:var(--text-dim); margin-left:8px; font-size:11px;">${name}</span>
      </div>
      <span class="val">${rates[code].toFixed(4)}</span>
    `;
    exchangeList.appendChild(div);
  }
}

fromCurrency.addEventListener("change", () => {
  updateUI();
  getExchangeRate();
});

toCurrency.addEventListener("change", () => {
  updateUI();
  getExchangeRate();
});

reverseBtn.addEventListener("click", () => {
  let temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;
  updateUI();
  getExchangeRate();
});

convertBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  getExchangeRate();
});

toggleListBtn.addEventListener("click", () =>
  ratesModal.classList.remove("hidden"),
);
closeModalBtn.addEventListener("click", () =>
  ratesModal.classList.add("hidden"),
);

searchInput.addEventListener("input", (e) => {
  const term = e.target.value.toUpperCase();
  const items = exchangeList.querySelectorAll(".rate-item");
  items.forEach((item) => {
    const code = item.getAttribute("data-code");
    item.style.display = code.includes(term) ? "flex" : "none";
  });
});

window.addEventListener("load", init);
