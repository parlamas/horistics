// src/app/components/LT-R-00001.tsx

"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Classical1, Classical2, Classical3, Classical4, Classical5, Classical6 } from './classical';

interface LTComponentProps {
  onLanguageChange: (lang: string) => void;
}

export default function LTComponent({ onLanguageChange }: LTComponentProps) {
  const [language, setLanguage] = useState('gr');
  const [bubbleLanguage, setBubbleLanguage] = useState('gr');
  const [isMounted, setIsMounted] = useState(false); // New state to track mount status

  useEffect(() => {
    setIsMounted(true); // Set the component as mounted
  }, []);

  const toggleLanguage = (lang: string) => {
    setLanguage(lang);
    setBubbleLanguage(lang);
    onLanguageChange(lang);
  };

  if (!isMounted) {
    // Prevent any client-side render until the component is fully mounted
    return null;
  }

  return (
    <div>
      {/* The rest of your UI */}
      <div className="flex flex-col items-center justify-center mb-4 w-full">
        <div
          className="flex flex-col justify-between items-center w-full max-w-[90%] md:max-w-[70%] relative"
          style={{
            background: 'rgba(255, 255, 255, 0.8)',
            padding: '10px',
            borderRadius: '5px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            height: '300px',
            position: 'relative',
          }}
        >
          <div
            className="overflow-y-auto"
            style={{
              width: '100%',
              paddingBottom: '50px',
              flexGrow: 1,
            }}
          >
            
            {bubbleLanguage === 'es' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical1 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                <span style={{ color: 'blue' }}>Sócrates:</span> Ayer bajé al Pireo con Glaucón, hijo de Aristón, para rezar a la diosa, pero también porque quería
                ver de qué manera celebrarían la fiesta, que tuvo lugar hoy por primera vez. Me encantó la procesión de los
                locales, pero la de los tracios fue igualmente hermosa, si no más. Cuando terminamos nuestras oraciones y vimos
                el espectáculo, nos dirigimos hacia la ciudad. En ese momento Polemarco, hijo de Céfalo, nos vio de lejos cuando emprendíamos el
                regreso a casa y le dijo a su sirviente que corriera y nos pidiera que lo esperáramos.
              </p>
            )}
            {bubbleLanguage === 'gr' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical1 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                <span style={{ color: 'blue' }}>Σωκράτης:</span>&nbsp;Κατέβηκα χθες στον Πειραιά με τον Γλαύκωνα, τον γιο του Αρίστωνα, και για να προσευχηθώ
                στη θεά αλλά και γιατί ήθελα να δω πώς θα τελούσαν τη γιορτή μιά και έλαβε χώρα σήμερα για πρώτη φορά. Μού άρεσε πολύ η παρέλαση των εντοπίων, 
                όμως και η παρέλαση των Θρακών ήταν εξ ίσου καλή, αν όχι και καλύτερη. Αφού προσευχηθήκαμε και είδαμε το θέαμα, πήραμε το δρόμο προς την Αθήνα. 
                Ο Πολέμαρχος όμως, ο γιος του Κέφαλου, όταν μάς είδε από μακρυά νά ξεκινάμε για την επιστροφή, πρόσταξε αμέσως το δούλο του νά τρέξει να μας πει 
                να τον περιμένουμε.
              </p>
            )}
            {bubbleLanguage === 'en' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical1 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                <span style={{ color: 'blue' }}>Socrates:</span>&nbsp;I went down yesterday to the Piraeus with Glaucon, the son of Ariston, to pray to the goddess but also because I wanted to 
                see in what manner they would celebrate the festival, which took place today for the first time. I was delighted with the procession of the
                locals, but that of the Thracians was equally, if not more, beautiful. When we had finished our prayers and
                viewed the spectacle, we turned in the direction of the city. At that instant Polemarchus the son of Cephalus, happened to catch sight of us from a distance as we were starting on
                our way home, and told his servant to run and ask us to wait for him.
              </p>
            )}
            {bubbleLanguage === 'da' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical1 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                <span style={{ color: 'blue' }}>Sokrates:</span> Jeg tog i går ned til Piræus med Glaucon, Aristons søn, for at bede til gudinden, men også fordi jeg ville
                se på hvilken måde de ville fejre festivalen, som fandt sted i dag for første gang. Jeg var henrykt over processionen af
                lokale, men thrakiernes var lige så, hvis ikke mere, smuk. Da vi var færdige med vores bønner og
                så skuespillet, vendte vi i retning af byen. I det øjeblik fik Polemarchus, Cephalus&apos; søn, tilfældigvis øje på os på afstand, da vi startede på
                på vej hjem og bad sin tjener løbe og bede os vente på ham.
              </p>
            )}
            {bubbleLanguage === 'zh' && (
              <p className="text-left text-[9px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical1 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                <span style={{ color: 'blue' }}>苏格拉底：</span>昨天，我和阿里斯顿之子格劳孔一起去了比雷埃夫斯，向女神祈祷，也因为我想看看他们会以何种方式庆祝今天首次举行的节日。
                当地人的游行让我很开心，但色雷斯人的游行同样美丽，甚至更美丽。当我们结束祈祷并观看了这场盛会后，我们转向城市的方向。就在那时，塞法洛斯之子波勒马库斯在远处看到了我们，
                当时我们正要回家，他让他的仆人跑过去让我们等他。<br />
                <span style={{ color: 'blue' }}>sū gélā dǐ:</span> Zuótiān, wǒ hé ālǐ sī dùn zhīzǐ gé láo kǒng yīqǐ qùle bǐ léi āi fū sī, xiàng nǚshén qídǎo, yě yīnwèi wǒ xiǎng kàn kàn tāmen huì yǐ hé zhǒng fāngshì 
                qìngzhù jīntiān shǒucì jǔxíng de jiérì. Dāngdì rén de yóuxíng ràng wǒ hěn kāixīn, dàn sè léi sī rén de yóuxíng tóngyàng měilì, shènzhì gèng měilì. 
                dāng wǒmen jiéshù qídǎo bìng guānkànle zhè chǎng shènghuì hòu, wǒmen zhuǎnxiàng chéngshì de fāngxiàng. Jiù zài nà shí, sāi fǎ luòsī zhīzǐ bō lè mǎ kù 
                sī zài yuǎn chù kàn dàole wǒmen, dāngshí wǒmen zhèng yào huí jiā, tā ràng tā de púrén pǎo guòqù ràng wǒmen děng tā.
              </p>
            )}
            {bubbleLanguage === 'pl' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical1 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                <span style={{ color: 'brown' }}>[327a]</span> <span style={{ color: 'blue' }}>Sokrates:</span>&nbsp; Wczoraj poszedłem do Pireusu z Glaukonem, synem Aristona, aby modlić się do bogini, ale także dlatego, że chciałem
                zobaczyć, w jaki sposób będą obchodzić święto, które odbyło się dzisiaj po raz pierwszy. Byłem zachwycony procesją
                miejscowych, ale procesja Traków była równie, jeśli nie piękniejsza. Kiedy skończyliśmy nasze modlitwy i
                obejrzeliśmy spektakl, zwróciliśmy się w stronę miasta. W tym momencie Polemarchus, syn Kefalosa, dostrzegł nas z daleka, gdy wyruszaliśmy
                w drogę do domu, i powiedział swojemu słudze, aby pobiegł i poprosił nas, abyśmy na niego zaczekali.
              </p>
            )}
            {bubbleLanguage === 'fr' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical1 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                <span style={{ color: 'blue' }}>Socrate :</span>&nbsp;Je suis descendu hier au Pirée avec Glaucon, fils d&apos;Ariston, pour prier la déesse, mais aussi parce 
                que je voulais
                voir de quelle manière on célébrerait la fête, qui avait lieu aujourd&apos;hui pour la première fois. J&apos;ai été ravi de la procession des
                habitants du pays, mais celle des Thraces était tout aussi, sinon plus, belle. Quand nous eûmes fini nos prières et
                contemplé le spectacle, nous nous tournâmes vers la ville. À cet instant, Polémarque, fils de Céphale, nous aperçut par hasard de loin alors que nous nous mettions
                en route pour rentrer chez nous, et dit à son serviteur de courir nous demander de l&apos;attendre.
              </p>
            )}
            {bubbleLanguage === 'pt' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical1 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                <span style={{ color: 'blue' }}>Sócrates:</span>Desci ontem ao Pireu com Glauco, filho de Ariston, para rezar à deusa, mas também porque queria
                ver de que forma celebrariam a festa, que hoje se realizou pela primeira vez. Fiquei encantado com a procissão do
                locais, mas a dos Trácios era igualmente, senão mais, bela. Quando terminamos as nossas orações e
                assistimos ao espetáculo, viramos em direção à cidade. Nesse instante, Polemarco, filho de Céfalo, avistou-nos à distância, quando estávamos a partir.
                caminho para casa e disse ao seu servo para correr e pedir-nos que o esperássemos.
              </p>
            )}
          </div>

          {/* Flags Container for the First Instance */}
          <div style={{ 
  marginTop: '10px', 
  backgroundColor: 'olive', 
  display: 'flex', 
  justifyContent: 'center', 
  gap: '10px', 
  flexWrap: 'wrap', 
  maxWidth: '100%',
  border: '2px dotted white',   // Adds a dotted green border
  padding: '3px'                // Adds 3px padding
}}>
            <Image
              src="/images/gr.webp"
              alt="Greece Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('gr')}
            />
            <Image
              src="/images/us.webp"
              alt="USA Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('en')}
            />
            <Image
              src="/images/pl.webp"
              alt="Poland Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('pl')}
            />
            <Image
              src="/images/es.webp"
              alt="Spain Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('es')}
            />
            <Image
              src="/images/dk.webp"
              alt="Denmark Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('da')}
            />
            <Image
              src="/images/fr.webp"
              alt="French Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('fr')}
            />
            <Image
              src="/images/cn.webp"
              alt="China Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('zh')}
            />
            <Image
              src="/images/pt.webp"
              alt="Portugal Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('pt')}
            />
            {/* Add more flags as needed for the first instance */}
          </div>
        </div>

        {/* Image for First Instance */}
        <div>
          <Image
            src="/images/R1/longwallsnearpiraeus.png"
            alt="The Long Walls connecting Athens with Piraeus."
            width={450}
            height={450}
            style={{ maxWidth: '90%', margin: '10px auto 0' }}
          />
        </div>

        {/* Caption Text Below the Image for First Instance */}
