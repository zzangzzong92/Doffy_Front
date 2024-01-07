import { ChangeEvent, FC } from "react";
import { styled } from "styled-components";

interface InputProps {
  type: "regidentNubmer" | "phoneNumber";
  value: string;
  validation: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const validateInput = (type: string, value: string): boolean => {
  if (type === "regidentNubmer") {
    const regex = /^[0-9]{6}-[0-9]{7}$/;
    if (!regex.test(value)) {
      return false;
    }

    const birthYear = parseInt(value.substring(0, 4), 10);
    const genderDigit = parseInt(value.charAt(6), 10);

    if (birthYear < 2000) {
      return (
        genderDigit === 1 ||
        genderDigit === 2 ||
        genderDigit === 5 ||
        genderDigit === 6
      );
    } else if (birthYear >= 2000) {
      return (
        genderDigit === 3 ||
        genderDigit === 4 ||
        genderDigit === 7 ||
        genderDigit === 8
      );
    }
  }
  return false;
};

export const Input: FC<InputProps> = ({
  type,
  value,
  validation,
  onChange,
}) => {
  const isValid = validation ? validateInput(type, value) : true;

  return (
    <ValidatedInput
      type="text"
      value={value}
      onChange={onChange}
      isValid={isValid}
      placeholder="-없이 입력해주세요."
    />
  );
};

const ValidatedInput = styled.input<{ isValid: boolean }>`
  padding: 8px;
  border: 1px solid ${(props) => (props.isValid ? "#4caf50" : "#ff0000")};
  border-radius: 4px;
  margin-bottom: 10px;
`;
