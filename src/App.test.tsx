import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';

describe("Filter in header", () => {
    test("check if at least one `text-adrenderer` is shown when `text` option is selected", () => {
        render(<App/>);

        const selectElement = screen.getByRole("combobox");
        userEvent.selectOptions(selectElement, "text");

        waitFor(() => {
            const textAds = screen.queryAllByTestId("text-adrenderer");
            expect(textAds.length).toBeGreaterThan(0)
        });
    });

    test("check if no `image-adrenderer` is shown when `text` option is selected", () => {
        render(<App/>);

        const selectElement = screen.getByRole("combobox");
        userEvent.selectOptions(selectElement, "text");

        waitFor(() => {
            const imageAds = screen.queryAllByTestId("image-adrenderer");
            expect(imageAds.length).toBe(0)
        });
    });

    test("check if no `video-adrenderer` is shown when `text` option is selected", () => {
        render(<App/>);

        const selectElement = screen.getByRole("combobox");
        userEvent.selectOptions(selectElement, "text");

        waitFor(() => {
            const videoAds = screen.queryAllByTestId("video-adrenderer");
            expect(videoAds.length).toBe(0)
        });
    });
})