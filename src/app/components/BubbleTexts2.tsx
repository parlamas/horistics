// src/app/components/BubbleTexts2.tsx
import React from 'react';

// Define the valid language keys as a TypeScript type
type Language = 'en' | 'gr' | 'es' | 'pl' | 'dk' | 'fr' | 'pt' | 'it' | 'de' | 'ua' | 'ru' | 'zh' | 'eg' | 'ir' | 'tr' | 'in' | 'jp' | 'kr' | 'il';

// Define the props for the BubbleTexts component
interface BubbleTextsProps {
  language: Language;  // Corrected to use the Language type
  isRTL: boolean;
}

const BubbleTexts2: React.FC<BubbleTextsProps> = ({ language, isRTL }) => {
  return (
    <div className={`bubble-container ${isRTL ? 'rtl' : ''}`}>
      {/* Bubble 1 */}
      <div className="bubble bubble1">
        {language === 'en' && 'Tell me about your morning routine.'}
        {language === 'gr' && 'Πες μου για την πρωινή σου ρουτίνα.'}
        {language === 'es' && 'Cuéntame sobre tu rutina matutina.'}
        {language === 'pl' && 'Opowiedz mi o swojej porannej rutynie.'}
        {language === 'dk' && 'Fortæl mig om din morgenrutine.'}
        {language === 'fr' && 'Parle-moi de ta routine matinale.'}
        {language === 'pt' && 'Conte-me sobre sua rotina matinal.'}
        {language === 'it' && 'Parlami della tua routine mattutina.'}
        {language === 'de' && 'Erzähl mir von deiner Morgenroutine.'}
        {language === 'ua' && 'Розкажи мені про свій ранковий розпорядок.'}
        {language === 'ru' && 'Расскажи мне о своём утреннем распорядке.'}
        {language === 'zh' && '告诉我你的晨间例行公事。'}
        {language === 'eg' && 'أخبرني عن روتينك الصباحي.'}
        {language === 'ir' && 'در مورد برنامه صبحگاهی‌ات بگو.'}
        {language === 'tr' && 'Sabah rutinin hakkında bana anlat.'}
        {language === 'in' && 'मुझे अपनी सुबह की दिनचर्या के बारे में बताएं।'}
        {language === 'jp' && 'あなたの朝のルーティンについて教えてください。'}
        {language === 'kr' && '당신의 아침 일과에 대해 말해 주세요.'}
        {language === 'il' && 'ספר לי על שגרת הבוקר שלך.'}
      </div>

      {/* Bubble 2 */}
      <div className="bubble bubble2">
        {language === 'en' && 'I have coffee and ( I ) read the paper.'}
        {language === 'gr' && 'Πίνω καφέ και διαβάζω την εφημερίδα.'}
        {language === 'es' && 'Tomo café y leo el periódico.'}
        {language === 'pl' && 'Piję kawę i czytam gazetę.'}
        {language === 'dk' && 'Jeg drikker kaffe og læser avisen.'}
        {language === 'fr' && 'Je prends un café et je lis le journal.'}
        {language === 'pt' && 'Tomo café e leio o jornal.'}
        {language === 'it' && 'Bevo caffè e leggo il giornale.'}
        {language === 'de' && 'Ich trinke Kaffee und lese die Zeitung.'}
        {language === 'ua' && 'Я п’ю каву і читаю газету.'}
        {language === 'ru' && 'Я пью кофе и читаю газету.'}
        {language === 'zh' && '我喝咖啡，读报纸。'}
        {language === 'eg' && 'أنا أشرب القهوة وأقرأ الجريدة.'}
        {language === 'ir' && 'من در حال نوشیدن قهوه و خواندن روزنامه هستم.'}
        {language === 'tr' && 'Kahve içiyorum ve gazete okuyorum.'}
        {language === 'in' && 'मैं कॉफ़ी पीता हूं और अखबार पढ़ता हूं।'}
        {language === 'jp' && '私はコーヒーを飲みながら新聞を読みます。'}
        {language === 'kr' && '나는 커피를 마시고 신문을 읽는다.'}
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
          top: 80px;
          left: 1070px;
          width:180px;
          direction: ltr; /* Ensures LTR for non-RTL languages */
          text-align: left; /* Aligns text for LTR languages */
        }

        .bubble2 {
          top: 80px;
          left: 670px;
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
          top:90px;
          right: 670px;
          width:190px;
          text-align:center;
        }

        .rtl .bubble2 {
          left: unset;
          right: 1150px;
          top:70px;
          width:190px;
          text-align:center;
          transform: translateX(50%);
        }

        /* Responsive styles */
        @media (max-width: 768px) {
          .bubble1 {
            top: 80px;
            left: 450px;
            width:160px;
            height:50px;
            font-size: 12px;
            padding: 5px;
            text-align:left;
          }

          .bubble2 {
            top: 70px;
            left: 120px;
            width:160px;
            height:50px;
            transform: translateX(-50%);
            font-size: 12px;
            padding: 5px;
            text-align:left;
          }

        .rtl .bubble1 {
          left: unset;
            top: 80px;
            left: 530px;
            width:160px;
            height:50px;
            transform: translateX(-50%);
            font-size: 12px;
            padding: 5px;
            text-align:left;
        }

        .rtl .bubble2 {
          left: unset;
            top: 70px;
            left: -30px;
            width:160px;
            height:50px;
            font-size: 12px;
            padding: 5px;
            text-align:left;
        }
        }

        @media (max-width: 480px) {
          .bubble1 {
            top: 45px;
            left: 230px;
            width:110px;
            height:50px;
            font-size: 10px;
            padding: 5px;
            text-align:left;
          }

          .bubble2 {
            top: 40px;
            left: 70px;
            width:110px;
            height:50px;
            transform: translateX(-50%);
            font-size: 10px;
            padding: 5px;
            text-align:left;
          }

        .rtl .bubble1 {
          left: unset;
          top: 45px;
          left: 290px;
          width:110px;
          height:50px;
          transform: translateX(-50%);
          font-size: 10px;
          padding: 5px;
          text-align:left;
        }

        .rtl .bubble2 {
          left: unset;
          top: 40px;
          left: 80px;
          width:130px;
          height:50px;
          transform: translateX(-50%);
          font-size: 10px;
          padding: 5px;
          text-align:left;
        }
        }
      `}</style>
    </div>
  );
};

export default BubbleTexts2;


