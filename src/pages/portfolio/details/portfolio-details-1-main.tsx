"use client";
import { gsap } from "gsap";
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import Social from "@/components/social/social";
import { Dots, Share } from "@/components/svg";
import { projectDetailsPin } from "@/utils/project-anim";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import {charAnimation,titleAnimation} from "@/utils/title-animation";
import { ProjectDT } from "@/types/project-d-t";
import { projects } from "@/data/project-data";
import Link from "next/link";

// images
import port_d_1 from '@/assets/img/inner-project/portfolio-details/port-details-1.jpg';
import port_d_2 from '@/assets/img/inner-project/portfolio-details/port-details-2.jpg';
import port_d_3 from '@/assets/img/inner-project/portfolio-details/port-details-3.jpg';
import port_d_4 from '@/assets/img/inner-project/portfolio-details/port-details-4.jpg';

const port_images = [port_d_1, port_d_2, port_d_3, port_d_4];

type Props = { project?: ProjectDT };

const PortfolioDetailsOneMain = ({ project }: Props) => {
  const [showSocial, setShowSocial] = React.useState(false);
  const [isGridView, setIsGridView] = React.useState(false);
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      projectDetailsPin();
    }, 100);
    return () => clearTimeout(timer);
  });

  const imagesToRender = (project?.images && project.images.length > 0) ? project.images : port_images;

  const { prev, next } = React.useMemo(() => {
    if (!project) return { prev: undefined as ProjectDT | undefined, next: undefined as ProjectDT | undefined };
    const index = projects.findIndex((p) => p.slug === project.slug);
    if (index === -1) return { prev: undefined as ProjectDT | undefined, next: undefined as ProjectDT | undefined };
    const prevIndex = (index - 1 + projects.length) % projects.length;
    const nextIndex = (index + 1) % projects.length;
    return { prev: projects[prevIndex], next: projects[nextIndex] };
  }, [project]);

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderEleven cls="tp-inner-header-border"/>
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* portfolio details area */}
            <div className="project-details-1-area project-details-1-pt">
               <div className="container-fluid p-0">
                  <div className="row g-0">
                     <div className="col-xl-7">
                        <div className="project-details-1-left">
                          {!isGridView && (
                            <>
                              {imagesToRender.map((imgSrc: any, i: number) => (
                                <div key={i} className="project-details-1-thumb mb-10">
                                  {typeof imgSrc === "string" ? (
                                    <Image src={imgSrc} alt="port-img" width={1200} height={800} loading={i === 0 ? 'eager' : 'lazy'} sizes="(max-width: 768px) 100vw, 50vw" style={{height:"auto"}}/>
                                  ) : (
                                    <Image src={imgSrc} alt="port-img" loading={i === 0 ? 'eager' : 'lazy'} style={{height:"auto"}}/>
                                  )}
                                </div>
                              ))}
                            </>
                          )}
                          {isGridView && (
                            <div className="row g-2">
                              {imagesToRender.map((imgSrc: any, i: number) => (
                                <div key={i} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                  <div className="project-details-1-thumb mb-10">
                                    {typeof imgSrc === "string" ? (
                                      <Image src={imgSrc} alt="port-img" width={1000} height={800} loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" style={{height:"auto", width:"100%"}}/>
                                    ) : (
                                      <Image src={imgSrc} alt="port-img" loading="lazy" style={{height:"auto", width:"100%"}}/>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                     </div>
                     <div className="col-xl-5">
                        <div className="project-details-1-right-wrap">
                           <div className="project-details-1-right p-relative">
                              <div className="project-details-1-title-box">
                                 <span className="project-details-1-subtitle"><i>01</i>{project?.category ?? "Çekim"}</span>
                                 <h4 className="project-details-1-title">{project?.title ?? "Yolculuk"}</h4>
                                 <p>Girişimlere ve küçük işletmelere dijital deneyim hizmetleri sunuyoruz.
                                    Marka kimlikleri ve dijital deneyimler oluşturarak müşterilerimizin başarıya ulaşmasına yardımcı oluruz.</p>
                              </div>
                              <div className="project-details-1-info-wrap">
                                 <div className="project-details-1-info">
                                    <span>Müşteri</span>
                                    <h4>{project?.title ?? ""}</h4>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>Tarih</span>
                                    <h4>{project ? project.year : "Ekim '2022"}</h4>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>Hizmetler</span>
                                    <h4>Fotoğraf çekimi ve sosyal medya</h4>
                                 </div>
                              </div>
                              <div className="project-details-1-social">
                                 {showSocial && <div className="project-details-1-social-inner">
                                    <Social/>
                                 </div>}
                                 <div className="project-details-1-social-main">
                                    <a className="share-icon pointer" onClick={() => setShowSocial(!showSocial)}>
                                       <span>
                                          <Share/>
                                       </span>
                                    </a>
                                 </div>
                              </div>
                           </div>
                           <div className="project-details-1-navigation d-flex justify-content-between align-items-center">
                              <Link className="project-details-1-prev" href={prev ? `/portfolio/${prev.slug}` : "#"}>
                                 <i className="fa-sharp fa-regular fa-arrow-left"></i>
                                 <span>Önceki</span>
                              </Link>
                              <a onClick={() => setIsGridView(!isGridView)} className="pointer">
                                 <span>
                                    <Dots/>
                                 </span>
                              </a>
                              <Link className="project-details-1-next" href={next ? `/portfolio/${next.slug}` : "#"}>
                                 <span>Sonraki</span>
                                 <i className="fa-sharp fa-regular fa-arrow-right"></i>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* portfolio details area */}
          </main>

          {/* footer area */}
          <FooterTwo topCls="" />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default PortfolioDetailsOneMain;



