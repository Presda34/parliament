"use client";

import ApprovalBar from "@/components/approvalBar";
import FactionControlPanel from "@/components/factionControlPanel";
import ParliamentSimulator from "@/components/parliamentSimulator";
import VotingOverview from "@/components/votingOverview";
import { FactionVotingBehaviour, Parliament, ParliamentVotingBehaviour } from "@/schema/schema";
import { useState } from "react";
import { parliamentInformation } from "../parlamentInformation";

type Props = {
  params: {
    country: string
  }
}

export default function DE({ params }: Props) {

  const parliament = parliamentInformation.find(parliament => parliament.country === params.country)
  if (parliament) {
    return <ParliamentSimulator parliamentInformation={parliament} />
  } else {
    return "Error!"
  }
}


