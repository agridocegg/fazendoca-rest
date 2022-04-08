import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { FarmTitle } from "../farm/FarmTitle";
import { PlantTitle } from "../plant/PlantTitle";

export const CropCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="farm.id" reference="Farm" label="Farm">
          <SelectInput optionText={FarmTitle} />
        </ReferenceInput>
        <BooleanInput label="Is Plowed" source="isPlowed" />
        <DateTimeInput label="Next Growth" source="nextGrowth" />
        <ReferenceInput source="plant.id" reference="Plant" label="Plant">
          <SelectInput optionText={PlantTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Stage" source="stage" />
        <DateTimeInput label="Watered At" source="wateredAt" />
      </SimpleForm>
    </Create>
  );
};
