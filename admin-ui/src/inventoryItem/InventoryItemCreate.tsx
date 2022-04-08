import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { FarmTitle } from "../farm/FarmTitle";
import { ItemTitle } from "../item/ItemTitle";

export const InventoryItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="farm.id" reference="Farm" label="Farm">
          <SelectInput optionText={FarmTitle} />
        </ReferenceInput>
        <ReferenceInput source="item.id" reference="Item" label="Item">
          <SelectInput optionText={ItemTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Quantity" source="quantity" />
      </SimpleForm>
    </Create>
  );
};
