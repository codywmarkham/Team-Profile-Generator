const Manager = require('../lib/Manager');

    it('should return employee github from ', () =>{
        const test = "100";
        const employee = new Manager("Cody", 1, "Cody@email.com", test );
        expect(employee.office).toBe(test);
    })

    it('should return employee github from getHub()', () =>{
        const test = "100";
        const employee = new Manager("Cody", 1, "Cody@email.com", test );
        expect(employee.getOffice()).toBe(test);
    }) 

    it('should return employee role from getRole()', () =>{
        const test = "Manager";
        const employee = new Manager(test);
        expect(employee.getRole()).toBe(test);
    })