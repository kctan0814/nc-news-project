const Error = props => {
  const {status, msg} = props;

  return (
    <section className="error">
      <h2>{status}</h2>
      <p>Error: {msg}</p>
    </section>
  )
}

export default Error;