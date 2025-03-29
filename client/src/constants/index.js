import {IconArchive, IconDelete} from "@/components/svg/index.js";
import {createElement} from "react";

export const modalConstants = [{
    icon: (props) => createElement(IconDelete),

    title: 'Delete Note',
    paragraph: "Are you sure you want to permanently delete this note? This action cannot be undone.",
    deleteButtonText: 'Delete Note',
    cancelButtonText: 'Cancel'
}, {
    icon: () => createElement(IconArchive),
    title: 'Archive Note',
    paragraph: "Are you sure you want to archive this note? You can find it in the Archived Notes section and restore it anytime.",
    deleteButtonText: 'Archive Note',
    cancelButtonText: 'Cancel'
}]