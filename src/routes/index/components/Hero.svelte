<style>
    .hero {
        --theme    : var(--primary-theme);
        --primary  : var(--primary-primary);
        --secondary: var(--primary-secondary);
        --tertiary : var(--primary-tertiary);
    }
    .hero {
        position: relative;
        padding: 80px 10px;
        background: var(--theme);
        color: var(--primary);
    }
    .hero-content {
        text-align: center;
    }
    .hero-content-logo {
        margin-bottom: 20px;
    }
    .hero-content-title {
        font-size: 24px;
        margin-bottom: 60px;
    }
    .hero-content-poem {
        font-family: var(--font-secondary);
        font-weight: normal;
        font-size: 36px;
    }
    .hero-image {
        position: absolute;
        top: 10%;
        width: calc(50% - 250px);
        height: 80%;
        object-fit: contain;
        pointer-events: none;
    }
    .hero-image-left {
        left: 0;
        object-position: right;
    }
    .hero-image-right {
        right: 0;
        object-position: left;
    }
    @media (max-width: 1200px) {
        .hero-image {
            display: none;
        }
    }
    @media (max-width: 900px) {
        .hero {
            margin-top: 0;
            z-index: 1;
            padding: 40px 10px;
        }
        .hero-content-title {
            font-size: 20px;
        }
        .hero-content-poem {
            font-size: 28px;
        }
    }
</style>

<article class="hero">
    <div class="hero-content">
        <img class="hero-content-logo" src="assets/images/logo-light.svg" alt="Centar za autizam Osijek." width="120">
        <h1 class="hero-content-title">Centar za autizam Osijek</h1>
        <h2 class="hero-content-poem">“Ako me hoćeš upoznati<br>Uzmi me za ruku<br>Traži od mene ono što mogu pružiti<br>Ići ću pored tebe<br>Zajedno ćemo rasti<br>Ako me želiš razumjeti<br>Možemo biti prijatelji”</h2>
    </div>
    <picture>
        <source srcset="assets/images/hero/hero-image-left.webp" type="image/webp">
        <source srcset="assets/images/hero/hero-image-left.png" type="image/png">
        <img class="hero-image hero-image-left" src="assets/images/hero/hero-image-left.png" alt="Slike centra." aria-hidden="true">
    </picture>
    <picture>
        <source srcset="assets/images/hero/hero-image-right.webp" type="image/webp">
        <source srcset="assets/images/hero/hero-image-right.png" type="image/png">
        <img class="hero-image hero-image-right" src="assets/images/hero/hero-image-right.png" alt="Slike centra." aria-hidden="true">
    </picture>
</article>