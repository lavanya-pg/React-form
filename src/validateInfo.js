export default function validateInfo(values) {
    let errors = {};

    if(!values.firstname.trim()){
        errors.firstname = 'firstname is required';
    }else if(/^[1-9]\d*$/.test(values.firstname)){
        errors.firstname = 'firstname should be in alphabets';
    }

    if(!values.lastname.trim()){
        errors.lastname = 'lastname is required';
    }else if(/^[1-9]\d*$/.test(values.lastname)){
        errors.lastname = 'lastname should be in alphabets';
    }

    if(!values.contactno.trim()){
        errors.contactno = 'contactno is required';
    }else if(!(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(values.contactno))){
        errors.contactno = 'contact number should have only numbers';
    }

    if(!values.emailid) {
        errors.emailid = 'Email is required';
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i. test(values.emailid)){
        errors.emailid = 'emailid is invalid';
    }

    if(!values.password) {
        errors.password = 'password is required';
    } else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/.test(values.password)) {
        errors.password = 'password should have one lowercase, one uppercase, one numeric value and one special character and morethan 6 lessthan 15';
    }

    if(!values.confirmpassword){
        errors.confirmpassword = 'confirm password is required';
    } else if(values.confirmpassword != values.password){
        errors.confirmpassword = 'passwords do not match';
    }

    return errors;
}