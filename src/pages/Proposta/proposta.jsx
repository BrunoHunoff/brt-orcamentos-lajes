import jsPDF from "jspdf";
import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/sidebar";
import Header from "../../components/Header/header";
import NavRow from "../../components/NavRow/navRow";

function Proposta() {
  const orcamentoHtml = `
    <div style="font-family: Arial, sans-serif; color: #000; width: 1000px; padding: 10mm; font-size: 10px;">
      <!-- Cabeçalho -->
      <div style="text-align: center; font-weight: bold; font-size: 14px; margin-bottom: 10mm;">
          ORÇAMENTO
      </div>
      <div style="text-align: center; font-size: 12px; margin-bottom: 8mm;">
          Nº 01-191-1024
      </div>
      <div style="text-align: center; font-size: 10px; margin-bottom: 8mm;">
          Balsa Nova, PR - 17 de Outubro de 2024
      </div>

      <!-- Informações do cliente e obra -->
      <div style="font-size: 10px; margin-bottom: 8mm;">
          <p style="margin: 4mm 0;">À</p>
          <p style="margin: 4mm 0;">Obra:</p>
          <p style="margin: 4mm 0;">Pé direito: Metros</p>
          <p style="margin: 4mm 0;">Área de Projeção: M²</p>
          <p style="margin: 4mm 0;">Área Construída: M²</p>
      </div>

      <!-- Seção de especificações -->
      <div style="font-weight: bold; font-size: 12px; margin-bottom: 6mm;">
          LAJE PROTENDIDA ALVEOLAR
      </div>
      <div style="font-size: 10px; margin-bottom: 8mm;">
          <p style="margin: 4mm 0;">Conforme solicitação de V.Sa. apresentamos nossa proposta de orçamento para fornecimento de LAJE PROTENDIDA ALVEOLAR.</p>
          <p style="margin: 4mm 0;">Consiste no fornecimento de materiais em obediência às normas relativas ao projeto de montagem e controle de qualidade definidas pela ABNT.</p>
      </div>

      <!-- Seção de produtos -->
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
          <p style="font-weight: bold; font-size: 10px; margin: 4mm 0;">MARCELO FREITAS</p>
          <p style="font-weight: bold; font-size: 10px; margin: 4mm 0;">GESTÃO COMERCIAL</p>
      </div>
    </div>
  `;


  const orcamentoPdf = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4"
    });

    return new Promise((resolve) => {
      doc.html(orcamentoHtml, {
        callback: () => {
          resolve(doc.output('blob'));
        },
        width: 210, 
        windowWidth: 1080
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
          <iframe src={pdfUrl} width="420px" height="574px" title="PDF Preview" />
        ) : (
          <p>Gerando PDF...</p>
        )}
        
        <NavRow showVoltar={false} />
      </div>
    </div>
  );
}

export default Proposta;
