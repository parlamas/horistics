// src/app/components/ContentSection2.tsx
import React from 'react';

// Define the valid language keys as a TypeScript type
type Language = 'en' | 'gr' | 'es' | 'pl' | 'dk' | 'fr' | 'pt' | 'it' | 'de' | 'ua' | 'ru' | 'zh' | 'eg' | 'ir' | 'tr' | 'in' | 'jp' | 'kr' | 'il';

interface ContentSectionProps {
  language: Language;
  isRTL: boolean;
}

// Define the component
const ContentSection2: React.FC<ContentSectionProps> = ({ language, isRTL }) => {
  // Content translations for each language
  const content: Record<Language, JSX.Element> = {
    en: (
      <div style={{ marginTop: '-30px', width: '80%', margin: '0 auto' }}>
        <h3 style={{ textAlign: 'center' }}>&quot;Conceptual Analysis&quot;</h3>
        <p>The Present Simple has a misleading name because it is never used when the time is present. The Present Simple is not a present tense but a general tense, and a more fitting name would be &quot;General Tense.&quot;</p>
        <p>Remember! Even though it is called present, it is not present; it is the tense we use when the time is general.</p>
      </div>
    ),
    
    gr: (
      <>
        <div style={{ marginTop: '-30px', width: '80%', margin: '0 auto' }}>
          <h3 style={{ textAlign: 'center' }}>&quot;Εννοιολογική Ανάλυση&quot;</h3>
  <p>Ο Απλός Ενεστώτας έχει παραπλανητικό όνομα επειδή δεν χρησιμοποιείται ποτέ όταν ο χρόνος είναι παρών. Ο Απλός Ενεστώτας δεν είναι ένας χρόνος του παρόντος, αλλά ένας γενικός χρόνος, και ένα πιο κατάλληλο όνομα θα ήταν &quot;Γενικός Χρόνος&quot;.</p>
  <p>Θυμήσου! Παρόλο που ονομάζεται ενεστώτας, δεν είναι ενεστώτας&#903; είναι ο χρόνος που χρησιμοποιούμε όταν ο χρόνος είναι γενικός.</p>
</div>
      </>
    ),

    es: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
          <h3 style={{ textAlign:'center'}}>&quot;Análisis Conceptual&quot;</h3>
          <p>El Presente Simple tiene un nombre engañoso porque nunca se usa cuando el tiempo es presente. El Presente Simple no es un tiempo presente, sino un tiempo general, y un nombre más apropiado sería &quot;Tiempo General&quot;.</p>
  <p>¡Recuerda! Aunque se llama presente, no es presente; es el tiempo que usamos cuando el tiempo es general.</p>
          
          </div>
        </>
      ),
  
      pl: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
        <h3 style={{ textAlign:'center'}}>&quot;Analiza Konceptualna&quot;</h3>
<p>Czas Teraźniejszy Prosty ma mylącą nazwę, ponieważ nigdy nie jest używany, gdy czas odnosi się do teraźniejszości. Czas Teraźniejszy Prosty nie jest czasem teraźniejszym, ale ogólnym, a bardziej odpowiednia nazwa to &quot;Czas Ogólny&quot;.</p>
  <p>Pamiętaj! Chociaż nazywany jest teraźniejszym, nie jest teraźniejszym; jest to czas, którego używamy, gdy czas jest ogólny.</p>
          </div>
        </>
      ),
  
      dk: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
        <h3 style={{ textAlign:'center'}}>&quot;Begrebsanalyse&quot;</h3>
        <p>Nutid (Present Simple) har et vildledende navn, fordi den aldrig bruges, når tiden er nutid. Nutid er ikke en nutid, men en generel tid, og et mere passende navn ville være &quot;Generel Tid&quot;.</p>
        <p>Husk! Selvom det kaldes nutid, er det ikke nutid; det er den tid, vi bruger, når tiden er generel.</p>
          </div>
        </>
      ),
  
      fr: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
        <h3 style={{ textAlign:'center'}}>&quot;Analyse Conceptuelle&quot;</h3>
        <p>Le Présent Simple porte un nom trompeur car il n&apos;est jamais utilisé lorsque le temps est présent. Le Présent Simple n&apos;est pas un temps présent, mais un temps général, et un nom plus approprié serait &quot;Temps Général&quot;.</p>
        <p>Rappelle-toi ! Même s&apos;il est appelé présent, il n&apos;est pas présent ; c&apos;est le temps que nous utilisons lorsque le temps est général.</p>
          </div>
        </>
      ),
  
      pt: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
        <h3 style={{ textAlign:'center'}}>&quot;Análise Conceptual&quot;</h3>
        <p>O Presente Simples tem um nome enganador porque nunca é usado quando o tempo é presente. O Presente Simples não é um tempo presente, mas um tempo geral, e um nome mais adequado seria &quot;Tempo Geral&quot;.</p>
        <p>Lembre-se! Embora seja chamado de presente, não é presente; é o tempo que usamos quando o tempo é geral.</p>
          </div>
        </>
      ),
  
      it: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
        <h3 style={{ textAlign:'center'}}>&quot;Analisi Concettuale&quot;</h3>
        <p>Il Presente Semplice ha un nome fuorviante perché non viene mai utilizzato quando il tempo è presente. Il Presente Semplice non è un tempo presente, ma un tempo generale, e un nome più adatto sarebbe &quot;Tempo Generale&quot;.</p>
        <p>Ricorda! Anche se è chiamato presente, non è presente; è il tempo che usiamo quando il tempo è generale.</p>
          </div>
        </>
      ),
  
      de: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
        <h3 style={{ textAlign:'center'}}>&quot;Konzeptionelle Analyse&quot;</h3>
        <p>Das Präsens (Present Simple) hat einen irreführenden Namen, weil es nie verwendet wird, wenn die Zeit gegenwärtig ist. Das Präsens ist keine Gegenwartszeit, sondern eine allgemeine Zeit, und ein passenderer Name wäre &quot;Allgemeine Zeit&quot;.</p>
        <p>Denk daran! Auch wenn es Gegenwart genannt wird, ist es nicht gegenwärtig; es ist die Zeitform, die wir verwenden, wenn die Zeit allgemein ist.</p>
          </div>
        </>
      ),
  
  
      ua: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
        <h3 style={{ textAlign:'center'}}>&quot;Концептуальний аналіз&quot;</h3>
        <p>Теперішній Простий має оманливу назву, оскільки він ніколи не використовується, коли час є теперішнім. Теперішній Простий — це не теперішній час, а загальний час, і більш відповідною назвою було б &quot;Загальний Час&quot;.</p>
        <p>Пам’ятай! Хоча його називають теперішнім, він не є теперішнім; це час, який ми використовуємо, коли час є загальним.</p>
          </div>
        </>
      ),
  
      ru: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
        <h3 style={{ textAlign:'center'}}>&quot;Концептуальный анализ&quot;</h3>
        <p>Настоящее Простое время имеет вводящее в заблуждение название, потому что оно никогда не используется, когда время настоящее. Настоящее Простое не является настоящим временем, а общим временем, и более подходящим названием было бы &quot;Общее Время&quot;.</p>
  <p>Помни! Хотя оно называется настоящим, оно не является настоящим; это время, которое мы используем, когда время является общим.</p>
