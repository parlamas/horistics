// src/app/components/BubbleTexts.tsx
import React from 'react';

// Define the valid language keys as a TypeScript type
//type Language = 'en' | 'gr' | 'es' | 'pl' | 'dk' | 'fr' | 'pt' | 'it' | 'de' | 'ua' | 'ru' | 'zh' | 'eg' | 'ir' | 'tr' | 'in' | 'jp' | 'kr' | 'il';

// Define the props for the BubbleTexts component
interface BubbleTextsProps {
  language: string;
  isRTL: boolean;
}

const BubbleTexts: React.FC<BubbleTextsProps> = ({ language, isRTL }) => {
  return (
    <div className={`bubble-container ${isRTL ? 'rtl' : ''}`}>
      {/* Bubble 1 */}
      <div className="bubble bubble1">
        {language === 'en' && 'What are you doing?'}
        {language === 'gr' && 'Τι κάνεις;'}
        {language === 'es' && '¿Qué estás haciendo?'}
        {language === 'pl' && 'Co robisz?'}
        {language === 'dk' && 'Hvad laver du?'}
        {language === 'fr' && 'Que fais-tu ?'}
        {language === 'pt' && 'O que você está fazendo?'}
        {language === 'it' && 'Cosa stai facendo?'}
        {language === 'de' && 'Was machst du?'}
        {language === 'ua' && 'Що ти робиш?'}
        {language === 'ru' && 'Что ты делаешь?'}
        {language === 'zh' && '你在做什么？'}
        {language === 'eg' && 'ماذا تفعل؟'}
        {language === 'ir' && 'چه کار می‌کنی؟'}
        {language === 'tr' && 'Ne yapıyorsun?'}
        {language === 'in' && 'आप क्या कर रहे हैं?'}
        {language === 'jp' && '何をしていますか？'}
        {language === 'kr' && '뭐 하고 있어?'}
        {language === 'il' && 'מה אתה עושה?'}
      </div>

      {/* Bubble 2 */}
      <div className="bubble bubble2">
        {language === 'en' && (<>I am having coffee and<br />( I am ) reading the paper.</>)}
        {language === 'gr' && 'Πίνω καφέ και διαβάζω εφημερίδα.'}
        {language === 'es' && (<>Estoy tomando café y ( estoy )<br />leyendo el periódico.</>)}
        {language === 'pl' && 'Piję kawę i czytam gazetę.'}
        {language === 'dk' && 'Jeg drikker kaffe og læser avisen.'}
        {language === 'fr' && 'Je prends un café et je lis le journal.'}
        {language === 'pt' && 'Estou tomando café e lendo o jornal.'}
        {language === 'it' && 'Sto bevendo caffè e leggendo il giornale.'}
        {language === 'de' && 'Ich trinke Kaffee und lese die Zeitung.'}
        {language === 'ua' && 'Я п’ю каву і читаю газету.'}
        {language === 'ru' && 'Я пью кофе и читаю газету.'}
        {language === 'zh' && '我在喝咖啡并阅读报纸。'}
        {language === 'eg' && 'أنا أشرب القهوة وأقرأ الجريدة.'}
        {language === 'ir' && 'من در حال نوشیدن قهوه و خواندن روزنامه هستم.'}
        {language === 'tr' && 'Kahve içiyorum ve gazete okuyorum.'}
        {language === 'in' && 'मैं कॉफी पी रहा हूँ और अखबार पढ़ रहा हूँ।'}
        {language === 'jp' && '私はコーヒーを飲んで新聞を読んでいます。'}
        {language === 'kr' && '나는 커피를 마시고 신문을 읽고 있습니다.'}
        {language === 'il' && 'אני שותה קפה וקורא את העיתון.'}
      </div>

      <style jsx>{`
        .bubble-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none; /* Ensures bubbles don't interfere with clicking on flags */
        }

        .bubble {
          position: absolute;
          background-color: black;
          color: white;
          padding: 10px;
          border-radius: 15px;
          font-size: 12px;
          font-weight: bold;
          text-align: center;
          min-width: 100px;
          max-width: 300px;
          word-wrap: break-word;
          pointer-events: all; /* Allow clicking inside the bubbles if necessary */
        }

        .bubble1 {
          top: 130px;
          left: 720px;
          direction: ltr; /* Ensures LTR for non-RTL languages */
          text-align: left; /* Aligns text for LTR languages */
        }

        .bubble2 {
          top: 160px;
          left: 1080px;
          transform: translateX(-50%);
          direction: ltr; /* Ensures LTR for non-RTL languages */
          text-align: left; /* Aligns text for LTR languages */
        }

        /* RTL adjustments */
        .rtl .bubble1,
        .rtl .bubble2 {
          direction: rtl; /* Changes the text flow to RTL */
          text-align: right; /* Aligns text to the right for RTL */
        }

        .rtl .bubble1 {
          left: unset;
          right: 1100px;
          text-align:center;
        }

        .rtl .bubble2 {
          left: unset;
          right: 850px;
          text-align:center;
          transform: translateX(50%);
        }

        /* Responsive styles */
        @media (max-width: 768px) {
          .bubble1 {
            top: 130px;
            left: 10%;
          }

          .bubble2 {
            top: 160px;
            left: 450px;
          }

        .rtl .bubble1 {
          left: unset;
          top:130px;
          right: 480px;
          text-align:center;
        }

        .rtl .bubble2 {
          left: unset;
          top:175px;
          right: 220px;
          text-align:center;
          transform: translateX(50%);
        }
        }

        @media (max-width: 480px) {
          .bubble1 {
            top: 90px;
            left: 30px;
            width:120px;
            font-size: 10px;
            padding: 5px;
            text-align:left;
          }

          .bubble2 {
            top: 100px;
            left: 260px;
            width:160px;
            transform: translateX(-50%);
            font-size: 10px;
            padding: 5px;
            text-align:left;
          }

        .rtl .bubble1 {
          left: unset;
          top:80px;
          right: 250px;
          text-align:center;
        }

        .rtl .bubble2 {
          left: unset;
          top:100px;
          right: 120px;
          text-align:center;
          transform: translateX(50%);
        }
        }
      `}</style>
    </div>
  );
};

export default BubbleTexts;

