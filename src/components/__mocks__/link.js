import React from "react"
export default ({ children, ...props }) => (
  <a id="mockLink" data-testid="Link" {...props}>
    {children}
  </a>
)