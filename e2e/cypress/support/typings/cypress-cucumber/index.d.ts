import { StepDefinitionCode, StepDefinitionOptions } from 'cucumber';

declare global {
  function Given(pattern: string | RegExp, code: StepDefinitionCode): void;
  function Given(
    pattern: string | RegExp,
    options: StepDefinitionOptions,
    code: StepDefinitionCode
  ): void;
  function When(pattern: string | RegExp, code: StepDefinitionCode): void;
  function When(
    pattern: string | RegExp,
    options: StepDefinitionOptions,
    code: StepDefinitionCode
  ): void;
  function Then(pattern: string | RegExp, code: StepDefinitionCode): void;
  function Then(
    pattern: string | RegExp,
    options: StepDefinitionOptions,
    code: StepDefinitionCode
  ): void;
}
