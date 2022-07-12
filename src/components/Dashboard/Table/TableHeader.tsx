import React, { useState } from "react";
import { THeadStyle } from "../../Styles/Styles";


interface TableHeaderProps {
    Headings: Array<any>;
    onSortColumn: any;
}

export const TableHeader: React.FC<TableHeaderProps> = ({
    Headings,
    onSortColumn,
}) => {
    const [sortField, setSortField] = useState("");
    const [order, setOrder] = useState("asc");

    const sortColumn = (path: any) => {
        const sortedOrder = path === sortField && order === "asc" ? "desc" : "asc";
        setSortField(path);
        setOrder(sortedOrder);
        onSortColumn(path, sortedOrder);
    };

    return (
        <THeadStyle>
            <tr>
                {Headings.map((heading) => {
                    const addSortIcon = heading.sortable
                        ? sortField === heading.identity && order === "asc"
                            ? "fas fa-sort-up"
                            : sortField === heading.identity && order === "desc"
                                ? "fas fa-sort-down"
                                : "default"
                        : "";

                    return (
                        <th
                            onClick={heading.sortable ? () => sortColumn(heading.identity) : heading.null}
                            style={{ cursor: "pointer" }}
                            key={heading.id}
                            className={addSortIcon}
                        >
                            {heading.label}
                        </th>
                    );
                })}
            </tr>

        </THeadStyle>
    );
};
