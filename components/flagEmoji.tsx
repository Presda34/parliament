"use client";

import { Noto_Color_Emoji } from "next/font/google";
import { ReactNode } from "react";

type Props = {
  children: ReactNode
}

const notoColorEmoji = Noto_Color_Emoji({ subsets: ['emoji'], weight: "400" });

export default function FlagEmoji({ children }: Props) {
  const needIconFont = navigator && (navigator.userAgent.includes('Win') && navigator.userAgent.includes('Chrom'));
  return <div className={needIconFont ? notoColorEmoji.className : ''}>
    {children}
  </div>
}