// @ts-nocheck
import React from "react";

import { Split } from "../02.split.pattern";
import { InputGroup } from "../02.split.pattern/form";

import { styled } from "styled-components";
import { spaceSchema } from "../common/spaces";

export const Columns = styled.div`
  display: grid;
  gap: ${(props) => spaceSchema[props.gutter] ?? spaceSchema.l};
  grid-template-columns: repeat(${({ columns = 1 }) => columns}, 1fr);
`;

export const Column = styled.div`
  grid-column: span ${({ size = 1 }) => size};
`;

function InfoFormWithColumns() {
  return (
    <Split fraction="1/3" gutter="xxl">
      <div>
        <h3>General Information</h3>
        <span>
          All the informtaion you provide via this form will be exposed to the
          public.
        </span>
      </div>
      <Form />
    </Split>
  );
}

const Form = () => {
  return (
    <Columns columns="3">
      <Column size="4">
        <InputGroup htmlFor="firstName" label="First Name">
          <input type="text" id="firstName" />
        </InputGroup>
      </Column>

      <Column>
        <InputGroup htmlFor="lastName" label="Last Name">
          <input type="text" id="lastName" />
        </InputGroup>
      </Column>

      <Column>
        <InputGroup htmlFor="email" label="Email">
          <input type="text" id="email" />
        </InputGroup>
      </Column>

      <Column>
        <InputGroup htmlFor="address" label="Street Address">
          <input type="text" id="address" />
        </InputGroup>
      </Column>

      <Column>
        <InputGroup htmlFor="city" label="City">
          <input type="text" id="city" />
        </InputGroup>
      </Column>

      <Column>
        <InputGroup htmlFor="city" label="City">
          <input type="text" id="city" />
        </InputGroup>
      </Column>

      <Column>
        <InputGroup htmlFor="country" label="Country">
          <input type="text" id="country" />
        </InputGroup>
      </Column>

      <Column>
        <InputGroup htmlFor="phone" label="Phone Number">
          <input type="text" id="phone" />
        </InputGroup>
      </Column>
    </Columns>
  );
};

export default InfoFormWithColumns;