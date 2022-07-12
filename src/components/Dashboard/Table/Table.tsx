import React from "react";
import { TableStyle } from "../../Styles/Styles";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";

interface TableProps {
    Headings: any;
    Content: any;
    handleButton: any
    onSort: any;

}

const Table: React.FC<TableProps> = ({ Headings, Content, handleButton, onSort }) => {



    return (

        <TableStyle>
            <TableHeader Headings={Headings} onSortColumn={onSort} />
            <TableBody Data={Content} handleButton={handleButton} />
        </TableStyle>
    );
};

export default Table;
