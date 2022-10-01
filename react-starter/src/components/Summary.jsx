
import React from "react";
import { useQuery } from "@tanstack/react-query";
import fetchSummary from "../api/summaryAPI";

function Summary() {
  const {isLoading, error, data} = useQuery(['summary'], fetchSummary)


  if (isLoading) return 'Loading...'

  if (error) return `An error has occurred: ${error.message}`
  console.log(data)

  return <>Test</>
}

export default Summary;