<div className="text-left flex flex-col justify-between" style={{ height: '60px' }}>
  {language === 'es' ? (
    <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
      <span style={{color:"red",fontWeight:"bold"}}>1.</span> Las Murallas Largas se extendían desde Atenas hasta El Pireo.
    </p>
  ) : language === 'gr' ? (
    <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
      <span style={{color:"red",fontWeight:"bold"}}>1.</span> Tα Μακρά Τείχη εκτείνοντο απο την Αθηνα έως τον Πειραιά.
    </p>
  ) : language === 'da' ? (
    <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
      <span style={{color:"red",fontWeight:"bold"}}>1.</span> De lange mure strakte sig fra Athen til Piræus.
    </p>
  ) : language === 'pt' ? (
    <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
      <span style={{color:"red",fontWeight:"bold"}}>1.</span> As Longas Muralhas estendiam-se de Atenas ao Pireu.
    </p>
  ) : language === 'fr' ? (
    <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
      <span style={{color:"red",fontWeight:"bold"}}>1.</span> Les Longs Murs s&apos;étendaient d&apos;Athènes au Pirée.
    </p>
  ) : language === 'zh' ? (
    <p className="text-center text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
      <span style={{color:"red",fontWeight:"bold"}}>1.</span> 长墙从雅典延伸至比雷埃夫斯。<br />
      zhǎng qiáng cóng yǎdiǎn yánshēn zhì bǐ léi āi fū sī
    </p>
  ) : language === 'pl' ? (
    <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
      <span style={{color:"red",fontWeight:"bold"}}>1.</span> Długie Mury rozciągały się od Aten do Pireusu.
    </p>
  ) : (
    <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
      <span style={{color:"red",fontWeight:"bold"}}>1.</span> The Long Walls stretched from Athens to Piraeus.
    </p>
  )}
</div>

      </div>

      {/* Second Block - Walls */}
      <div className="flex flex-col items-center justify-center mb-4 w-full">
        {/* Speech Bubble for Second Instance */}
        <div
          className="flex flex-col justify-between items-center w-full max-w-[90%] md:max-w-[70%] relative"
          style={{
            background: 'rgba(255, 255, 255, 0.8)',
            padding: '10px',
            borderRadius: '5px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            height: '300px',
            position: 'relative',
          }}
        >
          <div
            className="overflow-y-auto"
            style={{
              width: '100%',
              paddingBottom: '50px',
              flexGrow: 1,
            }}
          >
            {bubbleLanguage === 'es' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical2 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                El sirviente me agarró por la capa y me dijo: &quot;Polemarco te pide que esperes&quot;. Me di la vuelta y le pregunté dónde estaba su amo. &quot;Ahí está&quot;, 
                dijo el joven, &quot;viene detrás de ti, si tan solo esperas&quot;. &quot;Por supuesto que le esperaremos&quot;, dijo Glaucón, y al cabo de unos minutos apareció 
                Polemarco, y con él Adimanto, el hermano de Glaucón, Nicerato, hijo de Nicias, y varios otros que habían estado en la procesión.
              </p>
            )}
            {/* Add other languages for the second instance here */}
            {bubbleLanguage === 'gr' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical2 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                Ο υπηρέτης τράβηξε το μανδύα μου από πίσω και είπε, &quot;Ο Πολέμαρχος είπε να τον περιμένετε&quot;. Γύρισα και τον ρώτησα πού ήταν ο κύριός του.
                &quot;Εκεί πέρα είναι&quot;, είπε ο νεαρός, &quot;έρχεται προς τα εδώ, απλά περιμένετε λίγο.&quot; &quot;Και βέβαια θα περιμένουμε&quot;, είπε ο Γλαύκων. 
                Και σε λίγο εμφανίσθηκε ο Πολέμαρχος, με τον Αδείμαντο, τον αδελφό του Γλαύκωνα, και τον Νικήρατο, το γιο του Νικία, μαζί με μερικούς άλλους που είχαν 
                παρακολουθήσει στην πομπή.
              </p>
            )}
            {bubbleLanguage === 'en' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical2 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                The servant took hold of me by the cloak behind and said, &quot;Polemarchus desires you to wait.&quot; I turned round, 
                and asked him where his master was. &quot;There he is,&quot; said the youth, &quot;coming after you, if you will only wait.&quot; &quot;Certainly we will,&quot; 
                said Glaucon, and in a few minutes Polemarchus appeared, and with  him Adeimantus, Glaucon&apos;s brother, Niceratus the son of Nicias, and several others 
                who had been at the procession.
              </p>
            )}
            {bubbleLanguage === 'da' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical2 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                Tjeneren tog fat i mig i kappen bagved og sagde: &quot;Polemarchus ønsker, at du venter.&quot; Jeg vendte mig om og spurgte ham, hvor hans herre var. 
                &quot;Der er han,&quot; sagde ynglingen, &quot;kommer efter dig, hvis du bare vil vente.&quot; &quot;Det vil vi bestemt,&quot; sagde Glaucon, og i løbet af få minutter dukkede 
                Polemarchus op, og med ham Adeimantus, Glaucons bror, Niceratus, Nicias&apos; søn, og flere andre, der havde været med i processionen.
              </p>
            )}
            {bubbleLanguage === 'zh' && (
              <p className="text-left text-[9px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical2 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                仆人抓住我身后的斗篷，说道：&quot;波勒马库斯请你稍等。&quot; 我转过身，问他主人在哪里。&quot;他就在那儿，&quot; 年轻人说道，&quot;他正在追你，只要你愿意等。&quot; 
                &quot;我们当然愿意，&quot; 格劳孔说道，几分钟后波勒马库斯出现了，和他一起出现的还有格劳孔的兄弟阿德曼图斯、尼西亚斯的儿子尼西阿斯，以及其他几个参加过游行的人。<br />
                púrén zhuā zhù wǒ shēnhòu de dǒupéng, shuōdao: &quot;Bō lè mǎ kù sī qǐng nǐ shāo děng.&quot; Wǒ zhuǎnguò shēn, wèn tā zhǔrén zài nǎlǐ. &quot;Tā jiù zài nà&apos;er,&quot;
                 niánqīng rén shuōdao, &quot;tā zhèngzài zhuī nǐ, zhǐyào nǐ yuànyì děng.&quot;
              </p>
            )}
            {bubbleLanguage === 'pl' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical2 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                Sługa złapał mnie za płaszcz z tyłu i powiedział: &quot;Polemarchus chce, żebyś poczekał&quot;. Odwróciłem się i zapytałem go, gdzie jest jego pan. 
                &quot;Oto on&quot;, powiedział młodzieniec, &quot;idzie za tobą, jeśli tylko zaczekasz&quot;.
                &quot;Oczywiście, że zaczekamy&quot;, powiedział Glaukon i po kilku minutach pojawił się Polemarchus, a wraz z nim Adejmantus, 
                brat Glaukona, Niceratus, syn Nikiasza, i kilku innych, którzy byli na procesji.
              </p>
            )}
            {bubbleLanguage === 'fr' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical2 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                Le serviteur me saisit par le manteau et me dit : &quot;Polémarque veut que tu attendes.&quot; Je me retournai et lui demandai où était son maître. 
                &quot;Le voilà, dit le jeune homme, qui vient te chercher, si tu veux seulement attendre.&quot; &quot;Certainement, nous le ferons&quot;, répondit Glaucon. 
                Quelques minutes plus tard Polémarque apparut, accompagné d&apos;Adéimante, frère de Glaucon, de Nicérate, fils de Nicias, et de plusieurs autres 
                qui avaient assisté au cortège.
              </p>
            )}
            {bubbleLanguage === 'pt' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical2 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                O servo agarrou-me pela capa e disse: &quot;Polemarco deseja que esperes.&quot; Virei-me e perguntei-lhe onde estava o seu amo. &quot;Lá está ele&quot;, disse o jovem, 
                &quot;vem atrás de ti, se apenas esperares.&quot; &quot;Certamente o faremos&quot;, disse Glauco, e em poucos minutos apareceu Polemarco, e com ele Adimanto, irmão de Glauco, 
                Nicerato, filho de Nícias, e vários outros que estiveram no cortejo.
              </p>
            )}
          </div>

          {/* Flags Container for the Second Instance */}
          <div style={{ 
  marginTop: '10px', 
  backgroundColor: 'olive', 
  display: 'flex', 
  justifyContent: 'center', 
  gap: '10px', 
  flexWrap: 'wrap', 
  maxWidth: '100%',
  border: '2px dotted white',   // Adds a dotted green border
  padding: '3px'                // Adds 3px padding
}}>
          
            <Image
              src="/images/gr.webp"
              alt="Greece Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('gr')}
            />
            <Image
              src="/images/us.webp"
              alt="USA Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('en')}
            />
            <Image
              src="/images/pl.webp"
              alt="Poland Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('pl')}
            />
            <Image
              src="/images/es.webp"
              alt="Spain Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('es')}
            />
            <Image
              src="/images/dk.webp"
              alt="Denmark Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('da')}
            />
            <Image
              src="/images/fr.webp"
              alt="French Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('fr')}
            />
            <Image
              src="/images/cn.webp"
              alt="China Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('zh')}
            />
            <Image
              src="/images/pt.webp"
              alt="Portugal Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('pt')}
            />
            {/* Add more flags as needed for the second instance */}
          </div>
        </div>

        {/* Image for Second Instance */}
        <div>
          <Image
            src="/images/R1/two.webp"
            alt="The Long Walls connecting Athens with Piraeus."
            width={450}
            height={450}
            style={{ maxWidth: '90%', margin: '10px auto 0' }}
          />
        </div>

        {/* Caption Text Below the Image for Second Instance */}
        <div className="text-left flex flex-col justify-between" style={{ height: '60px' }}>
          {language === 'es' ? (
            <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
              <span style={{color:"red",fontWeight:"bold"}}>2.</span> El sirviente toma la capa de Sócrates y le pide que espere.
            </p>
          ) : language === 'gr' ? (
            <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
              <span style={{color:"red",fontWeight:"bold"}}>2.</span> Ο υπηρέτης πιάνει τον Σωκράτη από τον μανδύα 
              για να του πει να περιμένει.
            </p>
            ) : language === 'da' ? (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
                <span style={{color:"red",fontWeight:"bold"}}>2.</span> Tjeneren tager fat i Socrates&apos; kappe og beder ham vente.
              </p>
            ) : language === 'pt' ? (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
                <span style={{color:"red",fontWeight:"bold"}}>2.</span> O servo agarra o braço de Sócrates. capa e pede-lhe que espere.
              </p>
            ) : language === 'fr' ? (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
                <span style={{color:"red",fontWeight:"bold"}}>2.</span> Le serviteur saisit le manteau de Socrate et lui demande d&apos;attendre.
              </p>
            ) : language === 'zh' ? (
              <p className="text-center text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
                <span style={{color:"red",fontWeight:"bold"}}>2.</span> 仆人抓住苏格拉底的斗篷并请他稍等。<br />
                púrén zhuā zhù sū gélā dǐ de dǒupéng bìng qǐng tā shāo děng.
              </p>
            ) : language === 'pl' ? (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
                <span style={{color:"red",fontWeight:"bold"}}>2.</span> Sługa chwyta płaszcz Sokratesa i prosi go, żeby czekał.
              </p>
            ) : (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
                <span style={{color:"red",fontWeight:"bold"}}>2.</span> The servant takes hold of Socrates&apos; cloak and asks him to wait.
              </p>
          )}
        </div>
        </div>


