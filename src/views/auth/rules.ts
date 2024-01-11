import {reactive} from "vue";
import {FormRules} from "element-plus";

interface RuleForm {
    fio?: string,
    phone?: string,
    login: string,
    password: string
}

//rules
export const rules = reactive<FormRules<RuleForm>>({
    fio: [
        {required: true, message: 'FIO input is required', trigger: 'blur'},
        {min: 4, max: 15, message: 'Length should be 4 to 15', trigger: 'blur'},
    ],
    phone: [
        {required: true, message: 'PHONE input is required', trigger: 'blur'},
        // {min: 4, max: 15, message: 'Length should be 3 to 5', trigger: 'blur'},
    ],
    login: [
        {required: true, message: 'LOGIN input is required', trigger: 'blur'},
        {min: 6, max: 20, message: 'Length should be 6 to 20', trigger: 'blur'},
    ],
    password: [
        {required: true, message: 'PASSWORD input is required', trigger: 'blur'},
        {min: 6, max: 15, message: 'Length should be 6 to 15', trigger: 'blur'},
    ]
})

