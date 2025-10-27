import React from "react";
import { Metadata } from "next";
import ServiceMain from "@/pages/service/service";

export const metadata: Metadata = {
  title: "Studio Gria - Hizmetler",
};

const ServicePage = () => {
  return (
    <ServiceMain/>
  );
};

export default ServicePage;
