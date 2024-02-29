import { ButtonDTO } from "@arkyn/types";

function Button({ isLoading, ...rest }: ButtonDTO) {
  return <button {...rest} />;
}

export { Button };