</div>
        </>
      ),
  
      zh: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
        <h3 style={{ textAlign:'center'}}>&quot;概念分析&quot;</h3>
        <p>一般现在时的名称具有误导性，因为它从未在时间为现在时使用。一般现在时并不是现在时，而是一般时态，一个更合适的名称是&quot;一般时&quot;。</p>
        <p>记住！尽管它被称为现在时，但它并不是现在时；这是我们在时间是一般时使用的时态。</p><br />

          </div>
        </>
      ),
  
      jp: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
        <h3 style={{ textAlign:'center'}}>&quot;概念分析&quot;</h3>
        <p>現在形は誤解を招く名前を持っています。それは時間が現在であるときに使われることはありません。現在形は現在時制ではなく、一般時制であり、より適切な名前は「一般時制」です。</p>
        <p>覚えていてください！それが現在と呼ばれていても、それは現在ではありません。時間が一般的な場合に使われる時制です。</p>
          </div>
        </>
      ),
  
      kr: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
        <h3 style={{ textAlign:'center'}}>&quot;개념 분석&quot;</h3>
        <p>현재형(Present Simple)은 오해를 불러일으키는 이름을 가지고 있습니다. 왜냐하면 현재 시간이 아닐 때 사용되기 때문입니다. 현재형은 현재 시제가 아니라 일반 시제이며, 더 적절한 이름은 &quot;일반 시제&quot;입니다.</p>
  <p>기억하세요! 그것이 현재라고 불리더라도, 그것은 현재가 아닙니다. 시간이 일반적일 때 사용하는 시제입니다.</p>
