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
export const toastConstants = [
    {
        variant: "note-saved",
        title: 'Note saved successfully!',
        label: "",
        link: ""
    },
    {
        variant: "note-archived",
        title: 'Note archived.',
        label: "Archived Notes",
        link: "/all-notes/archived"

    },
    {
        variant: "note-deleted",
        title: 'Note permanently deleted.',
        label: "",
        link: ""

    },{
        variant: "note-restore",
        title: 'Note restored to active notes.',
        label: "All Notes",
        link: "/all-notes/restore"

    },
    {
        variant: "settings-updated",
        title: 'Settings updated successfully!',
        label: "",
        link: ""

    },
    {
        variant: "password-changed",
        title: 'Password changed successfully!',
        label: "",
        link: ""

    },
    {
        variant: "tag-add",
        title: 'Tag added successfully!',
        label: "",
        link: ""

    },
    {
        variant: "tag-removed",
        title: 'Tag removed successfully!',
        label: "",
        link: ""
    },

]