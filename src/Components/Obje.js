import React, { useState } from 'react';


const Obje = props => {
  const objeler = ['UZAY MEKİĞİ', 'BALTA', 'BATIK', 'ŞATO', 'TREN', 'SİNEMA', 'ARABA', 'ATÖLYE', 'ATLIKARINCA', 'DÖNMEDOLAP', 'KLOZET', 'BAZUKA', 'OSCAR HEYKELİ', 'SAVAŞ PİLOTU KULAKLIĞI', 'DİŞ MACUNU', 'BIÇAK', 'KURUKAFA', 'DERİ', 'TAMİRAT MALZEMELERİ', 'BORU', 'İP', 'TAŞ', 'ORMAN VE İŞÇİLİK', 'DAKTİLO', 'PİYANO', 'GAZ MASKESİ', 'SANDIK', 'DRONE', 'ŞEMSİYE', 'ASTRONOT KIYAFETİ', 'OYUNCAK', 'KİBRİT', 'ZARF', 'ÇARK', 'KELEPÇE', 'FIRÇA', 'TASMA', 'MANDAL', 'SÜT', 'PARA', 'KORKULUK', 'YATAK', 'BİSİKLET', 'GİTAR', 'KİTAPLIK', 'YANGIN MUSLUĞU', 'TERLİK', 'AYNA', 'BANK', 'BUMERANG', 'YAY', 'TOKA'];
  const [obje, setObje] = useState(0);

  const randomObje = e => {
    const len = objeler.length;
    setObje(Math.floor(Math.random() * len));
  }

  return (
    <div className="App">
        <p><h4>OBJE: {objeler[obje]}</h4></p>
        <button onClick={randomObje}>
          OBJE ICIN TIKLA
        </button>
    </div>
  );
}


export default Obje;

// objeler = ['UZAY MEKIGI', 'BALTA', 'BATIK', 'SATO', 'TREN', 'SINEMA', 'ARABA', 'ATOLYE', 'ATLIKARINCA', 'DONMEDOLAP', 'KLOZET', 'BAZUKA', 'OSCAR HEYKELI', 'SAVAS PILOTU KULAKLIGI', 'DIS MACUNU', 'BICAK', 'KURUKAFA', 'DERI', 'TAMıRAT MALZEMELERI', 'BORU', 'IP', 'TAS', 'ORMAN VE ISCILIK', 'DAKTILO', 'PIYANO', 'GAZ MASKESI', 'SANDIK', 'DRONE', 'SEMSIYE', 'ASTRONOT KIYAFETI', 'OYUNCAK', 'KIBRIT', 'ZARF', 'CARK', 'KELEPCE', 'FIRCA', 'TASMA', 'MANDAL', 'SUT', 'PARA', 'KORKULUK', 'YATAK', 'BISIKLET', 'GITAR', 'KITAPLIK', 'YANGIN MUSLUGU', 'TERLIK', 'AYNA', 'BANK', 'BUMERANG', 'YAY', 'TOKA']
// kavram = ['HIRS', 'DEPRESYON', 'SALGIN', 'KAVGA', 'SEKS', 'GERGINLIK','ZENGINLIK', 'HUZUR', 'ONUR', 'ASK', 'MACERA', 'YALAN', 'NEFRET', 'TERKETMEK', 'HAKSIZLIK', 'ODUL', 'DISTOPIK', 'YIKIM', 'DEGISIM', 'KACIS', 'BOSLUK', 'KULTUR', 'KONTROL', 'ENGEL', 'SINIR', 'SUC', 'MISTIK', 'OYUN', 'UYUM', 'DOGAUSTU', 'YABANCI', 'MASUMIYET', 'HUZUN', 'KORKU', 'OZLEM', 'SAVAS', 'ANARSI', 'TUTKU', 'OLUM', 'AIDIYET', 'IHTISAM', 'YALNIZLIK', 'HIYERARSI', 'IZOLASYON', 'YOLCULUK', 'NOSTALJI', 'KOTULUK', 'OZGURLUK', 'EGLENCE']
// tarz = ['REALISTIC','GAMING','CYBERPUNK','STEAMPUNK','FUTURISTIC','CARTOON']