</div>
        </>
      ),
  
      il: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
        <h3 style={{ textAlign:'center'}}>&quot;ניתוח מושגי&quot;</h3>
        <p>ההווה הפשוט הוא שם מטעה מכיוון שהוא לעולם לא משמש כאשר הזמן הוא בהווה. ההווה הפשוט אינו זמן נוכחי אלא זמן כללי, ושם מתאים יותר יהיה &quot;זמן כללי&quot;.</p>
        <p>זכור! למרות שהוא נקרא נוכחי, הוא אינו נוכחי; זה הזמן שבו אנו משתמשים כאשר הזמן הוא כללי.</p>
          </div>
        </>
      ),
  
      eg: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
        <h3 style={{ textAlign:'center'}}>&quot;التحليل المفاهيمي&quot;</h3>
        <p>يُعتبر الحاضر البسيط اسماً مضللاً لأنه لا يُستخدم أبدًا عندما يكون الزمن حاليًا. الحاضر البسيط ليس زمناً حاضراً بل زمناً عاماً، والاسم الأكثر ملاءمة له سيكون &quot;الزمن العام&quot;.</p>
        <p>تذكر! على الرغم من أنه يسمى الحاضر، إلا أنه ليس حاضراً؛ إنه الزمن الذي نستخدمه عندما يكون الزمن عاماً.</p>
          </div>
        </>
      ),
  
  
      ir: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
        <h3 style={{ textAlign:'center'}}>&quot;تحلیل مفهومی&quot;</h3>
        <p>زمان حال ساده نامی گمراه‌کننده است، زیرا هرگز وقتی زمان حال است، استفاده نمی‌شود. زمان حال ساده یک زمان حال نیست بلکه یک زمان کلی است و نام مناسب‌تر برای آن &quot;زمان کلی&quot; خواهد بود.</p>
        <p>به یاد داشته باش! با اینکه آن را زمان حال می‌نامند، اما حال نیست؛ این زمانی است که ما از آن استفاده می‌کنیم وقتی که زمان کلی است.</p>
          </div>
        </>
      ),
  
      tr: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
        <h3 style={{ textAlign:'center'}}>&quot;Kavramsal Analiz&quot;</h3>
        <p>Geniş zaman (Present Simple) yanıltıcı bir ada sahiptir çünkü zaman şimdiki olduğunda asla kullanılmaz. Geniş zaman bir şimdiki zaman değil, genel bir zamandır ve daha uygun bir isim &quot;Genel Zaman&quot; olurdu.</p>
  <p>Unutmayın! Şimdiki zaman olarak adlandırılsa da aslında şimdiki zaman değildir; zamanı genel olduğunda kullandığımız zamandır.</p>
          </div>
        </>
      ),
  
      in: (
        <>
        <div style={{ marginTop: '-30px', width:'80%', margin:'0 auto'}}>
        <h3 style={{ textAlign:'center'}}>&quot;संकल्पनात्मक विश्लेषण&quot;</h3>
        <p>प्रेज़ेंट सिंपल (Present Simple) का नाम भ्रामक है क्योंकि यह कभी भी वर्तमान समय के लिए उपयोग नहीं होता है। प्रेज़ेंट सिंपल वर्तमान काल नहीं है बल्कि एक सामान्य काल है, और इसे एक अधिक उपयुक्त नाम &quot;सामान्य काल&quot; कहा जा सकता है।</p>
        <p>याद रखें! इसे वर्तमान कहा जाता है, लेकिन यह वास्तव में वर्तमान नहीं है; यह वह काल है जिसे हम तब उपयोग करते हैं जब समय सामान्य होता है।</p>
          </div>
        </>
      ),
    // Add other languages here
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
      {content[language] || content.en}
    </div>
  );
};

// Export the component
export default ContentSection2;
