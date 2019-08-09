<svelte:head>
    <title>CZA Osijek</title>
</svelte:head>

<script>
    import Banner from './components/Banner.svelte';
</script>

<style>
    /* Intro */
    .cza-intro {
        margin-top: -80px; /*Header height*/
        position: relative;
        z-index: 4;
        padding-bottom: 200px;
    }
    .cza-intro-left {
        position: absolute;
        left: 0;
        top: 10%;
        width: calc(50% - 250px);
        height: 80%;
        object-fit: contain;
        object-position: left;
        pointer-events: none;
    }
    .cza-intro-right {
        position: absolute;
        right: 0;
        top: 10%;
        width: calc(50% - 250px);
        height: 80%;
        object-fit: contain;
        object-position: right;
        pointer-events: none;
    }
    @media (max-width: 1200px) {
        .cza-intro-left,
        .cza-intro-right {
            display: none;
        }
    }
    @media (max-width: 900px) {
        .cza-intro {
            margin-top: 0;
            z-index: 1;
        }
    }

    /* Navigation */
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
        .cza-navigation {
            z-index: 2;
        }
        .cza-navigation-container {
            padding: 20px;
        }
        .cza-navigation-container-item {
            width: calc(100% / 2 - 20px);
            margin: 10px 10px 20px;
        }
    }
</style>

<!--Intro-->
<section class="cza-intro primary bg ta-center p-t-xl">
    <img class="m-b-s" src="assets/images/logo-light.svg" alt="Centar za autizam Osijek." width="120">
    <p class="fs-large fw-bold m-b-xl">Centar za autizam Osijek</p>
    <h2 class="font-secondary fw-normal">“Ako me hoćeš upoznati<br>Uzmi me za ruku<br>Traži od mene ono što mogu pružiti<br>Ići ću pored tebe<br>Zajedno ćemo rasti<br>Ako me želiš razumjeti<br>Možemo biti prijatelji”</h2>
    <picture>
        <source srcset="assets/images/home/intro-left.webp" type="image/webp">
        <source srcset="assets/images/home/intro-left.png" type="image/png">
        <img class="cza-intro-left" src="assets/images/home/intro-left.png" alt="Slike centra.">
    </picture>
    <picture>
        <source srcset="assets/images/home/intro-right.webp" type="image/webp">
        <source srcset="assets/images/home/intro-right.png" type="image/png">
        <img class="cza-intro-right" src="assets/images/home/intro-right.png" alt="Slike centra.">
    </picture>
</section>

<!--Navigacija-->
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

<!--O nama-->
<section class="grid p-t-xl">
    <div class="col-6 col-s-0">
        <picture>
            <source srcset="assets/images/home/about.webp" type="image/webp">
            <source srcset="assets/images/home/about.png" type="image/png">
            <img src="assets/images/home/about.png" alt="Slike centra.">
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

<!--Programi-->
<section class="grid p-y-xl">
    <div class="col-12">
        <h2 class="title m-b-l">Programi</h2>
    </div>
    <div class="col-12">
        <div class="grid jc-start">
            <a href="." class="col-3 col-m-6 col-xs-12 card">
                <p class="fs-small fg-secondary p-x-s">OSNOVNI PROGRAM</p>
                <h3 class="p-x-s p-b-s">Vrtićki program</h3>
                <img class="card-image" src="assets/images/placeholder.png" alt="">
            </a>
            <a href="." class="col-3 col-m-6 col-xs-12 card">
                <p class="fs-small fg-secondary p-x-s">OSNOVNI PROGRAM</p>
                <h3 class="p-x-s p-b-s">Posebni program uz individualizirane postupke</h3>
                <img class="card-image" src="assets/images/placeholder.png" alt="">
            </a>
            <a href="." class="col-6 col-m-12 card">
                <p class="fs-small fg-secondary p-x-s">OSNOVNI PROGRAM</p>
                <h3 class="p-x-s p-b-s">Posebni program za stjecanje kompetencija u aktivnostima svakodnevnog života i rada uz individualizirane postupke</h3>
                <img class="card-image" src="assets/images/placeholder.png" alt="">
            </a>
            <a href="." class="col-3 col-m-6 col-xs-12 card">
                <p class="fs-small fg-secondary p-x-s">OSNOVNI PROGRAM</p>
                <h3 class="p-x-s p-b-s">Produženi stručni postupak</h3>
                <img class="card-image" src="assets/images/placeholder.png" alt="">
            </a>
            <a href="." class="col-3 col-m-6 col-xs-12 card">
                <p class="fs-small fg-secondary p-x-s">TERAPIJSKI POSTUPCI</p>
                <h3 class="p-x-s p-b-s">Logopedska terapija</h3>
                <img class="card-image" src="assets/images/placeholder.png" alt="">
            </a>
            <a href="." class="col-3 col-m-6 col-xs-12 card">
                <p class="fs-small fg-secondary p-x-s">TERAPIJSKI POSTUPCI</p>
                <h3 class="p-x-s p-b-s">Muzikoterapija</h3>
                <img class="card-image" src="assets/images/placeholder.png" alt="">
            </a>
            <a href="." class="col-3 col-m-6 col-xs-12 card">
                <p class="fs-small fg-secondary p-x-s">TERAPIJSKI POSTUPCI</p>
                <h3 class="p-x-s p-b-s">Senzorna integracija</h3>
                <img class="card-image" src="assets/images/placeholder.png" alt="">
            </a>
        </div>
    </div>