{/* Third Block - Walls */}
<div className="flex flex-col items-center justify-center mb-4 w-full">
        {/* Speech Bubble for Second Instance */}
        <div
          className="flex flex-col justify-between items-center w-full max-w-[90%] md:max-w-[70%] relative"
          style={{
            background: 'rgba(255, 255, 255, 0.8)',
            padding: '10px',
            borderRadius: '5px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            height: '300px',
            position: 'relative',
          }}
        >
          <div
            className="overflow-y-auto"
            style={{
              width: '100%',
              paddingBottom: '50px',
              flexGrow: 1,
            }}
          >
            {bubbleLanguage === 'es' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical3 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                Polemarco me dijo: «Veo que tú y tu compañero ya estáis en camino hacia la ciudad. «No te equivocas mucho», dije. «Pero ¿veis», continuó, 
                «cuántos somos aquí?». «Por supuesto». «¿Y sois vosotros más fuertes que todos nosotros? Porque si no, tendréis que quedaros donde estáis». «¿No podría 
                haber otra alternativa», dije, «que podamos convenceros de que nos dejéis ir?». «Pero ¿podréis convencernos,
                si nos negamos a escucharos?», dijo. «Seguro que no», respondió Glaucón. «Entonces no vamos a escucharos; de ​​eso podéis estar seguros».
              </p>
            )}
            {/* Add other languages for the second instance here */}
            {bubbleLanguage === 'gr' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical3 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                Λέει λοιπον ο Πολέμαρχος, &quot;Νομίζω, Σωκράτη, πώς ξεκινήσατε κιόλας για την Αθήνα&quot;. &quot;Ετσι είναι&quot;, είπα έγώ. &quot;Βλέπεις,&quot;
                 είπε, &quot;πόσοι είμαστε;&quot; &quot;Βέβαια και βλέπω&quot;. &quot;Ε, λοιπόν&quot;, εΙπε, &quot;ή θα πρέπει να τα βγάλετε πέρα με ὀλους αυτούς ή θα μείνετε εδώ
που είσαστε&quot;! &quot;Τότε&quot;, είπα έγώ, &quot;δεν μένει παρά μία ακόμη δυνατότητα: Νά σάς πείσουμε δηλαδή δτι πρέπει να μάς αφήσετε να συνεχίσουμε το δρόμο μας;&quot;
&quot;Αλήθεια&quot;, είπε ο Πολέμαρχος, &quot;γίνεται να πείσετε κάποιους που δεν είναι διατεθειμένοι να σας ακούσουνε;&quot; &quot;Με κανένα τρόπο&quot;, είπε ο Γλαύκων. 
&quot;Τότε, λοιπόν, βάλτε το καλά στο μυαλό σας ότι εμείς δεν είμαστε διατεθειμένοι να σάς ακούσουμε&quot;.
              </p>
            )}
            {bubbleLanguage === 'en' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical3 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                Polemarchus said to me: &quot;I see that you and your companion are already on your way to the city.&quot; &quot;You are not far wrong, I said.&quot;
                &quot;But do you see,&quot; he continued, &quot;how many of us we are here?&quot; &quot;Of course.&quot; &quot;And are you stronger than all us? For if not, you will
have to remain where you are.&quot; &quot;May there not be the alternative,&quot; I said, &quot;that we may persuade you to let us go?&quot; &quot;But can you persuade us, 
if we refuse to listen to you?&quot; he said. &quot;Certainly not,&quot; replied Glaucon. &quot;Then we are not going to listen; of that you may be assured.&quot;

              </p>
            )}
            {bubbleLanguage === 'da' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical3 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                Polemarchus sagde til mig: &quot;Jeg kan se, at du og din ledsager allerede er på vej til byen.&quot; &quot;Du tager ikke meget fejl, sagde jeg.&quot;
 &quot;Men kan du se,&quot; fortsatte han, &quot;hvor mange af os er vi her?&quot; &quot;Selvfølgelig.&quot; &quot;Og er du stærkere end alle os? For hvis ikke, så gør du det
skal blive, hvor du er.&quot; &quot;Må der ikke være alternativet,&quot; Jeg sagde, &quot;at vi kan overtale dig til at lade os gå?&quot; &quot;Men kan du overtale os,
hvis vi nægter at lytte til dig?&quot; sagde han. &quot;I hvert fald ikke,&quot; svarede Glaucon. &quot;Så skal vi ikke lytte; det kan du være sikker på.&quot;
              </p>
            )}
            {bubbleLanguage === 'zh' && (
              <p className="text-left text-[9px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical3 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                波勒马库斯对我说：“我看你和你的同伴已经在去城里的路上了。” “你说的没错。” “但是你看到了吗，” 他继续说，“我们这里有多少人？” “当然。” “你比我们所有人都强吗？如果不是，
                你就得留在原地。” “难道没有其他选择吗，” 我说，“我们可以说服你放我们走吗？” “但是如果我们拒绝听你的，你能说服我们吗？” 他说。“当然不能，” 格劳孔回答道。“那我们不会听的；
                你可以放心。”<br />
                bō lè mǎ kù sī duì wǒ shuō: “Wǒ kàn nǐ hé nǐ de tóngbàn yǐjīng zài qù chéng lǐ de lùshàngle.” “Nǐ shuō de méi cuò.” “Dànshì nǐ kàn dàole ma,” tā jìxù shuō, 
                “wǒmen zhè li yǒu duōshǎo rén?” “Dāngrán.” “Nǐ bǐ wǒmen suǒyǒu rén dōu qiáng ma? Rúguǒ bùshì, nǐ jiù dé liú zàiyuán dì.” “Nándào méiyǒu qítā xuǎnzé ma,” wǒ shuō, 
                “wǒmen kěyǐ shuōfú nǐ fàng wǒmen zǒu ma?” “Dànshì rúguǒ wǒmen jùjué tīng nǐ de, nǐ néng shuōfú wǒmen ma?” Tā shuō. “Dāngrán bùnéng,” gé láo kǒng huídá dào. 
                “Nà wǒmen bù huì tīng de; nǐ kěyǐ fàngxīn.”
                
              </p>
            )}
            {bubbleLanguage === 'pl' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical3 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                Polemarchus powiedział do mnie: „Widzę, że ty i twój towarzysz jesteście już w drodze do miasta”. „Nie mylisz się zbytnio, powiedziałem”. 
                „Ale widzisz”, kontynuował, „ilu nas tu jest?” „Oczywiście”. „A czy jesteś silniejszy od nas wszystkich? Bo jeśli nie, będziesz musiał
zostać tam, gdzie jesteś”. „Czy nie ma alternatywy”, powiedziałem, „żebyśmy mogli cię przekonać, żebyś nas puścił?” „Ale czy możesz nas przekonać,
jeśli odmówimy posłuchania ciebie?” powiedział. „Z pewnością nie”, odpowiedział Glaukon. „W takim razie nie będziemy słuchać; możesz być tego pewien”.
              </p>
            )}
            {bubbleLanguage === 'fr' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical3 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                Polémarque me dit: «Je vois que toi et ton compagnon êtes déjà en route pour la ville.» «Tu n&apos;as pas tort, dis-je.» «Mais voyez-vous, continua-t-il, 
                combien nous sommes ici?» «Bien sûr.» «Et êtes-vous plus fort que nous tous? Si non, vous devrez rester où vous êtes.» «N&apos;y a-t-il pas d&apos;autre alternative, 
                dis-je, que nous puissions te persuader de nous laisser partir?» «Mais pouvez-vous nous persuader, si nous refusons de vous écouter?» dit-il. 
                «Certainement pas, répondit Glaucon. Alors nous n&apos;écouterons pas; vous pouvez en être sûr.»
              </p>
            )}
            {bubbleLanguage === 'pt' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical3 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                Polemarco disse-me: “Vejo que tu e o teu companheiro já estão a caminho da cidade”. “Não está muito errado, disse eu”.
 “Mas vê?” continuou: “quantos de nós estamos aqui?” “Claro.” “E é mais forte que todos nós? Pois se não, vai 
tem de permanecer onde está.” “Que não haja alternativa”, disse. Eu disse: “para que o possamos convencer a deixar-nos ir?” “Mas pode convencer-nos,
se nos recusarmos a ouvi-lo?” disse. “Certamente que não,” respondeu Glauco. “Então não vamos ouvir; disso pode ter a certeza”.
              </p>
            )}
          </div>

          {/* Flags Container for the Second Instance */}
          <div style={{ 
  marginTop: '10px', 
  backgroundColor: 'olive', 
  display: 'flex', 
  justifyContent: 'center', 
  gap: '10px', 
  flexWrap: 'wrap', 
  maxWidth: '100%',
  border: '2px dotted white',   // Adds a dotted green border
  padding: '3px'                // Adds 3px padding
}}>
          
            <Image
              src="/images/gr.webp"
              alt="Greece Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('gr')}
            />
            <Image
              src="/images/us.webp"
              alt="USA Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('en')}
            />
            <Image
              src="/images/pl.webp"
              alt="Poland Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('pl')}
            />
            <Image
              src="/images/es.webp"
              alt="Spain Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('es')}
            />
            <Image
              src="/images/dk.webp"
              alt="Denmark Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('da')}
            />
            <Image
              src="/images/fr.webp"
              alt="French Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('fr')}
            />
            <Image
              src="/images/cn.webp"
              alt="China Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('zh')}
            />
            <Image
              src="/images/pt.webp"
              alt="Portugal Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('pt')}
            />
            {/* Add more flags as needed for the second instance */}
          </div>
        </div>


        {/* Image for Third Instance */}
        <div>
          <Image
            src="/images/R1/1-3.png"
            alt="The Long Walls connecting Athens with Piraeus."
            width={450}
            height={450}
            style={{ maxWidth: '90%', margin: '10px auto 0' }}
          />
        </div>

        {/* Caption Text Below the Image for Second Instance */}
        <div className="text-left flex flex-col justify-between" style={{ height: '60px' }}>
          {language === 'es' ? (
            <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
              <span style={{color:"red",fontWeight:"bold"}}>3.</span> Polemarco está decidido a convencer a Sócrates que se quede en el Pireo.
            </p>
          ) : language === 'gr' ? (
            <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
              <span style={{color:"red",fontWeight:"bold"}}>3.</span> Ο Πολέμαρχος είναι αποφασισμένος να πείσει τον Σωκράτη να μείνει στον Πειραιά.
            </p>
            ) : language === 'da' ? (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
                <span style={{color:"red",fontWeight:"bold"}}>3.</span> Polemarchus er fast besluttet på at overbevise Sokrates om at blive i Piræus.
              </p>
            ) : language === 'pt' ? (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
                <span style={{color:"red",fontWeight:"bold"}}>3.</span> Polemarco está determinado a convencer Sócrates a permanecer no Pireu.
              </p>
            ) : language === 'fr' ? (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
                <span style={{color:"red",fontWeight:"bold"}}>3.</span> Polémarque est déterminé à convaincre Socrate de rester au Pirée.
              </p>
            ) : language === 'zh' ? (
              <p className="text-center text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
                <span style={{color:"red",fontWeight:"bold"}}>3.</span> 波勒马库斯决心说服苏格拉底留在比雷埃夫斯。<br />
                bō lè mǎ kù sī juéxīn shuōfú sū gélā dǐ liú zài bǐ léi āi fū sī.
              </p>
            ) : language === 'pl' ? (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
                <span style={{color:"red",fontWeight:"bold"}}>3.</span> Polemarch postanawia przekonać Sokratesa, aby pozostał w Pireusie.
              </p>
            ) : (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
                <span style={{color:"red",fontWeight:"bold"}}>3.</span> Polemarchus is determined to persuade Socrates to stay in Piraeus.
              </p>
          )}
        </div>
{/* End of Third Block - Walls */}


