import React from "react";
import { useQuery } from "@tanstack/react-query";
import fetchSummary from "../../api/summaryAPI";
import summaryFields from "./utils";

function Summary() {
  const { isLoading, error, data } = useQuery(["summary"], fetchSummary);

  if (isLoading) return "Loading...";

  if (error) return `An error has occurred: ${error.message}`;

  const summary = data.data[0];

  return (
    <>
      {Object.keys(summaryFields).map((field) => (
        <React.Fragment key={field}>
          <p className="summary-field"><b>{summaryFields[field]}:</b> {summary[field]}</p>
        </React.Fragment>
      ))}
    </>
  );
}

export default Summary;
