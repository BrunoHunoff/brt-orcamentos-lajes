function Proposta() {
  return (
    <div>
      <Sidebar />
      <div className="content">
        <Header pageTitle="Proposta" userName="Bruno Hunoff" />

        <NavRow showVoltar={false} onNext={handleAvancar} />
      </div>
    </div>
  );
}

export default Proposta;
