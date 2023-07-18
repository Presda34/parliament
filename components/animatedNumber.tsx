"use client";

import { useEffect, useState } from "react";

type Props = {
  number: number
}

export default function AnimatedNumber({ number }: Props) {
  const [displayedNumber, setDisplayedNumber] = useState(number);
  function adjustNumber() {
    const diff = Math.abs(number - displayedNumber);
    const step = diff > 100 ? 69 : diff > 10 ? 7 : 1
    if (number > displayedNumber) {
      setTimeout(() => setDisplayedNumber(displayedNumber + step), 3)
    } else if (number < displayedNumber) {
      setTimeout(() => setDisplayedNumber(displayedNumber - step), 3)
    }
  }
  useEffect(adjustNumber, [displayedNumber, number])

  return <>{displayedNumber}</>
}