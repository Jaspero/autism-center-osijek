<script>
    import BlogNavigation from "../../shared/components/BlogNavigation.svelte";
    import BlogNavigationItem from "../../shared/components/BlogNavigationItem.svelte";
    import BlogArticle from "../../shared/components/BlogArticle.svelte";
    import Title from "../../shared/components/Title.svelte";
    import Subtitle from "../../shared/components/Subtitle.svelte";
    import Content from "../../shared/components/Content.svelte";

    const programs = [
        {
            title: `Poziv na vrednovanje i popis kandidata prijavljenih na natječaj za zasnivanje radnog odnosa - POMOĆNIK/POMOĆNICA U NASTAVI UČENICIMA S TEŠKOĆAMA U RAZVOJU`,
            segments: [
                {
                    content: `
                        <p>Na temelju članka 8. Pravilnika o načinu i postupku zapošljavanja u Centru za autizam, a vezano za objavu natječaja za zasnivanje radnog odnosa za radno mjesto Pomoćnik/pomoćnica u nastavi učenicima s teškoćama u razvoju, od 2.8.2024. (KLASA: 112-01/24-01/1 , URBROJ: 2158-52-24-49), Povjerenstvo za vrednovanje kandidata objavljuje</p>
                        <p>Kandidate koji su podnijeli pravodobnu i potpunu prijavu na natječaj, Povjerenstvo poziva na vrednovanje</p>
                        <p>Osoba koja nije podnijela pravodobnu i potpunu prijavu ili ne ispunjava formalne uvjete natječaja, ne smatra se kandidatom u postupku natječaja.</p>
                        <p>Razgovor s kandidatima-intervju održat će se dana 27.8. 2024. godine (utorak) u 9:00 sati, u prostorijama Centra za autizam, Vinkovačka 3, Osijek.</p>
                        <p>Na razgovor s kandidatima-intervju pozivaju se:</p>
                        <table>
                            <tr>
                                <th>Redni broj</th>
                                <th>Ime i prezime</th>
                            </tr>
                            <tr><td>1.</td><td>ANELA ĆORUŠA MANDURA</td></tr>
                            <tr><td>2.</td><td>TAMARA ČER</td></tr>
                            <tr><td>3.</td><td>SANJA DUGALIĆ</td></tr>
                            <tr><td>4.</td><td>ZORA DVIZAC</td></tr>
                            <tr><td>5.</td><td>PERO GRGIĆ</td></tr>
                            <tr><td>6.</td><td>MILICA GUDIĆ</td></tr>
                            <tr><td>7.</td><td>VEDRANA HUMER</td></tr>
                            <tr><td>8.</td><td>TATJANA IVEGEŠ-WILHELM</td></tr>
                            <tr><td>9.</td><td>ANJA KNEŽEVIĆ</td></tr>
                            <tr><td>10.</td><td>SILVANA KOVAČ-GEIĆ</td></tr>
                            <tr><td>11.</td><td>IVANA LOVRO</td></tr>
                            <tr><td>12.</td><td>RADOMIR MILOVAC</td></tr>
                            <tr><td>13.</td><td>GABRIEL MORENO MITROVIĆ</td></tr>
                            <tr><td>14.</td><td>LUCIJA MUSTAČ</td></tr>
                            <tr><td>15.</td><td>TIHANA ODLEŠIĆ KAČAVENDA</td></tr>
                            <tr><td>16.</td><td>DORA PEJIĆ</td></tr>
                            <tr><td>17.</td><td>HELGA PEJIĆ DŽOJA</td></tr>
                            <tr><td>18.</td><td>MARIJA RIMAC</td></tr>
                            <tr><td>19.</td><td>DRAGANA ROMIĆ</td></tr>
                            <tr><td>20.</td><td>IVANA SLIŠKO</td></tr>
                            <tr><td>21.</td><td>DAJANA SMILJANIĆ</td></tr>
                            <tr><td>22.</td><td>LORENA ŠKORIĆ</td></tr>
                            <tr><td>23.</td><td>RENATA TABAK</td></tr>
                        </table>
                        <p style="margin-top:20px;">Povjerenstvo za vrednovanje kandidata</p>
                    `,
                },
            ],
        },
        {
            title: `Poziv na vrednovanje i popis kandidata prijavljenih na natječaj za zasnivanje radnog odnosa - EDUKACIJSKI REHABILITATOR RANOG I PREDŠKOLSKOG ODGOJA I OBRAZOVANJA`,
            segments: [
                {
                    content: `
                        <p>Na temelju članka 8. Pravilnika o načinu i postupku zapošljavanja u Centru za autizam, a vezano za objavu natječaja za zasnivanje radnog odnosa za radno mjesto Pomoćnik/pomoćnica u nastavi učenicima s teškoćama u razvoju, od 2.8.2024. (KLASA: 112-01/24-01/1 , URBROJ: 2158-52-24-49), Povjerenstvo za vrednovanje kandidata objavljuje</p>
                        <p>Poziv na vrednovanje i popis kandidata prijavljenih na natječaj za zasnivanje radnog odnosa - POMOĆNIK/POMOĆNICA U NASTAVI UČENICIMA S TEŠKOĆAMA U RAZVOJU</p>
                        <p>Kandidate koji su podnijeli pravodobnu i potpunu prijavu na natječaj, Povjerenstvo poziva na vrednovanje. Osoba koja nije podnijela pravodobnu i potpunu prijavu ili ne ispunjava formalne uvjete natječaja, ne smatra se kandidatom u postupku natječaja. Razgovor s kandidatima-intervju održat će se dana 27.8. 2024. godine (utorak) u 9:00 sati, u prostorijama Centra za autizam, Vinkovačka 3, Osijek.</p>
                        <p>Na razgovor s kandidatima-intervju pozivaju se:</p>
                        <table>
                            <tr>
                                <th>Redni broj</th>
                                <th>Ime i prezime</th>
                            </tr>
                            <tr><td>1.</td><td>ANELA ĆORUŠA MANDURA</td></tr>
                            <tr><td>2.</td><td>TAMARA ČER</td></tr>
                        </table>
                    `,
                },
            ],
        },
        {
            title: "Edukacijski rehabilitator ranog i predškolskog odgoja i obrazovanja",
            segments: [
                {
                    content: `
                        <p>– 2 izvršitelja, određeno vrijeme do povratka odsutnih radnica s rodiljnog/roditeljskog dopusta na rad, puno radno
                            vrijeme (40 sati tjedno), mjesto rada Osijek.</p>
                        <p>Na natječaj se mogu javiti osobe oba spola. Uvjeti za zasnivanje radnog odnosa prema Zakonu o predškolskom odgoju (NN
                            10/97;107/07;94/13) i Pravilniku o unutarnjem ustrojstvu i načinu rada Centra za autizam, Osijek.</p>
                        <ul>
                            <li>završen diplomski/preddiplomski sveučilišni studij Edukacijsko-rehabilitacijskog fakulteta u Republici Hrvatskoj
                                (Sveučilišni diplomski studij – smjer:
                                magistar/magistra edukacijske rehabilitacije, Profesor edukacijski rehabilitator, Profesor defektolog – smjer
                                rehabilitacija, Dipl. defektolog – smjer:
                                predškolski odgoj, razredna nastava, intelektualne teškoće, Defektolog s navršenih 20 godina radnog staža do
                                1991. godine ili nostrificirana diploma
                                inozemnog fakulteta,</li>
                            <li>položen stručni ispit (ispunjavanje ovog uvjeta utvrđuje Hrvatska komora edukacijskih rehabilitatora u
                                postupku davanja odobrenja za samostalan rad),</li>
                            <li>državljanstvo Republike Hrvatske (iznimno od ove odredbe, stranci mogu obavljati edukacijsko-rehabilitacijsku
                                djelatnost u Republici Hrvatskoj prema
                                propisima koji uređuju rad stranaca u Republici Hrvatskoj),</li>
                            <li>znanje hrvatskog jezika u govoru i pismu,</li>
                            <li>upis u Imenik Hrvatske komore edukacijskih rehabilitatora,</li>
                            <li>odobrenje za samostalan rad (licencija),</li>
                        </ul>
                        <p>Pored navedenih uvjeta kandidati moraju ispunjavati i opće uvjete za prijem u radni odnos:</p>
                        <ul>
                            <li>punoljetnost</li>
                            <li>zdravstvenu sposobnost za obavljanje poslova radnog mjesta</li>
                        </ul>
                        <p>Dokaz o zdravstvenoj sposobnosti za obavljanje poslova radnog mjesta dostavit će izabrani kandidat po dostavljenoj
                            obavijesti o izboru.</p>
                        <p>Državljani država članica Europske unije i stranci moraju poznavati hrvatski jezik najmanje na razini koja je
                            potrebna za nesmetanu i nužnu komunikaciju s
                            korisnikom edukacijsko-rehabilitacijske usluge i položiti stručni ispit sukladno propisima Republike Hrvatske.</p>
                        <p>Radni odnos ne može zasnovati osoba koja ima zapreke definirane člankom 25. Zakona o predškolskom odgoju i
                            obrazovanju („Narodne novine“ 10/97,
                            107/07, 94/13, 98/19 i 57/22).</p>
                        <p>Uz pisanu i vlastoručno potpisanu prijavu na natječaj kandidati su obvezni priložiti sljedeću dokumentaciju:</p>
                        <ul>
                            <li>životopis (vlastoručno potpisan),</li>
                            <li>dokaz o državljanstvu,</li>
                            <li>presliku diplome o stečenoj stručnoj spremi,</li>
                            <li>elektronički zapis odnosno potvrda o podacima evidentiranim u matičnoj evidenciji Hrvatskog zavoda za mirovinsko
                                osiguranje</li>
                        </ul>
                        <p>Kao dokaz o nepostojanju zapreka za zasnivanje radnog odnosa sukladno čl.25. Zakona o predškolskom odgoju i
                            obrazovanju dostavljaju se sljedeći dokumenti
                            (ne stariji od 6 mjeseci):</p>
                        <ol>
                            <li>uvjerenje nadležnog suda da se protiv kandidata ne vodi kazneni postupak prema članku 25. stavak 2. Zakona o
                                predškolskom odgoju i obrazovanju</li>
                            <li>uvjerenje nadležnog suda da se protiv kandidata ne vodi prekršajni postupak prema članku 25. stavak 4. Zakona o
                                predškolskom odgoju i obrazovanju</li>
                            <li>potvrda nadležnog Centra za socijalnu skrb da kandidat nema izrečenu mjeru za zaštitu dobrobiti djeteta iz
                                članka 25. stavak 10. Zakona o predškolskom
                                odgoju i obrazovanju</li>
                        </ol>
                        <p>Kandidat koji se poziva na pravo prednosti pri zapošljavanju prema posebnom zakonu, dužan se u prijavi pozvati na to
                            pravo i priložiti svu propisanu
                            dokumentaciju prema posebnom zakonu, te ima prednost u odnosu na ostale kandidate samo pod jednakim uvjetima.</p>
                        <p>Osobe koje se pozivaju na pravo prednosti sukladno članku 102. Zakona o hrvatskim braniteljima iz Domovinskog rata i
                            članovima njihovih obitelji (Narodne
                            novine 121/17, 98/19, 84/21), članku 48. f Zakona o zaštiti vojnih i civilnih invalida rata (Narodne novine broj
                            33/92, 77/92, 27/93, 58/93, 2/94, 76/94, 108/95,
                            108/96, 82/01, 103/03 i 148/13, 98/19), članku 9. Zakona o profesionalnoj rehabilitaciji i zapošljavanju osoba s
                            invaliditetom (Narodne novine broj 157/13,
                            152/14, 39/18, 32/20) te članku 48. Zakona o civilnim stradalnicima iz Domovinskog rata (Narodne novine broj 84/21),
                            dužne su u prijavi na javni natječaj
                            pozvati se na to pravo i uz prijavu priložiti svu propisanu dokumentaciju prema posebnom zakonu, a imaju prednost u
                            odnosu na ostale kandidate samo pod
                            jednakim uvjetima.</p>
                        <p>Osobe koje ostvaruju pravo prednosti pri zapošljavanju u skladu s člankom 102. Zakona o hrvatskim braniteljima iz
                            Domovinskog rata i članovima njihovih
                            obitelji (Narodne novine broj 121/17, 98/19, 84/21), uz prijavu na natječaj dužne su priložiti i dokaze propisane
                            člankom 103. stavak 1. Zakona o hrvatskim
                            braniteljima iz Domovinskog rata i članovima njihovih obitelji
                            Poveznica na internetsku stranicu Ministarstva hrvatskih branitelja s popisom dokaza potrebnih za ostvarivanja prava
                            prednosti:</p>
                        <p><a href="https://branitelji.gov.hr/UserDocsImages//dokumenti/Nikola//popis%20dokaza%20za%20ostvarivanje%20prava%20prednosti%20pri%20zapo%C5%A1ljavanju-
                            %20ZOHBDR%202021.pdf"
                                target="_blank">https://branitelji.gov.hr/UserDocsImages//dokumenti/Nikola//popis%20dokaza%20za%20ostvarivanje%20prava%20prednosti%20pri%20zapo%C5%A1ljavanju-
                                %20ZOHBDR%202021.pdf</a></p>
                        <p>Osobe koje ostvaruju pravo prednosti pri zapošljavanju u skladu s člankom 48. Zakona o civilnim stradalnicima iz
                            Domovinskog rata (Narodne novine broj
                            84/21), uz prijavu na natječaj dužne su u prijavi na natječaj pozvati se na to pravo i uz prijavu dostaviti i dokaze
                            iz stavka 1. članka 49. Zakona o civilnim
                            stradalnicima iz Domovinskog rata
                            Poveznica na internetsku stranicu Ministarstva hrvatskih branitelja s popisom dokaza potrebnih za ostvarivanja prava
                            prednosti:</p>
                        <p><a href="https://branitelji.gov.hr/UserDocsImages//dokumenti/Nikola//popis%20dokaza%20za%20ostvarivanje%20prava%20prednosti%20pri%20zapo%C5%A1ljavanju-
                            %20Zakon%20o%20civilnim%20stradalnicima%20iz%20DR.pdf"
                                target="_blank">https://branitelji.gov.hr/UserDocsImages//dokumenti/Nikola//popis%20dokaza%20za%20ostvarivanje%20prava%20prednosti%20pri%20zapo%C5%A1ljavanju-
                                %20Zakon%20o%20civilnim%20stradalnicima%20iz%20DR.pdf</a></p>
                        <p>U prijavi na natječaj obvezno je navesti naziv radnog mjesta na koje se prijavljuje, ime i prezime, adresu
                            prebivališta ili boravišta, broj telefona/mobitela
                            (prema mogućnostima kandidata i e-mail adresu).</p>
                        <p>Kandidat koji ispunjavaju formalne uvjete natječaja dužan je pristupiti procjeni odnosno testiranju prema odredbama
                            Pravilnika o načinu i postupku
                            zapošljavanja objavljenog na poveznici:</p>
                        <p><a href="https://firebasestorage.googleapis.com/v0/b/autism-center-osijek.appspot.com/o/documents-tLPLNcOADO7A1fHNrRmoa-
                            Pravilnik%20o%20nacinu%20i%20postupku%20zaposljavanja.docx?alt=media&token=40ace99a-eb13-4cee-a84d-b20bab46c98e"
                                target="_blank">Pravilnik o načinu i postupku zapošljavanja</a></p>
                        <p>Za kandidata koji ne pristupi procjeni/testiranju u točno određeno vrijeme smatrat će se da je odustao od daljnjeg
                            natječajnog postupka.</p>
                        <p>O vremenu i mjestu procjene odnosno testiranja kandidati će biti obaviješteni putem web stranice Centra :
                            https://cza-os.hr najmanje 5 dana prije predviđene
                            procjene odnosno testiranja.</p>
                        <p>Isprave se prilažu u neovjerenom presliku i ne vraćaju se kandidatu. Prilikom izbora kandidat je dužan predočiti
                            izvornike dokumentacije priložene uz prijavu
                            na natječaj.</p>
                        <p>Nepravodobne i nepotpune prijave neće se razmatrati. Osobe koje podnesu nepotpune i nepravodobne prijave na natječaj
                            ne smatraju se kandidatima
                            prijavljenima na natječaj.</p>
                        <p>Kandidat prijavom na natječaj daje privolu za obradu osobnih podataka navedenih u svim dostavljenim prilozima odnosno
                            ispravama za potrebe provedbe
                            natječajnog postupka sukladno važećim propisima o zaštiti osobnih podataka.</p>
                        <p>
                            Prijave na natječaj dostavljaju se na adresu: Centar za autizam , p.p. 85, 31001 Osijek s naznakom “Za natječaj”.
                            Natječaj je objavljen na mrežnoj stranici i oglasnoj ploči Hrvatskog zavoda za zapošljavanje te mrežnoj stranici i
                            oglasnoj ploči školske ustanove, dana
                            2. kolovoza 2024. godine. Rok za prijavu kandidata je osam dana od dana objave natječaja.
                            Obavijest o rezultatima natječaja bit će objavljena na web stranici Centra:
                            https://cza-os.hr
                        </p>
                    `,
                },
            ],
        },
        {
            title: `Pomoćnik/pomoćnica u nastavi učenicima s teškoćama u razvoju`,
            segments: [
                {
                    content: `
                        <h2>Radno mjesto</h2>
                        <p>Broj traženih radnika: 15</p>
                        <p>Vrsta zaposlenja: Na određeno, novootvoreni poslovi</p>
                        <p>Radno vrijeme: Minimalno 20 sati tjedno</p>
                        <p>Smještaj: Nema smještaja</p>
                        <p>Natječaj vrijedi od: 2.8.2024.</p>
                        <p>Natječaj vrijedi do: 10.8.2024.</p>
                        <p><b>Posloprimac:</b> Centar za autizam, Vinkovačka 3, 31 000 Osijek</p>
                        <p>Razina obrazovanja: Srednja škola – 4 godine, Viša ili prvostupanjska, Fakultet, akademija, magisterij, doktorat</p>
                        <p>Radno iskustvo: Nije važno</p>
                        <p>Ostale informacije:</p>
                        <p>Na temelju članka 99. Zakona o odgoju i obrazovanju u osnovnoj i srednjoj školi
                            (&#39;&#39;Narodne novine&#39;&#39; broj 87/08., 86/09., 92/10., 105/10., 90/11., 16/12., 86/12., 94/13., 152/14.,
                            7/17., 68/18., 98/19., 64/20.,151/22., 156/23) CENTAR ZA AUTIZAM, Vinkovačka 3,
                            Osijek objavljuje</p>
                        <h2>Natječaj</h2>
                        <p><b>za obavljanje posla pomoćnika u nastavi</b></p>
                        <p>Predviđen je odabir i zapošljavanje osoba na poslovima pomoćnika u nastavi s ciljem
                            povećanja socijalne uključenosti i integracije učenika s teškoćama u razvoju.</p>
                        <h2>POMOĆNIK U NASTAVI</h2>
                        <ul>
                            <li>Broj traženih osoba 15</li>
                            <li>Mjesto rada: Osijek</li>
                            <li>Radno vrijeme: nepuno radno vrijeme – Minimalno 20 sati tjedno</li>
                            <li>Vrsta ugovora: ugovor o radu na određeno vrijeme za školsku godinu 2024./2025.</li>
                            <li>U slučaju potrebe, povećat će se i broj pomoćnika</li>
                        </ul>
                        <h2>UVJETI:</h2>
                        <ul>
                            <li>najmanje završena srednja škola – 4 godine</li>
                            <li>uvjerenje da se protiv kandidata ne vodi kazneni postupak niti je pravomoćno
                                osuđivan za neko od kaznenih djela</li>
                            <li>pomoćnik u nastavi ili stručni komunikacijski posrednik ne smije biti roditelj/skrbnik
                                niti drugi član uže obitelji učenika kojem/kojima se pruža potpora</li>
                        </ul>
                        <h2>OPIS POSLOVA</h2>
                        <p>Osnovna zadaća pomoćnika u nastavi je omogućiti jednake uvjete obrazovanja kroz pružanje
                            neposredne podrške učenicima s teškoćama u razvoju, pomoć u uključivanju u razredni
                            kolektiv, savladavanje socijalno-psiholoških prepreka, senzoričkih i arhitektonskih barijera.</p>
                        <h2>DODATNA ZNANJA I VJEŠTINE</h2>
                        <p>Poštivanje različitosti, afinitet prema djeci s teškoćama u razvoju, otvorenost, odgovornost,
                            fleksibilnost, razvijene komunikacijske vještine, podjednaka sklonost individualnom i
                            timskom radu, točnost u izvršavanju poslova, organiziranost, emocionalna stabilnost i
                            dosljednost.</p>
                        <h2>POŽELJNO</h2>
                        <ul>
                            <li>iskustvo u neposrednom radu s djecom s teškoćama u razvoju (završeno
                                osposobljavanje za pomoćnika u nastavi)</li>
                            <li>iskustvo u volontiranju</li>
                        </ul>
                        <p>Odabir će se izvršiti uz pomoć stručnih metoda procjene kompetencija i osobina podnositelja
                            zahtjeva.</p>
                        <p>S kandidatima izabranim za pomoćnika u nastavi, obrazovna ustanova – škola će sklopiti
                            pisani ugovor o radu u kojemu će biti utvrđeni poslovi, trajanje, tjedno zaduženje te
                            međusobna prava, obveze i odgovornosti ugovornih strana.
                            Kandidati koji se prijavljuju za izvršavanje poslova pomoćnika su osobe sa završenom
                            najmanje srednjom stručnom spremom.</p>
                        <p>Na natječaj se mogu javiti osobe oba spola. Uz prijavu kandidati su dužni priložiti sljedeće
                            dokumente:</p>
                        <ul>
                            <li>zamolbu za posao (vlastoručno potpisana);</li>
                            <li>životopis (vlastoručno potpisan, s navedenim podacima o neposrednom radu s djecom
                                s teškoćama u razvoju ili volontiranju (naziv institucije/udruge/tvrtke gdje je ostvareno
                                iskustvo u radu s djecom ili volontiranje, te trajanje istog);</li>
                            <li>dokaz o odgovarajućem stupnju obrazovanja (presliku diplome ili potvrdu o stečenoj
                                stručnoj spremi);</li>
                            <li>uvjerenje da se protiv kandidata ne vodi kazneni postupak (ne starije od 6 mjeseci);</li>
                            <li>dokaz o hrvatskom državljanstvu;</li>
                            <li>uvjerenje o prebivalištu (ne starije od 6 mjeseci);</li>
                            <li>elektronički zapis o podacima evidentiranim u matičnoj evidenciji Hrvatskog zavoda
                                za mirovinsko osiguranje (ne stariji od dana objave ovog javnog poziva);</li>
                            <li>dokaz o osposobljenosti za poslove pomoćnika, ukoliko ga kandidat ima;</li>
                            <li>ukoliko kandidat ima iskustva u radu s djecom s teškoćama u razvoju potrebno je
                                priložiti mišljenje supervizora i/ili preporuku škole/ustanove/udruge.</li>
                        </ul>
                        <p>
                            Kandidati koji ostvaruju pravo prednosti pri zapošljavanju prema posebnim propisima dužni
                            su u prijavi na javni poziv pozvati se na to pravo i ima prednost u odnosu na ostale kandidate
                            samo pod jednakim uvjetima. Da bi ostvario pravo prednosti pri zapošljavanju, kandidat koji
                            ispunjava uvjete za ostvarivanje toga prava, dužan je uz prijavu na javni poziv priložiti sve
                            dokaze o ispunjavanju traženih uvjeta, kao i rješenje o priznatom statusu, odnosno potvrdu o
                            priznatom statusu iz koje je vidljivo spomenuto pravo, dokaz iz kojeg je vidljivo na koji način
                            je prestao radni odnos kod posljednjeg poslodavca (ugovor, rješenje, odluka i sl.) te dokaz da
                            je nezaposlen (uvjerenje ili ovjereni evidencijski list Hrvatskog zavoda za zapošljavanje).
                            Poveznica za stranicu Ministarstva branitelja na kojoj su navedeni dokazi potrebni za
                            ostvarivanje prava prednosti pri zapošljavanju prema Zakonu o hrvatskim braniteljima iz
                            Domovinskog rata i članovima njihovih obitelji („Narodne novine“ broj 121/17., 98/19. i
                            84/21.) je <a href="https://branitelji.gov.hr/zaposljavanje-843/843"
                                target="_blank">https://branitelji.gov.hr/zaposljavanje-843/843</a>.
                        </p>
                        <p>Sukladno odredbama Uredbe (EU) 2016/679 Europskog parlamenta i Vijeća od 27. travnja
                            2016. godine o zaštiti pojedinaca u svezi s obradom osobnih podataka i slobodnog kretanja
                            takvih podataka, svi dokumenti dostavljeni na javni poziv poslani su slobodnom voljom
                            kandidata te se smatra da je kandidat dao privolu za obradu svih podataka, a koji će se
                            obrađivati isključivo u svrhu provođenja postupka.</p>
                        <p>U zamolbi i životopisu obvezno navesti datum i mjesto rođenja, adresu stanovanja te kontakt
                            broj mobitela i elektronsku poštu (e-mail). Preslike traženih priloga ne moraju biti ovjerene, a
                            kandidati su prije sklapanja pisanog ugovora dužni dostaviti na uvid originalne dokumente.</p>
                        <p><b>Prijave u pisanom obliku s dokazima o ispunjavanju uvjeta iz natječaja dostavljaju se
                                na adresu: Centar za autizam , p.p. 85, 31001 Osijek s naznakom "<i>Natječaj – Pomoćnik
                                    u nastavi – NE OTVARATI!</i>"</b></p>
                        <p>Osoba koja ne podnese pravodobnu i/ili urednu prijavu ili za koju se utvrdi da ne ispunjava
                            formalne uvjete iz natječaja, neće se smatrati kandidatom prijavljenim na natječaj. Urednom
                            prijavom smatra se prijava koja sadržava sve podatke i priloge navedene u natječaju.</p>
                        <p>Natječaj će biti objavljen 2. kolovoza 2024. na internet stranici Hrvatskog zavoda za
                            zapošljavanje, internet stranici i oglasnoj ploči Centra za autizam.</p>
                        <p>Radni odnos sa školom zasnovat će se nakon provedenog postupka selekcije kandidata.</p>
                        <p>Izrazi koji se u ovom natječaju koriste za osobe u muškom rodu neutralni su i jednako se
                            odnose na muške i ženske osobe.</p>
                    `,
                },
            ],
        },
    ];
