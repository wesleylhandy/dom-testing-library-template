/* eslint-disable react/prop-types */
import React from "react"
export default ({ children, ...props }) => (
  <div id="mockModal" data-testid="Modal" {...props}>
    {children}
  </div>
)
