import React, { Suspense } from "react";
import { Metadata } from "next";
import ServiceDetailsMain from "@/pages/service/service-details";

export const metadata: Metadata = {
  title: "Studio Gria - Hizmet Detayları",
  description: "Studio Gria hizmet detayları. Dijital pazarlama, sosyal medya yönetimi ve marka stratejisi hizmetlerimizin kapsamı, süreci ve sonuçları hakkında bilgi alın.",
};

const ServiceDetailsPage = () => {
  return (
    <Suspense fallback={null}>
      <ServiceDetailsMain/>
    </Suspense>
  );
};

export default ServiceDetailsPage;
