import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useHydrated } from "../hooks/useHydrated";
export function ClientOnly({ children, fallback = null }) {
    return useHydrated() ? _jsx(_Fragment, { children: children() }) : _jsx(_Fragment, { children: fallback });
}
