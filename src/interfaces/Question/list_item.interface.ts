import { ReactNode } from "react";

interface ListItemContainerElementProps {
  className: string;
  name: string;
  children: ReactNode;
  parentBindings?: {
    domNode?: HTMLElement;
  };
}

export default ListItemContainerElementProps;
