<svelte:head>
    <title>CZA Osijek</title>
    <meta name="description" content="Centar za autizam Osijek, najmoderniji regionalni centar za djecu s poremećajem iz spektra autizma.Saznajte o programima, terapijskim postupcima i aktivnostima." />
</svelte:head>

<script>
    import Hero from '../shared/components/Hero.svelte';
    import Navigation from '../shared/components/Navigation.svelte';
    import Banner from '../shared/components/Banner.svelte';
    import Card from '../shared/components/Card.svelte';
    import Title from '../shared/components/Title.svelte';
    import Subtitle from '../shared/components/Subtitle.svelte';
    import ViewAll from '../shared/components/ViewAll.svelte';
    import CardPlaceholder from '../shared/components/CardPlaceholder.svelte';
    import {toSlug} from '../shared/utility/to-slug';
    import {CACHE} from '../shared/consts/cache.const';

    let projectsLoading = true;
    let projects;

    let programsLoading = true;
    let programs;

    let newsLoading = true;
    let news;

    const sizeMap = {
        standard: 'col-3 col-m-6 col-xs-12',
        large: 'col-6 col-xs-12'
    };

    if (process.browser) {

        if (CACHE.homeProjects) {
            projects = CACHE.homeProjects;
            projectsLoading = false;
        } else {
            fetch(`projekti.json`)
                .then(r => r.json())
                .then(data => {
                    projects = data.projects.map(it => {
                        it.slug = '/projekti/#' + toSlug(it.title);
                        return it;
                    });
                    CACHE.homeProjects = projects;
                    projectsLoading = false;
                });
        }

        if (CACHE.homePrograms) {
            programs = CACHE.homePrograms;
            programsLoading = false;
        } else {
            fetch(`programi.json`)
                .then(r => r.json())
                .then(data => {
                    programs = data.programs.map(it => {

                        it.segments = it.segments.reduce((acc, segment) => {
                            if (!segment.hiddenOnHome) {
                                segment.slug = '/programi/#' + toSlug(segment.subTitle);
                                segment.size = segment.size ? sizeMap[segment.size] : sizeMap.standard;

                                acc.push(segment);
                            }

                            return acc;
                        }, []);

                        return it;
                    });
                    CACHE.homePrograms = programs;
                    programsLoading = false;
                });
        }

        if (CACHE.homeNews) {
            news = CACHE.homeNews;
            newsLoading = false;
        } else {
            fetch(`novosti.json`)
                .then(r => r.json())
                .then(data => {
                    news = data.news.map(it => {
                        it.url = '/novosti/' + it.url;
                        return it;
                    });
                    CACHE.homeNews = news;
                    newsLoading = false;
                });
        }
    }
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
        <Subtitle>Vizija</Subtitle>
        <p>Odgoj i obrazovanje sretnog i uspješnog učenika koji se razvija uz poticaj učitelja, podršku roditelja i cijele lokalne zajednice.</p>
        <Subtitle>Misija</Subtitle>
        <p>Suradnjom nastavnika, roditelja i lokalne zajednice svakom djetetu omogućiti razvitak u sredini u kojoj će se osjećati prihvaćeno, voljeno, sigurno i zadovoljno. Kreirati sredinu koja će djelovati poticajno na razvitak svih njegovih potencijala, u kojoj će se voditi briga o djetetovim specifičnostima kao pojedinca i gdje će ga se osposobljavati za samostalan i odgovoran život.</p>
        <div>
            <br>
            <a class="btn" href="../o-nama">Saznaj više</a>
        </div>
    </div>
</section>

<!--Programi-->
<section class="generic-section grid">
    <div class="col-12">
        <Title>Programi</Title>
    </div>
    <div class="col-12">
        {#if programsLoading}
            <CardPlaceholder cards={4} classValue="col-3 col-m-6 col-xs-12" hasSubtitle hasTitle hasImage/>
        {:else}
            <div class="grid jc-start">
                {#each programs as item}
                    {#each item.segments as segment}
                        <Card
                            hrefValue={segment.slug}
                            classValue={segment.size}
                            subtitleValue={item.title}
                            titleValue={segment.subTitle}
                            imageValue={segment.image}>
                        </Card>
                    {/each}
                {/each}
            </div>
        {/if}
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
        {#if projectsLoading}
            <CardPlaceholder cards={4} classValue="col-6 col-s-12" hasTitle hasContent/>
        {:else}
            <div class="grid jc-start">
                {#each projects as project}
                    <Card
                        hrefValue={project.slug}
                        classValue="col-6 col-s-12"
                        titleValue={project.title}
                        textValue={project.shortDescription}>
                    </Card>
                {/each}
            </div>
        {/if}
    </div>
</section>

<!--Novosti-->
<section class="generic-section grid">
    <div class="col-12">
        <Title>Novosti</Title>
    </div>
    <div class="col-12">
        {#if newsLoading}
            <CardPlaceholder cards={8} classValue="col-3 col-m-6 col-xs-12" hasSubtitle hasTitle hasImage/>
        {:else}
            <div class="grid jc-start">
                {#each news as item}
                <Card
                    relValue="prefetch"
                    hrefValue={item.url}
                    classValue="col-3 col-m-6 col-xs-12"
                    subtitleValue={item.date}
                    titleValue={item.title}
                    imageValue={item.image}>
                </Card>
                {/each}
                <ViewAll class="col-12" href="/novosti">Pregled svih novosti</ViewAll>
            </div>
        {/if}
    </div>
</section>
