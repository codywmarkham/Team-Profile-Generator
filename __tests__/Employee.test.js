const Employee = require('../lib/Employee');

describe("Employee class", () => {
    it("Can instantiate Employee", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
        expect(employee instanceof Employee).toBe(true);
    })

    it('Should have a name property', () => {
        const employee = new Employee('Cody');
        expect(employee.name).toBe('Cody');
    })

    it('Should have an id property', () => {
        const employee = new Employee('Cody', 1);
        expect(employee.id).toBe(1);
    })

    it('Should have email property', () => {
        const employee = new Employee('Cody', 1, 'Cody@email.com');
        expect(employee.email).toBe('Cody@email.com');
    })

    it('Should return Employee name from getName()', () =>{
        const test = "Cody";
        const employee = new Employee(test);
        expect(employee.getName()).toBe(test);
    })
    
    it('Should return employee id from getId()', () =>{
        const test = 1;
        const employee = new Employee("Cody", test);
        expect(employee.getId()).toBe(test);
    })
    
    it('Should return Employee email from getEmail()', () =>{
        const test = "Cody@email.com";
        const employee = new Employee("Cody", 1, test);
        expect(employee.getEmail()).toBe(test);
    })

    it('Should return Employee role from getRole()', () =>{
        const test = "Employee";
        const employee = new Employee(test);
        expect(employee.getRole()).toBe(test);
    })

});