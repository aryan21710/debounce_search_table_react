import React from 'react';
import { mainWrapper, input } from './styles';

interface IProps {
  userInput: string,
  onChangeHandler: ((event: React.ChangeEvent<HTMLInputElement>) => void)
}
export const SearchBar:React.FC<IProps> = ({ userInput, onChangeHandler }) => (
    <div style={mainWrapper}>
        <input value={userInput}
            onChange={onChangeHandler} style={input} placeholder="Search The Table"/>
    </div>
);
