<style>
    .banner {
        position: relative;
        background: var(--primary-theme);
        color: var(--primary-primary);
        padding: 120px 0 160px;
    }

    .banner-content {
        position: relative;
        z-index: 1;
        margin: auto;
        max-width: 700px;
        width: 100%;
        padding: 10px;
        text-align: center;
    }

    .banner-content-title {
        position: relative;
        font-size: 70px;
        padding-bottom: 30px;
        margin-bottom: 60px;
    }

    .banner-content-title::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 10px;
        background: var(--accent-theme);
    }

    .banner-content-subtitle {
        font-size: 24px;
    }

    .banner-image {
        position: absolute;
        height: calc(100% + 100px);
        width: auto;
        object-fit: contain;
    }
    .banner-image-left {
        top: 0;
        right: calc(50% + 250px);
    }
    .banner-image-right {
        bottom: 0;
        left: calc(50% + 250px);
    }

    @media (max-width: 900px) {
        .banner {
            padding: 60px 0 80px;
        }

        .banner-content-title {
            margin-bottom: 30px;
            font-size: 28px;
            padding-bottom: 24px;
        }

        .banner-content-title::after {
            width: 50%;
            transform: translateX(50%);
            height: 4px;
        }

        .banner-content-subtitle {
            font-size: 16px;
        }

        .banner-image {
            display: none;
        }
    }
</style>

<section class="banner">
    <div class="banner-content">
        <h1 class="banner-content-title">
            <slot>Javite nam se</slot>
        </h1>

        <p class="banner-content-subtitle">
            Pošaljite nam email na
            <br>
            <a href="mailto:ured@centar-autizam-os.skole.hr"><b>ured@centar-autizam-os.skole.hr</b></a>
            <br>
            ili nas nazovite na <a href="tel:+385031202327"><b>031/202-327</b></a>
        </p>
    </div>

    <img class="banner-image banner-image-left" src="/assets/images/banner-image-left.svg" alt="" aria-hidden="true">

    <img class="banner-image banner-image-right" src="/assets/images/banner-image-right.svg" alt="" aria-hidden="true">
</section>