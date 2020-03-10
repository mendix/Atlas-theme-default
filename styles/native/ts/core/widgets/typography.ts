import { font }     from "../variables";
import { TextType } from "../../types/widgets";

//
// DISCLAIMER:
// Do not change this file because it is core styling.
// Customizing core files will make updating Atlas much more difficult in the future.
// To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.
//

/* ==========================================================================
    Text

    Default Class For Mendix Text Widget
========================================================================== */

export const Text: TextType = {
    container: {
        // All ViewStyle properties are allowed
    },
    text: {
        // All TextStyle properties are allowed
        color: font.color,
        fontSize: font.size,
        fontFamily: font.family,
        lineHeight: font.size + 2,
    },
};

export const TextHeading1: TextType = {
    container: {},
    text: {
        fontWeight: font.weightSemiBold,
        fontSize: font.sizeH1,
        fontFamily: font.family,
        lineHeight: font.sizeH1,
    },
};
export const TextHeading2: TextType = {
    container: {},
    text: {
        fontWeight: font.weightSemiBold,
        fontSize: font.sizeH2,
        fontFamily: font.family,
        lineHeight: font.sizeH2,
    },
};
export const TextHeading3: TextType = {
    container: {},
    text: {
        fontWeight: font.weightSemiBold,
        fontSize: font.sizeH3,
        fontFamily: font.family,
        lineHeight: font.sizeH3,
    },
};
export const TextHeading4: TextType = {
    container: {},
    text: {
        fontWeight: font.weightSemiBold,
        fontSize: font.sizeH4,
        fontFamily: font.family,
        lineHeight: font.sizeH4,
    },
};
export const TextHeading5: TextType = {
    container: {},
    text: {
        fontWeight: font.weightSemiBold,
        fontSize: font.sizeH5,
        fontFamily: font.family,
        lineHeight: font.sizeH5,
    },
};
export const TextHeading6: TextType = {
    container: {},
    text: {
        fontWeight: font.weightSemiBold,
        fontSize: font.sizeH6,
        fontFamily: font.family,
        lineHeight: font.sizeH6,
    },
};