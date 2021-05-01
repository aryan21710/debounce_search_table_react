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

    const debouncedData = useCallback(debounce((value: string)=>{
        const filteredData = data.filter((data)=>data.company.toLowerCase().includes(value)
       || data.city.toLowerCase().includes(value)
       || data.domain.toLowerCase().includes(value));
        // eslint-disable-next-line no-console
        console.log('filteredData', filteredData);
        filteredData.length === data.length ?  setTableData([...data]) : setTableData([...filteredData]);
    }, 1000), []);



    const onChangeHandler:
    (event: React.ChangeEvent<HTMLInputElement>) => void = (event) => {
        const { value: nextValue } = event.target;
        setUserInput(nextValue);
        debouncedData(nextValue);
    };


    return (
        <div style={mainWrapper}>
            <SearchBar userInput={userInput} onChangeHandler={onChangeHandler} />
            <Table tableData={userInput === '' ? data : tableData}/>
        </div>
    );
};
