import React, { Suspense } from "react";
import { Metadata } from "next";
import ServiceDetailsMain from "@/pages/service/service-details";

export const metadata: Metadata = {
  title: "Studio Gria - Hizmet Detayları",
};

const ServiceDetailsPage = () => {
  return (
    <Suspense fallback={null}>
      <ServiceDetailsMain/>
    </Suspense>
  );
};

export default ServiceDetailsPage;
