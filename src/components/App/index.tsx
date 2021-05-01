import React, { useState, useEffect, useCallback } from 'react';
import { mainWrapper } from './styles';
import { SearchBar } from '../SearchBar';
import { Table } from '../Table';
import { data } from '../../common/constants';
import { debounce } from 'lodash';

type IType = {company: string, city: string, domain: string}

export const App: React.FC = () => {
    const [userInput, setUserInput] = useState<string>('');
    const [tableData, setTableData] = useState<IType[]>(data);

    const filterTable = ()=>{
        const filteredData = data.filter((data)=>data.company.toLowerCase().includes(userInput)
         || data.city.toLowerCase().includes(userInput)
         || data.domain.toLowerCase().includes(userInput));
        // eslint-disable-next-line no-console
        console.log('filteredData', filteredData);
        filteredData.length === data.length ?  setTableData([...data]) : setTableData([...filteredData]);
    };

    const debouncedData = useCallback(debounce(filterTable, 1000), [userInput]);

    useEffect(() => {
        debouncedData();
    }, [userInput]);

    const onChangeHandler:
    (event: React.ChangeEvent<HTMLInputElement>) => void = (event) => setUserInput(event.target.value);


    return (
        <div style={mainWrapper}>
            <SearchBar userInput={userInput} onChangeHandler={onChangeHandler} />
            <Table tableData={userInput === '' ? data : tableData}/>
        </div>
    );
};
