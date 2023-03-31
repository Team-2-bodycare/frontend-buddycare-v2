import styled from "styled-components";

export const PaymentContainer = styled.div`
  width: 100%;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: left;
  border-radius: 10px;
  font-weight: bold;
  color: rgb(240, 240, 240);
`;

export const PaymentSessionDiv = styled.div`
  display: flex;
  gap: 10px;
  padding: 5px;
`;

export const DivInstallments = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const PaymentInstallmentsDiv = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const PaymentPriceSession = styled.p`
  font-size: 13px;
  text-align: center;
`;

export const DivTotalSession = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 5px;
`;

export const PaymentLabel = styled.label`
  font-size: 15px;
`;

export const PaymentTotalSession = styled.select`
  width: 40px;
  height: 18px;
  outline: none;
  border: none;
  border-radius: 5px;
  color: rgb(115, 115, 115);
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