{/* 4th Block - Walls */}
<div className="flex flex-col items-center justify-center mb-4 w-full">
        {/* Speech Bubble for Second Instance */}
        <div
          className="flex flex-col justify-between items-center w-full max-w-[90%] md:max-w-[70%] relative"
          style={{
            background: 'rgba(255, 255, 255, 0.8)',
            padding: '10px',
            borderRadius: '5px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            height: '300px',
            position: 'relative',
          }}
        >
          <div
            className="overflow-y-auto"
            style={{
              width: '100%',
              paddingBottom: '50px',
              flexGrow: 1,
            }}
          >
            {bubbleLanguage === 'es' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical4 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                Adeimanto añadió: «¿Nadie os ha hablado de la carrera de antorchas a caballo en honor de la diosa que tendrá lugar más tarde por la noche?»
«¡Con caballos!», respondí yo. «Eso es una novedad. ¿Los jinetes llevarán antorchas y se las pasarán unos a otros durante la carrera?»
«Sí», dijo Polemarco, «y no sólo eso, sino que se celebrará una fiesta por la noche, que sin duda deberías ver. Levantémonos pronto
después de la cena y veamos esta fiesta; y habrá una reunión de jóvenes y tendremos una buena charla. Quedaos entonces y no actuéis de manera extraña.»
Glaucón dijo: «Ya que insistes, supongo que debemos quedarnos.» «Muy bien», respondí yo.
              </p>
            )}
            {/* Add other languages for the second instance here */}
            {bubbleLanguage === 'gr' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical4 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                Mα δεν ξέρετε, είπε ο Αδείμαντος, δτι απόψε θα γίνει αγώνας πυρσοδρομίας με καβαλάρηδες πάνω στ&apos; άλογα για τή χάρη της θεάς;
Με καβαλάρηδες; ρώτησα έγώ· αυτό είναι κάτι καινούργιο. Αλήθεια; Και θα δίνουν τον πυρσό ο ενας στον άλλο πάνω στ&apos; άλογα προσπαθώντας να βγουν πρώτοι; 
Αuτό εννοείς; Ναι, είπε ο Πολέμαρχος. Κι εκτός άπο αuτό, έχουν προγραμματισθεί και ολονύκτιες εκδηλώσεις, που άξίζει να δει κανείς. Θα σηκωθούμε λοιπον μετά το δείπνο και θα 
πάμε να τα δούμε όλα αυτά. Θα συναντήσουμε και πολλούς νέους και θa συζητήσουμε. Μείνετε λοιπόν και μην φύγετε. Φαίνεται, είπε ο Γλαύκων, πως πρέπει να μείνουμε. 
Αν το νομίζεις, είπα εγώ, ας μείνουμε.
              </p>
            )}
            {bubbleLanguage === 'en' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical4 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                Adeimantus added: &quot;Has no one told you of the torch-race on horseback in honour of the goddess which will take place later at night?&quot; 
                &quot;With horses!&quot; I replied. &quot;That is a novelty. Will horsemen carry torches and pass them one to another during the race?&quot; 
                &quot;Yes,&quot; said Polemarchus, &quot;and not only that, but a festival will be celebrated at night, which you certainly ought to see. Let us rise soon 
                after supper and see this festival; there will be a gathering of young men, and we will have a good talk. Stay then, and do not act weird.&quot; 
                Glaucon said: &quot;Since you insist, I suppose that we must.&quot; &quot;Very good,&quot; I replied.

              </p>
            )}
            {bubbleLanguage === 'da' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical4 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                Adeimantus tilføjede: &quot;Har ingen fortalt dig om fakkelløbet på hesteryg til ære for gudinden, som finder sted senere på natten?&quot;
 &quot;Med heste!&quot; svarede jeg. &quot;Det er en nyhed. Vil ryttere bære fakler og sende dem til hinanden under løbet?&quot;
 &quot;Ja,&quot; sagde Polemarchus, &quot;og ikke kun det, men en festival vil blive fejret om natten, som du bestemt burde se. Lad os snart rejse os
 efter aftensmaden og se denne festival; der vil være en forsamling af unge mænd, og vi får en god snak. Bliv da, og opfør dig ikke underligt.&quot;
 Glaucon sagde: &quot;Da du insisterer, antager jeg, at vi skal.&quot; &quot;Meget god,&quot; svarede jeg.
              </p>
            )}
            {bubbleLanguage === 'zh' && (
              <p className="text-left text-[9px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical4 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                阿德曼托斯补充道：“难道没有人告诉你，为了纪念女神，晚上会举行骑马火炬赛跑吗？” “用马！”我回答道。“这可是个新奇的玩意儿。骑马的人会在赛跑时举着火炬互相传递吗？” 
“是的，”波勒马库斯说，“不仅如此，晚上还会举行一个节日，你一定要去看看。晚饭后我们快点起床去看看这个节日吧；年轻人会聚集在一起，我们会好好聊一聊。那就待在那里，别表现得怪异。”
格劳孔说：“既然你坚持要去，我想我们必须去。” “很好，”我回答道。<br />
ā dé màn tuō sī bǔchōng dào: “nándào méiyǒu rén gàosù nǐ, wèile jìniàn nǚshén, wǎnshàng huì jǔxíng qímǎ huǒjù sàipǎo ma?” 
“yòng mǎ!” wǒ huídá dào.“ zhè kěshì gè xīnqí de wányì er. qímǎ de rén huì zài sàipǎo shí jǔ zháo huǒjù hùxiāng chuándì ma?” 
“shì de,” bō lè mǎ kù sī shuō, “bùjǐn rúcǐ, wǎnshàng hái huì jǔxíng yīgè jiérì, nǐ yīdìng yào qù kàn kàn. wǎnfàn hòu wǒmen kuài diǎn qǐchuáng qù kàn kàn zhège jiérì ba; 
niánqīng rén huì jùjí zài yīqǐ, wǒmen huì hǎohǎo liáo yī liáo. Nà jiù dài zài nàlǐ, bié biǎoxiàn dé guàiyì.” 
gé láo kǒng shuō: “jìrán nǐ jiānchí yào qù, wǒ xiǎng wǒmen bìxū qù.” “hěn hǎo,” wǒ huídá dào.          
                
              </p>
            )}
            {bubbleLanguage === 'pl' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical4 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                Adejmantus dodał: „Czy nikt ci nie powiedział o wyścigu konnym z pochodniami na cześć bogini, który odbędzie się później w nocy?” „Na koniach!” 
                odpowiedziałem. „To nowość. Czy jeźdźcy będą nieść pochodnie i podawać je sobie nawzajem podczas wyścigu?” „Tak” powiedział Polemarchus,
                 „i nie tylko to, ale w nocy będzie obchodzone święto, które z pewnością powinieneś zobaczyć. Wstańmy wkrótce po kolacji i zobaczmy to święto; 
                 będzie tam zgromadzenie młodzieńców i będziemy mieli dobrą rozmowę. Zostań więc i nie zachowuj się dziwnie”. Glaukon powiedział: „Skoro nalegasz, 
                 sądzę, że musimy”. „Bardzo dobrze” odpowiedziałem.
              </p>
            )}
            {bubbleLanguage === 'fr' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical4 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                Adimante ajouta : «Personne ne t&apos;a parlé de la course aux flambeaux à cheval en l&apos;honneur de la déesse qui aura lieu plus tard dans la nuit?»
«Avec des chevaux!» répondis-je. «C&apos;est une nouveauté. Les cavaliers porteront-ils des flambeaux et se les passeront-ils les uns aux autres pendant la course?»
«Oui», dit Polémarque, «et non seulement cela, mais une fête sera célébrée la nuit, que tu devrais certainement voir. Levons-nous bientôt 
après le souper et allons voir cette fête; il y aura un rassemblement de jeunes gens, et nous aurons une bonne conversation. Reste donc, et ne fais pas l&apos;idiot.» 
Glaucon dit : «Puisque tu insistes, je suppose que nous devons rester.» «Très bien», répondis-je.
              </p>
            )}
            {bubbleLanguage === 'pt' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical4 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                Adimanto acrescentou: “Ninguém lhe falou da corrida de tochas a cavalo em honra da deusa que terá lugar mais tarde à noite?”
 “Com cavalos!” Eu respondi. “Isso é uma novidade. Os cavaleiros transportarão tochas e passá-las-ão uns aos outros durante a corrida?” 
 “Sim,” disse Polemarco, “e não só, mas um festival será celebrado à noite, que certamente deves ver. Vamos subir já
 depois do jantar e veja este festival; haverá uma reunião de rapazes e teremos uma boa conversa. Fique então e não aja de forma estranha.” 
 Glauco disse: “Já que insiste, suponho que devemos ficar”. “Muito bom,” Eu respondi.
              </p>
            )}
          </div>

          {/* Flags Container for the Second Instance */}
          <div style={{ 
  marginTop: '10px', 
  backgroundColor: 'olive', 
  display: 'flex', 
  justifyContent: 'center', 
  gap: '10px', 
  flexWrap: 'wrap', 
  maxWidth: '100%',
  border: '2px dotted white',   // Adds a dotted green border
  padding: '3px'                // Adds 3px padding
}}>
          
            <Image
              src="/images/gr.webp"
              alt="Greece Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('gr')}
            />
            <Image
              src="/images/us.webp"
              alt="USA Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('en')}
            />
            <Image
              src="/images/pl.webp"
              alt="Poland Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('pl')}
            />
            <Image
              src="/images/es.webp"
              alt="Spain Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('es')}
            />
            <Image
              src="/images/dk.webp"
              alt="Denmark Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('da')}
            />
            <Image
              src="/images/fr.webp"
              alt="French Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('fr')}
            />
            <Image
              src="/images/cn.webp"
              alt="China Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('zh')}
            />
            <Image
              src="/images/pt.webp"
              alt="Portugal Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('pt')}
            />
            {/* Add more flags as needed for the second instance */}
          </div>
        </div>


        {/* Image for Third Instance */}
        <div>
          <Image
            src="/images/R1/1-4.webp"
            alt="The Long Walls connecting Athens with Piraeus."
            width={450}
            height={450}
            style={{ maxWidth: '90%', margin: '10px auto 0' }}
          />
        </div>

        {/* Caption Text Below the Image for Second Instance */}
        <div className="text-left flex flex-col justify-between" style={{ height: '60px' }}>
          {language === 'es' ? (
            <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
              <span style={{color:"red",fontWeight:"bold"}}>4.</span> Glaucón y Sócrates acuerdan quedarse en el Pireo.
            </p>
          ) : language === 'gr' ? (
            <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
              <span style={{color:"red",fontWeight:"bold"}}>4.</span> Ο Γλαύκων και ο Σωκράτης συμφωνούν να μείνουν στον Πειραιά.
            </p>
            ) : language === 'da' ? (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
                <span style={{color:"red",fontWeight:"bold"}}>4.</span> Glaucon og Sokrates er enige om at blive i Piræus.
              </p>
            ) : language === 'pt' ? (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
                <span style={{color:"red",fontWeight:"bold"}}>4.</span> Glauco e Sócrates concordam em ficar no Pireu.
              </p>
            ) : language === 'fr' ? (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
                <span style={{color:"red",fontWeight:"bold"}}>4.</span> Glaucon et Socrate acceptent de rester au Pirée.
              </p>
            ) : language === 'zh' ? (
              <p className="text-center text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
                <span style={{color:"red",fontWeight:"bold"}}>4.</span> 格劳孔和苏格拉底同意留在比雷埃夫斯。<br />
                gé láo kǒng hé sū gélā dǐ tóngyì liú zài bǐ léi āi fū sī.
              </p>
            ) : language === 'pl' ? (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
                <span style={{color:"red",fontWeight:"bold"}}>4.</span> Glaukon i Sokrates zgadzają się pozostać w Pireusie.
              </p>
            ) : (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
                <span style={{color:"red",fontWeight:"bold"}}>4.</span> Glaucon and Socrates agree to stay at Piraeus.
              </p>
          )}
        </div>
        </div>
{/* End of 4th Block - Walls */}



