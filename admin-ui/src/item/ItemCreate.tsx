import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
} from "react-admin";

import { InventoryItemTitle } from "../inventoryItem/InventoryItemTitle";
import { PlantTitle } from "../plant/PlantTitle";

export const ItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="CashPrice" source="cashPrice" />
        <SelectInput
          source="category"
          label="Category"
          choices={[{ label: "Seed", value: "seed" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="CreditsPrice" source="creditsPrice" />
        <TextInput label="Display Name" source="displayName" />
        <ReferenceArrayInput
          source="inventoryItem"
          reference="InventoryItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InventoryItemTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="plant.id" reference="Plant" label="Plant">
          <SelectInput optionText={PlantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