</section>

<!--Banner-->
<Banner>Zanima vas više?</Banner>

<!--Projekti-->
<section class="grid p-y-xl">
    <div class="col-12">
        <h2 class="title m-b-l">Projekti</h2>
    </div>
    <div class="col-12">
        <div class="grid jc-start">
            <a href="." class="col-6 col-s-12 card">
                <div class="p-x-l p-b-l">
                    <h3 class="card-title m-b-m">Volontiranje</h3>
                    <p>Volonterstvo (volontiranje, volonterski/dobrovoljni rad) u najširem značenju podrazumijeva rad pojedinca na dobrobit drugih pri čemu je njegovo djelovanje slobodno odabrano, neprofitno i bez financijske dobiti. </p>
                </div>
            </a>
            <a href="." class="col-6 col-s-12 card">
                <div class="p-x-l p-b-l">
                    <h3 class="card-title m-b-m">Asistent u nastavi</h3>
                    <p>Pomoćnike u vrtiću osigurava Grad Osijek na temelju zahtjeva koji zajedno s potrebnom dokumentacijom podnosi Centar.</p>
                </div>
            </a>
            <a href="." class="col-6 col-s-12 card">
                <div class="p-x-l p-b-l">
                    <h3 class="card-title m-b-m">OSIgurajmo im JEdnaKost 4</h3>
                    <p>Projekt OSIgurajmo im JEdnaKost 4 sufinanciran je sredstvima Europske unije iz Europskog socijalnog fonda, a vodi ga Grad Osijek zajedno s partnerima.Projektom je omogućena stručna podrška pomoćnika u nastavi učenicima s teškoćama u razvoju, kojima su najpotrebniji. </p>
                </div>
            </a>
            <a href="." class="col-6 col-s-12 card">
                <div class="p-x-l p-b-l">
                    <h3 class="card-title m-b-m">Primjena tehnologije 21. stoljeća za promociju komunikacije, obrazovanja i socijalnog uključivanja djece rane dobi s teškoćama u razvoju</h3>
                    <p>Centar za autizam uključio se u projekt Primjena tehnologije 21. stoljeća za promociju komunikacije, obrazovanja i socijalnog uključivanja djece rane dobi s teškoćama u razvoju. Projekt se provodi u suradnji Unicefa, Edukacijsko rehabilitacijskog fakulteta i Fakulteta elektrotehnike i računarstva. Program će trajati 17 mjeseci, a početak je svibanj 2019. godine.</p>
                </div>
            </a>
        </div>
    </div>
</section>

<!--Novosti-->
<section class="grid p-y-xl">
    <div class="col-12">
        <h2 class="title m-b-l">Novosti</h2>
    </div>
    <div class="col-12">
        <div class="grid jc-start">
            <a href="." class="col-3 col-m-6 col-xs-12 card">
                <p class="fs-small fg-secondary p-x-s">21.09.2019.</p>
                <h3 class="p-x-s p-b-s">Novi natječaj za posao</h3>
                <img class="card-image" src="assets/images/placeholder.png" alt="">
            </a>
            <a href="." class="col-3 col-m-6 col-xs-12 card">
                <p class="fs-small fg-secondary p-x-s">21.09.2019.</p>
                <h3 class="p-x-s p-b-s">Novi natječaj za posao</h3>
                <img class="card-image" src="assets/images/placeholder.png" alt="">
            </a>
            <a href="." class="col-3 col-m-6 col-xs-12 card">
                <p class="fs-small fg-secondary p-x-s">21.09.2019.</p>
                <h3 class="p-x-s p-b-s">Novi natječaj za posao</h3>
                <img class="card-image" src="assets/images/placeholder.png" alt="">
            </a>
            <a href="." class="col-3 col-m-6 col-xs-12 card">
                <p class="fs-small fg-secondary p-x-s">21.09.2019.</p>
                <h3 class="p-x-s p-b-s">Novi natječaj za posao</h3>
                <img class="card-image" src="assets/images/placeholder.png" alt="">
            </a>
            <a href="." class="col-3 col-m-6 col-xs-12 card">
                <p class="fs-small fg-secondary p-x-s">21.09.2019.</p>
                <h3 class="p-x-s p-b-s">Novi natječaj za posao</h3>
                <img class="card-image" src="assets/images/placeholder.png" alt="">
            </a>
            <a href="." class="col-3 col-m-6 col-xs-12 card">
                <p class="fs-small fg-secondary p-x-s">21.09.2019.</p>
                <h3 class="p-x-s p-b-s">Novi natječaj za posao</h3>
                <img class="card-image" src="assets/images/placeholder.png" alt="">
            </a>
            <a href="." class="col-3 col-m-6 col-xs-12 card">
                <p class="fs-small fg-secondary p-x-s">21.09.2019.</p>
                <h3 class="p-x-s p-b-s">Novi natječaj za posao</h3>
                <img class="card-image" src="assets/images/placeholder.png" alt="">
            </a>
            <a href="." class="col-3 col-m-6 col-xs-12 card">
                <p class="fs-small fg-secondary p-x-s">21.09.2019.</p>
                <h3 class="p-x-s p-b-s">Novi natječaj za posao</h3>
                <img class="card-image" src="assets/images/placeholder.png" alt="">
            </a>
            <a href="novosti" class="col-12 p-a-m card-link">
                <p class="fs-large ta-right">Pregled svih <span class="c-primary">novosti →</span></p>
            </a>
        </div>
    </div>
</section>