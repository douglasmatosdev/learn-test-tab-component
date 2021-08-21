/**
 * 
 * References:
 *  - Jest: https://jestjs.io/
 *  - Jest DOM: https://github.com/testing-library/jest-dom
 *  - TestingLibrary: https://testing-library.com/
 *  - Tutorial playlist: https://www.youtube.com/watch?v=DWCCkcJgvf0&list=PLrz61zkUHJJGoQcWPykdt4PaoQUD-SMkm
 */
import React from "react";
import ReactDOM from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
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
test.only("Defaults to the first tab's content", () => {
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

    const { getByTestId, getByText } = render(
        <Tabs initialTab={{ tab: "tab-3" }}>
            <div label="Tab 1">Something</div>
            <div label="Tab 2">Else</div>
            <div label="Tab 3">Hello</div>
        </Tabs>,
        div
    );

    let content = getByTestId("content");
    expect(content.textContent).toBe("Hello");

    // diferentiate the current tab
    const li = getByTestId("tab-3");
    expect(li).toHaveClass("current");
    
    // click on a new tab
    const differentTab = getByText("Tab 2");
    fireEvent.click(differentTab);
    const differentLi = getByTestId("tab-2");
    expect(differentLi).toHaveClass("current");

    // check the new content
    content = getByTestId("content");
    expect(content.textContent).toBe("Else");
});