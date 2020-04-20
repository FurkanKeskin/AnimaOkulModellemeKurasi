import React, { useState } from "react";

const Kavram = props => {
    const kavramlar = ['HIRS', 'DEPRESYON', 'SALGIN', 'KAVGA', 'SEKS', 'GERGİNLİK','ZENGİNLİK', 'HUZUR', 'ONUR', 'AŞK', 'MACERA', 'YALAN', 'NEFRET', 'TERKETMEK', 'HAKSIZLIK', 'ÖDÜL', 'DİSTOPİK', 'YIKIM', 'DEĞİŞİM', 'KAÇIŞ', 'BOŞLUK', 'KÜLTÜR', 'KONTROL', 'ENGEL', 'SİNİR', 'SUÇ', 'MİSTİK', 'OYUN', 'UYUM', 'DOĞAÜSTÜ', 'YABANCI', 'MASUMİYET', 'HÜZÜN', 'KORKU', 'ÖZLEM', 'SAVAŞ', 'ANARŞİ', 'TUTKU', 'ÖLÜM', 'AİDİYET', 'İHTİŞAM', 'YALNIZLIK', 'HİYERARŞİ', 'İZOLASYON', 'YOLCULUK', 'NOSTALJİ', 'KÖTÜLÜK', 'ÖZGÜRLÜK', 'EĞLENCE'];
    const [kavram, setKavram] = useState(0);

    const randomKavram = e => {
        const len = kavramlar.length;
        setKavram(Math.floor(Math.random() * len));
    }

    return (
        <div className="App">
            <p> <h4>KAVRAM: {kavramlar[kavram]}</h4></p>
            <button onClick={randomKavram}>
                KAVRAM ICIN TIKLA
        </button>
        </div>
    );
}


export default Kavram;