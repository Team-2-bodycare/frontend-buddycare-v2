import styled from "styled-components";

export const PaymentContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  border-radius: 10px;
  padding: 10px;
  font-weight: bold;
  color: rgb(240, 240, 240);
`;

export const PaymentSessionDiv = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

export const PaymentInstallmentsDiv = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

export const PaymentPriceSession = styled.p`
  margin-bottom: 10px;
`;

export const PaymentLabel = styled.label``;

export const PaymentTotalSession = styled.select`
  width: 40px;
  height: 18px;
  outline: none;
  border: none;
  border-radius: 5px;
  color: rgb(115, 115, 115);
  margin-bottom: 10px;
`;

export const PaymentTotalSessionOptions = styled.option``;

export const PaymentInstallments = styled.select`
  width: 40px;
  height: 18px;
  outline: none;
  border: none;
  border-radius: 5px;
  color: rgb(115, 115, 115);
`;

export const PaymentInstallmentsOptions = styled.option``;

export const PaymentPriceInstallments = styled.p``;

export const PaymentPriceTotal = styled.p``;

export const PaymentSumTotal = styled.p``;
