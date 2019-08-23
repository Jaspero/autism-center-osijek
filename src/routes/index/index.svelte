<svelte:head>
    <title>CZA Osijek</title>
</svelte:head>

<script>
    import Hero from './components/Hero.svelte';
    import Navigation from './components/Navigation.svelte';
    import Banner from '../../shared/components/Banner.svelte';
    import Card from '../../shared/components/Card.svelte';
    import Title from '../../shared/components/Title.svelte';
    import ViewAll from "../../shared/components/ViewAll.svelte";
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
<section class="generic-section grid">
    <div class="col-6 col-s-12">
        <picture>
            <source srcset="assets/images/home/about.webp" type="image/webp">
            <source srcset="assets/images/home/about.png" type="image/png">
            <img src="assets/images/home/about.png" alt="Slike centra.">
        </picture>
    </div>
    <div class="col-6 col-s-12 flex fd-col jc-center ai-start">
        <Title>O nama</Title>
        <p>Vrtićki, odnosno predškolski odgojno-obrazovni program Centra za autizam Osijek obuhvaća dvije vrtićke skupine pod vodstvom edukacijskih rehabilitatorica. Svaku skupinu pohađaju 4-5 djece. Odgojno-obrazovni rad u ovom programu temelji se na temeljitoj procjeni spoznajnog razvoja, socioemocionalnog razvoja, grube i fine motorike, brige o sebi, komunikacijskih i govornih vještina te predakademskih vještina i kreativnog stvaralaštva.</p>
        <p>Suradnja se odvija putem:</p>
        <ul>
            <li>Individualnih razgovora,</li>
            <li>Zajedničkih informativnih sastanaka,</li>
            <li>Svakodnevne razmjene informacija po potrebi,</li>
            <li>Grupnih radionica i individualnih poduka,</li>
            <li>Kutka za roditelje (informativnog i edukativnog) na web stranici Centra.</li>
        </ul>
        <br>
        <a class="btn" href="../o-nama">Saznaj više</a>
    </div>
</section>

<!--Programi-->
<section class="generic-section grid">
    <div class="col-12">
        <Title>Programi</Title>
    </div>
    <div class="col-12">
        <div class="grid jc-start">
            <Card
                hrefValue=""
                classValue="col-3 col-m-6 col-xs-12"
                subtitleValue="OSNOVNI PROGRAM"
                titleValue="Vrtićki program"
                imageValue="assets/images/placeholder.png">
            </Card>
            <Card
                hrefValue=""
                classValue="col-3 col-m-6 col-xs-12"
                subtitleValue="OSNOVNI PROGRAM"
                titleValue="Posebni program uz individualizirane postupke"
                imageValue="assets/images/placeholder.png">
            </Card>
            <Card
                hrefValue=""
                classValue="col-6 col-m-12 col-xs-12"
                subtitleValue="OSNOVNI PROGRAM"
                titleValue="Posebni program za stjecanje kompetencija u aktivnostima svakodnevnog života i rada uz individualizirane postupke"
                imageValue="assets/images/placeholder.png">
            </Card>
            <Card
                hrefValue=""
                classValue="col-3 col-m-6 col-xs-12"
                subtitleValue="OSNOVNI PROGRAM"
                titleValue="Produženi stručni postupak"
                imageValue="assets/images/placeholder.png">
            </Card>
            <Card
                hrefValue=""
                classValue="col-3 col-m-6 col-xs-12"
                subtitleValue="TERAPIJSKI POSTUPCI"
                titleValue="Logopedska terapija"
                imageValue="assets/images/placeholder.png">
            </Card>
            <Card
                hrefValue=""
                classValue="col-3 col-m-6 col-xs-12"
                subtitleValue="TERAPIJSKI POSTUPCI"
                titleValue="Muzikoterapija"
                imageValue="assets/images/placeholder.png">
            </Card>
            <Card
                hrefValue=""
                classValue="col-3 col-m-6 col-xs-12"
                subtitleValue="TERAPIJSKI POSTUPCI"
                titleValue="Senzorna integracija"
                imageValue="assets/images/placeholder.png">
            </Card>
        </div>
    </div>
</section>

<!--Banner-->
<Banner>Zanima vas više?</Banner>

