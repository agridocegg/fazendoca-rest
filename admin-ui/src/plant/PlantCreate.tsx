import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CropTitle } from "../crop/CropTitle";
import { ItemTitle } from "../item/ItemTitle";

export const PlantCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Actor" source="actor" />
        <ReferenceArrayInput
          source="crops"
          reference="Crop"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CropTitle} />
        </ReferenceArrayInput>
        <NumberInput label="Growth Speed" source="growthSpeed" />
        <ReferenceInput source="item.id" reference="Item" label="Items">
          <SelectInput optionText={ItemTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Stages" source="stages" />
      </SimpleForm>
    </Create>
  );
};
