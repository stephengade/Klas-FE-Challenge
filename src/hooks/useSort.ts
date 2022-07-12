import {useState} from 'react'



const useSort = (data: any | any[]) => {
    const [allCustomers, setAllCustomers] = useState(data)

    const handleSort = (path: string, sortOrder: any) => {
        if (path) {
            const sorted = [...allCustomers].sort((a, b) => {
                return (
                    a[path].toString().localeCompare(b[path].toString(), "en", {
                        numeric: true,
                    }) * (sortOrder === "asc" ? 1 : -1)
                );
            });
            setAllCustomers(sorted);
        }
    };

    return [allCustomers, handleSort, setAllCustomers]

}

export default useSort;