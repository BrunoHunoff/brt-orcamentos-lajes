import jsPDF from "jspdf";
import { useState, useEffect, useRef, useContext } from "react";
import Sidebar from "../../components/Sidebar/sidebar";
import Header from "../../components/Header/header";
import NavRow from "../../components/NavRow/navRow";
import papelTimbrado from "../../assets/papelTImbrado.jpg";
import apiLajes from "../../../services/api";
import { OrcamentoContext } from "../../contexts/OrcamentoContext";
import extenso from "extenso";
import "./proposta.css";

function Proposta() {
  const {
    budgetHeader,
    dataRows,

    sellPrice,

    totalFootage,

    totalWeight,

    pricePerMeter,
  } = useContext(OrcamentoContext);

  const [costumerData, setCostumerData] = useState({});

  const dataAtual = new Date();
  const dataFormatada = new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(dataAtual);

  const imgRef = useRef(null);
  const [pdfUrl, setPdfUrl] = useState(null);

  const orcamentoPdf = () => {
    const sellPriceFomated = sellPrice.toString().replace(".", ",");

    const nameArticle = () => {
      switch (costumerData.pj) {
        case "Masculino":
          return ["Ao", "Sr."];

        case "Feminino":
          return ["À", "Sra."];

        default:
          return ["À", ""];
      }
    };
    //PROPRIEDADE HEIGHT DA PRIMEIRA DIV RESOLVE PROBLEMA DE SOBREPOR O BACKGROUND
    let orcamentoHtml = `
	<div style="font-family: Arial, sans-serif; color: #000; width: 1000px;height: 100px;background: none; padding: 10mm; font-size: 16px; display: flex; flex-direction: column;">
	 <!-- PAGINA 1 -->
	 <div style="height: 1150px; margin-bottom: 100px; flex: 0 0 auto;">
		 <div style="text-align: center; font-weight: bold; font-size: 24px; margin-bottom: 10mm;">
			 ORÇAMENTO
		 </div>
		 <div style="text-align: center; font-size: 16px;font-weight: bold; margin-bottom: 8mm;">
			${budgetHeader.budgetId}
		 </div>
		 <div style="text-align: center; font-size: 16px;font-weight: bold; margin-bottom: 8mm;">
			 Balsa Nova, PR - ${dataFormatada}
		 </div>
		 <!-- Informações do cliente e obra -->
		 <div style="font-size: 16px; margin-bottom: 48px;">
			 <h3 style="margin: 4mm 0; font-size: 20px">${nameArticle[0]}</h3>
			 <h3 style="margin: 4mm 0; font-size: 20px">${nameArticle[1]} ${costumerData.name}</h3>
			 <div style="display: flex; justify-content: space-between;">
				 <p style="margin: 4mm 0;">${costumerData.city}/${costumerData.state}</p>
				 <p style="margin: 4mm 0;">CNPJ: ${costumerData.cnpjCpf}</p>
			 </div>
		 </div>
		 <div style="display: flex; flex-direction: column; align-items: center;">
			 <div style="font-size: 18px; margin-bottom: 52px;">
				 <p style="margin-bottom: 30px">Prezados(as)</p>
				 <p style="">Conforme solicitação de V.Sa. apresentamos nossa proposta para fornecimento de <strong>LAJE ALVEOLAR PROTENDIDA</strong>.</p>
			 </div>
			 <h3 style="color:blue; font-size: 24px; width: 100%; text-align: baseline;">
			 1 - Especificação
			 </h3>
			 <p style="margin-block: 40px; font-size: 18px">Consiste no fornecimento de materiais em obediência às normas relativas ao projeto de montagem e controle de qualidade definidas pela ABNT. <br>
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
						 <td style=" text-align: center;">${totalFootage}m²</td>
					 </tr>
					 <tr style="border: 1px solid #000; text-align: center;">
						 <td style="padding-block: 4px">Peso Total ............</td>
						 <td>${totalWeight}t</td>
					 </tr>
				 </tbody>
			 </table>
			 <p style="font-size: 18px; font-weight: bold; text-align: center; margin-block: 32px;">
				 Somos referencia desde 1989 em produtos PRÉ-FABRICADOS.<br><br>
				 Queremos lhe atender com os melhores produtos do mercado e trazer soluções.<br><br>
				 Estaremos disponíveis para ajuda-lo(a) ter a melhor opção para sua Obra.
			 </p>
		 </div>
	 </div>
	
	<!-- PAGINA 2 -->
	 <div style="height: 1150px; margin-top: 120px; margin-bottom: 200px;background: ; flex: 0 0 auto;">
	 <h3 style="color:blue; font-size: 24px; width: 100%; text-align: baseline; margin-bottom: 24px">
	 2 - Relação de produtos
	 </h3>
	 <table style="width: 100%; border-collapse: collapse; margin-bottom: 10mm; font-size: 18px;">
		 <thead>
			 <tr style="background: rgba(217, 217, 217, 1)">
				 <th style="text-align: center; padding: 3mm; border: 1px solid #000;">Item</th>
				 <th style="text-align: center; padding: 3mm; border: 1px solid #000;">Descrição</th>
				 <th style="text-align: center; padding: 3mm; border: 1px solid #000;">Qtd.</th>
				 <th style="text-align: center; padding: 3mm; border: 1px solid #000;">Uni.</th>
				 <th style="text-align: center; padding: 3mm; border: 1px solid #000;">Valor</th>
			 </tr>
		 </thead>
		 <tbody>
		 	`;
    dataRows.forEach((row) => {
      orcamentoHtml += `
			 <tr style="text-align: center">
				 <td style="padding-block: 3mm;border: 1px solid #000;">${row.data[0]}</td>
				 <td style="padding-block: 3mm;border: 1px solid #000;">
				 	LAJE ALV. PROT. ${row.data[2]} - sca ${row.data[4]}kgf/m2 (Vão Max. ${row.data[3]}m) - ${row.data[5]}m x ${row.data[5]}m / ${row.data[6]}m²
					</td>
				 <td style="padding-block: 3mm;border: 1px solid #000;">${row.data[1]}</td>
				 <td style="padding-block: 3mm;border: 1px solid #000;">PÇ</td>
				 <td style="padding-block: 3mm;border: 1px solid #000;">R$ 64.224,89</td>
			 </tr>
			 `;
    });

    orcamentoHtml += `
		 </tbody>
	 </table>`;

    const pdfElements = [
      `<div style="margin-bottom: 30px">
	 
	 <h3 style="color:blue; font-size: 24px; width: 100%; text-align: baseline; margin-bottom: 24px">
	 3 - Assistência
	 </h3>
		<p style="font-weight: bold; font-size: 18px";>
		A CONTRATADA oferece serviços de assessoria técnica como: Visitas In-loco, Sugestões de
Projetos, Soluções de Aplicação das Lajes Alveolares Protendidas, entre outros.
		</p>
	 </div>`,
      `
	 <div style="margin-bottom: 30px">
	 
	 <h3 style="color:blue; font-size: 24px; width: 100%; text-align: baseline; margin-bottom: 24px">
	 4 - Garantia
	 </h3>
		<p style="font-weight: bold; font-size: 18px;">
		Garantia por 5 (cinco) anos de acordo com o Código Civil Brasileiro, para imperfeições relativas aos
elementos pré-fabricados de concreto, desde que exclusivamente em conseqüência de defeitos de
fabricação com base no projeto aprovado pelo CONTRATANTE e CONTRATADA.
		</p>
	 </div>
	 `,
      `
	 <div style="margin-bottom: 30px">
	 
	 <h3 style="color:blue; font-size: 24px; width: 100%; text-align: baseline; margin-bottom: 24px">
	 5.1 - Valor Total Lajes
	 </h3>
		<div style="background: rgba(242, 242, 242, 1);border: 1px solid black; padding: 12px; display: flex; gap: 24px; font-size: 22px; font-weight: bold;">
			<span>R$${sellPriceFomated}</span>
			<span>${extenso(sellPriceFomated, {
        mode: "currency",
      }).toUpperCase()}</span>
		</div>
	 </div>
	 `,
      `
	 <div style="margin-bottom: 30px">
	 
	 <h3 style="color:blue; font-size: 24px; width: 100%; text-align: baseline; margin-bottom: 24px">
	 5.2 - Valor Total Frete
	 </h3>
		<p style="font-weight: bold; font-size: 18px"> ${
      totalWeight / budgetHeader.freightWeight
    } Fretes - ${budgetHeader.city}/${budgetHeader.state} (${
        budgetHeader.freightType
      }) </p>
	 </div>
	 `,
      `
		<div style="margin-bottom: 30px">
	 
	 <h3 style="color:blue; font-size: 24px; width: 100%; text-align: baseline; margin-bottom: 24px">
	 6 - Condições de Pagamento
	 </h3>
		<p style="font-weight: bold; font-size: 18px"> A combinar </p>
	 </div>
	 `,
      `
	  <div style="margin-bottom: 30px">
	 
	 <h3 style="color:blue; font-size: 24px; width: 100%; text-align: baseline; margin-bottom: 24px">
	 7 - Prazo de Entrega
	 </h3>
		<p style="font-weight: bold; font-size: 18px"> A combinar </p>
	 </div>
	 `,
      `
	 <div style="margin-bottom: 30px">
	 
	 <h3 style="color:blue; font-size: 24px; width: 100%; text-align: baseline; margin-bottom: 24px">
	 8 - Responsabilidade Técnica
	 </h3>
		<p style=" font-size: 18px; margin-bottom: 12px"> 
		8.1 - O projeto estrutural, a Anotação de Responsabilidade Técnica (ART) bem como suas taxas, serão
de responsabilidade da CONTRATADA. 
</p>
<p style=" font-size: 18px"> 
		8.2 - Correrá por conta do Cliente todos os encargos e obrigações relativas à aprovação e execução de
projetos e requerimentos de alvarás junto aos órgãos públicos competentes, como: Prefeituras Municipais,
INSS, DNER, DNIT, entre os outros.
</p>
	 </div>
	 `,
      `
	 <div style="margin-bottom: 300px">
	 
	 <h3 style="color:blue; font-size: 24px; width: 100%; text-align: baseline; margin-bottom: 24px">
	 9 - Serviços de responsabilidade do Contratante
	 </h3>
		<p style=" font-size: 18px; margin-bottom: 12px"> 
		9.1 - Retiradas dos Materiais na Unidade Fábril da CONTRATADA (Balsa Nova/PR), exceto quando frete CIF.
</p>
<p style=" font-size: 18px"> 
		9.2 - Transporte, Estocagem em Obra e Montagem das Lajes
</p>
<p style=" font-size: 18px"> 
		9.3 - Execução de quaisquer tipos de serviços "in loco", inclusive a equalização, chaveteamento e capeamento das lajes alveoares;
</p>
<p style=" font-size: 18px"> 
		9.4 - Aprovar Projeto Junto à Contratada.
</p>
	 </div>
	 `,
      `
	 <div style="margin-bottom: 30px">
	 
	 <h3 style="color:blue; font-size: 24px; width: 100%; text-align: baseline; margin-bottom: 24px">
	 10 - Local da Obra
	 </h3>
		<p style="font-weight: bold; font-size: 18px"> Obra a ser realizada no município de ${budgetHeader.city}/${budgetHeader.state} </p>
	 </div>
	 <h3 style="color:blue; font-size: 24px; width: 100%; text-align: baseline; margin-bottom: 24px">
	 11 - Aceite de Proposta
	 </h3>
	 <div style="text-align: center">
	 	<p style="font-size: 18px; margin-bottom: 48px"> Proposta válida por 05 (cinco) dias.</p>


		<div style="display: flex; gap: 80px; justify-content: center; margin-bottom: 48px">
		<span style="font-weight: bold; font-size: 18px"> De acordo: ____/____/________ </span>
		<span style="font-weight: bold; font-size: 18px; text-align: center"> _______________________________________ <br> Assinatura Contratante </span>
		</div>
		</div>

		<p style="font-weight: bold; font-size: 18px; margin-bottom: 24px;"> Transformo em Ordem de Compra este Documento nº: ${budgetHeader.budgetId} </p>

		<p style="font-weight: bold; font-size: 18px; margin-bottom: 24px;"> O inicio ao procedimento interno de implantação de pedido e elaboração do projeto se
dá a partir do aceite desta proposta e liberação do crédito. </p>

		<p style="font-weight: bold; font-size: 18px; margin-bottom: 24px;"> FAVOR ENCAMINHAR ESTA PROPOSTA E COMPROVANTE DE DEPÓSITO NO EMAIL: lajes@sideralpremoldados.com.br </p>
		
	 </div>
	`,
    ];
    orcamentoHtml += `</div>`;

    pdfElements.forEach((element) => {
      orcamentoHtml += element;
    });

    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const img = imgRef.current;

    img.onload = () => {
      doc.addImage(
        img,
        "JPEG",
        0,
        0,
        doc.internal.pageSize.width,
        doc.internal.pageSize.height
      );

      //o HTML é inserido duas vezes
      //primeira vez: descobrir número do páginas e adiciona background
      //segunda vez: adicionar conteúdo por cima do background
      doc.html(orcamentoHtml, {
        callback: () => {
          doc.html(orcamentoHtml, {
            callback: () => {
              const pdfBlob = doc.output("blob");
              const pdfUrl = URL.createObjectURL(pdfBlob);
              setPdfUrl(pdfUrl);

              return () => {
                URL.revokeObjectURL(pdfUrl);
              };
            },
            width: 210,
            windowWidth: 1080,
            margin: [30, 0, 0, 0],
          });
          addFooters(doc, img);
        },
        width: 210,
        windowWidth: 1080,
        margin: [30, 0, 0, 0],
      });
    };

    img.src = papelTimbrado;
  };

  async function getCostumerData() {
    const respose = await apiLajes.get(`/costumers/${budgetHeader.clientId}`);
    console.log(respose);
    setCostumerData(respose.data);
  }

  function addFooters(doc, img) {
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.addImage(
        img,
        "JPEG",
        0,
        0,
        doc.internal.pageSize.width,
        doc.internal.pageSize.height
      );
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      await getCostumerData(budgetHeader.clientId);
      orcamentoPdf();
    };

    fetchData();
  }, [budgetHeader.clientId]);

  return (
    <div className="proposta">
      <Sidebar />
      <div className="proposta-content">
        <Header pageTitle="Proposta" userName="Bruno Hunoff" />

        <img
          ref={imgRef}
          src={papelTimbrado}
          alt="Papel Timbrado"
          style={{ display: "none" }}
        />

        {pdfUrl ? (
          <iframe src={pdfUrl} width="479px" height="655" title="PDF Preview" />
        ) : (
          <p>Gerando PDF...</p>
        )}

        <div className="nav">
          <NavRow showVoltar={true} />
        </div>
      </div>
    </div>
  );
}

export default Proposta;
