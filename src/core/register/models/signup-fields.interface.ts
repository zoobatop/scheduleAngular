import { PoDynamicFormField, PoSelectOption } from '@po-ui/ng-components';

const jobOptions: Array<PoSelectOption> = [
    {
        label: "MAT",
        value: "MAT"
    },
    {
        label: "FSW",
        value: "FSW"
    },
    {
        label: "ADM",
        value: "ADM"
    },
    {
        label: "IS",
        value: "IS"
    },
    {
        label: "Admin",
        value: "admin"
    },
    {
        label: "BI",
        value: "BI"
    }
]

export const SignupFields: Array<PoDynamicFormField> = [
    {
        label: 'First Name',
        property: 'firstName',
        type: 'string'
    },
    {
        label: 'Last Name',
        property: 'lastName',
        type: 'string'
    },
    {
        label: 'Consultant Job',
        property: 'consultantJob',
        type: 'string',
        options: jobOptions,
        optionsMulti: false
    },
    {
        label: 'Email',
        property: 'email',
        type: 'string'
    },
    {
        label: 'Password',
        property: 'password',
        type: 'string',
        secret: true 
    }
]
