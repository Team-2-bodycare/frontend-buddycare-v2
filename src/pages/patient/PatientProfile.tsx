import { ListPsychologist } from "../../components/listPsychologist/listPsychologist";
import { MenuPatient } from "../../components/menuPatient/MenuPatient";

export function PatientProfile() {
  return (
    <>
      <MenuPatient />
      <ListPsychologist />
    </>
  );
}
