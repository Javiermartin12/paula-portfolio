"use client";

import { GoogleAnalytics as GoogleTag } from "@next/third-parties/google";

export default function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!measurementId) {
    return null;
  }

  return <GoogleTag gaId={measurementId} />;
}
