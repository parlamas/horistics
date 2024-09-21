// src/app/ohilisophy/reåublic/page.tsx
"use client";

import React, { useState } from 'react';
//import Image from 'next/image';
import LTComponent from '../../components/R-01'; // Import LTComponent
import '../../globals.css';
import './republic.css'; // Make sure this CSS file contains your styles
//import NavbarDesktop from '../../components/NavbarDesktop';
//import NavbarMobile from '../../components/NavbarMobile';
import Navbar from '../../components/Navbar';  // Use the unified Navbar component

export default function RepublicPage() {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  // This function will handle the language change
  const handleLanguageChange = (lang: string) => {
    setCurrentLanguage(lang);
    console.log("Language changed to:", lang);
  };

  return (
    <div style={{marginTop:'50px'}}>
      <Navbar/>
      {/* This container centers only the upper part */}
      
      <div 
        className="centered-container" 
        style={{ 
          height: '300px', // Increased height by 100px
          backgroundColor: 'black', // Background color (if needed)
          overflowY: 'auto' // Allow vertical scrolling if content overflows
        }}
      >
        <div className="republic" style={{ height: '100%' }}>
          <div className="formatted-text" style={{ height: '100%' }}>
            {currentLanguage === 'en' && (
              <>
              <p className="centered-text" style={{color:"cyan",fontSize:"9pt"}}>Isidoros Parlamas</p>
                <p className="centered-text">PLATO&apos;S REPUBLIC</p>
                <p className="centered-text">BOOK I</p>
                <p className="centered-text">PERSONS OF THE DIALOGUE</p>
                <div className="dialogue-grid">
                  <div className="left-column"><span className="highlighted-text" style={{ color:"gold"}}>SOCRATES</span>, who is the narrator.</div>
                  <div className="right-column">CEPHALUS</div>
                  <div className="left-column">GLAUCON</div>
                  <div className="right-column">THRASYMACHUS</div>
                  <div className="left-column">ADEIMANTUS</div>
                  <div className="right-column">CLEITOPHON</div>
                  <div className="left-column">POLEMARCHUS</div>
                </div>
                <p className="centered-text" style={{textAlign:"center", fontSize:"11pt"}}>And several mute spectators.</p>
              </>
            )}
            {currentLanguage === 'es' && (
              <>
              <p className="centered-text" style={{color:"cyan",fontSize:"9pt"}}>Isidoros Parlamas</p>
                <p className="centered-text">LA REPÚBLICA DE PLATÓN</p>
                <p className="centered-text">LIBRO I</p>
                <p className="centered-text">PERSONAJES DEL DIÁLOGO</p>
                <div className="dialogue-grid">
                  <div className="left-column"><span className="highlighted-text" style={{ color:"gold"}}>SÓCRATES</span>, quien es el narrador.</div>
                  <div className="right-column">CÉFALO</div>
                  <div className="left-column">GLAUCÓN</div>
                  <div className="right-column">TRASÍMACO</div>
                  <div className="left-column">ADEIMANTO</div>
                  <div className="right-column">CLITOFÓN</div>
                  <div className="left-column">POLEMARCO</div>
                </div>
                <p className="centered-text">Y varios espectadores mudos.</p>
              </>
            )}
            {currentLanguage === 'da' && (
              <>
              <p className="centered-text" style={{color:"cyan",fontSize:"9pt"}}>Isidoros Parlamas</p>
                <p className="centered-text">REPUBLIKKEN PLATO</p>
                <p className="centered-text">BOG I</p>
                <p className="centered-text">PERSONER I DIALOGEN</p>
                <div className="dialogue-grid">
                  <div className="left-column"><span className="highlighted-text" style={{ color:"gold"}}>SOKRATES</span>, som er fortælleren.</div>
                  <div className="right-column">KEPHALUS</div>
                  <div className="left-column">GLAUCON</div>
                  <div className="right-column">THRASYMACHUS</div>
                  <div className="left-column">ADEIMANTUS</div>
                  <div className="right-column">CLEITOPHON</div>
                  <div className="left-column">POLEMARCHUS</div>
                </div>
                <p className="centered-text">Og flere stumme tilskuere.</p>
              </>
            )}
            {currentLanguage === 'pl' && (
              <>
              <p className="centered-text" style={{color:"cyan",fontSize:"9pt"}}>Isidoros Parlamas</p>
                <p className="centered-text">REPUBLIKA PLATONA</p>
                <p className="centered-text">KSIĘGA I</p>
                <p className="centered-text">OSOBY DIALOGU</p>
                <div className="dialogue-grid">
                  <div className="left-column"><span className="highlighted-text" style={{ color:"gold"}}>SOKRATES</span>, który jest narratorem.</div>
                  <div className="right-column">KEFALUS</div>
                  <div className="left-column">GLAUKON</div>
                  <div className="right-column">TRAZYMACH</div>
                  <div className="left-column">ADEIMANTUS</div>
                  <div className="right-column">KLEITOFON</div>
                  <div className="left-column">POLEMARCH</div>
                </div>
                <p className="centered-text">I kilku niemych widzów.</p>
              </>
            )}
            {currentLanguage === 'pt' && (
              <>
              <p className="centered-text" style={{color:"cyan",fontSize:"9pt"}}>Isidoros Parlamas</p>
                <p className="centered-text">A REPÚBLICA DE PLATÃO</p>
                <p className="centered-text">LIVRO I</p>
                <p className="centered-text">PESSOAS DO DIÁLOGO</p>
                <div className="dialogue-grid">
                  <div className="left-column"><span className="highlighted-text" style={{ color:"gold"}}>SÓCRATES</span>, que é o narrador.</div>
                  <div className="right-column">CÉFALO</div>
                  <div className="left-column">GLAUCO</div>
                  <div className="right-column">TRASÍMACO</div>
                  <div className="left-column">ADEIMANTUS</div>
                  <div className="right-column">CLEITOFON</div>
                  <div className="left-column">POLEMARCUS</div>
                </div>
                <p className="centered-text">E vários espectadores mudos.</p>
              </>
            )}
            {currentLanguage === 'fr' && (
              <>
              <p className="centered-text" style={{color:"cyan",fontSize:"9pt"}}>Isidoros Parlamas</p>
                <p className="centered-text">LA RÉPUBLIQUE DE PLATON</p>
                <p className="centered-text">LIVRE I</p>
                <p className="centered-text">LES PERSONNES DU DIALOGUE</p>
                <div className="dialogue-grid">
                  <div className="left-column"><span className="highlighted-text" style={{ color:"gold"}}>SOKRATE</span>, qui est le narrateur.</div>
                  <div className="right-column">CÉPHALE</div>
                  <div className="left-column">GLAUCON</div>
                  <div className="right-column">THRASYMACHUS</div>
                  <div className="left-column">ADEIMANTE</div>
                  <div className="right-column">KLEITOPHON</div>
                  <div className="left-column">POLÉMARQUE</div>
                </div>
                <p className="centered-text">Et plusieurs spectateurs muets.</p>
              </>
            )}
            {currentLanguage === 'zh' && (
              <>
              <p className="centered-text" style={{color:"cyan",fontSize:"9pt"}}>Isidoros Parlamas</p>
                <p className="centered-text" style={{ fontSize:"8pt"}}>柏拉图的《理想国》 Bólātú de “lǐxiǎng guó”</p>
                <p className="centered-text"style={{ fontSize:"8pt"}} >第一卷 dì yī juàn</p>
                <p className="centered-text" style={{ fontSize:"8pt"}}>对话者 duìhuà zhě</p>
                <div className="dialogue-grid">
                  <div className="left-column" style={{fontSize:"6pt"}}><span className="highlighted-text" style={{ color:"gold"}}>苏格拉底</span>, 叙述者。<br />
                  sū gélā dǐ, xùshù zhě。</div>
                  <div className="right-column" style={{ fontSize:"6pt"}}>塞法洛斯 sāi fǎ luòsī</div>
                  <div className="left-column" style={{ fontSize:"6pt"}}>格劳孔 gé láo kǒng</div>
                  <div className="right-column" style={{ fontSize:"6pt"}} >色拉叙马科斯 sèlā xù mǎ kēsī</div>
                  <div className="left-column" style={{ fontSize:"6pt"}}>阿德曼托斯 ā dé màn tuō sī</div>
                  <div className="right-column" style={{ fontSize:"6pt"}}>克莱托丰 kè lái tuō fēng</div>
                  <div className="left-column" style={{ fontSize:"6pt"}}>波勒马库斯 bō lè mǎ kù sī</div>
                </div>
                <p className="centered-text" style={{ textAlign:"center", fontSize:"6pt"}}>还有几位沉默的观众。<br />
                ái yǒu jǐ wèi chénmò de guānzhòng.</p>
              </>
            )}
            {currentLanguage === 'gr' && (
              <>
              <p className="centered-text" style={{color:"cyan",fontSize:"9pt"}}>Ισίδωρος Παρλαμάς</p>
                <p className="centered-text">Η ΠΟΛΙΤΕΙΑ ΤΟΥ ΠΛΑΤΩΝΑ</p>
                <p className="centered-text">ΒΙΒΛΙΟ I</p>
                <p className="centered-text">ΠΡΟΣΩΠΑ ΤΟΥ ΔΙΑΛΟΓΟΥ</p>
                <div className="dialogue-grid">
                  <div className="left-column"><span className="highlighted-text" style={{ color:"gold"}}>ΣΩΚΡΑΤΗΣ</span>, ο οποίος είναι ο αφηγητής.</div>
                  <div className="right-column">ΚΕΦΑΛΟΣ</div>
                  <div className="left-column">ΓΛΑΥΚΩΝ</div>
                  <div className="right-column">ΘΡΑΣΥΜΑΧΟΣ</div>
                  <div className="left-column">ΑΔΕΙΜΑΝΤΟΣ*</div>
                  <div className="right-column">ΚΛΕΙΤΟΦΩΝ</div>
                  <div className="left-column">ΠΟΛΕΜΑΡΧΟΣ</div>
                </div>
                <p className="centered-text">Και άλλοι σιωπηλοί θεατές.</p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* This part is NOT centered */}
      <div className="relative mb-4">
        <LTComponent onLanguageChange={handleLanguageChange} /> {/* Republic LanguageToggle component */}
      </div>
    </div>
  );
}

