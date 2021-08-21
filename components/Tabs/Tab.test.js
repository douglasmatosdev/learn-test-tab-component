import React from "react";
import ReactDOM from "react";
import { render } from "@testing-library/react";
import { Tabs } from "./Tabs";
import { useRouter } from "next/router";

jest.mock('next/router');

beforeEach(() => {
    useRouter.mockReturnValue({
        push: () => { },
    });
});

// TEST === === === === === === === === === === === === === === ===
test("<Tabs /> matches snapshot", () => {
    const component = render(
        <Tabs initialTab={{ tab: "tab-3" }}>
            <div label="Tab 1">Something</div>
            <div label="Tab 2">Else</div>
            <div label="Tab 3">Hello</div>
        </Tabs>
    );

    expect(component.container).toMatchSnapshot();
});

// TEST === === === === === === === === === === === === === === ===
test("<Tabs /> renders without crashing", () => {
    const div = document.createElement("div");

    render(
        <Tabs initialTab={{ tab: "tab-3" }}>
            <div label="Tab 1">Something</div>
            <div label="Tab 2">Else</div>
            <div label="Tab 3">Hello</div>
        </Tabs>,
        div
    );
});

// TEST === === === === === === === === === === === === === === ===
test("Defaults to the first tab's content", () => {
    const div = document.createElement("div");

    const { getByTestId } = render(
        <Tabs>
            <div label="Tab 1">Something</div>
            <div label="Tab 2">Else</div>
            <div label="Tab 3">Hello</div>
        </Tabs>,
        div
    );

    const content = getByTestId("content");
    expect(content.textContent).toBe("Something");
});

// TEST === === === === === === === === === === === === === === ===
test("Can set a different tab as the initial state", () => {
    const div = document.createElement("div");

    const { getByTestId } = render(
        <Tabs initialTab={{ tab: "tab-3" }}>
            <div label="Tab 1">Something</div>
            <div label="Tab 2">Else</div>
            <div label="Tab 3">Hello</div>
        </Tabs>,
        div
    );

    const content = getByTestId("content");
    expect(content.textContent).toBe("Hello");
});

// TEST === === === === === === === === === === === === === === ===
test("Click from one tab to be the next", () => {
    const div = document.createElement("div");

    const { getByTestId } = render(
        <Tabs initialTab={{ tab: "tab-3" }}>
            <div label="Tab 1">Something</div>
            <div label="Tab 2">Else</div>
            <div label="Tab 3">Hello</div>
        </Tabs>,
        div
    );

    const content = getByTestId("content");
    expect(content.textContent).toBe("Hello");

    // diferentiate the current tab

    // click on a new tab

    // check the new content
});