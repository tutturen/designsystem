import * as React from 'react';

interface DropDownItem {
    [key: string]: any;
}

interface ListElementBodyProps {
    item: DropDownItem;
    isHighlighted: boolean;
}

interface NoMatch {
    text: string;
    dropdownList?: DropDownItem[];
}

export interface SearchableDropdownProps {
    id: string;
    labelId: string;
    className?: string;
    dropdownList: DropDownItem[];
    dropdownAttributes: string[];
    searchAttributes: string[];
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    initialValue?: DropDownItem;
    maxRenderedDropdownElements?: number;
    onChange?: number;
    dark?: boolean;
    listElementBody: ({
        item,
        isHighlighted,
    }: ListElementBodyProps) => React.FC<HTMLDivElement>;
    noMatch: NoMatch;
    locale: 'nn' | 'nb' | 'en';
    'aria-invalid': 'true' | 'false' | boolean;
}
