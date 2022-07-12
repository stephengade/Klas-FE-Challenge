export interface ICustomers {
    [x: string]: any;
   id: number;
   date: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    students: number,
    action: "delete"
}


const Customers: ICustomers[] = [
    {
        id: 1,
        date: '01/01/2020',
        name: 'John Doe',
        email: 'johndoe@klas.com',
        phone: '1234567890',
        address: '123 Main St',
        students: 30,
        action: 'delete'     
    },

    {
        id: 2,
        date: '01/01/2020',
        name: 'Myke Doe',
        email: 'mykie@klas.com',
        phone: '1809876543',
        address: '123 klas avenue',
        students: 670,
        action: 'delete'     
    },

     {
        id: 3,
        date: '01/01/2022',
        name: 'Oladapo Joel',
        email: 'Joel@klas.com',
        phone: '0809876543',
        address: '222 klas avenue',
        students: 5,
        action: 'delete'     
    },
     {
        id: 4,
        date: '05/01/2022',
        name: 'Ajayi Joel',
        email: 'AJ@klas.com',
        phone: '19809876543',
        address: '12 GenZavenue',
        students: 9,
        action: 'delete'     
    },

    {
        id: 5,
        date: '05/01/2022',
        name: 'Michral Joel',
        email: 'Ooladele@test.com',
        phone: '19809876543',
        address: '12 GenZavenue',
        students: 15,
        action: 'delete'
    }
    


]

const GetCustomers = () => {
    return Customers;
}

export default GetCustomers();