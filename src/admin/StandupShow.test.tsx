import React from "react";
import { AdminContext } from "react-admin";
import { render, screen } from "@testing-library/react";

import StandupShow from "./StandupShow";

test("<StandupShow>", async () => {
    render(
        <AdminContext>
            <StandupShow />
        </AdminContext>
    );
    expect(screen.getByText("Create Standup")).toBeInTheDocument();
});