<!--Projekti-->
<section class="generic-section grid">
    <div class="col-12">
        <Title>Projekti</Title>
    </div>
    <div class="col-12">
        <div class="grid jc-start">
            <Card
                hrefValue=""
                classValue="col-6 col-s-12"
                titleValue="Volontiranje"
                textValue="Volonterstvo (volontiranje, volonterski/dobrovoljni rad) u najširem značenju podrazumijeva rad pojedinca na dobrobit drugih pri čemu je njegovo djelovanje slobodno odabrano, neprofitno i bez financijske dobiti.">
            </Card>
            <Card
                hrefValue=""
                classValue="col-6 col-s-12"
                titleValue="Asistent u nastavi"
                textValue="Pomoćnike u vrtiću osigurava Grad Osijek na temelju zahtjeva koji zajedno s potrebnom dokumentacijom podnosi Centar.">
            </Card>
            <Card
                hrefValue=""
                classValue="col-6 col-s-12"
                titleValue="OSIgurajmo im JEdnaKost 4"
                textValue="Projekt OSIgurajmo im JEdnaKost 4 sufinanciran je sredstvima Europske unije iz Europskog socijalnog fonda, a vodi ga Grad Osijek zajedno s partnerima.Projektom je omogućena stručna podrška pomoćnika u nastavi učenicima s teškoćama u razvoju, kojima su najpotrebniji.">
            </Card>
            <Card
                hrefValue=""
                classValue="col-6 col-s-12"
                titleValue="Primjena tehnologije 21. stoljeća za promociju komunikacije, obrazovanja i socijalnog uključivanja djece rane dobi s teškoćama u razvoju"
                textValue="Centar za autizam uključio se u projekt Primjena tehnologije 21. stoljeća za promociju komunikacije, obrazovanja i socijalnog uključivanja djece rane dobi s teškoćama u razvoju. Projekt se provodi u suradnji Unicefa, Edukacijsko rehabilitacijskog fakulteta i Fakulteta elektrotehnike i računarstva. Program će trajati 17 mjeseci, a početak je svibanj 2019. godine.">
            </Card>
        </div>
    </div>
</section>

<!--Novosti-->
<section class="generic-section grid">
    <div class="col-12">
        <Title>Novosti</Title>
    </div>
    <div class="col-12">
        <div class="grid jc-start">
            <Card
                hrefValue=""
                classValue="col-3 col-m-6 col-xs-12"
                subtitleValue="21.09.2019."
                titleValue="Novi natječaj za posao"
                imageValue="assets/images/placeholder.png">
            </Card>
            <Card
                hrefValue=""
                classValue="col-3 col-m-6 col-xs-12"
                subtitleValue="21.09.2019."
                titleValue="Novi natječaj za posao"
                imageValue="assets/images/placeholder.png">
            </Card>
            <Card
                hrefValue=""
                classValue="col-3 col-m-6 col-xs-12"
                subtitleValue="21.09.2019."
                titleValue="Novi natječaj za posao"
                imageValue="assets/images/placeholder.png">
            </Card>
            <Card
                hrefValue=""
                classValue="col-3 col-m-6 col-xs-12"
                subtitleValue="21.09.2019."
                titleValue="Novi natječaj za posao"
                imageValue="assets/images/placeholder.png">
            </Card>
            <Card
                hrefValue=""
                classValue="col-3 col-m-6 col-xs-12"
                subtitleValue="21.09.2019."
                titleValue="Novi natječaj za posao"
                imageValue="assets/images/placeholder.png">
            </Card>
            <Card
                hrefValue=""
                classValue="col-3 col-m-6 col-xs-12"
                subtitleValue="21.09.2019."
                titleValue="Novi natječaj za posao"
                imageValue="assets/images/placeholder.png">
            </Card>
            <Card
                hrefValue=""
                classValue="col-3 col-m-6 col-xs-12"
                subtitleValue="21.09.2019."
                titleValue="Novi natječaj za posao"
                imageValue="assets/images/placeholder.png">
            </Card>
            <Card
                hrefValue=""
                classValue="col-3 col-m-6 col-xs-12"
                subtitleValue="21.09.2019."
                titleValue="Novi natječaj za posao"
                imageValue="assets/images/placeholder.png">
            </Card>
            <ViewAll class="col-12" href="../novosti">Pregled svih novosti</ViewAll>
        </div>
    </div>
</section>
