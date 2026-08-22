'use client'
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from '../error-msg';
import { trackLead } from '@/utils/meta-pixel';
import { leadKaydetVeBekle, whatsappAc } from '@/utils/lead';
import { BotTuzagi, useFormSuresi } from './bot-tuzagi';

type FormData = {
  name: string;
  phone: string;
  subject: string;
  message: string;
};

// Türkiye numarası: 10 hane, mobil 5 ya da sabit hat 2/3/4 ile başlar
function telefonGecerliMi(ham: string) {
  let rakamlar = (ham || "").replace(/\D/g, "");
  if (rakamlar.startsWith("0090")) rakamlar = rakamlar.slice(4);
  else if (rakamlar.startsWith("90") && rakamlar.length > 10) rakamlar = rakamlar.slice(2);
  else if (rakamlar.startsWith("0")) rakamlar = rakamlar.slice(1);
  return rakamlar.length === 10 && /^[2345]/.test(rakamlar);
}

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Adınızı giriniz")
    .min(3, "Adınızı giriniz")
    .test("harf", "Adınızı harflerle giriniz", (deger) => !/\d/.test(deger || ""))
    .label("Ad Soyad"),
  phone: yup
    .string()
    .required("Telefon numaranızı giriniz")
    .test("tr-numara", "Geçerli bir telefon numarası giriniz", telefonGecerliMi)
    .label("Telefon"),
  subject: yup.string().required("Konu giriniz").label("Konu"),
  message: yup.string().required("Mesajınızı giriniz").min(10, "Biraz daha ayrıntı verir misiniz").label("Mesaj"),
});

// prop type
type IProps = {
  btnCls?:string;
}
export default function ContactForm({btnCls=''}:IProps) {
  const {register,handleSubmit,reset,formState: { errors }} = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  // Bot tuzakları: görünmez alan ve formun doldurulma süresi
  const [tuzak, setTuzak] = useState('');
  const formSuresi = useFormSuresi();

  const onSubmit = handleSubmit((data:FormData) => {
    const phoneNumber = "905388654405"; // WhatsApp numarası
    const message = `Ad: ${data.name}\nTelefon: ${data.phone}\nKonu: ${data.subject}\nMesaj: ${data.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    // Veri önce kaydedilir, WhatsApp gönderilmese bile lead elde kalır
    const kayit = leadKaydetVeBekle({
      kaynak: 'İletişim Formu',
      adSoyad: data.name,
      telefon: data.phone,
      konu: data.subject,
      mesaj: data.message,
      website: tuzak,
      sureSaniye: formSuresi(),
    });
    // WhatsApp penceresi tıklamanın hemen ardından açılır, yoksa tarayıcı engeller
    whatsappAc(whatsappUrl);
    // Meta Pixel yalnızca spam filtresinden geçen gönderimlerde tetiklenir
    kayit.then((sonuc) => {
      if (sonuc.sayilir) trackLead({ content_name: 'İletişim Formu', content_category: data.subject });
    });
    reset();
    setTuzak('');
  });
  return (
    <form onSubmit={onSubmit}>
      <BotTuzagi deger={tuzak} degistir={setTuzak} alanId="iletisim-website" />
      <div className="cn-contactform-input mb-25">
        <label>Adınız</label>
        <input id='name' {...register("name")} type="text" placeholder="Can Tekin" />
        <ErrorMsg msg={errors.name?.message!} />
      </div>
      <div className="cn-contactform-input mb-25">
        <label>Telefon</label>
        <input id='phone' {...register("phone")} type="tel" placeholder="+90 5__ ___ __ __" />
        <ErrorMsg msg={errors.phone?.message!} />
      </div>
      <div className="cn-contactform-input mb-25">
        <label>Konu</label>
        <input id='subject' {...register("subject")} type="text" placeholder="Sosyal Medya" />
        <ErrorMsg msg={errors.subject?.message!} />
      </div>
      <div className="cn-contactform-input mb-25">
        <label>Mesajınız</label>
        <textarea id='message' {...register("message")} placeholder="Projeniz Hakkında Bize Bilgi Verin"></textarea>
        <ErrorMsg msg={errors.message?.message!} />
      </div>
      <div className="cn-contactform-btn">
        <button className={`tp-btn-black-md ${btnCls} w-100`} type="submit">
          Mesaj Gönder
        </button>
      </div>
    </form>
  );
}
