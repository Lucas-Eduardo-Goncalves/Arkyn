// import { Outlet } from "@remix-run/react";

import { Input } from "@arkyn/components";
import { Form } from "@remix-run/react";
import { useState } from "react";

// import {
//   LayoutContent,
//   LayoutFooter,
//   LayoutHeader,
//   NavigationLink,
//   NavigationMenu,
//   NavigationTitle,
// } from "./components";

export function View() {
  const [value, setValue] = useState<any>(0);
  const [maskedValue, setMaskedValue] = useState<any>(0);
  return (
    <>
      {value} <br />
      {maskedValue}
      <Form style={{ padding: 16 }}>
        <Input
          type="currency"
          name="as"
          defaultValue={10000.6}
          onChangeValue={(_, e, y) => {
            setValue(e);
            setMaskedValue(y);
          }}
        />
        <button>opa</button>
      </Form>
    </>
  );
}

// function View() {
//   return (
//     <>
//       <LayoutHeader />

//       <LayoutContent>
//         <NavigationMenu>
//           <NavigationLink to="/v1/doc/introduction" label="Introduction" />
//           {/* <NavigationLink to="/v1/doc/get-started" label="Get Started" /> */}

//           <NavigationTitle label="Components" />
//           <NavigationLink to="/v1/components/badge" label="Badge" />
//           <NavigationLink to="/v1/components/button" label="Button" />
//           <NavigationLink to="/v1/components/checkbox" label="Checkbox" />
//           <NavigationLink to="/v1/components/icon-button" label="IconButton" />
//           {/* <NavigationLink to="/v1/components/input" label="Input" /> */}
//           {/* <NavigationLink to="/v1/components/select" label="Select" /> */}

//           <NavigationTitle label="Server" />
//           <NavigationLink to="/v1/server/bad-request" label="badRequest" />
//           <NavigationLink to="/v1/server/form-parse" label="formParse" />
//           <NavigationLink
//             to="/v1/server/get-scoped-params"
//             label="getScopedParams"
//           />

//           <NavigationTitle label="Shared" />
//           <NavigationLink
//             to="/v1/shared/calculate-card-installment"
//             label="calculateCardInstallment"
//           />
//           <NavigationLink
//             to="/v1/shared/currency-format"
//             label="currencyFormat"
//           />
//           <NavigationLink
//             to="/v1/shared/generate-color-by-string"
//             label="generateColorByString"
//           />
//           <NavigationLink to="/v1/shared/generate-slug" label="generateSlug" />
//           <NavigationLink to="/v1/shared/regex" label="regex" />
//         </NavigationMenu>
//         <Outlet />
//       </LayoutContent>
//       <LayoutFooter />
//     </>
//   );
// }

// export { View };
