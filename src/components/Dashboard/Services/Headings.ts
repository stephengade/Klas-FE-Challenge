export interface IHeadings {
   id: number;
   label: string;
   sortable: boolean
    identity: string
}



export const Headings: IHeadings[]  = [
    {
         id: 1,
        label: 'Date',
        sortable: true,
        identity: 'date'
    },
    {
        id: 2,
        label: 'Name',
        sortable: true,
        identity: 'name'
    },
    {
        id: 3,
        label: 'Email',
        sortable: true,
        identity: 'email'
    },
    {
        id: 4,
        label: 'Phone',
        sortable: true,
        identity: 'phone'
    },
    {
        id: 5,
        label: 'Address',
        sortable: true,
        identity: 'address'
    },
    {
        id: 6,
        label: 'Students',
        sortable: true,
        identity: 'students'
    },
    {
        id: 7,
        label: '',
        sortable: false,
        identity: 'action'
    }
]