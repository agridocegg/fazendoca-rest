import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { PlantTitle } from "../plant/PlantTitle";

export const CropEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Is Plowed" source="isPlowed" />
        <DateTimeInput label="Next Growth" source="nextGrowth" />
        <ReferenceInput source="plant.id" reference="Plant" label="Plant">
          <SelectInput optionText={PlantTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Stage" source="stage" />
        <DateTimeInput label="Watered At" source="wateredAt" />
      </SimpleForm>
    </Edit>
  );
};
