// public - cimpul cu proprietatea public poate fi folosit oriunde
// privat - doar in cadrul unei clase
// protected - in clasa in care a fost declarat si in clasele mostenitoare


class Department  {

    constructor(public name:string ){
    }
    ptintCompanyName(){
        console.log('Readcast',this.name);
    }

}


class It extends Department {
    admin: boolean
    members: number

    constructor(name:string, members: number, admin: boolean) {
        super(name)
        this.admin = admin;
        this.members = members
    }

}

class Sales extends Department {
    members: number
    manager: boolean

    constructor(name:string, members: number, manager:boolean) {
        super(name);
        this.members =  members;
        this.manager = manager;
    }

}


const department = new Department('Departament');
const itDepartment = new It ('Departament', 10, true);
const Salespartment = new Sales ('Departament', 10, true);



itDepartment.ptintCompanyName()