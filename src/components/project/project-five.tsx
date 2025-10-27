import React, { useState } from "react";
import Image from "next/image";
import LineTextFour from "../line-text/line-text-4";
import { UpArrow } from "../svg";
import Link from "next/link";
// images

import { projects } from "@/data/project-data";

const project_data = projects;

// prop type
type IProps = {
  style_2?: boolean;
};
export default function ProjectFive({ style_2 = false }: IProps) {
  const [visibleProjects, setVisibleProjects] = useState(4); // Başlangıçta 3 proje göster

  const handleLoadMore = () => {
    setVisibleProjects((prev) => prev + 4); // Her tıklamada 3 proje daha yükle
  };

  return (
    <div
      className={`tp-project-5-2-area pb-130 ${
        style_2 ? "" : "tp-project-5-2-pt black-bg"
      }`}
    >
      {!style_2 && (
        <div className="row">
          <div className="col-xl-12">
            <LineTextFour />
          </div>
        </div>
      )}
      <div className="container">
        <div className="row gx-140">
          {project_data.slice(0, visibleProjects).map((item) => ( // Sadece görünen projeleri haritala
            <div key={item.id} className="col-xl-6 col-lg-6 col-md-6">
              <div
                className="tp-project-5-2-thumb fix mb-140 p-relative not-hide-cursor"
                data-cursor="Incele"
              >
                <Link className="cursor-hide" href={`/portfolio/${item.slug}`}>
                  <span className="tp_img_reveal">
                    <div className="tp_img_reveal project-image-container">
                      <Image
                        src={item.img}
                        alt="project-img"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        loading="lazy"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </span>
                  <div className="tp-project-5-2-category tp_fade_anim">
                    <span>{item.category}</span>
                  </div>
                  <div className="tp-project-5-2-content tp_fade_anim">
                    <span className="tp-project-5-2-meta">{item.year}</span>
                    <h4 className="tp-project-5-2-title-sm">{item.title}</h4>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {visibleProjects < project_data.length && ( // Tüm projeler gösterilmediyse düğmeyi göster
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-projct-5-2-btn-box d-flex justify-content-center">
                <div className="tp-hover-btn-wrapper">
                  <button // Link yerine button kullan
                    className={`tp-btn-circle ${
                      style_2 ? "style-2" : ""
                    } tp-hover-btn-item tp-hover-btn`}
                    onClick={handleLoadMore} // Tıklama olayını ekle
                  >
                    <span className="tp-btn-circle-text">
                      Daha Fazla <br /> Proje
                    </span>
                    <span className="tp-btn-circle-icon">
                      <UpArrow />
                    </span>
                    <i className="tp-btn-circle-dot"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
