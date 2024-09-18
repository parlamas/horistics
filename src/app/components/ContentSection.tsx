// src/app/components/ContentSection.tsx
import React from 'react';

// Define the prop types for the ContentSection component
type Language = 'en' | 'gr' | 'es' | 'pl' | 'dk' | 'fr' | 'pt' | 'it' | 'de' | 'ua' | 'ru' | 'zh' | 'eg' | 'ir' | 'tr' | 'in' | 'jp' | 'kr' | 'il';

interface ContentSectionProps {
  language: Language;
  isRTL: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({ language, isRTL }) => {
  // Translations for additional content with JSX support
  const content: Record<Language, JSX.Element> = {
    en: (
      <>
        <div style={{ marginTop: '-30px', width: '80%', margin: '0 auto' }}>
          <h3 style={{ textAlign: 'center' }}>&quot;Conceptual Analysis&quot;</h3>
          <p>When an action, an event, a state, or a situation has started but has not ended, we say that something is &quot;in progress.&quot; In general, in English, when something is in progress, we use continuous tenses (ing).</p>
          <p>The wife is asking her husband, <span style={{ color: 'blue' }}>&quot;Is there something that you have started but have not finished?&quot;</span> The husband answers, &quot;I have started having coffee but I have not finished having coffee, and I have started reading the paper but I have not finished reading the paper.&quot;</p>
          <p>In this instance, we use present continuous because the time reference is the present. Only a handful of languages have present continuous/present progressive.</p>
        </div>
      </>
    ),
    gr: (
      <>
        <div style={{ marginTop: '-30px' }}>
          <h3 style={{ textAlign: 'center' }}>&quot;Εννοιολογική Ανάλυση&quot;</h3>
          <p>Oταν μια πράξη, ένα γεγονός, ή μία κατάσταση έχει ξεκινήσει αλλά δεν έχει τελειώσει, λέμε ότι κάτι είναι &quot;σε εξέλιξη.&quot;</p>
          <p>Η σύζυγος ρωτάει τον σύζυγό της, <span style={{ color: 'blue' }}>&quot;Υπάρχει κάτι που έχεις ξεκινήσει αλλά δεν έχεις τελειώσει;&quot;</span> 
          Ο σύζυγος απαντά: &quot;Έχω ξεκινήσει να πίνω καφέ, αλλά δεν έχω τελειώσει να πίνω καφέ, και έχω ξεκινήσει να διαβάζω την εφημερίδα αλλά δεν έχω τελειώσει να την διαβάζω.&quot;</p>
          <p>Στην προκειμένη περίπτωση χρησιμοποιούμε present continuous/present progressive, δηλαδή ενεστώτα διαρκείας, επειδή αναφερόμαστε στο παρόν. Στα Ελληνικά δεν υπάρχει ενεστώτας διαρκείας.</p>
        </div>
      </>
    ),

    es: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
          <h3 style={{ textAlign:'center'}}>&quot;Análisis Conceptual&quot;</h3>
          <p>Cuando una acción, un evento, un estado o una situación ha comenzado pero no ha terminado, decimos que algo está &quot;en progreso.&quot; En general, en inglés, cuando 
            algo está en progreso, usamos tiempos continuos (ing).</p>
  <p>La esposa le pregunta a su esposo: <span style={{ color: 'blue' }}>&quot;¿Es algo que has comenzado pero no has terminado?&quot;</span> El esposo responde: &quot;He comenzado a tomar 
  café pero no he terminado de tomar café, y he comenzado a leer el periódico pero no he terminado de leerlo.&quot;</p>
  <p>En este caso, usamos el presente continuo porque la referencia temporal es el presente. Solo un puñado de idiomas tienen presente continuo/presente progresivo.</p>
          </div>
        </>
      ),
  
      pl: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
        <h3 style={{ textAlign:'center'}}>&quot;Analiza Konceptualna&quot;</h3>
  <p>Kiedy działanie, zdarzenie, stan lub sytuacja się rozpoczęły, ale nie zakończyły, mówimy, że coś jest &quot;w toku.&quot; Ogólnie rzecz biorąc, w języku angielskim, kiedy coś jest w toku, używamy czasu ciągłego (ing).</p>
  <p>Żona pyta męża, <span style={{ color: 'blue' }}>&quot;Czy to coś, co zacząłeś, ale nie skończyłeś?&quot;</span> Mąż odpowiada, &quot;Zacząłem pić kawę, ale nie skończyłem pić kawy, i zacząłem czytać gazetę, ale nie skończyłem czytać gazety.&quot;</p>
  <p>W tym przypadku używamy czasu present continuous, ponieważ odniesieniem czasowym jest teraźniejszość. Tylko kilka języków ma present continuous/present progressive.</p>
          </div>
        </>
      ),
  