{/* 5th Block - Walls */}
<div className="flex flex-col items-center justify-center mb-4 w-full">
        {/* Speech Bubble for Second Instance */}
        <div
          className="flex flex-col justify-between items-center w-full max-w-[90%] md:max-w-[70%] relative"
          style={{
            background: 'rgba(255, 255, 255, 0.8)',
            padding: '10px',
            borderRadius: '5px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            height: '300px',
            position: 'relative',
          }}
        >
          <div
            className="overflow-y-auto"
            style={{
              width: '100%',
              paddingBottom: '50px',
              flexGrow: 1,
            }}
          >
            {bubbleLanguage === 'es' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical5 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                Así pues, fuimos con Polemarco a su casa y allí encontramos a sus hermanos Lisias y Eutidemo, y con ellos a Trasímaco el calcedonio, a Carmantídes el peano y a 
                Clitofonte el hijo de Aristónimo. También estaba allí Céfalo, el padre de Polemarco, a quien hacía mucho tiempo que no veía y me pareció muy anciano.
Estaba sentado en una silla con cojines y tenía una guirnalda en la cabeza, pues había estado sacrificando en el patio. Había otras sillas en la habitación puestas 
en semicírculo sobre las cuales nos sentamos junto a él.
              </p>
            )}
            {/* Add other languages for the second instance here */}
            {bubbleLanguage === 'gr' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical5 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                Πήγαμε λοιπον στο σπίτι του Πολέμαρχου και βρήκαμε εκεί τον Λυσία και τον Ευθύδημο, τους αδελφους τού Πολέμαρχου, επίσης τον Θρασύμαχο
τον Καλχηδόνιο και τον Χαρμαντίδη απο την Παιανία, και τον Κλειτοφώντα, το γιο τού Αριστώνυμου. Ηταν εκεί κι ο πατέρας τού Πολέμαρχου, ο Κέφαλος. 
Είχα καιρό να τον δω και μού φάνηκε πολυ γερασμένος. Καθόταν στεφανωμένος σ&apos; σε ένα κάθισμα με μαξιλάρι, γιατι είχε μόλις προσφέρει θυσία 
έξω στήν αυλή. Καθήσαμε λοιπόν κι εμείς κοντά του σε κάτι καθίσματα τα οποία ήταν τοποθετημένα κατά τέτοιο τρόπο που σχημάτιζαν ημικύκλιο.
              </p>
            )}
            {bubbleLanguage === 'en' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical5 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                So, we went with Polemarchus to his house and there we found his brothers Lysias and Euthydemus, and with them Thrasymachus the Chalcedonian, Charmantides
the Paeanian, and Cleitophon the son of Aristonymus. Cephalus, the father of Polemarchus, was also there. I had not seen him for a long time and he looked very  aged to me. 
He was seated on a cushioned chair and had a garland on his head, for he had been sacrificing in the court. There were some other chairs in the room arranged in a semicircle 
upon which we sat down by him.

              </p>
            )}
            {bubbleLanguage === 'da' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical5 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                Så vi gik med Polemarchus til hans hus, og der fandt vi hans brødre Lysias og Euthydemus, og med dem Thrasymachus den Kalkedonske, Charmantides
pæaneren og Cleitophon, søn af Aristonymus. Cephalus, far til Polemarchus, var også der. Jeg havde ikke set ham i lang tid, og han så meget gammel ud for mig.
Han sad på en polstret stol og havde en guirlande på hovedet, for han havde ofret i retten. Der var nogle andre stole i rummet arrangeret i en halvcirkel
hvorpå vi satte os ved ham.
              </p>
            )}
            {bubbleLanguage === 'zh' && (
              <p className="text-left text-[9px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical5 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                于是，我们和波勒马库斯一起去了他家，在那里我们找到了他的兄弟吕西亚斯和尤西德穆斯，还有卡尔西顿人色拉叙马库斯、派亚尼亚人查曼提德斯和阿里斯托尼穆斯之子克利托丰。波勒马库斯的父亲塞法洛斯也在那里。我很久没见过他了，他看上去很老。
他坐在一张软垫椅子上，头上戴着花环，因为他一直在宫廷里献祭。房间里还有其他几把椅子，摆成半圆形，
我们坐在他旁边。<br />
Yúshì, wǒmen hé bō lè mǎ kù sī yīqǐ qùle tā jiā, zài nàlǐ wǒmen zhǎodàole tā de xiōngdì lǚ xīyǎ sī hé yóu xī dé mù sī, hái yǒu kǎ&apos;ěr xī dùn rén sèlā xù mǎ kù sī, pài yà ní yǎ 
rén chá màn tí dé sī hé ālǐ sī tuōní mù sī zhīzǐ kèlì tuō fēng. Bō lè mǎ kù sī de fùqīn sāi fǎ luòsī yě zài nàlǐ. Wǒ hěnjiǔ méi jiànguò tāle, tā kàn shàngqù hěn lǎo. 
Tā zuò zài yī zhāng ruǎn diàn yǐzi shàng, tóu shàng dàizhe huāhuán, yīnwèi tā yīzhí zài gōngtíng lǐ xiàn jì. Fángjiān lǐ hái yǒu qítā jǐ bǎ yǐzi, bǎi chéng bàn yuán xíng,
wǒmen zuò zài tā pángbiān.  
                
              </p>
            )}
            {bubbleLanguage === 'pl' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical5 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                Poszliśmy więc z Polemarchem do jego domu i tam znaleźliśmy jego braci Lizjasza i Eutydemosa, a z nimi Trazymacha Chalcedończyka, Charmantidesa 
                Pejańczyka i Klejtofona, syna Arystonima. Był tam również Kefalos, ojciec Polemarcha. Nie widziałem go od dłuższego czasu i wydawał mi się bardzo 
                stary. Siedział na wyściełanym krześle i miał na głowie wieniec, ponieważ składał ofiary na dworze. W pokoju było kilka innych krzeseł ustawionych 
                w półkolu, na których usiedliśmy obok niego.
              </p>
            )}
            {bubbleLanguage === 'fr' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical5 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                Nous allâmes donc avec Polémarque chez lui, et nous y trouvâmes ses frères Lysias et Euthydème, ainsi que Thrasymaque de Chalcédoine, Charmantidès 
                de Péan et Cléitophon, fils d&apos;Aristonyme. Céphale, père de Polémarque, était également là. Je ne l&apos;avais pas vu depuis longtemps et il me semblait très âgé.
Il était assis sur une chaise rembourrée et portait une couronne sur la tête, car il avait sacrifié dans la cour. Il y avait d&apos;autres chaises dans la salle, 
disposées en demi-cercle, sur lesquelles nous nous assîmes à côté de lui.
              </p>
            )}
            {bubbleLanguage === 'pt' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical5 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                Fomos então com Polemarco a sua casa e aí encontrámos os seus irmãos Lísias e Eutidemo, e com eles Trasímaco, o Calcedónio, Charmantides
o Paeanian, e Cleitofonte, filho de Aristónimo. Céfalo, pai de Polemarco, também estava lá. Há muito tempo que não o via e parecia-me muito envelhecido.
Estava sentado numa cadeira almofadada e tinha uma grinalda na cabeça, pois tinha feito sacrifícios na corte. Havia algumas outras cadeiras na sala dispostas em semicírculo
sobre o qual nos sentámos ao lado dele.
              </p>
            )}
          </div>

          {/* Flags Container for the Second Instance */}
          <div style={{ 
  marginTop: '10px', 
  backgroundColor: 'olive', 
  display: 'flex', 
  justifyContent: 'center', 
  gap: '10px', 
  flexWrap: 'wrap', 
  maxWidth: '100%',
  border: '2px dotted white',   // Adds a dotted green border
  padding: '3px'                // Adds 3px padding
}}>
          
            <Image
              src="/images/gr.webp"
              alt="Greece Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('gr')}
            />
            <Image
              src="/images/us.webp"
              alt="USA Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('en')}
            />
            <Image
              src="/images/pl.webp"
              alt="Poland Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('pl')}
            />
            <Image
              src="/images/es.webp"
              alt="Spain Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('es')}
            />
            <Image
              src="/images/dk.webp"
              alt="Denmark Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('da')}
            />
            <Image
              src="/images/fr.webp"
              alt="French Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('fr')}
            />
            <Image
              src="/images/cn.webp"
              alt="China Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('zh')}
            />
            <Image
              src="/images/pt.webp"
              alt="Portugal Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('pt')}
            />
            {/* Add more flags as needed for the second instance */}
          </div>
        </div>


        {/* Image for Third Instance */}
        <div>
          <Image
            src="/images/R1/1-5.webp"
            alt="The Long Walls connecting Athens with Piraeus."
            width={450}
            height={450}
            style={{ maxWidth: '90%', margin: '10px auto 0' }}
          />
        </div>

        {/* Caption Text Below the Image for Second Instance */}
        <div className="text-left flex flex-col justify-between" style={{ height: '60px' }}>
          {language === 'es' ? (
            <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
              <span style={{color:"red",fontWeight:"bold"}}>5.</span> Sócrates con sus amigos y sus enemigos en la casa de Céfalo.
            </p>
          ) : language === 'gr' ? (
            <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
              <span style={{color:"red",fontWeight:"bold"}}>5.</span> Ο Σωκράτης με τούς φίλους του και τούς εχθρούς του στο σπίτι τού Κέφαλου.
            </p>
            ) : language === 'da' ? (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
                <span style={{color:"red",fontWeight:"bold"}}>5.</span> Sokrates med sine venner og sine fjender ved Cephalus &apos; placere.
              </p>
            ) : language === 'pt' ? (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
                <span style={{color:"red",fontWeight:"bold"}}>5.</span> Sócrates com os seus amigos e inimigos em Céfalo.
              </p>
            ) : language === 'fr' ? (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
                <span style={{color:"red",fontWeight:"bold"}}>5.</span> Socrate avec ses amis et ses ennemis chez Céphale.
              </p>
            ) : language === 'zh' ? (
              <p className="text-center text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
                <span style={{color:"red",fontWeight:"bold"}}>5.</span> 苏格拉底与他的朋友和敌人在塞法洛斯的地方。<br />
                Sū gélā dǐ yǔ tā de péngyǒu hé dírén zài sāi fǎ luòsī dì dìfāng.
              </p>
            ) : language === 'pl' ? (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
                <span style={{color:"red",fontWeight:"bold"}}>5.</span> Sokrates ze swoimi przyjaciółmi i wrogami na placu Kefalosa.
              </p>
            ) : (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
                <span style={{color:"red",fontWeight:"bold"}}>5.</span> Socrates with his friends and his enemies at Cephalus&apos; place.
              </p>
          )}
        </div>
        </div>
{/* End of 5th Block - Walls */}

