import { useState } from 'react'
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent,
} from '@mui/material'
import { SortBy, useSortContext } from './SortingProvider'

const SortingOptions = [
    'Start Date ASC',
    'Start Date DSC',
    'End Date ASC',
    'End Date DSC',
    'Name ASC',
    'Name DSC',
    'Event length ASC',
    'Event length DSC',
    'Category ASC',
    'Category DSC',
    'Default',
]

export default function SortingDropdown() {
    const { sortBy, sortType, setSortType, setSortBy } = useSortContext()
    const handleChange = (event: SelectChangeEvent) => {
        getSortType(event.target.value)
        getSortBy(event.target.value)
    }

    const getSortType = (option: string) => {
        const possibleType = option.slice(-3)
        if (possibleType === 'ASC' || possibleType === 'DSC') {
            setSortType(possibleType)
        }
    }

    const getSortBy = (option: string) => {
        if (option !== 'Default') {
            const possibleSortBy = option.slice(0, -4) as SortBy
            setSortBy(possibleSortBy)
        } else {
            setSortBy('Default')
        }
    }

    return (
        <FormControl>
            <InputLabel>Sorting</InputLabel>
            <Select
                value={`${sortBy} ${sortType}`}
                label="Sorting"
                onChange={handleChange}
                sx={{ minWidth: '300px' }}
            >
                {SortingOptions.map((option) => (
                    <MenuItem value={option}>{option}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}
