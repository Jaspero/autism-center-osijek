<svelte:head>
    <title>CZA Osijek</title>
</svelte:head>

<script>
    import Hero from './components/Hero.svelte';
    import Navigation from './components/Navigation.svelte';
    import Banner from './components/Banner.svelte';
</script>

<style>
    .cza-index-hero {
        position: relative;
        z-index: 4;
        margin-top: -80px;
    }
    .cza-index-navigation {
        padding: 0 10px;
        position: relative;
        z-index: 4;
        background: linear-gradient(to bottom, var(--primary-theme) 0%,var(--primary-theme) 50%,transparent 50%,transparent 100%);
    }
    @media (max-width: 900px) {
        .cza-index-hero {
            position: static;
            margin-top: 0;
        }
        .cza-index-navigation {
            position: static;
        }
    }
</style>

<!--Hero-->
<section class="cza-index-hero">
    <Hero/>
</section>

<!--Navigation-->
<section class="cza-index-navigation">
    <Navigation/>
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