      dk: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
        <h3 style={{ textAlign:'center'}}>&quot;Begrebsanalyse&quot;</h3>
   <p>Når en handling, en begivenhed, en tilstand eller en situation er startet, men ikke er afsluttet, siger vi, at noget er &quot;i gang.&quot; Generelt på engelsk, når noget er i 
    gang, bruger vi kontinuerlige tider (ing).</p>
   <p>Konen spørger sin mand, <span style={{ color: 'blue' }}>&quot;Er det noget, du har startet, men ikke er færdig med?&quot;</span> Manden svarer: &quot;Jeg er begyndt har fået kaffe, 
   men jeg er ikke færdig med at drikke, og jeg er begyndt at læse avisen, men jeg er ikke færdig med at læse avisen.&quot;</p>
   <p>I dette tilfælde bruger vi nuværende kontinuert, fordi tidsreferencen er nutiden. Kun en håndfuld sprog har <i>continuous</i> tider.</p>
          </div>
        </>
      ),
  
      fr: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
        <h3 style={{ textAlign:'center'}}>&quot;Analyse Conceptuelle&quot;</h3>
  <p>Lorsqu&apos;une action, un événement, un état ou une situation a commencé mais n&apos;est pas terminé, nous disons que quelque chose est &quot;en cours.&quot; En général, en anglais, 
    lorsque quelque chose est en cours, nous utilisons les temps continus (ing).</p>
  <p>La femme demande à son mari : <span style={{ color: 'blue' }}>&quot;Est-ce quelque chose que tu as commencé mais que tu n&apos;as pas terminé ?&quot;</span>. Le mari répond : &quot;J&apos;ai 
  commencé à prendre un café mais je n&apos;ai pas fini de prendre un café, et j&apos;ai commencé à lire le journal mais je n&apos;ai pas fini de le lire.&quot;</p>
  <p>Dans ce cas, nous utilisons le présent continu car la référence temporelle est le présent. Seule une poignée de langues ont le présent continu/présent progressif.</p>
          </div>
        </>
      ),
  
      pt: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
        <h3 style={{ textAlign:'center'}}>&quot;Análise Conceptual&quot;</h3>
   <p>Quando uma ação, evento, estado ou situação começou, mas não terminou, dizemos que algo está &quot;em andamento.&quot; Em geral, em inglês, quando algo está em curso, usamos 
    tempos contínuos (ing).</p>
   <p>A esposa está a perguntar ao marido: <span style={{ color: 'blue' }}>&quot;É algo que começaste, mas ainda não acabaste?&quot;</span> O marido responde: &quot;Comecei por tomar 
   café, mas ainda não acabei de tomar café, e comecei a ler o jornal, mas ainda não acabei de ler o jornal.&quot;</p>
   <p>Neste caso, usamos o presente contínuo porque a referência temporal é o presente. Apenas alguns idiomas têm presente contínuo/presente progressivo.</p>
          </div>
        </>
      ),
  
      it: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
        <h3 style={{ textAlign:'center'}}>&quot;Analisi Concettuale&quot;</h3>
  <p>Quando un&apos;azione, un evento, uno stato o una situazione è iniziata ma non è finita, diciamo che qualcosa è &quot;in progress.&quot; In generale, in inglese, quando qualcosa 
    è in progress, usiamo i tempi continui (ing).</p>
  <p>La moglie chiede al marito, <span style={{ color: 'blue' }}>&quot;È qualcosa che hai iniziato ma non hai finito?&quot;</span> Il marito risponde, &quot;Ho iniziato a prendere un 
  caffè ma 
  non ho finito di prenderlo, e ho iniziato a leggere il giornale ma non ho finito di leggere il giornale.&quot;</p>
  <p>In questo caso, usiamo il presente progressivo perché il riferimento temporale è il presente. Solo una manciata di lingue ha il presente progressivo/presente progressivo.</p>
          </div>
        </>
      ),
  
      de: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
        <h3 style={{ textAlign:'center'}}>&quot;Konzeptionelle Analyse&quot;</h3>
  <p>Wenn eine Handlung, ein Ereignis, ein Zustand oder eine Situation begonnen hat, aber noch nicht beendet ist, sagen wir, dass etwas &quot;im Gange&quot; ist. Im Allgemeinen verwenden wir 
    im Englischen die Kontinuierliche Zeitform (ing), wenn etwas im Gange ist.</p>
  <p>Die Frau fragt ihren Mann: <span style={{ color: 'blue' }}>&quot;Ist das etwas, das du angefangen, aber noch nicht beendet hast?&quot;</span> Der Mann antwortet: &quot;Ich habe angefangen, 
  Kaffee zu trinken, aber ich habe noch nicht fertig getrunken, und ich habe angefangen, die Zeitung zu lesen, aber ich habe noch nicht fertig gelesen.&quot;</p>
  <p>In diesem Fall verwenden wir present continuous, weil der Zeitbezug die Gegenwart ist. Nur eine Handvoll Sprachen haben present continuous/present progressive.</p>
          </div>
        </>
      ),
  
  
      ua: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
        <h3 style={{ textAlign:'center'}}>&quot;Концептуальний аналіз&quot;</h3>
   <p>Коли дія, подія, стан або ситуація почалася, але не закінчилася, ми говоримо, що щось &quot;розвивається.&quot; Загалом, в англійській мові, коли щось відбувається, ми використовуємо безперервні часи (ing).</p>
   <p>Дружина запитує чоловіка: <span style={{ color: 'blue' }}>&quot;Чи є те, що ти почав, але не завершив?&quot;</span> Чоловік відповідає: &quot;Я почав п’ю каву, але я не допив кави, і я почав читати газету, але я не закінчив читати газету.&quot;</p>
   <p>У цьому випадку ми використовуємо безперервний теперішній час, оскільки посилання на час є теперішнім. Лише кілька мов мають поточний безперервний/теперішній прогресивний.</p>
          </div>
        </>
      ),
  
      ru: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
        <h3 style={{ textAlign:'center'}}>&quot;Концептуальный анализ&quot;</h3>
  <p>Когда действие, событие, состояние или ситуация начались, но не закончились, мы говорим, что что-то &quot;в процессе.&quot; В общем, в английском языке, когда что-то находится в процессе, мы используем продолженные времена (ing).</p>
  <p>Жена спрашивает мужа: <span style={{ color: 'blue' }}>&quot;Это то, что ты начал, но не закончил?&quot;</span> Муж отвечает: &quot;Я начал пить кофе, но не закончил пить кофе, и я начал читать газету, но не закончил читать газету.&quot;</p>
  <p>В этом случае мы используем настоящее продолженное время, потому что ссылка на время — настоящее. Только в нескольких языках есть настоящее продолженное/настоящее прогрессивное время.</p>
          </div>
        </>
      ),
  
      zh: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
        <h3 style={{ textAlign:'center'}}>&quot;概念分析&quot;</h3>
  <p>当一个动作、事件、状态或情况已经开始但尚未结束时，我们会说某事&quot;正在进行中。&quot;一般来说，在英语中，当某事正在进行时，我们会使用进行时 (ing)。</p>
  <p>妻子问丈夫，<span style={{ color: 'blue' }}>&quot;这件事是你已经开始但尚未完成的吗？&quot;</span>丈夫回答说：&quot;我开始喝咖啡了，但还没喝完；我开始看报纸了，但还没看完。&quot;</p>
  <p>在这种情况下，我们使用现在进行时，因为时间参考是现在。只有少数语言有现在进行时/现在进行时。</p><br />
  <h3 style={{textAlign:'center'}}>&quot;gàiniàn fēnxī&quot;</h3>
  <p>dāng yīgè dòngzuò, shìjiàn, zhuàngtài huò qíngkuàng yǐjīng kāishǐ dàn shàngwèi jiéshù shí, wǒmen huì shuō mǒu shì &quot;zhèngzài jìnxíng zhōng&quot;. Yībān lái shuō, zài yīngyǔ zhòng, dāng mǒu shì zhèngzài jìnxíng shí, wǒmen huì shǐyòng jìnxíng shí (ing).</p>
  <p>qīzi wèn zhàngfū,<span style={{color: 'blue'}}>&quot;zhè jiàn shì shì nǐ yǐjīng kāishǐ dàn shàngwèi wánchéng de ma?&quot;</span>zhàngfū huídá shuō:&quot;Wǒ kāishǐ hē kāfēile, dàn hái méi hē wán; wǒ kāishǐ kàn bàozhǐle, dàn hái méi kàn wán.&quot;</p>
  <p>zài zhè zhǒng qíngkuàng xià, wǒmen shǐyòng xiànzài jìnxíng shí, yīn wéi shíjiān cānkǎo shì xiànzài. Zhǐyǒu shǎoshù yǔyán yǒu xiànzài jìnxíng shí/xiànzài jìnxíng shí.</p>
          </div>
        </>
      ),
  
      jp: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
        <h3 style={{ textAlign:'center'}}>&quot;概念分析&quot;</h3>
  <p>アクション、イベント、状態、または状況が始まっているがまだ終わっていない場合、何かが&quot;進行中&quot;であると言います。一般的に、英語では、何かが進行中の場合、継続時制 (ing) を使用します。</p>
  <p>妻は夫に、<span style={{ color: 'blue' }}>&quot;それは、始めたが終わっていない何かですか?&quot;</span> と尋ねています。 夫は答えます。&quot;コーヒーを飲み始めましたが、まだ飲み終わっていません。新聞を読み始めましたが、まだ読み終わっていません。&quot;</p>
  <p>この場合、時間参照が現在であるため、現在進行形を使用します。現在進行形/現在進行形を持つ言語はほんの一握りです。</p>
          </div>
        </>
      ),
  
      kr: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
        <h3 style={{ textAlign:'center'}}>&quot;개념 분석&quot;</h3>
  <p>행동, 사건, 상태 또는 상황이 시작되었지만 끝나지 않았을 때, 우리는 무언가가 &quot;진행 중&quot;이라고 말합니다. 일반적으로 영어에서 무언가가 진행 중일 때 우리는 진행형 시제(ing)를 사용합니다。</p>
  <p>아내가 남편에게 <span style={{ color: 'blue' }}>&quot;그게 당신이 시작했지만 끝내지 않은 무언가입니까?&quot;라고 묻습니다。</span> 남편이 대답합니다。&quot;커피를 마시기 시작했지만 아직 커피를 마시지 않았고, 신문을 읽기 시작했지만 아직 신문을 읽지 않았습니다。&quot;</p>
  <p>이 경우 현재 진행형을 사용합니다。 시간 참조가 현재이기 때문입니다。 현재 진행형/현재 진행형을 사용하는 언어는 소수에 불과합니다。</p>
          </div>
        </>
      ),
  
      il: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
        <h3 style={{ textAlign:'center'}}>&quot;ניתוח מושגי&quot;</h3>
   <p>כאשר פעולה, אירוע, מצב או מצב התחילו אך לא הסתיימו, אנו אומרים שמשהו &quot;בעיצומו.&quot; באופן כללי, באנגלית, כאשר משהו בתהליך, אנו משתמשים בזמנים מתמשכים (ing).</p>
   <p>האישה שואלת את בעלה, <span style={{ color: 'blue' }}>&quot;האם המשהו שהתחלת אבל לא סיימת?&quot;</span> הבעל עונה, &quot;התחלתי לשתות קפה אבל לא
    סיימתי לשתות קפה, והתחלתי לקרוא את העיתון אבל לא סיימתי לקרוא את העיתון.&quot;</p>
   <p>במקרה זה, אנו משתמשים בהווה מתמשך מכיוון שהפניית הזמן היא ההווה. רק לקומץ שפות יש הווה מתמשך/הווה פרוגרסיבי.</p>
          </div>
        </>
      ),
  
      eg: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
        <h3 style={{ textAlign:'center'}}>&quot;التحليل المفاهيمي&quot;</h3>
  <p>عندما يبدأ فعل أو حدث أو حالة أو موقف ولكنه لم ينته، ​​نقول إن شيئًا ما &quot;قيد التقدم.&quot; بشكل عام، في اللغة الإنجليزية، عندما يكون شيء ما قيد التقدم، نستخدم الأزمنة المستمرة (ing).</p>
  <p>تسأل الزوجة زوجها، <span style={{ color: 'blue' }}>&quot;هل هذا شيء بدأته ولكنك لم تنته منه؟&quot;</span> يجيب الزوج، &quot;لقد بدأت في تناول القهوة ولكنني لم أنهي تناول القهوة، وقد بدأت في قراءة الورقة ولكنني لم أنهي قراءة الورقة.&quot;</p>
  <p>في هذه الحالة، نستخدم المضارع المستمر لأن مرجع الوقت هو الحاضر. لا يوجد سوى عدد قليل من اللغات التي تستخدم المضارع المستمر/المضارع المستمر.</p>
          </div>
        </>
      ),
  
  
      ir: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
        <h3 style={{ textAlign:'center'}}>&quot;تحلیل مفهومی&quot;</h3>
   <p>هنگامی که یک عمل، یک رویداد، یک وضعیت یا موقعیتی شروع شده است اما به پایان نرسیده است، می گوییم که چیزی &quot;در حال انجام&quot; است. به طور کلی، در زبان انگلیسی، زمانی که چیزی در حال انجام است، از زمان های پیوسته (ing) استفاده می کنیم.</p>
   <p>زن از شوهرش می‌پرسد، <span style={{ color: 'blue' }}>&quot;آیا کاری است که شما شروع کرده‌اید اما آن را تمام نکرده‌اید؟&quot;</span> شوهر پاسخ می‌دهد: &quot;من شروع کردم. قهوه می خورم اما قهوه را تمام نکرده ام، و شروع به خواندن مقاله کرده ام اما خواندن مقاله را تمام نکرده ام.&quot;</p>
   <p>در این مثال، ما از حال پیوسته استفاده می‌کنیم، زیرا مرجع زمان فعلی است. تنها تعداد انگشت شماری از زبان‌ها دارای پیشروی پیوسته/حال حاضر هستند.</p>
          </div>
        </>
      ),
  
      tr: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
        <h3 style={{ textAlign:'center'}}>&quot;Kavramsal Analiz&quot;</h3>
  <p>Bir eylem, olay, durum veya durum başladığında ancak sona ermediğinde, bir şeyin &quot;devam ettiğini&quot; söyleriz. Genel olarak, İngilizcede bir şey devam ettiğinde, sürekli zaman kipleri (ing) kullanırız.</p>
  <p>Karı kocasına, <span style={{ color: 'blue' }}>&quot;Başladığın ancak bitirmediğin bir şey mi?&quot;</span> diye soruyor. Koca, &quot;Kahve içmeye başladım ancak kahvemi bitirmedim ve makaleyi okumaya başladım ancak makaleyi okumayı bitirmedim.&quot; diye cevaplıyor.</p>
  <p>Bu durumda, zaman referansı şimdiki zaman olduğu için şimdiki zaman sürekli kipini kullanıyoruz. Sadece bir avuç dilde şimdiki zaman sürekli kipi/şimdiki zaman sürekli kipi vardır.</p>
          </div>
        </>
      ),
  
      in: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
        <h3 style={{ textAlign:'center'}}>&quot;संकल्पनात्मक विश्लेषण&quot;</h3>
  <p>जब कोई क्रिया, घटना, स्थिति या स्थिति शुरू हो जाती है लेकिन समाप्त नहीं होती है, तो हम कहते हैं कि कुछ &quot;प्रगति पर है।&quot; सामान्य तौर पर, अंग्रेजी में, जब कुछ प्रगति पर होता है, तो हम निरंतर काल (ing) का उपयोग करते हैं।</p>
  <p>पत्नी अपने पति से पूछ रही है, <span style={{ color: 'blue' }}>&quot;क्या यह कुछ ऐसा है जिसे आपने शुरू किया है लेकिन समाप्त नहीं किया है?&quot;</span> पति जवाब देता है, &quot;मैंने कॉफी पीना शुरू कर दिया है लेकिन मैंने कॉफी पीना समाप्त नहीं किया है, और मैंने अखबार पढ़ना शुरू कर दिया है लेकिन मैंने अखबार पढ़ना समाप्त नहीं किया है।&quot;</p>
  <p>इस उदाहरण में, हम वर्तमान निरंतर का उपयोग करते हैं क्योंकि समय संदर्भ वर्तमान है। केवल मुट्ठी भर भाषाओं में वर्तमान निरंतर/वर्तमान प्रगतिशील है।</p>
          </div>
        </>
      ),
    // Other languages (es, pl, etc.) go here...
  };

  return (
    <div
      style={{
        marginTop: '20px',
        textAlign: isRTL ? 'right' : 'left',
        direction: isRTL ? 'rtl' : 'ltr',
        backgroundColor: '#f9f9f9',
        padding: '10px',
        borderRadius: '10px',
        position: 'relative',
        zIndex: '900',
      }}
    >
      {content[language] || content.en} {/* Fallback to English if language is not found */}
    </div>
  );
};

export default ContentSection;