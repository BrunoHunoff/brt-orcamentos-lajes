import jsPDF from "jspdf";
import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/sidebar";
import Header from "../../components/Header/header";
import NavRow from "../../components/NavRow/navRow";

function Proposta() {
  const orcamentoHtml = `
   <div style="font-family: Arial, sans-serif; color: #000; width: 1000px; padding: 10mm; font-size: 16px; display: flex; flex-direction: column">
	<!-- PAGINA 1 -->
	<div style="height: 1250px; margin-block: 120px; border: 1px solid black; flex: 0 0 auto;">
		<div style="text-align: center; font-weight: bold; font-size: 24px; margin-bottom: 10mm;">
			ORÇAMENTO
		</div>
		<div style="text-align: center; font-size: 14px;font-weight: bold; margin-bottom: 8mm;">
			Nº 01-191-1024
		</div>
		<div style="text-align: center; font-size: 14px;font-weight: bold; margin-bottom: 8mm;">
			Balsa Nova, PR - 17 de Outubro de 2024
		</div>
		<!-- Informações do cliente e obra -->
		<div style="font-size: 16px; margin-bottom: 48px;">
			<h3 style="margin: 4mm 0; font-size: 20px">Ao</h3>
			<h3 style="margin: 4mm 0; font-size: 20px">Cliente</h3>
			<div style="display: flex; justify-content: space-between;">
				<p style="margin: 4mm 0;">Cidade/Estado</p>
				<p style="margin: 4mm 0;">CNPJ: 111.111.111/111</p>
			</div>
		</div>
		<div style="display: flex; flex-direction: column; align-items: center;">
			<div style="font-size: 16px; margin-bottom: 52px;">
				<p style="margin-bottom: 30px">Prezados(as)</p>
				<p style="">Conforme solicitação de V.Sa. apresentamos nossa proposta para fornecimento de <strong>LAJE ALVEOLAR PROTENDIDA</strong>.</p>
			</div>
			<h3 style="color:blue; font-size: 20px; width: 100%; text-align: baseline;">1 - Especificação</h3>
			<p style="margin-block: 40px; font-size: 16px">Consiste no fornecimento de materiais em obediência às normas relativas ao projeto de montagem e controle de qualidade definidas pela ABNT. <br>
				<br>Nesta proposta consideramos o fornecimento de peças para oxecução da obra com as seguintes dimensões:
			</p>
			<table style="width: 70%; border-collapse: collapse; margin-bottom: 10mm; font-size: 9px;">
				<tbody style="font-size: 20px; font-weight: bold;">
					<tr style="border: 1px solid #000; text-align: center;">
						<td style="padding-block: 4px ">Produto .................</td>
						<td>Laje Alveolar Protendida</td>
					</tr>
					<tr style="border: 1px solid #000; text-align: center;">
						<td style=" padding-block: 4px">Área Total ............</td>
						<td style=" text-align: center;">400m²</td>
					</tr>
					<tr style="border: 1px solid #000; text-align: center;">
						<td style="padding-block: 4px">Peso Total ............</td>
						<td>30t</td>
					</tr>
				</tbody>
			</table>
			<p style="font-size: 16px; font-weight: bold; text-align: center; margin-block: 32px;">
				Somos referencia desde 1989 em produtos PRÉ-FABRICADOS.<br><br>
				Queremos lhe atender com os melhores produtos do mercado e trazer soluções.<br><br>
				Estaremos disponíveis para ajuda-lo(a) ter a melhor opção para sua Obra.
			</p>
		</div>
	</div>

  <!-- PAGINA 1 -->
	<div style="height: 1250px; margin-block: 120px; border: 1px solid black; flex: 0 0 auto;">
	<div style="font-weight: bold; font-size: 12px; margin-bottom: 6mm;">
		RELAÇÃO DE PRODUTOS
	</div>
	<table style="width: 100%; border-collapse: collapse; margin-bottom: 10mm; font-size: 9px;">
		<thead>
			<tr>
				<th style="text-align: left; padding: 3mm; border: 1px solid #000;">Item</th>
				<th style="text-align: left; padding: 3mm; border: 1px solid #000;">Descrição</th>
				<th style="text-align: right; padding: 3mm; border: 1px solid #000;">Quantidade</th>
				<th style="text-align: right; padding: 3mm; border: 1px solid #000;">Unidade</th>
				<th style="text-align: right; padding: 3mm; border: 1px solid #000;">Valor</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td style="padding: 3mm; border: 1px solid #000;">1</td>
				<td style="padding: 3mm; border: 1px solid #000;">LAJE ALV. PROT. LP16 CL01 - sca 500,00kgf/m2 (Vão Max.5m) - 1,25x5m / 400m²</td>
				<td style="padding: 3mm; text-align: right; border: 1px solid #000;">91</td>
				<td style="padding: 3mm; text-align: right; border: 1px solid #000;">PÇ</td>
				<td style="padding: 3mm; text-align: right; border: 1px solid #000;">R$ 64.224,89</td>
			</tr>
			<tr>
				<td style="padding: 3mm; border: 1px solid #000;">2</td>
				<td style="padding: 3mm; border: 1px solid #000;">LAJE ALV. PROT. LP16 CL01 - sca 500,00kgf/m2 (Vão Max.1,85m) - 1,25x1,85m / 9,25m²</td>
				<td style="padding: 3mm; text-align: right; border: 1px solid #000;">4</td>
				<td style="padding: 3mm; text-align: right; border: 1px solid #000;">PÇ</td>
				<td style="padding: 3mm; text-align: right; border: 1px solid #000;">R$ 90.707,36</td>
			</tr>
		</tbody>
	</table>
	<!-- Valor total -->
	<div style="text-align: right; font-weight: bold; font-size: 12px; margin-bottom: 10mm;">
		Valor Total: R$ 154.932,25
	</div>
  </div>
	<!-- Condições de pagamento -->
	<div style="font-weight: bold; font-size: 12px; margin-bottom: 6mm;">
		CONDIÇÕES DE PAGAMENTO / DADOS BANCÁRIOS
	</div>
	<p style="font-size: 10px; margin: 4mm 0;">A combinar</p>
	<!-- Seção de garantia -->
	<div style="font-weight: bold; font-size: 12px; margin-bottom: 6mm;">
		GARANTIA
	</div>
	<p style="font-size: 10px; margin: 4mm 0;">Garantia por 5 (cinco) anos de acordo com o Código Civil Brasileiro, para imperfeições relativas aos elementos pré-fabricados de concreto, desde que exclusivamente em consequência de defeitos de fabricação com base no projeto aprovado pelo CONTRATANTE e CONTRATADA.</p>
	<!-- Assinatura -->
	<div style="margin-top: 20mm; font-size: 10px;">
		<p style="margin: 4mm 0;">_______________________________________</p>
		<p style="margin: 4mm 0;">Assinatura do Contratante</p>
	</div>
	<!-- Responsáveis -->
	<div style="margin-top: 15mm;">
		<p style="font-weight: bold; font-size: 10px; margin: 4mm 0;">HEVERTON CZARNIK</p>
		<p style="font-weight: bold; font-size: 10px; margin: 4mm 0;">DIREÇÃO GERAL</p>
	</div>
</div>
  `;

  const orcamentoPdf = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    return new Promise((resolve) => {
      doc.html(orcamentoHtml, {
        callback: () => {
          resolve(doc.output("blob"));
        },
        width: 210,
        windowWidth: 1080,
      });
    });
  };

  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    orcamentoPdf().then((blob) => {
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);

      return () => {
        URL.revokeObjectURL(url);
      };
    });
  }, []);

  return (
    <div>
      <Sidebar />
      <div className="content">
        <Header pageTitle="Proposta" userName="Bruno Hunoff" />

        {pdfUrl ? (
          <iframe
            src={pdfUrl}
            width="630px"
            height="861px"
            title="PDF Preview"
          />
        ) : (
          <p>Gerando PDF...</p>
        )}

        <NavRow showVoltar={false} />
      </div>
    </div>
  );
}

export default Proposta;
