// src/app/components/BubbleTexts3.tsx
import React from 'react';

// Define the valid language keys as a TypeScript type
type Language = 'en' | 'gr' | 'es' | 'pl' | 'dk' | 'fr' | 'pt' | 'it' | 'de' | 'ua' | 'ru' | 'zh' | 'eg' | 'ir' | 'tr' | 'in' | 'jp' | 'kr' | 'il';

// Define the props for the BubbleTexts component
interface BubbleTextsProps {
  language: Language;  // Corrected to use the Language type
  isRTL: boolean;
}

const BubbleTexts3: React.FC<BubbleTextsProps> = ({ language, isRTL }) => {
  return (
    <div className={`bubble-container ${isRTL ? 'rtl' : ''}`}>
      {/* Bubble 1 */}
      <div className="bubble bubble1">
  {language === 'en' && 'What have you been doing?'}
  {language === 'gr' && 'Μα, τἰ φτιάχνεις;'}
  {language === 'es' && '¿Qué has estado haciendo?'}
  {language === 'pl' && 'Co robiłeś?'}
  {language === 'dk' && 'Hvad har du lavet?'}
  {language === 'fr' && 'Qu\'as-tu fait?'}
  {language === 'pt' && 'O que você tem feito?'}
  {language === 'it' && 'Che cosa hai fatto?'}
  {language === 'de' && 'Was hast du gemacht?'}
  {language === 'ua' && 'Що ти робив?'}
  {language === 'ru' && 'Что ты делал?'}
  {language === 'zh' && '你一直在做什么？'}
  {language === 'eg' && 'ماذا كنت تفعل؟'}
  {language === 'ir' && 'چه کار می‌کردی؟'}
  {language === 'tr' && 'Ne yapıyordun?'}
  {language === 'in' && 'आप क्या कर रहे थे?'}
  {language === 'jp' && '何をしていましたか？'}
  {language === 'kr' && '무엇을 하고 있었나요?'}
  {language === 'il' && 'מה עשית?'}
</div>


      {/* Bubble 2 */}
      <div className="bubble bubble2">
  {language === 'en' && 'I have been working in the garden.'}
  {language === 'gr' && 'Δουλεύω στον κήπο.'}
  {language === 'es' && 'He estado trabajando en el jardín.'}
  {language === 'pl' && 'Pracowałem w ogrodzie.'}
  {language === 'dk' && 'Jeg har arbejdet i haven.'}
  {language === 'fr' && 'J\'ai travaillé dans le jardin.'}
  {language === 'pt' && 'Estive trabalhando no jardim.'}
  {language === 'it' && 'Ho lavorato in giardino.'}
  {language === 'de' && 'Ich habe im Garten gearbeitet.'}
  {language === 'ua' && 'Я працював у саду.'}
  {language === 'ru' && 'Я работал в саду.'}
  {language === 'zh' && '我一直在花园里工作。'}
  {language === 'eg' && 'كنت أعمل في الحديقة.'}
  {language === 'ir' && 'من در حال کار در باغ بودم.'}
  {language === 'tr' && 'Bahçede çalışıyordum.'}
  {language === 'in' && 'मैं बगीचे में काम कर रहा था।'}
  {language === 'jp' && '私は庭で仕事をしていました。'}
  {language === 'kr' && '나는 정원에서 일하고 있었다.'}
  {language === 'il' && 'עבדתי בגינה.'}
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
          left: 1030px;
          width:200px;
          direction: ltr; /* Ensures LTR for non-RTL languages */
          text-align: center; /* Aligns text for LTR languages */
        }

        .bubble2 {
          top: 80px;
          left: 700px;
          direction: ltr; /* Ensures LTR for non-RTL languages */
          text-align: left; /* Aligns text for LTR languages */
        }

        /* RTL adjustments */
        .rtl .bubble1,
        .rtl .bubble2 {
          direction: rtl; /* Changes the text flow to RTL */
          text-align: right; /* Aligns text to the right for RTL */
        }

        .rtl .bubble2 {
          left: unset;
          top:90px;
          right: 670px;
          width:190px;
          text-align:center;
        }

        .rtl .bubble1 {
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
            width:190px;
            height:30px;
            font-size: 12px;
            padding: 5px;
            text-align:center;
          }

          .bubble2 {
            top: 80px;
            left: 140px;
            width:220px;
            height:30px;
            transform: translateX(-50%);
            font-size: 12px;
            padding: 5px;
            text-align:center;
          }

        .rtl .bubble1 {
          left: unset;
            top: 80px;
            left: 500px;
            width:160px;
            height:30px;
            transform: translateX(-50%);
            font-size: 12px;
            padding: 5px;
            text-align:center;
        }

        .rtl .bubble2 {
          left: unset;
            top: 80px;
            left: 160px;
            width:160px;
            height:30px;
            font-size: 12px;
            padding: 5px;
            text-align:center;
        }
        }

        @media (max-width: 480px) {

          .bubble1 {
            top: 70px;
            left: 200px;
            width:160px;
            height:30px;
            font-size: 10px;
            padding: 5px;
            text-align:center;
          }

          .bubble2 {
            top: 70px;
            left: 100px;
            width:180px;
            height:30px;
            transform: translateX(-50%);
            font-size: 10px;
            padding: 5px;
            text-align:center;
          }

        .rtl .bubble1 {
          left: unset;
          top: 70px;
          left: 290px;
          width:110px;
          height:30px;
          transform: translateX(-50%);
          font-size: 10px;
          padding: 5px;
          text-align:center;
        }

        .rtl .bubble2 {
          left: unset;
          top: 70px;
          left: 80px;
          width:130px;
          height:30px;
          transform: translateX(-50%);
          font-size: 10px;
          padding: 5px;
          text-align:center;
        }
        }
      `}</style>
      

    </div>
  );
};

export default BubbleTexts3;
