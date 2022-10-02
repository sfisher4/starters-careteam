function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <b>There was a problem getting the summary:</b>
      <p>{error.message}</p>
    </div>
  );
}

export default ErrorFallback;
