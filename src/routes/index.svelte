<svelte:head>
    <title>CZA Osijek</title>
</svelte:head>

<style>
    .cza-intro {
        margin-top: -80px; /*Header height*/
        position: relative;
        z-index: 4;
        padding-bottom: 200px;
    }
    .cza-navigation {
        margin-top: -100px;
        position: relative;
        z-index: 5;
        padding: 0 10px;
    }
    .cza-navigation-container {
        display: flex;
        flex-wrap: wrap;
        max-width: 1400px;
        width: 100%;
        margin: auto;
        padding: 40px;
        background: var(--panel-theme);
        box-shadow: 0 0 50px 0 rgba(0,0,0,.3);
    }
    .cza-navigation-container-item {
        width: calc(100% / 6 - 40px);
        margin: 20px;
        padding-bottom: 10px;
        border-bottom: 4px solid var(--panel-tertiary);
        transition: .2s;
    }
    .cza-navigation-container-item-title::after {
        content: '→';
        display: inline-block;
        transition: .2s;
        opacity: 0;
        margin-left: 5px;
    }
    .cza-navigation-container-item:hover {
        border-bottom: 4px solid var(--panel-secondary);
    }
    .cza-navigation-container-item:hover > .cza-navigation-container-item-title::after {
        opacity: 1;
        margin-left: 10px;
    }
    @media (max-width: 1200px) {
        .cza-navigation-container-item {
            width: calc(100% / 3 - 40px);
        }
    }
    @media (max-width: 900px) {
        .cza-intro {
            margin-top: 0;
            z-index: 1;
        }
        .cza-navigation {
            z-index: 2;
        }
        .cza-navigation-container {
            padding: 20px;
        }
        .cza-navigation-container-item {
            width: calc(100% / 2 - 40px);
        }
    }
</style>

<section class="primary bg ta-center p-t-xl cza-intro">
    <img class="m-b-s" src="assets/images/logo-light.svg" alt="Centar za autizam Osijek." width="120">
    <p class="fs-large fw-bold m-b-xl">Centar za autizam Osijek</p>
    <h2 class="font-secondary fw-normal">“Ako me hoćeš upoznati<br>Uzmi me za ruku<br>Traži od mene ono što mogu pružiti<br>Ići ću pored tebe<br>Zajedno ćemo rasti<br>Ako me želiš razumjeti<br>Možemo biti prijatelji”</h2>
</section>

<section class="cza-navigation">
    <div class="cza-navigation-container">
        <a class="cza-navigation-container-item" href="o-nama">
            <h6 class="cza-navigation-container-item-title m-b-s">O nama</h6>
            <p class="fs-small">Kako smo nastali, koja nam je misija i vizija te tko su naši djelatnici.</p>
        </a>
        <a class="cza-navigation-container-item" href="programi">
            <h6 class="cza-navigation-container-item-title m-b-s">Programi</h6>
            <p class="fs-small">Saznajte više o osnovnim programima, terapijskim postupcima i izvannastavnim aktivnostima Centra.</p>
        </a>
        <a class="cza-navigation-container-item" href="projekti">
            <h6 class="cza-navigation-container-item-title m-b-s">Projekti</h6>
            <p class="fs-small">Aktualni projekti i suradnja.</p>
        </a>
        <a class="cza-navigation-container-item" href="novosti">
            <h6 class="cza-navigation-container-item-title m-b-s">Novosti</h6>
            <p class="fs-small">Provjerite najnovije obavijesti i pratite novosti vezane uz rad Centra.</p>
        </a>
        <a class="cza-navigation-container-item" href="galerija">
            <h6 class="cza-navigation-container-item-title m-b-s">Galerija</h6>
            <p class="fs-small">Istražite fotografije Centra i pogledajte galeriju raznih događanja u sklopu rada Centra.</p>
        </a>
        <a class="cza-navigation-container-item" href="kontakt">
            <h6 class="cza-navigation-container-item-title m-b-s">Kontakt</h6>
            <p class="fs-small">Saznajte kontakt informacije, provjerite gdje se nalazimo i postavite upit.</p>
        </a>
    </div>
</section>

<section class="grid p-y-xl">
    <div class="col-6 col-s-0">
        <picture>
            <source srcset="assets/images/home/about.webp" type="image/webp">
            <source srcset="assets/images/home/about.png" type="image/png">
            <img src="assets/images/sv-katarina.png" alt="Slike centra.">
        </picture>

    </div>
    <div class="col-6 col-s-12 flex fd-col jc-center ai-start">
        <h2 class="title m-b-l">O nama</h2>
        <p class="m-b-m">Vrtićki, odnosno predškolski odgojno-obrazovni program Centra za autizam Osijek obuhvaća dvije vrtićke skupine pod vodstvom edukacijskih rehabilitatorica. Svaku skupinu pohađaju 4-5 djece. Odgojno-obrazovni rad u ovom programu temelji se na temeljitoj procjeni spoznajnog razvoja, socioemocionalnog razvoja, grube i fine motorike, brige o sebi, komunikacijskih i govornih vještina te predakademskih vještina i kreativnog stvaralaštva.</p>
        <p class="m-b-xs">Suradnja se odvija putem:</p>
        <ul class="m-b-l">
            <li>Individualnih razgovora,</li>
            <li>Zajedničkih informativnih sastanaka,</li>
            <li>Svakodnevne razmjene informacija po potrebi,</li>
            <li>Grupnih radionica i individualnih poduka,</li>
            <li>Kutka za roditelje (informativnog i edukativnog) na web stranici Centra.</li>
        </ul>
        <a class="btn" href="o-nama">Saznaj više</a>
    </div>
</section>