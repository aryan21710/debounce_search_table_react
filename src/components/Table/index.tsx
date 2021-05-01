import React from 'react';
import { table, tData, tHeader } from './styles';

interface IProps {
  tableData: { company: string; city: string; domain: string }[];
}

export const Table: React.FC<IProps> = ({ tableData }) => (
    <table style={table}>
        <thead>
            <tr>
                {Object.keys(
                    tableData?.[0] ?? { company: '', city: '', domain: '' }
                ).map((title, idx) => (
                    <th key={idx} style={tHeader}>
                        {title.toUpperCase()}
                    </th>
                ))}
            </tr>
        </thead>
        <tbody>
            {tableData.map((d, idx) => (
                <tr key={idx}>
                    <td style={tData}>{d.company}</td>
                    <td style={tData}>{d.city}</td>
                    <td style={tData}>{d.domain}</td>
                </tr>
            ))}
        </tbody>
    </table>
);
