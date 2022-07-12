import React from 'react'
import { TBodyStyle } from '../../Styles/Styles';

interface TableBodyProps {
    Data: Array<any>;
    handleButton: any;
}

export const TableBody: React.FC<TableBodyProps> = ({ Data, handleButton }: any) => {


    return (
        <TBodyStyle>
            {Data.map((data: any) => {
                const contentEditable = data.action === 'delete' ? "true" : "false";
                return (
                    <tr key={data.id} contentEditable={contentEditable} suppressContentEditableWarning={true}>
                        <td>{data.date}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.phone}</td>
                        <td>{data.address}</td>
                        <td>{data.students}</td>
                        <td className="">
                            <button onClick={() => handleButton(data)} className={data.action === 'delete' ? 'delete button' : 'hide_button'}>
                                {data.action}
                            </button>
        
                        </td>


                    </tr>

                )
            }
            )}
        </TBodyStyle>



    );
}

