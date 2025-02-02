/*
 * Copyright 2021 Dgraph Labs, Inc. and Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const styles = {
    ButtonStyles: {
        width: "100%",
        color: "grey",
        border: "{{lineThickness.1}} solid {{colors.grey.border}} ",
        minWidth: "unset",
        paddingLeft: 1,
    },
    SelectContainer: {
        cursor: "pointer",
        listStyle: "none",
        borderRadius: 1,
        position: "relative",
        outline: 0,
    },
    SelectLabelContainerStyles: {
        textAlign: "left",
        width: "calc(100% - {{space.3}})",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        fontWeight: 500,
    },
    FocusedSelect: {
        boxShadow: "{{focus.boxShadow}}",
        outline: 0,
    },
    SelectedItem: {
        padding: 1,
        width: "auto",
        border: "{{lineThickness.1}} solid {{colors.grey}}",
        borderRadius: 1,
        ":focus": {
            outline: 0,
        },
    },
    OptionsList: {
        margin: 0,
        zIndex: "dropdown",
        position: "absolute",
        borderRadius: 1,
        padding: 0,
        listStyle: "none",
        minWidth: "100%",
        border: "{{lineThickness.1}} solid {{colors.grey.border}}",
        width: "auto",
        overflow: "auto",
        background: "white",
        boxShadow: 1,
    },

    OptionsListItem: {
        overflow: "hidden",
        padding: 1,
        ":focus": {
            outline: "none",
        },
    },
    FocusedOptionsListItem: {
        background: "grey.surface",
    },
    ChevronStyles: {
        marginLeft: 1,
        width: 1,
        height: 1,
        borderBottom: "2px solid {{colors.grey}} ",
        borderRight: "2px solid {{colors.grey}} ",
    },
};
