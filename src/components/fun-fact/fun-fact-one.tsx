import React from "react";
import CounterItem from "../counter/counter-item";
import { sosyalKanit } from "@/data/sosyal-kanit-data";
import { Leaf } from "../svg";

// Rakamlar tek kaynaktan gelir: src/data/sosyal-kanit-data.ts
// Milyonluk degerler "16 milyon+" olarak yazilir.
const counter_data = sosyalKanit.map((m, i) => ({
  id: i + 1,
  title: m.etiket.toLocaleUpperCase("tr-TR"),
  count: m.deger >= 1000000 ? Math.round(m.deger / 1000000) : m.deger,
  text: m.deger >= 1000000 ? " milyon" + m.sonek : m.sonek,
}));
export default function FunFactOne() {
  return (
    <div className="ab-funfact-area pb-40">
      <div className="container container-1480">
        <div className="row">
          <div className="col-xl-4">
            <div className="ab-funfact-title-box">
              <h2 className="ab-inner-funfact-title tp_title_anim">
                Rakamlarla <br /> Studio Gria
              </h2>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="ab-funfact-wrap">
              <div className="row gx-75">
                {counter_data.map((item) => (
                  <div key={item.id} className="col-xl-6 col-lg-6 col-md-6">
                    <div className="ab-funfact-item mb-90">
                      <span>
                        <CounterItem min={0} max={item.count} />
                        {item.text}
                      </span>
                      <p>{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
