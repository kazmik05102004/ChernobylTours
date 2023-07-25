import * as React from 'react';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Top from './GeneralComponents/Top'
import Footer from './GeneralComponents/Footer'
import './excursion.css';

const theme = createTheme();

export default function Excursion() {

    const handleChoose = () => {
        window.location.href = '/excursionGeneral/excursionChoose';
    }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Top/>
      <div id='txtField'>
      <TextField
          disabled
          id="outlined-disabled"
          label=""
          defaultValue="ГОЛОВНА ЕКСКУРСІЯ"
        />
        </div>
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
          <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', marginTop:'30px', marginLeft:'15px', marginRight:'15px'}}
                >
                <CardMedia
                    component="iframe"
                    sx={{
                        // 16:9
                        // pt: '56.25%',
                        width: '100%',
                        height: '300px',
                    }}
                    image="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d644750.4609548277!2d29.546149833757532!3d50.857896703742746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x40d4cf4ee15a4505%3A0xa013ea0b6c4b7dc5!2zMDIwMDAsINCa0LjRl9Cy!3m2!1d50.4501!2d30.5234!4m5!1s0x472a8f00e898abcf%3A0x14bcceabdbfd5d2c!2z0KfQvtGA0L3QvtCx0LjQu9GMLCDQmtC40ZfQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGM!3m2!1d51.276302699999995!2d30.2218992!5e0!3m2!1suk!2sua!4v1682553073923!5m2!1suk!2sua"
                    alt="coleso"
                    />
                <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    8:00
                </Typography>
                <Typography>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Виїзд з Києва.</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Потрібно передбачити кілька деталей, таких як:
                            <ul>
                                <li>Зручне взуття, оскільки екскурсія передбачає багато ходіння. Рекомендується мати взуття з грубими підошвами, щоб уникнути травмування.</li>
                                <li>Вода і закуски. На території зони відчуження немає магазинів або ресторанів, тому вам може знадобитися вода і закуски, щоб не голодувати протягом дня.</li>
                                <li>Засоби захисту від комах. В зоні відчуження можуть бути багато комах, тому важливо мати засіб для їх захисту, такий як репелент.</li>
                                <li>Одяг туриста обов'язково має повністю покривати тіло.</li>
                                <li>На території Зони відчуження не можна підбирати сторонні предмети, рослини та інше.</li>
                                <li>Екскурсія проводиться тільки по спеціальних туристичних стежках в супроводі професійного гіда.</li>
                                <li>Камера або телефон з достатнім зарядом.</li>
                                <li>Одяг туриста обов'язково має повністю покривати тіло.</li>
                                <li>Індивідуальні медикаменти. Якщо у вас є індивідуальні медичні потреби, такі як ліки, алергічні препарати або інсулін, не забудьте їх взяти з собою.</li>
                            </ul>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Typography>
                </CardContent>
            </Card>
            </Grid>
            <Grid item xs={6}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', marginTop:'30px', marginLeft:'15px', marginRight:'15px'}}
                >
                <CardMedia
                component="img"
                sx={{
                    // 16:9
                //   pt: '56.25%',
                    width: '100%',
                    height: '300px',
                }}
                image="images/excursion/Dytiatky.jpg"
                alt="coleso"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    10:00
                </Typography>
                <Typography>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Прибуття в зону відчуження.</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            В’їзд у 30-кілометрову зону.<br/>
                            Контрольно-пропускний пункт (КПП) "Дитятки", огляд сіл Залісся та Копачі.<br/>
                            Надається 30хв-линний відпочинок для особистих потреб туристів, після чого перехід до наступного етапу екскурсії.<br/>
                            Туристам видаються радіаційні дозиметри.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Typography>
                </CardContent>
            </Card>
            </Grid>
            <Grid item xs={6}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', marginTop:'30px', marginLeft:'15px', marginRight:'15px'}}
                >
                <CardMedia
                component="img"
                sx={{
                    // 16:9
                //   pt: '56.25%',
                    width: '100%',
                    height: '300px',
                }}
                image="images/excursion/lis.jpg"
                alt="coleso"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    11:30
                </Typography>
                <Typography>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Рудий ліс.</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            В’їзд в 10-кілометрову зону.<br/>
                            Огляд дезактивованого Рудого Лісу на місці західного радіоактивного сліду від першого, найпотужнішого викиду від вибуху 4-го енергоблоку<br/><br/>
                            Рудий ліс - ділянка соснового лісу в безпосередній близькості від Чорнобильської АЕС. Дерева взяли на себе потужний удар радіації, який пофарбував хвою в цегляний колір, і перетворилися в «іржавий» ліс.<br/>
                            Загиблий лісовий масив по суті був міною уповільненої дії, так як, наприклад, під час пожежі міг послужити джерелом вторинного радіоактивного забруднення.<br/>
                            Тому було прийнято рішення про поховання частини найбільш зараженої деревини. Згодом, екосистема <br/>почала відновлюватися і на цьому місці почали рости молоді сосни.<br/><br/>
                            У цьому місці ви наочно зможете поспостерігати за невеликою к-стю зросів та падінь радіації.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Typography>
                </CardContent>
            </Card>
            </Grid>
            <Grid item xs={6}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', marginTop:'30px', marginLeft:'15px', marginRight:'15px'}}
                >
                <CardMedia
                component="img"
                sx={{
                    // 16:9
                //   pt: '56.25%',
                    width: '100%',
                    height: '300px',
                }}
                image="images/excursion/mist.jpg"
                alt="coleso"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                12:30
                </Typography>
                <Typography>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Прибуття у Прип'ять, Чорнобильський міст смерті</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        При в'їзді в місто Прип'ять розташовується так званий міст «смерті».<br/><br/>
                        Насправді це звичайний пішохідний міст, який з'єднував місто з Чорнобильською АЕС. Під час аварії на Чорнобильській атомній станції це місце накрила хмара радіонуклідів і радіаційний фон досягав<br/>600 рентген на годину.<br/><br/>
                        Вважали, що людина, яка пройшла по цьому мосту, через кілька діб неодмінно помирала. <br/>Звичайно, це все вигадка, проте саме тому міст отримав таку назву.           
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Typography>
                </CardContent>
            </Card>
            </Grid>
            <Grid item xs={6}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', marginTop:'30px', marginLeft:'15px', marginRight:'15px'}}
                >
                <CardMedia
                component="img"
                sx={{
                    // 16:9
                //   pt: '56.25%',
                    width: '100%',
                    height: '300px',
                }}
                image="images/excursion/coleso.jpg"
                alt="coleso"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                13:00
                </Typography>
                <Typography>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Візит у парк атракціонів.</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Парк атракціонів - одна з найпопулярніших визначних пам'яток Прип'яті. Напівзруйновані гойдалки і занедбані алеї різко підкреслюють контраст між минулим і сьогоденням.<br/><br/>
                        Відкриття цього парку було заплановано на 1 травня 1986 року, але йому так і не судилося прийняти своїх гостей через катастрофу, що відбулася.<br/><br/>
                        Колесо огляду, на якому так ніхто і не покатався, стало одним із символів як Прип'яті, так і всієї Чорнобильської зони.<br/>
                        Цей парк став культовим місцем, згаданим у багатьох фільмах("Chernobyl Diaries", "Друге дихання"), серіалах("The Walking Dead", "Sense8"") та іграх("S.T.A.L.K.E.R.: Тінь Чорнобиля", "Call of Duty 4: Modern Warfare")
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Typography>
                </CardContent>
            </Card>
            </Grid>
            <Grid item xs={6}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', marginTop:'30px', marginLeft:'15px', marginRight:'15px'}}
                >
                <CardMedia
                component="img"
                sx={{
                    // 16:9
                //   pt: '56.25%',
                    width: '100%',
                    height: '300px',
                }}
                image="images/excursion/basejn.jpg"
                alt="basejn"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                13:40
                </Typography>
                <Typography>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Візит до басейну "Лазурного"</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        До аварії на АЕС басейн «Лазурний» був дуже популярний серед жителів Прип'яті, особливо серед молоді.<br/>Він міг вмістити близько 50 осіб та мав неймовірний вид з великої кількості вікон, які забезпечували басейну достатньо світла. <br/><br/>
                        Головною його особливістю є те, що навіть після катастрофи на ЧАЕС він працював аж до 1992-го року. Послугами басейну користувалися місцеві робітники і ліквідатори наслідків аварії, тому що це місце було самим «чистим» в плані радіоактивного фону. <br/><br/>
                        Зараз басейн «Лазурний» повністю покинутий. Він став популярним місцем для відвідування туристами,<br/>які хочуть побачити на власні очі наслідки катастрофи.           
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Typography>
                </CardContent>
            </Card>
            </Grid>
            <Grid item xs={6}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', marginTop:'30px', marginLeft:'15px', marginRight:'15px'}}
                >
                <CardMedia
                component="img"
                sx={{
                    // 16:9
                //   pt: '56.25%',
                    width: '100%',
                    height: '300px',
                }}
                image="images/excursion/likarnia.jpg"
                alt="likarnia"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                14:20
                </Typography>
                <Typography>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Похід у Прип'ятську лікарню</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Медсанчастина №126 м. Прип'яті відома тим, що саме сюди надходили перші постраждалі від аварії на Чорнобильській АЕС працівники станції і пожежні. Ось як в «Незримому подиху смерті: морг МСЧ-126 в Прип'яті» описує цю пам'ятку postalovsky_a (один з туристів, які побували там):<br/><br/>
                        «Лікарняний комплекс медико-санітарної частини (МСЧ-126) міста Прип'яті, покинутий в зв'язку з аварією на ЧАЕС, апріорі сам по собі є страшним і незатишним. Високий ступінь збереження медичної<br/>інфраструктури укупі зі специфікою архітектурного проекту будівлі (навіть вдень там тьмяне світло)<br/>зумовили виникнення постапокаліптичного вигляду внутрішніх приміщень.<br/><br/>
                        Окремі палати і кімнати МСЧ-126 ідеально підходять для зйомки науково-фантастичних трилерів на тему життя в світі після ери людини. Шприци, ліки, медичні крісла, ліжка, матраци, ампули ... Крім того,<br/>постійно відчувається прямий зв'язок з історією і конкретно з тією страшною ніччю 26 квітня 1986 року,<br/>коли в лікарню привозили перших потерпілих зі станції.<br/><br/>
                        У підвалі МСЧ-126 досі лежать речі пожежних, які брали участь в гасінні пожежі на даху 4-го енергоблоку.<br/>Все це зумовило безперервний інтерес відвідувачів Зони Відчуження до цього об'єкта».          
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Typography>
                </CardContent>
            </Card>
            </Grid>
            <Grid item xs={6}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', marginTop:'30px', marginLeft:'15px', marginRight:'15px'}}
                >
                <CardMedia
                component="img"
                sx={{
                    // 16:9
                //   pt: '56.25%',
                    width: '100%',
                    height: '300px',
                }}
                image="images/excursion/hotel.jpg"
                alt="hotel"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                15:20
                </Typography>
                <Typography>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Готель "Полісся"</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Готель "Полісся" - це готель, який знаходиться в місті Чорнобиль, що знаходиться в межах зони відчуження Чорнобильської АЕС. Готель був побудований в 1973 році та під час катастрофи на ЧАЕС в 1986 році він використовувався як тимчасовий штаб для ліквідації наслідків аварії.<br/><br/>
                        Під час гасіння пожежі він був спостережним пунктом коригування вертолітних операцій над руїною 4-го реактора.<br/><br/>
                        Зараз готель надає послуги для туристів у вигляді ночівлі.<br/>
                        Готель має кілька кімнат різного класу, включаючи одномісні, двомісні та номери люкс. У готелі є також ресторан, де гості можуть скуштувати страви української кухні.<br/><br/>
                        Щоб замовити номер у готелі, потрібно буде звернутись до його адміністрації, та обговорити умови проживання, обов'язково, найнявши гіда, для супроводження вас назад у безпечну зону.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Typography>
                </CardContent>
            </Card>
            </Grid>
            <Grid item xs={6}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', marginTop:'30px', marginLeft:'15px', marginRight:'15px'}}
                >
                <CardMedia
                component="img"
                sx={{
                    // 16:9
                //   pt: '56.25%',
                    width: '100%',
                    height: '300px',
                }}
                image="images/excursion/sadok.jpg"
                alt="sadok"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                16:00
                </Typography>
                <Typography>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Візит до дитячого садку</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Після катастрофи на Чорнобильській атомній станції тисячі жителів з навколишніх сіл були евакуйовані.<br/><br/>
                        Більшість їхніх будинків було зруйновано і поховано в могильники, проте в селі Копачі уціліла будівля дитячого садка.<br/><br/>
                        Іграшки та дитячі меблі поруч зі зловісним знаком "радіація" і забутими протигазами вражають не менше, аніж занедбаний парк атракціонів і колесо огляду в Прип'яті. 
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Typography>
                </CardContent>
            </Card>
            </Grid>
            <Grid item xs={6}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', marginTop:'30px', marginLeft:'15px', marginRight:'15px'}}
                >
                <CardMedia
                component="img"
                sx={{
                    // 16:9
                //   pt: '56.25%',
                    width: '100%',
                    height: '300px',
                }}
                image="images/excursion/chornobl2.jpg"
                alt="chornobl2"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                16:40
                </Typography>
                <Typography>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Секретний об'єкт Чорнобиль-2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Гігантські антени радара "ДУГА-1", секретне містечко Чорнобиль-2, місто Чорнобиль, прогулянка по місту,<br/> за бажанням відвідування занедбаних будівель.<br/><br/>
                        Відома пам'ятка Чорнобильської зони - радіолокаційна станція ДУГА-1, яка призначалася для відстеження запуску ракет з території США в період холодної війни. Місце для радара було обрано не <br/>випадково - установка споживала велику кількість електроенергії і планувалось, що 1-й і 2-й енергоблоки АЕС подаватимуть струм прямо на станцію.<br/><br/>
                        У Радянському Союзі було три таких комплекси. Перших двох радарних антен вже давно не існує, а ось чорнобильська - вціліла. Довгий час об'єкт був засекречений.<br/><br/>
                        Сьогодні ж це одне з найулюбленіших місць для відвідування і фотографування.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Typography>
                </CardContent>
            </Card>
            </Grid>
            <Grid item xs={6}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', marginTop:'30px', marginLeft:'15px', marginRight:'15px'}}
                >
                <CardMedia
                component="img"
                sx={{
                    // 16:9
                //   pt: '56.25%',
                    width: '100%',
                    height: '300px',
                }}
                image="images/excursion/ogliad_maid.jpg"
                alt="ogliad_maid"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                17:20
                </Typography>
                <Typography>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>В'їзд на територію Чорнобиля</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Оглядовий майданчик ЧАЕС знаходиться на південний схід від об'єкту "Укриття", де знаходиться руїни четвертого енергоблоку Чорнобильської АЕС.<br/>З майданчика відкривається панорамний вид на зону відчуження та унікальну природну зону Полісся.<br/>Також на майданчику розташовані інформаційні таблички та експонати, що розповідають про катастрофу<br/>
                        на ЧАЕС та наслідки її для людей та природи.<br/><br/>
                        Саркофаг в Чорнобилі - це величезна металева конструкція, що була побудована над об'єктом "Укриття" у 1986 році з метою ущільнення та захисту від випромінювання. Вона була створена швидко та тимчасово, <br/>
                        тому згодом стала небезпечною та потребувала заміни на більш стійку та безпечну.<br/><br/>У 2016 році було побудовано Нову оболонку (New Safe Confinement), яка замінила старий саркофаг та забезпечила стійкий та безпечний захист від випромінювання. Нова оболонка є найбільшою з мобільних споруд у світі та дозволяє проводити роботи над "Укриттям" безпосередньо на місці без ризику виникнення радіаційної небезпеки.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Typography>
                </CardContent>
            </Card>
            </Grid>
            <Grid item xs={6}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', marginTop:'30px', marginLeft:'15px', marginRight:'15px'}}
                >
                <CardMedia
                component="img"
                sx={{
                    // 16:9
                //   pt: '56.25%',
                    width: '100%',
                    height: '300px',
                }}
                image="images/excursion/gradyrnia.jpg"
                alt="gradyrnia"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                18:00
                </Typography>
                <Typography>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Огляд градирні</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Градирня - це споруда, що знаходиться на території Чорнобильської АЕС, призначена для охолодження<br/>води, що використовувалася в реакторах.<br/><br/>
                        Після катастрофи на Чорнобильській АЕС градирня використовувалась для зберігання радіоактивних матеріалів та обладнання, яке забруднилося під час аварії. У 2017 році градирня була закрита, а її <br/>забруднені матеріали були перевезені на спеціальну забруднену територію.<br/><br/>
                        Градирня є однією з найбільших споруд на території Чорнобильської АЕС і може бути цікавою для відвідувачів, які хочуть побачити, як функціонувала система охолодження реакторів на ЧАЕС. Однак,<br/>через високий рівень радіації, заборонено входити на територію градирні без спеціального дозволу та екіпірування.<br/><br/>                    
                        Зараз можна зайти всередину недобудованої градирні, подивитися на колись прокладені інженерні<br/>комунікації і оцінити сучасні графіті на стінах.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Typography>
                </CardContent>
            </Card>
            </Grid>
            <Grid item xs={6}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', marginTop:'30px', marginLeft:'15px', marginRight:'15px'}}
                >
                <CardMedia
                component="img"
                sx={{
                    // 16:9
                //   pt: '56.25%',
                    width: '100%',
                    height: '300px',
                }}
                image="images/excursion/som.jpg"
                alt="som"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                18:40
                </Typography>
                <Typography>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Канал охолодження ЧАЕС</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Ще одна особливість Зони відчуження - різноманіття тваринного світу.<br/><br/> Коли люди поїхали з уражених радіацією територій, природа швидко відвоювала назад свої володіння. <br/>Зараз в місцевих лісах можна зустріти ведмедів, видр, борсуків, ондатр, рисей, оленів, коней Пржевальського,<br/>вовків і інших рідкісних тварин, яких тут не бачили з початку 20-х років минулого століття.<br/><br/>
                        А ще тут можна познайомитися з найбільшим прісноводним хижаком цих місць - сомом. Зазвичай ці<br/>величезні рибини ховаються на дні річок. А в каналі охолодження ЧАЕС їх можна не тільки побачити, а й погодувати. Це ще один туристичний must-do в Зоні відчуження.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Typography>
                </CardContent>
            </Card>
            </Grid>
            <Grid item xs={6}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', marginTop:'30px', marginLeft:'15px', marginRight:'15px'}}
                >
                <CardMedia
                component="img"
                sx={{
                    // 16:9
                //   pt: '56.25%',
                    width: '100%',
                    height: '300px',
                }}
                image="images/excursion/radiacControl.jpg"
                alt="radiacControl"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                19:30
                </Typography>
                <Typography>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Проходження радіаційного контролю та виїзд в Київ</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Після екскурсії по Чорнобилю потрібно проходити радіаційний контроль, оскільки на території Зони відчуження і навколишніх населених пунктах рівень радіації може перевищувати норму, що прийнята для безпеки людини.<br/><br/>
                        Упродовж екскурсії, ви можливо буде поблизу рівнів радіації, які зазвичай вважаються безпечними, але<br/>після декількох годин або днів можуть мати вплив на ваше здоров'я. Радіоактивні речовини можуть залишатися на одязі, взутті та інших предметах, які можуть бути джерелом радіаційного забруднення для оточуючих.<br/><br/>
                        Радіаційний контроль - це процедура вимірювання рівня радіації на поверхні тіла та в одязі. Це допомагає забезпечити безпеку вам та оточуючим. Якщо рівень радіації перевищує безпечний рівень, то можуть бути запропоновані додаткові процедури для очищення від радіоактивного забруднення та/або медичний огляд.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Typography>
                </CardContent>
            </Card>
            </Grid>
            <Grid item xs={6}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', marginTop:'30px', marginLeft:'15px', marginRight:'15px'}}
                >
                <CardMedia
                component="img"
                sx={{
                    // 16:9
                //   pt: '56.25%',
                    width: '100%',
                    height: '300px',
                }}
                image="images/excursion/Kyiv.jpg"
                alt="Kyiv"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                21:30
                </Typography>
                <Typography>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Прибуття до Києва</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Підсумуючи, екскурсія по Чорнобилі - це незабутнє подорожжя в історію людства, яке допомагає краще зрозуміти наслідки найбільшої техногенної катастрофи в історії. Вона включає відвідування музеїв, меморіалів, експозицій, готелів, басейну "Лазурний", градирні та інших об'єктів, які стали свідками Чорнобильської катастрофи та наслідків.<br/><br/>
                        Екскурсія по Чорнобилі - це не тільки вражаюча подорожжя в минуле, але і можливість краще зрозуміти наслідки техногенної катастрофи та пам'ятати про необхідність збереження безпеки в житті людей та<br/>природи.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Typography>
                </CardContent>
            </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      <div id="butSign">
      <Button variant="contained" onClick={handleChoose}>
        Хочете записатись на екскурсію?
      </Button>      
      </div>
      <Footer/>
    </ThemeProvider>
  );
}