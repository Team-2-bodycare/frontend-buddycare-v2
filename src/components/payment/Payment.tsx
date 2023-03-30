import { useState } from "react";
import {
  PaymentContainer,
  PaymentInstallments,
  PaymentInstallmentsDiv,
  PaymentInstallmentsOptions,
  PaymentLabel,
  PaymentPriceInstallments,
  PaymentPriceSession,
  PaymentPriceTotal,
  PaymentSessionDiv,
  PaymentTotalSession,
  PaymentTotalSessionOptions,
} from "./stylePayment";

interface IPayment {
  totalSession: number;
  priceSession: number;
  installments: number;
  priceInstallments: number;
  priceTotal: number;
}

export function Payment() {
  const [values, setValues] = useState({
    priceSession: 100,
    totalSession: 0,
    priceTotal: 0,
    installments: 0,
    priceInstallments: 0,
  });

  const handleChangesValues = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setValues((values: IPayment) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <PaymentContainer>
      <PaymentPriceSession>Valor por sessão: R${(values.priceSession).toFixed(2).toString().replace(".", ",")}</PaymentPriceSession>
      <div style={{display: "flex", width: "100%"}}>
      <PaymentLabel>Total de sessões </PaymentLabel>
        <PaymentTotalSession name="totalSession"  onChange={handleChangesValues}>
          <PaymentTotalSessionOptions></PaymentTotalSessionOptions>
          <PaymentTotalSessionOptions value={5}>5</PaymentTotalSessionOptions>
          <PaymentTotalSessionOptions value={6}>6</PaymentTotalSessionOptions>
          <PaymentTotalSessionOptions value={7}>7</PaymentTotalSessionOptions>
          <PaymentTotalSessionOptions value={8}>8</PaymentTotalSessionOptions>
          <PaymentTotalSessionOptions value={9}>9</PaymentTotalSessionOptions>
          <PaymentTotalSessionOptions value={10}>10</PaymentTotalSessionOptions>
        </PaymentTotalSession>
        </div>
      <PaymentInstallmentsDiv>
        <PaymentLabel>Em</PaymentLabel>
        <PaymentInstallments name="installments" onChange={handleChangesValues}>
          <PaymentInstallmentsOptions></PaymentInstallmentsOptions>
          <PaymentInstallmentsOptions value={1}>1</PaymentInstallmentsOptions>
          <PaymentInstallmentsOptions value={2}>2</PaymentInstallmentsOptions>
          <PaymentInstallmentsOptions value={3}>3</PaymentInstallmentsOptions>
          <PaymentInstallmentsOptions value={4}>4</PaymentInstallmentsOptions>
          <PaymentInstallmentsOptions value={5}>5</PaymentInstallmentsOptions>
          <PaymentInstallmentsOptions value={6}>6</PaymentInstallmentsOptions>
          <PaymentInstallmentsOptions value={7}>7</PaymentInstallmentsOptions>
          <PaymentInstallmentsOptions value={8}>8</PaymentInstallmentsOptions>
          <PaymentInstallmentsOptions value={9}>9</PaymentInstallmentsOptions>
          <PaymentInstallmentsOptions value={10}>10</PaymentInstallmentsOptions>
          <PaymentInstallmentsOptions value={11}>11</PaymentInstallmentsOptions>
          <PaymentInstallmentsOptions value={12}>12</PaymentInstallmentsOptions>
        </PaymentInstallments>
        {
          values.installments === 0 ? (
            <p>x de R$0,00</p>
          ) : (
            <PaymentPriceInstallments>x de R${((values.priceSession * values.totalSession) / values.installments).toFixed(2).toString().replace(".", ",")}</PaymentPriceInstallments>
          )
        }
      </PaymentInstallmentsDiv>
      <PaymentPriceTotal>Total a pagar: R${(values.priceSession * values.totalSession).toFixed(2).toString().replace(".", ",")}</PaymentPriceTotal>
    </PaymentContainer>
  );
}
