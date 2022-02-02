import React from "react";
import { testFromOtherLib } from '@storybook-ts-issue/otherlib';
import { testFromOtherLib as anotherTestDirectlyFromOtherLib } from '../../../otherlib/src';

const test = {
  one: 'test',
  two: 'test',
};

export interface TestComponentProps {
  workingInline: 'one' | 'two';
  workingType: keyof typeof test;
  notWorkingTypeWithAlias: keyof typeof testFromOtherLib;
  workingTypeWithDirectPath: keyof typeof anotherTestDirectlyFromOtherLib;
}

export function TestComponent(props: TestComponentProps) {
  return (
    <div>
      <h1>Welcome to Storybook!!</h1>
    </div>
  );
}