</script>

<svelte:head>
    <title>CZA Osijek | Natječaji</title>
    <meta
        name="description"
        content="Pregledajte natječaje koje objavljujemo"
    />
</svelte:head>

<section class="grid generic-section">
    <div class="col-3 col-m-4 col-s-10 col-xs-12">
        <BlogNavigation labelValue="Natječaji:">
            {#each programs as item}
                <BlogNavigationItem
                    isTitle
                    textValue={item.title}
                    hrefPrefix="/natjecaji/"
                    hrefValue={item.title}
                ></BlogNavigationItem>
            {/each}
        </BlogNavigation>
    </div>
    <div class="col-6 col-m-8 col-s-10 col-xs-12 natjecaj">
        {#each programs as item}
            <Title id={item.title}>{item.title}</Title>

            {#each item.segments as segment}
                <BlogArticle>
                    {#if segment.subTitle}
                        <Subtitle id={segment.subTitle}
                            >{segment.subTitle}</Subtitle
                        >
                    {/if}
                    <Content>{@html segment.content}</Content>
                </BlogArticle>
            {/each}
        {/each}
    </div>
    <div class="col-3 col-m-0"></div>
</section>

<style>
    :global(.natjecaj table th,td) {
        border: 1px solid;
        padding: 5px;
        text-align: left;
    }
</style>