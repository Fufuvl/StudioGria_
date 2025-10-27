'use client'
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from '../error-msg';

type FormData = {
  name: string;
  subject: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required().label("Name"),
  subject: yup.string().required().label("subject"),
  message: yup.string().required().label("Message"),
});

// prop type 
type IProps = {
  btnCls?:string;
}
export default function ContactForm({btnCls=''}:IProps) {
  const {register,handleSubmit,reset,formState: { errors }} = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data:FormData) => {
    const phoneNumber = "905388654405"; // WhatsApp numarası
    const message = `Ad: ${data.name}\nKonu: ${data.subject}\nMesaj: ${data.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    reset();
  });
  return (
    <form onSubmit={onSubmit}>
      <div className="cn-contactform-input mb-25">
        <label>Adınız</label>
        <input id='name' {...register("name")} type="text" placeholder="Can Tekin" />
        <ErrorMsg msg={errors.name?.message!} />
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
