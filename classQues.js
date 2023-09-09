// Design a class fro employee which takes id and name in during contruction of object and has a salary property


class Emp {
    constructor(id, name) {
        if (!id || !name) {
            throw new Error('Employee id and name are mandatory');
        }
        this.id = id;
        this.name = name
    }

    setSalary(salary) {
        this.salary = salary
    }
    
    getName() {
        return this.name
    }

    getName() {
        return this.name
    }
    getSalary() {
        return this.salary
    }
}

class Manager extends Emp {
    setDepartment(name) {
        this.department = name;
    }
    getDepartment() {
        return this.department
    }
}

const empObj = new Emp(1, "Jack")
empObj.setSalary(1000)

const managerObj = new Manager(2, 'John')