{/* 6th Block - Walls */}
<div className="flex flex-col items-center justify-center mb-4 w-full">
        {/* Speech Bubble for Second Instance */}
        <div
          className="flex flex-col justify-between items-center w-full max-w-[90%] md:max-w-[70%] relative"
          style={{
            background: 'rgba(255, 255, 255, 0.8)',
            padding: '10px',
            borderRadius: '5px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            height: '300px',
            position: 'relative',
          }}
        >
          <div
            className="overflow-y-auto"
            style={{
              width: '100%',
              paddingBottom: '50px',
              flexGrow: 1,
            }}
          >
            {bubbleLanguage === 'es' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical6 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                Al verme, Céfalo me saludó con entusiasmo y luego dijo: «No vienes a verme, Sócrates, tan a menudo como deberías. Si todavía pudiera ir a verte, 
                no te pediría que vinieras a verme. Pero a mi edad apenas puedo ir a la ciudad, por lo que deberías venir más a menudo al Pireo.
                Porque déjame decirte que cuanto más se desvanecen los placeres del cuerpo, mayor es para mí el placer y el encanto de la conversación.
                No rechaces mi petición, sino que haz de nuestra casa tu lugar de reunión y mantente en compañía de estos jóvenes; somos viejos amigos,
                y te sentirás muy a gusto con nosotros.»
              </p>
            )}
            {/* Add other languages for the second instance here */}
            {bubbleLanguage === 'gr' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical6 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                Αμέσως μόλις με είδε ο Κέφαλος, με χαιρέτησε με εγκαρδιότητα και μετά είπε: &quot;Δεν έρχεσαι να με δεις, Σωκράτη, όσο συχνά θα έπρεπε. Αν μπορούσα να έρχομαι 
                να σε βλέπω όπως πριν, δεν θα σου ζητούσα να έρχεσαι εσύ. Ομως στην ηλικία μου, δυσκολεύομαι πολύ να πάω στην Αθήνα και, γι αυτό, θα έπρεπε να έρχεσαι πιο συχνά 
                στον Πειραιά. Διότι θα πρέπει να σου πω ότι όσο ξεθωριάζουν οι σωματικές απολάυσεις, τόσο μεγαλύτερη σημασία αποκτούν οι ενδιαφέρουσες 
                συζητήσεις. Μην αρνείσαι λοιπόν την παράκλησή μου, και να θεωρείς το σπίτι μας δικό σου χώρο και να κάνεις παρέα  με αυτούς εδώ τους νέους, 
                διότι είμαστε παλαιοί φίλοι και θα αισθάνεσαι πολύ οικεία εδώ.&quot;
              </p>
            )}
            {bubbleLanguage === 'en' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical6 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                Upon seeing me, Cephalus saluted me eagerly and then he said: &quot;You don&quot;t come to see me, Socrates, as often as you ought. If I were still able to go and see you 
                I would not ask you to come to me. But at my age I can hardly get to the city, and therefore you should come oftener to the Piraeus. 
                For let me tell you, that the more the pleasures of the body fade away, the greater to me is the pleasure and charm of conversation.
                Do not then deny my request, but make our house your resort and keep company with these young men; we are old friends, 
                and you will be quite at home with us.&quot;

              </p>
            )}
            {bubbleLanguage === 'da' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical6 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                Da han så mig, hilste Cephalus mig ivrigt, og så sagde han: &quot;Du kommer ikke for at se mig, Sokrates, så ofte som du burde. Hvis jeg stadig kunne 
                gå hen og se dig. Jeg vil ikke bede dig om at komme til mig. Men i min alder kan jeg næsten ikke komme til byen, og derfor bør du komme oftere til Piræus.
                For lad mig fortælle dig, at jo mere kroppens fornøjelser forsvinder, jo større er fornøjelsen og charmen ved samtale for mig.
                Afvis da ikke min anmodning, men gør vores hus til din udvej og hold dig sammen med disse unge mænd; vi er gamle venner,
                og du vil være ganske hjemme hos os.&quot;
              </p>
            )}
            {bubbleLanguage === 'zh' && (
              <p className="text-left text-[9px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical6 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                塞法洛斯一见到我，就热切地向我打招呼，然后说道：“苏格拉底，你来见我的次数太少了。如果我还能去看你，我就不会叫你来见我了。但是我这个年纪，几乎进不了城里，
                所以你应该多来比雷埃夫斯。因为我告诉你，身体的乐趣越消逝，谈话的乐趣和魅力就越大。所以，不要拒绝我的请求，把我们的房子当成你的度假胜地，和这些年轻人在一起；
                我们是老朋友了，和我们在一起你会感觉很自在。”<br />
                Sāi fǎ luòsī yī jiàn dào wǒ, jiù rèqiè dì xiàng wǒ dǎzhāohū, ránhòu shuōdao: “Sū gélā dǐ, nǐ lái jiàn wǒ de cìshù tài shǎole. Rúguǒ wǒ hái néng 
                qù kàn nǐ, wǒ jiù bù huì jiào nǐ lái jiàn wǒle. Dànshì wǒ zhège niánjì, jīhū jìn bùliǎo chéng lǐ, suǒyǐ nǐ yīnggāi duō lái bǐ léi āi fū sī. 
                Yīnwèi wǒ gàosù nǐ, shēntǐ de lèqù yuè xiāoshì, tánhuà de lèqù hé mèilì jiù yuè dà. Suǒyǐ, bùyào jùjué wǒ de qǐngqiú, bǎ wǒmen de fángzi dàngchéng 
                nǐ de dùjià shèngdì, hé zhèxiē niánqīng rén zài yīqǐ; wǒmen shì lǎo péngyǒule, hé wǒmen zài yīqǐ nǐ huì gǎnjué hěn zìzài.”
              </p>
            )}
            {bubbleLanguage === 'pl' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical6 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                Na mój widok Kefalos pozdrowił mnie z zapałem, a potem powiedział: „Nie przychodzisz do mnie, Sokratesie, tak często, jak powinieneś. 
                Gdybym mógł jeszcze pójść i cię zobaczyć, nie prosiłbym cię, żebyś do mnie przychodził. Ale w moim wieku ledwo mogę dostać się do miasta, 
                dlatego powinieneś częściej przychodzić do Pireusu. Bo pozwól, że ci powiem, że im bardziej zanikają przyjemności ciała, tym większą dla 
                mnie przyjemnością i urokiem jest rozmowa. Nie odmawiaj więc mojej prośbie, ale zrób z naszego domu miejsce swojego pobytu i dotrzymuj 
                towarzystwa tym młodym ludziom; jesteśmy starymi przyjaciółmi, i będziesz się z nami czuł jak w domu”.
              </p>
            )}
            {bubbleLanguage === 'fr' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical6 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                En me voyant, Céphale me salua avec empressement, puis il me dit: «Tu ne viens pas me voir aussi souvent que tu le devrais, Socrate. 
                Si je pouvais encore venir te voir, je ne te demanderais pas de venir me voir. Mais à mon âge, je peux difficilement aller à Rome, 
                et c&apos;est pourquoi tu devrais venir plus souvent au Pirée. Je te le dis, plus les plaisirs du corps s&apos;estompent, plus le plaisir et le charme 
                de la conversation me sont grands. Ne me refuse donc pas ma demande, mais fais de notre maison ton lieu de villégiature et fréquente ces jeunes gens; 
                nous sommes de vieux amis, et tu te sentiras tout à fait chez toi chez nous. »
              </p>
            )}
            {bubbleLanguage === 'pt' && (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal text-black font-bold">
                <Classical6 />
                <hr style={{ border: "none", height: "5px", backgroundColor: "gray" }} />
                Ao ver-me, Céfalo cumprimentou-me com entusiasmo e, de seguida, disse: “Não me vens ver, Sócrates, com a frequência que deverias. Se eu ainda pudesse ir ver-te
 Eu não lhe pediria que viesse até mim. Mas na minha idade mal consigo chegar à cidade e, por isso, devias vir mais vezes ao Pireu.
 Pois deixe-me dizer-lhe que, quanto mais os prazeres do corpo desaparecem, maior é para mim o prazer e o encanto da conversa.
 Não negue então o meu pedido, mas faça da nossa casa o seu refúgio e faça companhia a estes jovens; somos velhos amigos,
 e sentir-se-á em casa connosco.
              </p>
            )}
          </div>

          {/* Flags Container for the Second Instance */}
          <div style={{ 
  marginTop: '10px', 
  backgroundColor: 'olive', 
  display: 'flex', 
  justifyContent: 'center', 
  gap: '10px', 
  flexWrap: 'wrap', 
  maxWidth: '100%',
  border: '2px dotted white',   // Adds a dotted green border
  padding: '3px'                // Adds 3px padding
}}>
          
            <Image
              src="/images/gr.webp"
              alt="Greece Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('gr')}
            />
            <Image
              src="/images/us.webp"
              alt="USA Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('en')}
            />
            <Image
              src="/images/pl.webp"
              alt="Poland Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('pl')}
            />
            <Image
              src="/images/es.webp"
              alt="Spain Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('es')}
            />
            <Image
              src="/images/dk.webp"
              alt="Denmark Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('da')}
            />
            <Image
              src="/images/fr.webp"
              alt="French Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('fr')}
            />
            <Image
              src="/images/cn.webp"
              alt="China Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('zh')}
            />
            <Image
              src="/images/pt.webp"
              alt="Portugal Flag"
              width={24}
              height={24}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage('pt')}
            />
            {/* Add more flags as needed for the second instance */}
          </div>
        </div>


        {/* Image for Third Instance */}
        <div>
          <Image
            src="/images/R1/1-6.webp"
            alt="The Long Walls connecting Athens with Piraeus."
            width={450}
            height={450}
            style={{ maxWidth: '90%', margin: '10px auto 0' }}
          />
        </div>

        {/* Caption Text Below the Image for Second Instance */}
        <div className="text-left flex flex-col justify-between" style={{ height: '60px' }}>
          {language === 'es' ? (
            <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
              <span style={{color:"red",fontWeight:"bold"}}>6.</span> Céfalo habla de los placeres corporales y del valor de la comunicación.
            </p>
          ) : language === 'gr' ? (
            <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
              <span style={{color:"red",fontWeight:"bold"}}>6.</span> Ο Κέφαλος μιλάει για τις σωματικές απολαύσεις και την αξία της επικοινωνίας.
            </p>
            ) : language === 'da' ? (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
                <span style={{color:"red",fontWeight:"bold"}}>6.</span> Cephalus taler om kropslige fornøjelser og værdien af ​​kommunikation.
              </p>
            ) : language === 'pt' ? (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
                <span style={{color:"red",fontWeight:"bold"}}>6.</span> Cephalus está a falar sobre os prazeres corporais e o valor da comunicação.
              </p>
            ) : language === 'fr' ? (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
                <span style={{color:"red",fontWeight:"bold"}}>6.</span> Céphale parle des plaisirs corporels et de la valeur de la communication.
              </p>
            ) : language === 'zh' ? (
              <p className="text-center text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
                <span style={{color:"red",fontWeight:"bold"}}>6.</span> 塞法洛斯正在谈论身体上的快乐和沟通的价值。<br />
                Sāi fǎ luòsī zhèngzài tánlùn shēntǐ shàng de kuàilè he gōutōng de jiàzhí.
              </p>
            ) : language === 'pl' ? (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
                <span style={{color:"red",fontWeight:"bold"}}>6.</span> Kefalos mówi o przyjemnościach cielesnych i wartości komunikacji.
              </p>
            ) : (
              <p className="text-left text-[11px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-tight sm:leading-normal">
                <span style={{color:"red",fontWeight:"bold"}}>6.</span> Cephalus is talking about bodily pleasures and the value of communication.
              </p>
          )}
        </div>
        </div>
{/* End of 6th Block - Walls */}

      </div>
    </div>
  );
}
