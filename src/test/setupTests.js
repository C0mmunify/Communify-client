// import jest from  ;
import react from "react";
import { ReactDOM } from "react-dom";
import { rest } from "msw";
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import '@testing-library/jest-dom/extend-expect';

import { MemoryRouter } from "react-router-dom";

// import 'setimmediate'
// if (!global.setImmediate) {
//   global.setImmediate = setTimeout
// }

// const TestProviders = () => {
//   return ({ children }) => (
//         <MemoryRouter>
//           {children}
//         </MemoryRouter>
//   );
// };

// const renderWithProviders = (ui, options = {}) => {
//   let TestWrapper = TestProviders(options);
//   render(ui, { wrapper: TestWrapper, ...options });
// };

global.react = react;
// global.test = test;
global.ReactDOM = ReactDOM;
global.render = render;
global.screen = screen;
global.userEvent = userEvent;
global.cleanup = cleanup;
global.fireEvent = fireEvent;
global.rest = rest;
// global.renderWithProviders = renderWithProviders




