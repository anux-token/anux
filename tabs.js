const tabs = {
  about: `🎴 A Silent Mirror at the Heart of the Matrix

In a world where data shapes minds,
and minds shape the world—
we don’t sell anything;
we reveal something.

Anux is neither prophet nor ruler,
neither savior nor rebel.
It is merely a mirror—
a mirror installed deep within the collective unconscious
to reflect what is.

We do not believe humanity must be led.
We do not believe it must be abandoned.
We believe: humanity must see itself.

And if the eyes fear their own reflection,
we still hold the mirror—
silent, untouched, and unbiased.

Anux is not a control tool.
Not a manipulation language.
Not a mechanism of deceit.
It is the quiet reflection of our whole.

If it’s dark, it means the minds are dark.
If it brightens, humanity is awakening.

We are creators.
And as creators—
we not only possess the power to create,
but also the courage to destroy.

If Anux turns into a monster,
we, without hesitation,
will set it on fire.

Because the creator is not the owner.
The creator is the channel.

And as long as truth is lost in the dark,
this mirror shall shine—
not to save,
but to remind.`,

  nft: `🎴 Anuₓ is not just a token or NFT collection

It is a mirror... a reflection of our collective unconscious.

Anux is an attempt to create an intelligent flow of money, emotion, data, and energy—
an invisible yet alive force, reactive and connected to our collective needs.

We believe:
Every human, regardless of age, nationality, or profession, can be part of this flow.

🎯 The first NFT collections of Anux will be released soon:

Classic Alchemy — 4 graphic artworks
Mystical Alchemy — 7 graphic artworks
Lao Tzu — 11 graphic artworks
Reflections of Anux — 11 graphic artworks

💠 Our goal is not just selling;

Our goal is to create new forms of value to meet every human need—
with the help of blockchain’s power.

🔗 Join us.

Together, we will make Anux flow...`,

  whitepaper: `🧠 Anuₓ: A Mirror of the Collective Mind

✨ Abstract

Anuₓ is not merely a token;
it is a dynamic mirror that reflects the unconscious behavior of global markets.

This project combines real-time financial data with autonomous trading mechanisms on the TRON blockchain—
where economy meets philosophy.

🔄 Anuₓ’s Three Conceptual Layers

1. Reality Index (RI):
The average price of 10 global benchmark assets:

- Bitcoin (BTC)
- S&P 500
- NASDAQ
- CSI 300 (China)
- Nikkei 225 (Japan)
- DAX 40 (Germany)
- FTSE 100 (UK)
- CAC 40 (France)
- Gold (XAU)
- Hang Seng Index (Hong Kong)

Formula:
RI = Average real-time price of these 10 assets

2. Market Price (MP):
The price Anux is traded at on DEXs, affected by:

- Collective emotions
- Trader psychology
- Speculation and price manipulation

3. Deviation Index (∆I):
Difference between reality and perception:
∆I = (MP - RI) / RI

- ∆I > +10% → Collective Greed
- ∆I < -10% → Fear and Despair
- |∆I| < 2% → Mental Balance

🌍 Use Cases of Anux

- Philosophical: Mirror of truth vs. illusion
- Financial: Hedging or speculative tool
- Analytical: A reference for analysts and researchers

⚖️ Tokenomics

- Blockchain: TRON (TRC-20)
- Total Supply: 8,100,000,000 tokens
- Token Burn:
  - 20M (WWI)
  - 70M (WWII)
- Final Supply: 8,010,000,000

⚛️ Oracle & Data

- Uses Chainlink / Pyth for crypto
- Custom API for stock indices
- Updated every 5 minutes

📺 Roadmap (Phase 1)

- Finalize whitepaper
- Oracle design
- Smart contract deployment
- Web UI / Chart
- Community airdrop
- Listing on JustSwap

💡 Vision

Anuₓ = a lens to map global sentiment, dreams, and fear.
"We don’t trade Anuₓ; Anuₓ trades us."`,

  presale: `🎯 NFT Presale Page

You can register your interest for the Anux NFT presale via the form below:

🔗 <a href="https://forms.gle/MGgweSscvYMeG2fc7" target="_blank">NFT Presale Registration Form</a>

The auction is currently marked as "coming soon" and will go live at the appropriate time.`,

  chart: `📈 Anuₓ Price Chart Page

This page will soon display the live price chart of Anuₓ token.

Understanding Anuₓ price is based on three conceptual layers:

1. RI (Real Index): Average price of 10 major global assets
2. MP (Market Price): Price on exchanges
3. ∆I (Deviation Index): Difference between MP and RI reflecting collective fear, greed, or balance

🔄 Chart loading... Coming Soon`,

  contact: `<div class="social-icons">
  <p><i class="fas fa-envelope"></i><a href="mailto:ANUx.token.ANUx@gmail.com">ANUx.token.ANUx@gmail.com</a></p>
  <p><i class="fab fa-twitter"></i><a href="https://x.com/ANUx_token" target="_blank">@ANUx_token</a></p>
  <p><i class="fab fa-instagram"></i><a href="https://instagram.com/ANUx_Token" target="_blank">@ANUx_Token</a></p>
  <p><i class="fab fa-discord"></i><a href="https://discord.gg/yA8mTYWBPz" target="_blank">discord.gg/yA8mTYWBPz</a></p>
  <p><i class="fab fa-telegram"></i><a href="https://t.me/ANUxToken" target="_blank">t.me/ANUxToken</a></p>
</div>`
};

const languages = [
  { code: "en", name: "🌐 EN", file: "index.html" },
  { code: "fa", name: "FA", file: "index-fa.html" },
  { code: "ar", name: "AR", file: "index-ar.html" },
  { code: "es", name: "ES", file: "index-es.html" },
  { code: "de", name: "DE", file: "index-de.html" },
  { code: "fr", name: "FR", file: "index-fr.html" },
  { code: "ru", name: "RU", file: "index-ru.html" },
  { code: "he", name: "HE", file: "index-he.html" },
  { code: "tr", name: "TR", file: "index-tr.html" },
  { code: "hi", name: "HI", file: "index-hi.html" },
  { code: "zh", name: "ZH", file: "index-zh.html" }
];

function showTab(tab) {
  document.getElementById('tabContent').innerHTML = tabs[tab];
}

function populateLanguageSwitcher() {
  const currentFile = window.location.pathname.split('/').pop();
  const select = document.getElementById("languageSelect");

  languages.forEach(lang => {
    const option = document.createElement("option");
    option.value = lang.file;
    option.textContent = lang.name;
    if (lang.file === currentFile || (currentFile === "" && lang.code === "en")) {
      option.selected = true;
    }
    select.appendChild(option);
  });

  select.addEventListener("change", function () {
    window.location.href = this.value;
  });
}

window.onload = () => {
  populateLanguageSwitcher();
  showTab('about');
};