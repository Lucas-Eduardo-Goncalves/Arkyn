import { Input } from "@arkyn/components";
import { CircleDashed } from "lucide-react";
import { useState } from "react";

import { Fence } from "~/components";
import { SizeProps, VariantProps } from "../../_types";
import {
  ErrorSelect,
  LoadingSelect,
  ShowLeftIcon,
  ShowPrefix,
  ShowRightIcon,
  ShowSufix,
  SizeSelect,
  VariantSelect,
} from "../Selects";
import { Container } from "./styles";

function Example() {
  const [isLeftIcon, setIsLeftIcon] = useState(false);
  const [isRightIcon, setIsRightIcon] = useState(false);
  const [isSufix, setIsSufix] = useState(false);
  const [isPrefix, setIsPrefix] = useState(false);

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [size, setSize] = useState<SizeProps>("md");
  const [variant, setVariant] = useState<VariantProps>("solid");

  const [placeholder, setPlaceholder] = useState("");

  return (
    <>
      <Container>
        <header>
          <ShowLeftIcon isLeftIcon={isLeftIcon} setIsLeftIcon={setIsLeftIcon} />
          <ShowRightIcon
            isRightIcon={isRightIcon}
            setIsRightIcon={setIsRightIcon}
          />
          <ShowPrefix isPrefix={isPrefix} setIsPrefix={setIsPrefix} />
          <ShowSufix isSufix={isSufix} setIsSufix={setIsSufix} />
          <ErrorSelect isError={isError} setIsError={setIsError} />
          <LoadingSelect isLoading={isLoading} setIsLoading={setIsLoading} />
          <SizeSelect size={size} setSize={setSize} />
          <VariantSelect variant={variant} setVariant={setVariant} />
          <input
            type="text"
            placeholder="Input Placeholder..."
            value={placeholder}
            onChange={(e) => setPlaceholder(e.target.value)}
          />
        </header>

        <Input
          type="cpf-cpnj"
          leftIcon={isLeftIcon ? CircleDashed : undefined}
          rightIcon={isRightIcon ? CircleDashed : undefined}
          prefix={isPrefix ? "$" : ""}
          sufix={isSufix ? "$" : ""}
          placeholder={placeholder}
          isError={isError}
          isLoading={isLoading}
          size={size}
          variant={variant}
        />
      </Container>

      <Fence type="tsx" language="html">
        {`<Input
  leftIcon={${isLeftIcon ? "CircleDashed" : undefined}}
  rightIcon={${isRightIcon ? "CircleDashed" : undefined}}
  prefix=${isPrefix ? `"$"` : "{undefined}"}
  sufix=${isSufix ? `"$"` : "{undefined}"}
  placeholder=${isSufix ? `"${placeholder}"` : "{undefined}"}
  isError={${isError}}
  isLoading={${isLoading}}
  size={${size}}
  variant={${variant}}
/>`}
      </Fence>
    </>
  );
}

export { Example };
