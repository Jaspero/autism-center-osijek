<style>
    .navigation {
        display: flex;
        flex-wrap: wrap;
        max-width: 1400px;
        width: 100%;
        margin: auto;
        padding: 40px;
        background: var(--panel-theme);
        box-shadow: 0 0 50px 0 rgba(0,0,0,.3);
    }
    .navigation-item {
        width: calc(100% / 6 - 40px);
        margin: 20px;
        border-bottom: 4px solid var(--panel-tertiary);
        transition: .2s;
    }
    .navigation-item:hover {
        border-bottom: 4px solid var(--panel-secondary);
    }
    .navigation-item:hover > .navigation-item-title::after {
        opacity: 1;
        margin-left: 10px;
    }
    .navigation-item-title {
        font-size: 1em;
    }
    .navigation-item-title::after {
        content: '→';
        display: inline-block;
        transition: .2s;
        opacity: 0;
        margin-left: 5px;
    }
    .navigation-item-description {
        font-size: .75em;
    }
    @media (max-width: 1200px) {
        .navigation-item {
            width: calc(100% / 3 - 40px);
        }
    }
    @media (max-width: 900px) {
        .navigation {
            padding: 20px;
        }
        .navigation-item {
            width: calc(100% / 2 - 20px);
            margin: 10px 10px 20px;
        }
    }
</style>

<article class="navigation">
    <a class="navigation-item" href="o-nama">
        <h1 class="navigation-item-title">O nama</h1>
        <p class="navigation-item-description">Kako smo nastali, koja nam je misija i vizija te tko su naši djelatnici.</p>
    </a>
    <a class="navigation-item" href="programi">
        <h1 class="navigation-item-title">Programi</h1>
        <p class="navigation-item-description">Saznajte više o osnovnim programima, terapijskim postupcima i izvannastavnim aktivnostima Centra.</p>
    </a>
    <a class="navigation-item" href="projekti">
        <h1 class="navigation-item-title">Projekti</h1>
        <p class="navigation-item-description">Aktualni projekti i suradnja.</p>
    </a>
    <a class="navigation-item" href="novosti">
        <h1 class="navigation-item-title">Novosti</h1>
        <p class="navigation-item-description">Provjerite najnovije obavijesti i pratite novosti vezane uz rad Centra.</p>
    </a>
    <a class="navigation-item" href="galerija">
        <h1 class="navigation-item-title">Galerija</h1>
        <p class="navigation-item-description">Istražite fotografije Centra i pogledajte galeriju raznih događanja u sklopu rada Centra.</p>
    </a>
<!--    <a class="navigation-item" href="dokumenti">
        <h1 class="navigation-item-title">Dokumenti</h1>
        <p class="navigation-item-description">Istražite dokumente Centra.</p>
    </a>-->
    <a class="navigation-item" href="kontakt">
        <h1 class="navigation-item-title">Kontakt</h1>
        <p class="navigation-item-description">Saznajte kontakt informacije, provjerite gdje se nalazimo i postavite upit.</p>
    </a>
</article>
