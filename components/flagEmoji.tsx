"use client";

import { Noto_Color_Emoji } from "next/font/google";
import { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode
}

const notoColorEmoji = Noto_Color_Emoji({ subsets: ['emoji'], weight: "400" });

export default function FlagEmoji({ children }: Props) {

  const [needIconFont, setNeedIconFont] = useState(false);

  useEffect(() => {
    setNeedIconFont(navigator && (navigator.userAgent.includes('Win') && navigator.userAgent.includes('Chrom')));
  }, [])

  return <div className={needIconFont ? notoColorEmoji.className : ''}>
    {children}
  </div>
}