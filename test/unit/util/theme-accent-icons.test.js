import {
    ACCENT_BLUE,
    ACCENT_PURPLE,
    ACCENT_RAINBOW,
    ACCENT_RED,
    ACCENT_YELLOW,
    BLOCKS_THREE,
    GUI_DARK,
    GUI_LIGHT,
    Theme
} from '../../../src/lib/themes';

describe('accent icon filters', () => {
    test.each([ACCENT_RED, ACCENT_PURPLE, ACCENT_BLUE, ACCENT_RAINBOW])(
        'uses white icons with the %s accent',
        accent => {
            const colors = new Theme(accent, GUI_LIGHT, BLOCKS_THREE).getGuiColors();

            expect(colors['gui-icon-filter']).toBe('brightness(0) invert(100%)');
            expect(colors['gui-nav-icon-filter']).toBe('brightness(0) invert(100%)');
            expect(colors['filter-icon-gray']).toBe('grayscale(100%)');
            expect(colors['editor-tab-foreground']).toBe('var(--text-primary)');
            expect(colors['editor-tab-selected-foreground']).toBe('var(--looks-secondary)');
            expect(colors['editor-selected-icon-filter']).toBe('none');
        }
    );

    test('keeps yellow nav icons gray in dark mode', () => {
        const colors = new Theme(ACCENT_YELLOW, GUI_DARK, BLOCKS_THREE).getGuiColors();

        expect(colors['gui-icon-filter']).toBe('brightness(0) invert(100%)');
        expect(colors['gui-nav-icon-filter']).toBe('brightness(0) invert(85%)');
    });
});
