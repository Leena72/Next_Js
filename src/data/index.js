import activeImg_1 from "../Assets/images/1_active.png";
import img_1 from "../Assets/images/1.png";
import activeImg_2 from "../Assets/images/2_2active.png";
import img_22 from "../Assets/images/2_2.png";
import activeImg_7 from "../Assets/images/7_active.png";
import img_2 from "../Assets/images/2.png";
import img_3 from "../Assets/images/3.png";
import img_4 from "../Assets/images/4.png";
import img_5 from "../Assets/images/5.png";
import img_6 from "../Assets/images/6.png";
import img_7 from "../Assets/images/7.png";
import activeImg_8 from "../Assets/images/8_active.png";
import img_8 from "../Assets/images/8.png";
import activeImg_9 from "../Assets/images/9_active.png";
import img_9 from "../Assets/images/9.png";
import activeImg_10 from "../Assets/images/10_active.png";
import img_10 from "../Assets/images/10.png";
import activeImg_11 from "../Assets/images/11_active.png";
import img_11 from "../Assets/images/11.png";
import activeImg_12 from "../Assets/images/12_active.png";
import img_12 from "../Assets/images/12.png";
import activeImg_13 from "../Assets/images/13_active.png";
import img_13 from "../Assets/images/13.png";
import activeImg_15 from "../Assets/images/15active.png";
import img_15 from "../Assets/images/15.png";
import * as Yup from 'yup';

// Banner Data

export const bannerData = [
    {
        id: 1,
        number: 12,
        title: 'Policy Term(In Year)',
        rupeeSign: false
    },
    {
        id: 2,
        number: 25,
        title: 'Premium Payment Term(In Year)',
        rupeeSign: false
    },
    {
        id: 1,
        number: '6,000*',
        title: 'Preimum to Pay(inc GST)',
        rupeeSign: true
    },
    {
        id: 1,
        number: '90,000**',
        title: 'Sum Assured',
        rupeeSign: true
    },
]

// Application Staus

export const applicationData = [
    {
        id: 1,
        heading: 'Quote Generated',
        title:'QUOTE',
        subHeading: 'Completed: 26 JUNE, 2023 | 09:06 PM',
        completed: false,
        dummyContent: 'Content here',
        contentStatus: false,
        active_icon: activeImg_1,
        img: img_1,
        content: [
            {
                id: 1,
                heading: '',
                subHeading: '',
                img: '',
                dummyContent: '',
                contentStatus: false,
                subContent: []
            },
        ]
    },
    {
        id: 2,
        heading: 'Form Filling',
        title:'FORM_FILLING',
        subHeading: 'Yet to start',
        completed: false,
        dummyContent: '',
        contentStatus: true,
        active_icon: activeImg_2,
        img: img_22,
        content: [
            {
                id: 1,
                heading: 'Proposal Form',
                title:'PROPOSAL',
                subHeading: 'Yet to start',
                img: img_22,
                dummyContent: '',
                contentStatus: true,
                subContent: [
                    {
                        id: 1,
                        title: 'Basic detail Section (Proposer)',
                        subTitle: 'Draft'
                    },
                    {
                        id: 2,
                        title: 'Insured detail Section (Conditional only for Insured-Proposer cases)',
                        subTitle: 'Draft'
                    },
                    {
                        id: 3,
                        title: 'Nominee detail Section',
                        subTitle: 'Draft'
                    },
                    {
                        id: 4,
                        title: 'Health Questionnaires section',
                        subTitle: 'Draft'
                    },
                ]
            },
            {
                id: 2,
                heading: 'Insta Verify',
                title:'INSTA_VERIFY',
                subHeading: 'Yet to start',
                img: img_2,
                dummyContent: 'Dummy Content',
                contentStatus: false,
                subContent: []
            },
            {
                id: 3,
                heading: 'Customer Consent',
                title:'CUSTOMER_CONSENT',
                subHeading: 'Yet to start',
                img: img_3,
                dummyContent: '3',
                contentStatus: false,
                subContent: []
            },
            {
                id: 4,
                heading: 'Payment',
                title:'PAYMENT',
                subHeading: 'Yet to start',
                img: img_4,
                dummyContent: '3',
                contentStatus: false,
                subContent: []
            },
            {
                id: 5,
                heading: 'Document Upload',
                title:'DOC_UPLOAD',
                subHeading: 'Yet to start',
                img: img_5,
                dummyContent: '3',
                contentStatus: false,
                subContent: []
            },
            {
                id: 6,
                heading: 'Proposal Submission',
                title:'PROPOSAL_SUBMISSION',
                subHeading: 'Yet to start',
                img: img_6,
                dummyContent: '3',
                contentStatus: false,
                subContent: []
            },
        ]
    },
    {
        id: 3,
        heading: 'Medical Requirement',
        title:'MEDICAL_REQUIREMENT',
        subHeading: 'Yet to start',
        completed: false,
        dummyContent: 'Dummy Content',
        contentStatus: false,
        active_icon: activeImg_7,
        img: img_7,
        content: [
            {
                id: 1,
                heading: '',
                subHeading: '',
                img: '',
                dummyContent: '',
                contentStatus: false,
                subContent: []
            },
        ]
    },
    {
        id: 4,
        heading: 'Additional Non-Medical Requirements',
        title:'ADDITIONAL_NON_MEDICAL_REQUIREMENT',
        subHeading: 'Yet to start',
        completed: false,
        dummyContent: 'Dummy Content',
        contentStatus: true,
        active_icon: activeImg_8,
        img: img_8,
        content: [
            {
                id: 1,
                heading: '',
                subHeading: '',
                img: '',
                dummyContent: '',
                contentStatus: false,
                subContent: []
            },
        ]
    },
    {
        id: 5,
        heading: 'Revised Offer',
        title:'REVISED_OFFER',
        subHeading: 'Yet to start',
        completed: false,
        dummyContent: 'Dummy Content',
        contentStatus: false,
        active_icon: activeImg_9,
        img: img_9,
        content: [
            {
                id: 1,
                heading: '',
                subHeading: '',
                img: '',
                dummyContent: '',
                contentStatus: false,
                subContent: []
            },
        ]
    },
    {
        id: 6,
        heading: 'Consent For Change In The Application Details',
        title:'DATA_CHANGE',
        subHeading: 'Yet to start',
        completed: false,
        dummyContent: 'Dummy Content',
        contentStatus: false,
        active_icon: activeImg_12,
        img: img_12,
        content: [
            {
                id: 1,
                heading: '',
                subHeading: '',
                img: '',
                dummyContent: '',
                contentStatus: false,
                subContent: []
            },
        ]
    },
    {
        id: 7,
        heading: 'Payment Required',
        title:'PAYMENT_REQUIREMENT',
        subHeading: 'Yet to start',
        completed: false,
        dummyContent: 'Dummy Content',
        contentStatus: false,
        active_icon: activeImg_10,
        img: img_10,
        content: [
            {
                id: 1,
                heading: '',
                subHeading: '',
                img: '',
                dummyContent: '',
                contentStatus: false,
                subContent: []
            },
        ]
    },
    {
        id: 8,
        heading: 'Quality Check',
        title:'QUALITY_CHECK',
        subHeading: 'Yet to start',
        completed: false,
        dummyContent: 'Dummy Content',
        contentStatus: false,
        active_icon: activeImg_11,
        img: img_11,
        content: [
            {
                id: 1,
                heading: '',
                subHeading: '',
                img: '',
                dummyContent: '',
                contentStatus: false,
                subContent: []
            },
        ]
    },
    {
        id: 9,
        heading: 'Medical Risk Verification',
        title:'MEDICAL_RISK_VERIFICATION',
        subHeading: 'Yet to start',
        completed: false,
        dummyContent: 'Dummy Content',
        contentStatus: false,
        active_icon: activeImg_12,
        img: img_12,
        content: [
            {
                id: 1,
                heading: '',
                subHeading: '',
                img: '',
                dummyContent: '',
                contentStatus: false,
                subContent: []
            },
        ]
    },
    {
        id: 10,
        heading: 'Financial and Medical Risk Verification',
        title:'FINANCIAL_AND_MEDICAL_RISK_VERIFICATION',
        subHeading: 'Yet to start',
        completed: false,
        dummyContent: 'Dummy Content',
        contentStatus: false,
        active_icon: activeImg_13,
        img: img_13,
        content: [
            {
                id: 1,
                heading: '',
                subHeading: '',
                img: '',
                dummyContent: '',
                contentStatus: false,
                subContent: []
            },
        ]
    },
    {
        id: 11,
        heading: 'Policy Decision',
        title:'POLICY_STATUS',
        subHeading: 'Yet to start',
        completed: false,
        dummyContent: 'Dummy Content',
        contentStatus: false,
        active_icon: activeImg_15,
        img: img_15,
        content: [
            {
                id: 1,
                heading: '',
                subHeading: '',
                img: '',
                dummyContent: '',
                contentStatus: false,
                subContent: []
            },
        ]
    },
]

// add non med req 

export const questionnaireData = [
    {
        id: 1,
        title: 'Health and Lifestyle Questionnaire',
        list: [
            {
                id: 1,
                title: 'Alcohol Habit Questionnaire ',
                formName: 'ALCOHOL_HABIT_QUESTION',
                newTitle:'Alcohol Questionnaire'
            },
            {
                id: 2,
                title: 'Chest Pain Questionnaire',
                formName: 'CHEST_PAIN_QUESTION',
                newTitle:'Chest Pain Questionnaire'
            },
            {
                id: 3,
                title: 'Deformity Questionnaire',
                formName: 'DEFORMITY_QUESTION',
                newTitle:'Deformity questionnaire'
            },
            {
                id: 4,
                title: 'Diabetes Questionnaire',
                formName: 'diabetes',
                newTitle:'Diabetes Questionnaire'
            },
            {
                id: 5,
                title: 'Digestive Disorder Questionnaire',
                formName: 'DIGESTIVE_DISORDER_QUESTION',
                newTitle:'Digestive Disorder Questionnaire'
            },
            {
                id: 6,
                title: 'Epilepsy Questionnaire',
                formName: 'EPILEPSY_QUESTION',
                newTitle:'Epilepsy Questionnaire'
            },
            {
                id: 7,
                title: 'Musculoskeletal Questionnaire',
                formName: 'MUSCULO_SKELETAL_DISORDERS_QUESTION',
                newTitle:'Musculoskeletal Questionnaire'
            },
            {
                id: 8,
                title: 'Nervous Disorder Questionnaire',
                formName: 'NERVOUS_DISORDER_QUESTION',
                newTitle:'Nervous Disorder Questionnaire'
            },
            {
                id: 9,
                title: 'Resipratory Disorder Questionnaire',
                formName: 'RESPIRATORY_DISORDER_QUESTION',
                newTitle:'Respiratory disorder Questionnaire'
            },
            {
                id: 10,
                title: 'Thyroid Disorder Questionnaire',
                formName: 'THYROID_DISORDER_QUESTION',
                newTitle:'Thyroid Questionnaire'
            },
            {
                id: 11,
                title: 'Tumour Questionnaire',
                formName: 'tumour',
                newTitle:'Tumour Questionnaire'
            },
        ]
    },
    {
        id: 2,
        title: 'Documents',
        list: []
    }

]

//form data
let validateReq = Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required')
export const formikValidationSchema = {
    "ALCOHOL_HABIT_QUESTION": {
        validationSchema: Yup.object().shape({
            types_of_alcohol: validateReq,
            frequency_consumption: validateReq,
            consumption_per_day: validateReq,
            consumed_per_week: validateReq,
            consumed_per_day: validateReq,
            daily_consumption: validateReq,
            excessive_consumption: validateReq,
            medication: validateReq,
            breach_law: validateReq,
            alcohol_consumption: validateReq,
        }),
        initialValues: {
            types_of_alcohol: '',
            frequency_consumption: '',
            consumption_per_day: '',
            consumed_per_week: '',
            consumed_per_day: '',
            daily_consumption: '',
            excessive_consumption: '',
            medication: '',
            breach_law: '',
            alcohol_consumption: '',
        }
    },
    "CHEST_PAIN_QUESTION": {
        validationSchema: Yup.object().shape({
            ﬁrst_attack: validateReq,
            exact_site: validateReq,
            severity: validateReq,
            pain_radiate: validateReq,
            pain_suddenly_gradually: validateReq,
            chest_pain: validateReq,
            last_symptoms: validateReq,
            investigation: validateReq,
            address: validateReq,
            findings: validateReq,
            any_treatment: validateReq,
            booked_off: validateReq,
            additional_information: validateReq,
        }),
        initialValues: {
            ﬁrst_attack: '',
            exact_site: '',
            severity: '',
            pain_radiate: '',
            pain_suddenly_gradually: '',
            chest_pain: '',
            last_symptoms: '',
            investigation: '',
            address: '',
            findings: '',
            any_treatment: '',
            booked_off: '',
            additional_information: '',
        }
    },
    "DEFORMITY_QUESTION": {
        validationSchema: Yup.object().shape({
            birth: validateReq,
            accidental: validateReq,
            disease: validateReq,
            deformity: validateReq,
            diagnosed: validateReq,
            progressive: validateReq,
            disability: validateReq,
            squat: validateReq,
            able_run: validateReq,
            grip: validateReq,
            body_affected: validateReq,
            nature_job: validateReq,
            normal_day: validateReq,
            treatment_details: validateReq,
        }),
        initialValues: {
            birth: '',
            accidental: '',
            disease: '',
            deformity: '',
            diagnosed: '',
            progressive: '',
            disability: '',
            squat: '',
            able_run: '',
            grip: '',
            body_affected: '',
            nature_job: '',
            normal_day: '',
            treatment_details: '',
        }
    },
    "diabetes": {
        validationSchema: Yup.object().shape({
            diagnosed: validateReq,
            date_diabetes: validateReq,
            type_diabetes: validateReq,
            doctor_name: validateReq,
            address: validateReq,
            date_consult: validateReq,
            medication: validateReq,
            dose: validateReq,
            frequency: validateReq,
            treatment: validateReq,
            details: validateReq,
            frequencies: validateReq,
            blood_test: validateReq,
            last_tested: validateReq,
            abnormalities: validateReq,
            last_result: validateReq,
            urininalysis: validateReq,
            eye_problem: validateReq,
            circulatory: validateReq,
            blood_pressure: validateReq,
            hyperlipidemia: validateReq,
            kidney: validateReq,
            sensory: validateReq,
            amputation: validateReq,
            complication: validateReq,
            time_off: validateReq,
            admitted: validateReq,
            reason: validateReq,
            name_doctor: validateReq,
            add_doctor: validateReq,
            date_doc: validateReq,
            add_info: validateReq,
        }),
        initialValues: {
            diagnosed: '',
            date_diabetes: '',
            type_diabetes: '',
            doctor_name: '',
            address: '',
            date_consult: '',
            medication: '',
            dose: '',
            frequency: '',
            treatment: '',
            details: '',
            frequencies: '',
            blood_test: '',
            last_tested: '',
            abnormalities: '',
            last_result: '',
            urininalysis: '',
            eye_problem: '',
            circulatory: '',
            blood_pressure: '',
            hyperlipidemia: '',
            kidney: '',
            sensory: '',
            amputation: '',
            complication: '',
            time_off: '',
            admitted: '',
            reason: '',
            name_doctor: '',
            add_doctor: '',
            date_doc: '',
            add_info: '',
        }
    },
    "DIGESTIVE_DISORDER_QUESTION": {
        validationSchema: Yup.object().shape({
            date_age: validateReq,
            exact_site: validateReq,
            character: validateReq,
            pain_extend: validateReq,
            severe_attack: validateReq,
            frequent_attack: validateReq,
            bowel: validateReq,
            chest_pain: validateReq,
            breathlessness: validateReq,
            attack_aggravated: validateReq,
            attack_meal: validateReq,
            after_eating: validateReq,
            relieved_meal: validateReq,
            symptoms: validateReq,
            sonography: validateReq,
            address: validateReq,
            findings: validateReq,
            barium_meal: validateReq,
            operation: validateReq,
            experienced_problem: validateReq,
            currently: validateReq,
            in_past: validateReq,
        }),
        initialValues: {
            date_age: '',
            exact_site: '',
            character: '',
            pain_extend: '',
            severe_attack: '',
            frequent_attack: '',
            bowel: '',
            chest_pain: '',
            breathlessness: '',
            attack_aggravated: '',
            attack_meal: '',
            after_eating: '',
            relieved_meal: '',
            symptoms: '',
            sonography: '',
            address: '',
            findings: '',
            barium_meal: '',
            operation: '',
            experienced_problem: '',
            currently: '',
            in_past: '',
        }
    },
    "EPILEPSY_QUESTION": {
        validationSchema: Yup.object().shape({
            commence: validateReq,
            complete_detail: validateReq,
            frequency_attack: validateReq,
            months: validateReq,
            duration: validateReq,
            last_attack: validateReq,
            attacks_happen: validateReq,
            specific: validateReq,
            consciousness: validateReq,
            tongue: validateReq,
            prevent_attack: validateReq,
            head_injury: validateReq,
            X_ray_carried: validateReq,
            significant_time: validateReq,
            doctor: validateReq,
            consultation: validateReq,
        }),
        initialValues: {
            commence: '',
            complete_detail: '',
            frequency_attack: '',
            months: '',
            duration: '',
            last_attack: '',
            attacks_happen: '',
            specific: '',
            consciousness: '',
            tongue: '',
            prevent_attack: '',
            head_injury: '',
            X_ray_carried: '',
            significant_time: '',
            doctor: '',
            consultation: '',
        }
    },
    "MUSCULO_SKELETAL_DISORDERS_QUESTION": {
        validationSchema: Yup.object().shape({
            precise: validateReq,
            experienced: validateReq,
            affected: validateReq,
            walking: validateReq,
            condition: validateReq,
            severity_symptoms: validateReq,
            currrently: validateReq,
            in_past: validateReq,
            steroid_medication: validateReq,
            surgery_planned: validateReq,
            attend_follow: validateReq,
            consultation: validateReq,
            additional_info: validateReq,
        }),
        initialValues: {
            precise: '',
            experienced: '',
            affected: '',
            walking: '',
            condition: '',
            severity_symptoms: '',
            currrently: '',
            in_past: '',
            steroid_medication: '',
            surgery_planned: '',
            attend_follow: '',
            consultation: '',
            additional_info: '',
        }
    },
    "NERVOUS_DISORDER_QUESTION": {
        validationSchema: Yup.object().shape({
            episodes: validateReq,
            precise_diagnosis: validateReq,
            frequently: validateReq,
            last_episode: validateReq,
            duration: validateReq,
            frequency_severity: validateReq,
            necessitate: validateReq,
            absent: validateReq,
            complete_detail: validateReq,
            treatment: validateReq,
            date: validateReq,
            address: validateReq,
            findings: validateReq,
            investigation: validateReq,
            consulting_doctor: validateReq,
            nervous_disorder: validateReq,
        }),
        initialValues: {
            episodes: '',
            precise_diagnosis: '',
            frequently: '',
            last_episode: '',
            duration: '',
            frequency_severity: '',
            necessitate: '',
            absent: '',
            complete_detail: '',
            treatment: '',
            date: '',
            address: '',
            findings: '',
            investigation: '',
            consulting_doctor: '',
            nervous_disorder: '',
        }
    },
    "RESPIRATORY_DISORDER_QUESTION": {
        validationSchema: Yup.object().shape({
            precise_diagnosis: validateReq,
            first_diagnosed: validateReq,
            undergone_pulmonary: validateReq,
            results: validateReq,
            enclose: validateReq,
            frequent_attack: validateReq,
            last_attack: validateReq,
            severe_attack: validateReq,
            hospitalised: validateReq,
            circumstances: validateReq,
            last_consultaion: validateReq,
            inhalers: validateReq,
            cortisone: validateReq,
            respiratory_disorder: validateReq,
        }),
        initialValues: {
            diagnosed: '',
            precise_diagnosis: '',
            first_diagnosed: '',
            undergone_pulmonary: '',
            results: '',
            enclose: '',
            frequent_attack: '',
            last_attack: '',
            severe_attack: '',
            hospitalised: '',
            circumstances: '',
            last_consultaion: '',
            inhalers: '',
            cortisone: '',
            respiratory_disorder: '',
        }
    },
    "THYROID_DISORDER_QUESTION": {
        validationSchema: Yup.object().shape({
            provide_details: validateReq,
            thyroid_disorder: validateReq,
            first_diagnosed: validateReq,
            investigation: validateReq,
            address: validateReq,
            findings: validateReq,
            thyroid_disorder: validateReq,
            treatment: validateReq,
            problems_arising: validateReq,
            visual_defect: validateReq,
            additional_information: validateReq,
        }),
        initialValues: {
            provide_details: '',
            thyroid_disorder: '',
            first_diagnosed: '',
            investigation: '',
            address: '',
            findings: '',
            thyroid_disorder: '',
            treatment: '',
            problems_arising: '',
            visual_defect: '',
            additional_information: '',
        }
    },
    "tumour": {
        validationSchema: Yup.object().shape({
            tumour_growth: validateReq,
            location_tumour: validateReq,
            tumour_diagnosis: validateReq,
            investigation: validateReq,
            address: validateReq,
            findings: validateReq,
            treatment: validateReq,
            recommendation: validateReq,
            removal_tumour: validateReq,
            consulting_physician: validateReq,
            significant_time: validateReq,
            additional_information: validateReq,
        }),
        initialValues: {
            tumour_growth: '',
            location_tumour: '',
            tumour_diagnosis: '',
            investigation: '',
            address: '',
            findings: '',
            treatment: '',
            recommendation: '',
            removal_tumour: '',
            consulting_physician: '',
            significant_time: '',
            additional_information: '',
        }
    }


}
export const questionnaireList = {
    "ALCOHOL_HABIT_QUESTION": [
        {
            id: '1',
            question: '',
            answer: '',
            name: '',
            declaration: 'I hereby agree that the statements below shall form part of my proposal for insurance and I declare that such statements together with the said proposal and declaration shall be the basis of the contract between Bharti AXA Life Insurance Company Limited and myself.',
            heading: 'What are your habits as regards the consumption of alcohol?',
            type: 'HEADING',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'State types of alcohol (for example beer, wine, spirits etc).',
                    answer: '',
                    name: 'types_of_alcohol',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'Frequency of consumption per week',
                    answer: '',
                    name: 'frequency_consumption',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '3',
                    question: 'Frequency of consumption per day',
                    answer: '',
                    name: 'consumption_per_day',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '4',
                    question: 'Units consumed per week',
                    answer: '',
                    name: 'consumed_per_week',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '5',
                    question: 'Units consumed per day',
                    answer: '',
                    name: 'consumed_per_day',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
            ]
        },
        {
            id: '2',
            question: 'Has your average daily and or weekly consumption been higher at any time in the past? If so, state when (dates) and give the average daily consumption at the time.',
            answer: '',
            name: 'daily_consumption',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '3',
            question: 'Have you ever received medical or other treatment for excessive consumption of alcohol? If so, give name and address of attending doctor or clinic/institution where treatment was received.',
            answer: '',
            name: 'excessive_consumption',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '4',
            question: 'Are you taking any medication presently? If ‘yes’ please provide the name and dosage of medicines.',
            answer: '',
            name: 'medication',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '5',
            question: 'Have you ever been involved in any breach of the law in connection with the use of alcohol?',
            answer: '',
            name: 'breach_law',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '6',
            question: 'Please do provide additional information, if any, with regards to your alcohol consumption habits which will assist in processing your proposal.',
            answer: '',
            name: 'alcohol_consumption',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
    ],
    "CHEST_PAIN_QUESTION": [
        {
            id: '1',
            question: 'When did you suffer the ﬁrst attack of chest pain (date or at what age)?',
            answer: '',
            name: 'ﬁrst_attack',
            declaration: 'I hereby agree that the statements below shall form part of my proposal for insurance and I declare that stuch statements together with the said proposal and declaration shall be the basis of the contract between Bharti AXA Life Insurance Company Limited and myself.',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'State exact site of the pain (middle of the chest, left hand side, right hand side)',
                    answer: '',
                    name: 'exact_site',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'State character and severity of the pain For example burning, cramping, constricting, stabbing, crushing, vice like, dull.',
                    answer: '',
                    name: 'severity',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
            ]
        },
        {
            id: '2',
            question: 'Did the pain radiate or spread outside the chest (e.g. to the arms, shoulders, jaw)?',
            answer: '',
            name: 'pain_radiate',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '3',
            question: 'Did the pain occur suddenly or gradually? At rest or on exertion? Did it worsen with deep inspiration?',
            answer: '',
            name: 'pain_suddenly_gradually',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '4',
            question: 'How long did the chest pain last?',
            answer: '',
            name: 'chest_pain',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '5',
            question: 'When did you last have such symptoms or experience an attack?',
            answer: '',
            name: 'last_symptoms',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '6',
            question: '',
            answer: '',
            name: '',
            declaration: '',
            heading: 'Were any investigations carried out (for example ECG, Echocardiogram)If so, please state',
            type: 'HEADING',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'Date when the investigation test was carried out.',
                    answer: '',
                    name: 'investigation',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'Name and address of Doctor',
                    answer: '',
                    name: 'address',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '3',
                    question: 'The findings.',
                    answer: '',
                    name: 'findings',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
            ]
        },
        {
            id: '7',
            question: 'Were you on any treatment? If so, please provide details including the name of the medication.',
            answer: '',
            name: 'any_treatment',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '8',
            question: 'Have you ever been booked off from work due to chest pain? If so please provide details including dates and time spent off work.',
            answer: '',
            name: 'booked_off',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '9',
            question: 'Is there any additional information you can provide, with regards the chest pain which will assist in processing your proposal?',
            answer: '',
            name: 'additional_information',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
    ],
    "DEFORMITY_QUESTION": [
        {
            id: '1',
            question: '',
            answer: '',
            name: '',
            declaration: 'I hereby agree that the statements below shall form part of my proposal for insurance and I declare that such statements together with the said proposal and declaration shall be the basis of the contract between Bharti AXA Life Insurance Company Limited and myself.',
            heading: 'Underlying cause of the deformity:',
            type: 'HEADING',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'From birth (congenital)',
                    answer: '',
                    name: 'birth',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'Accidental reasons',
                    answer: '',
                    name: 'accidental',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '3',
                    question: 'Due to disease or infection',
                    answer: '',
                    name: 'disease',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
            ]
        },
        {
            id: '2',
            question: 'Type of Deformity.',
            answer: '',
            name: 'deformity',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '3',
            question: 'When was the condition first diagnosed?',
            answer: '',
            name: 'diagnosed',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '4',
            question: 'Is the deformity stable or progressive?',
            answer: '',
            name: 'progressive',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '5',
            question: 'What is the degree of disability?',
            answer: '',
            name: 'disability',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '6',
            question: '',
            answer: '',
            name: '',
            declaration: '',
            heading: 'What part (s) of the body are affected by the deformity? (Please do provide detailed information)',
            type: 'HEADING',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'Are you able to squat?',
                    answer: '',
                    name: 'squat',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'Are you able to run?',
                    answer: '',
                    name: 'able_run',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '3',
                    question: 'Do you have firm grip of hands?',
                    answer: '',
                    name: 'grip',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '4',
                    question: 'Please mention the parts of body affected by any thinning or wasting of muscles.',
                    answer: '',
                    name: 'body_affected',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
            ]
        },
        {
            id: '7',
            question: '',
            answer: '',
            name: '',
            declaration: '',
            heading: 'Occupational details:',
            type: 'HEADING',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'Nature of your job',
                    answer: '',
                    name: 'nature_job',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'Are you able to carry out your normal day to day activities',
                    answer: '',
                    name: 'normal_day',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
            ]
        },
        {
            id: '8',
            question: 'Do you use any walking or ambulatory aid/(s) such as crutches, callipers or a wheelchair? If ‘Yes’ please give details.',
            answer: '',
            name: 'ambulatory',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '9',
            question: 'Please do provide treatment details including name and dosage of the medicine/s.',
            answer: '',
            name: 'treatment_details',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
    ],
    "diabetes": [
        {
            id: '1',
            question: 'Have you ever been diagnosed as a diabetic?',
            answer: '',
            name: 'diagnosed',
            declaration: 'I hereby agree that the statements below shall form part of my proposal for insurance and I declare that such statements together with the said proposal and declaration shall be the basis of the contract between Bharti AXA Life Insurance Company Limited and myself.',
            heading: '',
            type: '',
            validation: '',
            ansBtn: true,
            subQuestions: [
                {
                    id: '1',
                    question: 'Please state the date when diabetes was first diagnosed (DD/MM/YY)',
                    answer: '',
                    name: 'date_diabetes',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'Please state the type of Diabetes (Type I or Type II)',
                    answer: '',
                    name: 'type_diabetes',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                }
            ]
        },
        {
            id: '2',
            question: '',
            answer: '',
            declaration: '',
            heading: 'Please provide the name and address of the doctor or clinic supervising your treatment',
            type: 'HEADING',
            validation: '',
            ansBtn: false,
            addMore: true,
            subQuestions: [
                {
                    id: '1',
                    question: 'Name of doctor, hospital or clinic',
                    answer: '',
                    name: 'doctor_name',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'Address',
                    answer: '',
                    name: 'address',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '3',
                    question: 'Date of last consult',
                    answer: '',
                    name: 'date_consult',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                }
            ]
        },
        {
            id: '3',
            question: '',
            answer: '',
            declaration: '',
            heading: 'Kindly provide details of any medication/Therapy that you are taking in relation to your diabetes',
            type: 'HEADING',
            validation: '',
            ansBtn: false,
            addMore: true,
            subQuestions: [
                {
                    id: '1',
                    question: 'Name of medication/therapy',
                    answer: '',
                    name: 'medication',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'Dose',
                    answer: '',
                    name: 'dose',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '3',
                    question: 'Frequency',
                    answer: '',
                    name: 'frequency',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                }
            ]
        },
        {
            id: '4',
            question: 'Has your treatment been changed in last one year?',
            answer: '',
            name: 'treatment',
            declaration: '',
            heading: '',
            type: '',
            validation: '',
            ansBtn: true,
            subQuestions: [
                {
                    id: '1',
                    question: 'If yes, please provide details including dates and durations:',
                    answer: '',
                    name: 'details',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                }
            ]
        },
        {
            id: '5',
            question: 'Please provide us the frequencies of medical check up you undergo in a month. ( Viz: Once,twice,thrice,etc)',
            answer: '',
            name: 'frequencies',
            declaration: '',
            heading: '',
            type: '',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '6',
            question: 'How often do you test your blood and/or urine for glucose (Frequency per month)',
            answer: '',
            name: 'blood_test',
            declaration: '',
            heading: '',
            type: '',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '7',
            question: 'When your urine was last tested?',
            answer: '',
            name: 'last_tested',
            declaration: '',
            heading: '',
            type: '',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '8',
            question: 'Were there any abnormalities? (E.g., ketone, glucose or protein.)',
            answer: '',
            name: 'abnormalities',
            declaration: '',
            heading: '',
            type: '',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '9',
            question: 'Last result (FBS & Hba1c)',
            answer: '',
            name: 'last_result',
            declaration: '',
            heading: '',
            type: '',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '10',
            question: 'Latest result of Urininalysis (Ketone, Glucose, Protein, RBC’s)',
            answer: '',
            name: 'urininalysis',
            declaration: '',
            heading: '',
            type: '',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '11',
            question: '',
            answer: '',
            declaration: '',
            heading: 'Have you ever experienced or treated for:',
            type: 'HEADING',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'Eye problems?',
                    answer: '',
                    name: 'eye_problem',
                    type: 'input',
                    validation: '',
                    ansBtn: true,
                },
                {
                    id: '2',
                    question: 'Heart or circulatory problems?',
                    answer: '',
                    name: 'circulatory',
                    type: 'input',
                    validation: '',
                    ansBtn: true,
                },
                {
                    id: '3',
                    question: 'High blood pressure?',
                    answer: '',
                    name: 'blood_pressure',
                    type: 'input',
                    validation: '',
                    ansBtn: true,
                },
                {
                    id: '4',
                    question: 'Hyperlipidemia',
                    answer: '',
                    name: 'hyperlipidemia',
                    type: 'input',
                    validation: '',
                    ansBtn: true,
                },
                {
                    id: '5',
                    question: 'Kidney problems (including protein or albumin in your urine)?',
                    answer: '',
                    name: 'kidney',
                    type: 'input',
                    validation: '',
                    ansBtn: true,
                },
                {
                    id: '6',
                    question: 'Sensory problems (Numbness or tingling in the feet or legs)?',
                    answer: '',
                    name: 'sensory',
                    type: 'input',
                    validation: '',
                    ansBtn: true,
                },
                {
                    id: '7',
                    question: 'Amputation or history of abscess',
                    answer: '',
                    name: 'amputation',
                    type: 'input',
                    validation: '',
                    ansBtn: true,
                },
                {
                    id: '8',
                    question: 'Any other complication?',
                    answer: '',
                    name: 'complication',
                    type: 'input',
                    validation: '',
                    ansBtn: true,
                }
            ]
        },
        {
            id: '12',
            question: 'Have you ever taken time off work because of your diabetes?',
            answer: '',
            name: 'time_off',
            declaration: '',
            heading: '',
            type: '',
            validation: '',
            ansBtn: true,
            subQuestions: []
        },
        {
            id: '13',
            question: 'Have you ever been admitted to hospital or required emergency care?',
            answer: '',
            name: 'admitted',
            declaration: '',
            heading: '',
            type: '',
            validation: '',
            ansBtn: true,
            subQuestions: []
        },
        {
            id: '14',
            question: '',
            answer: '',
            declaration: '',
            heading: 'If yes, please provide details along with all the hospitalization reports.',
            type: 'HEADING',
            validation: '',
            ansBtn: false,
            addMore: true,
            subQuestions: [
                {
                    id: '1',
                    question: 'Reason',
                    answer: '',
                    name: 'reason',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'Name of doctor, hospital or clinic',
                    answer: '',
                    name: 'name_doctor',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '3',
                    question: 'Address',
                    answer: '',
                    name: 'add_doctor',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '4',
                    question: 'Dates',
                    answer: '',
                    name: 'date_doc',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                }
            ]
        },
        {
            id: '15',
            question: 'Please provide any additional information that you feel is important:',
            answer: '',
            name: 'add_info',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
    ],
    "DIGESTIVE_DISORDER_QUESTION": [
        {
            id: '1',
            question: 'Please provide the date and age at which you suffered the first attack of any of the above ailments?',
            answer: '',
            name: ' date_age',
            declaration: 'I hereby agree that the statements below shall form part of my proposal for insurance and I declare that such statements together with the said proposal and declaration shall be the basis of the contract between Bharti AXA Life Insurance Company Limited and myself.Life to be Insured should provide full and accurate details in connection with the following: stomach or duodenal ulcer, indigestion, dyspepsia, hiatus hernia, flatulence and heartburn or any upper abdominal discomfort (referred to as ‘ailments’ below).',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '2',
            question: '',
            answer: '',
            name: '',
            declaration: '',
            heading: '',
            type: 'HEADING',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'State the exact site of pain',
                    answer: '',
                    name: 'exact_site',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'State character of the pain eg. burning, cramping, constricting.',
                    answer: '',
                    name: 'character',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '3',
                    question: 'Did the pain ever extend to the chest, throat or arms.',
                    answer: '',
                    name: 'pain_extend',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
            ]
        },
        {
            id: '3',
            question: '',
            answer: '',
            name: '',
            declaration: '',
            heading: 'Details of attacks:',
            type: 'HEADING',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'How severe are the attacks?',
                    answer: '',
                    name: 'severe_attack',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'How frequent are the attacks (daily, weekly etc)?',
                    answer: '',
                    name: 'frequent_attack',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '3',
                    question: 'Have you ever vomited blood, had a black stool or passed blood from the bowel?',
                    answer: '',
                    name: 'bowel',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
            ]
        },
        {
            id: '4',
            question: '',
            answer: '',
            name: '',
            declaration: '',
            heading: 'Did the attacks ever produce any',
            type: 'HEADING',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'pain in the chest or arms?',
                    answer: '',
                    name: 'chest_pain',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'breathlessness?',
                    answer: '',
                    name: 'breathlessness',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '3',
                    question: 'Are the attacks aggravated by exercise?',
                    answer: '',
                    name: 'attack_aggravated',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '4',
                    question: 'Are the attacks related to meals?',
                    answer: '',
                    name: 'attack_meal',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
            ]
        },
        {
            id: '5',
            question: '',
            answer: '',
            name: '',
            declaration: '',
            heading: 'If so, state',
            type: 'HEADING',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'how long after eating do they occur?',
                    answer: '',
                    name: 'after_eating',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'whether they are relieved or aggravated following a meal?',
                    answer: '',
                    name: 'relieved_meal',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
            ]
        },
        {
            id: '6',
            question: 'When did you last have symptoms or experience an attack?',
            answer: '',
            name: 'symptoms',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '7',
            question: '',
            answer: '',
            name: '',
            declaration: '',
            heading: 'Has an X ray/Ultra Sonography of the stomach or other investigation ever been done? If so, please state',
            type: 'HEADING',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'When was it done',
                    answer: '',
                    name: 'sonography',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'Name and address of the Doctor',
                    answer: '',
                    name: 'address',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '3',
                    question: 'What were the findings for example was an ulcer diagnosed',
                    answer: '',
                    name: 'findings',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '4',
                    question: 'Have you had a barium meal or any other investigation like endoscopy? If so, please provide the details including date and result of the investigation.',
                    answer: '',
                    name: 'barium_meal',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
            ]
        },
        {
            id: '8',
            question: 'Have you had an operation for this or is an operation being considered? If so, please provide the complete details including name and address of the doctor, and discharge summary (if any).',
            answer: '',
            name: 'operation',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '9',
            question: 'Have you experienced any problems or complications following surgery? If so, please provide details.',
            answer: '',
            name: 'experienced_problem',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '10',
            question: '',
            answer: '',
            name: '',
            declaration: '',
            heading: 'Please provide details of your treatment. Include name of medication, dosage and how often taken.',
            type: 'HEADING',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'Currently:',
                    answer: '',
                    name: 'currently',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'In the past:',
                    answer: '',
                    name: 'in_past',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
            ]
        }
    ],
    "EPILEPSY_QUESTION": [
        {
            id: '1',
            question: 'At what age did the attacks first commence?',
            answer: '',
            name: 'commence',
            declaration: 'I hereby agree that the statements below shall form part of my proposal for insurance and I declare that such statements together with the said proposal and declaration shall be the basis of the contract between Bharti AXA Life Insurance Company Limited and myself.',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '2',
            question: '',
            answer: '',
            name: '',
            declaration: '',
            heading: 'Have the attack ever been described as of a particular type? For example. Grandmal, Petitmal.',
            type: 'HEADING',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'If so, please provide complete details.',
                    answer: '',
                    name: 'complete_detail',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
            ]
        },
        {
            id: '3',
            question: '',
            answer: '',
            name: 'frequency_attack',
            declaration: '',
            heading: 'State the frequency of the attacks:',
            type: 'HEADING',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'In the last 12 months.',
                    answer: '',
                    name: 'months',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'Duration of each attack',
                    answer: '',
                    name: 'duration',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
            ]
        },
        {
            id: '4',
            question: 'When did the last attack occur?',
            answer: '',
            name: 'last_attack',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '5',
            question: '',
            answer: '',
            name: '',
            declaration: '',
            heading: '',
            type: 'HEADING',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'Do the attacks happen at day or at night?',
                    answer: '',
                    name: 'attacks_happen',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'Are you aware of any specific provoking cause for your attacks? If so, please provide complete details.',
                    answer: '',
                    name: 'specific',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
            ]
        },
        {
            id: '6',
            question: 'Do you lose consciousness during the attacks?',
            answer: '',
            name: 'consciousness',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '7',
            question: 'Do you ever bite your tongue during an attack?',
            answer: '',
            name: 'tongue',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '8',
            question: 'Are you taking drugs to prevent the attacks? If so, please provide the details.',
            answer: '',
            name: 'prevent_attack',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '9',
            question: 'Have you ever in the past had a head injury? If so, please describe the severity',
            answer: '',
            name: 'head_injury',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '10',
            question: 'Was an X ray or scan of your head ever been carried out? If so, please give details of the report / investigation and name and address of the consulting doctor.',
            answer: '',
            name: 'X_ray_carried',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '11',
            question: 'Have you lost significant time off work due to this condition? If so, please provide details including dates and time duration taken off work.',
            answer: '',
            name: 'significant_time',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '12',
            question: '',
            answer: '',
            name: '',
            declaration: '',
            heading: '',
            heading: 'Additional Information:',
            type: 'HEADING',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'Name of the doctor in charge',
                    answer: '',
                    name: 'doctor',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'Date of the last consultation',
                    answer: '',
                    name: 'consultation',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
            ]
        },
    ],
    "MUSCULO_SKELETAL_DISORDERS_QUESTION": [
        {
            id: '1',
            question: 'What was the precise diagnosis of your condition?',
            answer: '',
            name: 'precise',
            declaration: 'I hereby agree that the statements below shall form part of my proposal for insurance and I declare that such statements together with the said proposal and declaration shall be the basis of the contract between Bharti AXA Life Insurance Company Limited and myself.',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '2',
            question: 'Please give the date when you last experienced problems or symptoms.',
            answer: '',
            name: 'experienced',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '3',
            question: 'Which of your joints are affected?',
            answer: '',
            name: 'affected',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '4',
            question: 'Have you used a walking stick or any other mobility aid/s within the last two years?',
            answer: '',
            name: 'walking',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '5',
            question: 'Are the symptoms of this condition severe enough to restrict your activities in any way?',
            answer: '',
            name: 'condition',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '6',
            question: 'Please provide details of the frequency and severity of symptoms and the duration(s) of incapacity including dates and time off work.',
            answer: '',
            name: 'severity_symptoms',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '7',
            question: '',
            answer: '',
            name: '',
            declaration: '',
            heading: 'Please provide details of your treatment. Please specify the names of medication (e.g. Brufen, Indocid, Naprosyn etc), dosage and how often taken. Include details of any injections:',
            type: 'HEADING',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'Currrently:',
                    answer: '',
                    name: 'currrently',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'In Past:',
                    answer: '',
                    name: 'in_past',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                }
            ]
        },
        {
            id: '6',
            question: 'Have you taken any steroid medication for this condition? e.g. Betnesol, Ledercort, Prednesol, etc',
            answer: '',
            name: 'steroid_medication',
            vdeclaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '7',
            question: 'How has the condition been treated? Is future surgery planned?',
            answer: '',
            name: 'surgery_planned',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '8',
            question: 'How often do you attend for follow up?',
            answer: '',
            name: 'attend_follow',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '9',
            question: 'When was your last consultation?',
            answer: '',
            name: 'consultation',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '10',
            question: 'Please provide any additional information on your condition which in your opinion would be helpful for processing your application.',
            answer: '',
            name: 'additional_info',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
    ],
    "NERVOUS_DISORDER_QUESTION": [
        {
            id: '1',
            question: 'Please state the date and age when the episodes of Nervous tension/Depression/Insomnia/Anxiety/Stress first commence',
            answer: '',
            name: 'episodes',
            declaration: 'I hereby agree that the statements below shall form part of my proposal for insurance and I declare that such statements together with the said proposal and declaration shall be the basis of the contract between Bharti AXA Life Insurance Company Limited and myself.',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '2',
            question: 'What was the exact/precise diagnosis of your condition if known to you?',
            answer: '',
            name: 'precise_diagnosis',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '3',
            question: 'How frequently do you have such episodes?',
            answer: '',
            name: 'frequently',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '4',
            question: 'When did you last have an episode?',
            answer: '',
            name: 'last_episode',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '5',
            question: 'What were the symptoms and duration of the episodes?',
            answer: '',
            name: 'duration',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '6',
            question: 'Please provide details of the frequency and severity of symptoms and the duration(s) of incapacity including dates and time off work.',
            answer: '',
            name: 'frequency_severity',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '7',
            question: '',
            answer: '',
            name: '',
            declaration: '',
            heading: 'Were the episodes severe?',
            type: 'HEADING',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '2',
                    question: 'Did they necessitate absence from work? ',
                    answer: '',
                    name: 'necessitate',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'If so, how long were you absent from work?',
                    answer: '',
                    name: 'absent',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                }
            ]
        },
        {
            id: '8',
            question: '',
            answer: '',
            name: '',
            declaration: '',
            heading: 'What form of treatment was given and for what period? Please provide',
            type: 'HEADING',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'Complete details (name and dosage of medicines) with dates.',
                    answer: '',
                    name: 'complete_detail',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'Details of old treatment if the treatment has been changed by your consulting doctor',
                    answer: '',
                    name: 'treatment',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                }
            ]
        },
        {
            id: '9',
            question: '',
            answer: '',
            name: '',
            declaration: '',
            heading: 'Has an MRI/CT scan or other investigation ever been done? If so, please provide the following:',
            type: 'HEADING',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'Date on which it was done',
                    answer: '',
                    name: 'date',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'Name and address of the attending doctor',
                    answer: '',
                    name: 'address',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '3',
                    question: 'Findings',
                    answer: '',
                    name: 'findings',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '4',
                    question: 'Copies of the investigation reports',
                    answer: '',
                    name: 'investigation',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
            ]
        },
        {
            id: '10',
            question: 'Please provide the name and address of your consulting Doctor',
            answer: '',
            name: 'consulting_doctor',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '11',
            question: 'Please provide additional information, if any, with regard to the nervous disorder which will assist in processing your proposal.',
            answer: '',
            name: 'nervous_disorder',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
    ],
    "RESPIRATORY_DISORDER_QUESTION": [
        {
            id: '1',
            question: 'Have you ever been diagnosed with any respiratory disease such as asthma, bronchitis, emphysema, etc? If “YES” please provide details below',
            answer: '',
            name: 'diagnosed',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '2',
            question: 'Please state exact/precise diagnosis if known to you.',
            answer: '',
            name: 'precise_diagnosis',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '3',
            question: 'When the condition was first diagnosed?',
            answer: '',
            name: 'first_diagnosed',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '4',
            question: '',
            answer: '',
            name: 'undergone_pulmonary',
            declaration: '',
            heading: 'Has your chest ever been X rayed or you have undergone pulmonary function tests (PFT’s)? ',
            type: 'HEADING',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'If so, what were the results?',
                    answer: '',
                    name: 'results',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'Please enclose the copy of above reports – if available.',
                    answer: '',
                    name: 'enclose',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
            ]
        },
        {
            id: '5',
            question: 'How frequent were the attacks / symptoms of the respiratory disorder?',
            answer: '',
            name: 'frequent_attack',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '6',
            question: 'When did you last have an attack / symptom of the respiratory disorder?',
            answer: '',
            name: 'last_attack',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '7',
            question: '',
            answer: '',
            name: 'severe_attack',
            declaration: '',
            heading: 'How severe are the attacks. Have they necessitated sitting up in bed or an absence from work?',
            type: 'HEADING',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'Have you ever been hospitalised? If so please give full details.',
                    answer: '',
                    name: 'hospitalised',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                }
            ]
        },
        {
            id: '8',
            question: 'Were the attacks caused by any special circumstances or conditions? If so please give details. For example: exercise, stress, allergy etc',
            answer: '',
            name: 'circumstances',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '9',
            question: 'Please mention the name and address of your doctor or the attending doctor/ physician and date of last consultation.',
            answer: '',
            name: 'last_consultaion',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '10',
            question: '',
            answer: '',
            name: '',
            declaration: '',
            heading: '',
            type: 'HEADING',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'What medicine or drugs or inhalers are you taking to relieve the attacks?',
                    answer: '',
                    name: 'inhalers',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'Have you ever been given cortisone or other steroids?',
                    answer: '',
                    name: 'cortisone',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                }
            ]
        },
        {
            id: '11',
            question: 'Please provide additional information, if any, with regards the respiratory disorder which will assist in processing your proposal.',
            answer: '',
            name: 'respiratory_disorder',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        }
    ],
    "THYROID_DISORDER_QUESTION": [
        {
            id: '1',
            question: '',
            answer: '',
            name: '',
            declaration: 'I hereby agree that the statements below shall form part of my proposal for life insurance and I declare that such statements together with the said proposal and declaration shall be the basis of the contract between Bharti AXA Life Insurance Company Limited and myself.',
            heading: 'Have you ever been diagnosed for thyroid disorder?',
            type: 'HEADING',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'If so, please provide details below',
                    answer: '',
                    name: 'provide_details',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                }
            ]
        },
        {
            id: '2',
            question: 'What is the type of thyroid disorder. Hypothyroidism/Hyperthyroidism/ Thyroiditis/Goitre',
            answer: '',
            name: 'thyroid_disorder',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '3',
            question: 'When were you first diagnosed with this condition?',
            answer: '',
            name: 'first_diagnosed',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '4',
            question: '',
            answer: '',
            name: '',
            declaration: '',
            heading: 'Were any investigations carried out? For example thyroid function tests, ultrasonography, scintigraphy, etc.) If so, Please provide the following:',
            type: 'HEADING',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'Date of the investigation or test',
                    answer: '',
                    name: 'investigation',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'Name and address of Doctor',
                    answer: '',
                    name: 'address',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '3',
                    question: 'Details of findings',
                    answer: '',
                    name: 'findings',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                }
            ]
        },
        {
            id: '5',
            question: 'Have you ever had any operation for your thyroid disorder (e.g. thyroidectomy)? If so, please provide full details with copies of any reports in your possession (date of operation, type of operation, findings etc).',
            answer: '',
            name: 'thyroid_disorder2',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '6',
            question: 'Provide treatment details (name and dosage of the medicines)',
            answer: '',
            name: 'treatment',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '7',
            question: 'Do you have heart related problems arising out of thyroid disorder? If so, please provide details',
            answer: '',
            name: 'problems_arising',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '8',
            question: 'Do you have visual defect, loss of appetite, diarrhoea, tremor of hands, increased perspiration due to the thyroid disorder? If so, please provide details.',
            answer: '',
            name: 'visual_defect',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '9',
            question: 'Please do provide additional information, if any, with regards the thyroid disorder which will assist in processing your proposal.',
            answer: '',
            name: 'additional_information',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        }
    ],
    "tumour": [
        {
            id: '1',
            question: 'When was tumour, growth, lump or cyst first diagnosed?',
            answer: '',
            name: 'tumour_growth',
            declaration: 'I hereby agree that the statements below shall form part of my proposal for insurance and I declare that such statements together with the said proposal and declaration shall be the basis of the contract between Bharti AXA Life Insurance Company Limited and myself.',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '2',
            question: 'Please describe the location of the tumour',
            answer: '',
            name: 'location_tumour',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '3',
            question: 'Please describe the tumour/growth/lump or cyst (colour, shape and size) and diagnosis.',
            answer: '',
            name: 'tumour_diagnosis',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '4',
            question: '',
            answer: '',
            name: '',
            declaration: '',
            heading: '',
            heading: 'Were any investigations carried out (e.g chest x-ray, blood tests, MRI/CT/PET scan, etc.)If so, please state',
            type: 'HEADING',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'Date when the investigation test was carried out.',
                    answer: '',
                    name: 'investigation',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'Name and address of Doctor',
                    answer: '',
                    name: 'address',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '3',
                    question: 'The findings.',
                    answer: '',
                    name: 'findings',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                }
            ]
        },
        {
            id: '5',
            question: 'Please provide treatment details e.g. medicines, laceration, cryotherapy, radiotherapy, chemotherapy etc including the name/s of the medication',
            answer: '',
            name: 'treatment',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '6',
            question: 'What is your consulting doctor’s recommendation for your next treatment? (Please attach all consultation papers)',
            answer: '',
            name: 'recommendation',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '7',
            question: 'Have you had an operation for the removal of the tumour/growth/lump or cyst? Or has any surgery been suggested by your consulting doctor? ',
            answer: '',
            name: 'removal_tumour',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: true,
            subQuestions: []
        },
        {
            id: '8',
            question: 'If ‘Yes’, kindly provide detailed report of your consulting physician pre and post operation with operation summary sheet, hospital discharge card and histopathology report',
            answer: '',
            name: 'consulting_physician',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '9',
            question: 'Have you ever lost significant time off work due to this condition? If so please provide details including dates and time spent off work',
            answer: '',
            name: 'significant_time',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: true,
            subQuestions: []
        },
        {
            id: '10',
            question: 'Is there any additional information you can provide, with regards to this condition which will assist in processing your proposal?',
            answer: '',
            name: 'additional_information',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
    ],
}

// Download Document Data

export const downloadData = [
    {
        id: 1,
        title: 'Benefit Illustration',
        msg: '',
        downloadStatus: false,
        proposer: 'BI_TAG_NAME',
        insured: ''
    },
    {
        id: 2,
        title: 'Financial Needs Analysis',
        msg: '',
        downloadStatus: false,
        proposer: 'FNA_TAG_NAME',
        insured: ''
    },
    {
        id: 3,
        title: 'COVID Questionnaire',
        msg: '',
        downloadStatus: true,
        proposer: 'NEW_COVID_TAG_NAME_2',
        insured: 'COVID_TAG_NAME_2'

    },
    {
        id: 4,
        title: 'Proposal Form',
        msg: '',
        downloadStatus: false,
        proposer: 'PDF_TAG_NAME',
        insured: ''
    },
    {
        id: 5,
        title: 'Form 60',
        msg: '',
        downloadStatus: true,
        proposer: 'FORM60_TAG_NAME',
        insured: 'NEW_FORM60_TAG_NAME'
    },
    {
        id: 6,
        title: 'Payment Receipt',
        msg: '',
        downloadStatus: false,
        proposer: '',
        insured: ''
    },
    {
        id: 7,
        title: 'CDF',
        msg: '',
        downloadStatus: false,
        proposer: 'CDF_TAG_NAME',
        insured: ''
    },
    {
        id: 8,
        title: 'Counter Offer',
        msg: '',
        downloadStatus: false,
        proposer: 'REVISED_OFFER_DOC',
        insured: ''
    },
    {
        id: 9,
        title: 'Revised Benefit',
        msg: '',
        downloadStatus: false,
        proposer: 'REVISED_BI_DOC',
        insured: ''
    },
]

// consent data

export const consentData = [
    {
        id: 1,
        title: 'Proposer'
    },
    {
        id: 2,
        title: 'Insured'
    }
]

// document upload

export const uploadData = [
    {
        id: 1, upload: true, title: 'Age Proof', popUp: true
    },
    {
        id: 2, upload: true, title: 'Identity Proof', popUp: true
    },
    {
        id: 3, upload: true, title: 'Cash Authority Letter', popUp: false
    },
    {
        id: 4, upload: false, title: 'Bank Statement', popUp: false
    },
    {
        id: 5, upload: false, title: 'ITR', popUp: false
    },
    {
        id: 6, upload: false, title: 'Salary Slip', popUp: false
    },
]
export const docData = [
    {
        id: 1, title: 'Financial Document', popUp: true
    }
]
export const viewData = [
    {
        id: 1, title: 'ICIC Bank'
    },
    {
        id: 2, title: 'HDFC Bank'
    }
]

// document list 

export const uploadDocument = [
    {
        id: '1',
        title: 'Passport'
    },
    {
        id: '2',
        title: 'Voter Id'
    },
    {
        id: '3',
        title: 'Driving License'
    },
    {
        id: '4',
        title: 'NREGA job card signed by officer of State Government'
    },
    {
        id: '5',
        title: 'Aadhaar card '
    },
    {
        id: '6',
        title: 'National Population Register'
    },
    {
        id: '7',
        title: 'Letter issued by the Unique identification Authority of India'
    },
]

export const documentsUplaod = [
    {
        id: '1',
        title: 'Bank Statement'
    },
    {
        id: '2',
        title: 'ITR'
    },
    {
        id: '3',
        title: 'Salary Slip'
    },
]

// status api data

export const statusApi =
{
    "proposalId": 3842398,
    "customerId": null,
    "quoteId": 3842397,
    "quoteRefNumber": "23750071864230823",
    "customerName": "TESR ",
    "firstName": "TESR",
    "middleName": "",
    "lastName": "",
    "planName": "Bharti AXA Life Secure Income Plan",
    "sumAssured": 89084,
    "proposalNumber": "3108426548",
    "premium": 150000,
    "journeyStatus": "UNDERWRITING_SUBMITTED",
    "agentCode": null,
    "emailId": "OK@OK.COM",
    "mobileNo": "8826979056",
    "dateOfBirth": "11-05-1994",
    "channelName": "",
    "subChannelName": "",
    "sourceName": "MSell",
    "policyFor": "OTHER",
    "quotationRefNum": "23750071864230823",
    "policyNumber": "506-8151504",
    "overallUWDecisionCd": "Counter Offer",
    "uniqueProposalId": "ajkxMnN4bVlxM0Q4c3I5R2xyalNuUT09",
    "workFlowStage": null,
    "pasaCase": false,
    "premiumPaymentTerm": 5,
    "policyTerm": 15,
    "newgenStatusResponseDTOList": [
        {
            "id": 3865816,
            "status": "DATA_CHANGE",
            "subStatus": 'AD',
            "actual_status": "CREATED",
            "updatedOn": "2023-09-02 12:28:31",
            "createdOn": "2023-09-02 06:58:31",
            "additionalInfo": null
        },
        {
            "id": 3865814,
            "status": "FINANCIAL_AND_MEDICAL_RISK_VERIFICATION",
            "subStatus": null,
            "actual_status": "CREATED",
            "updatedOn": "2023-09-02 12:28:31",
            "createdOn": "2023-09-02 06:58:31",
            "additionalInfo": null
        },
        {
            "id": 3865813,
            "status": "MEDICAL_RISK_VERIFICATION",
            "subStatus": null,
            "actual_status": "CREATED",
            "updatedOn": "2023-09-02 12:28:31",
            "createdOn": "2023-09-02 06:58:31",
            "additionalInfo": null
        },
        {
            "id": 3865811,
            "status": "PAYMENT_REQUIREMENT",
            "subStatus": null,
            "actual_status": "CREATED",
            "updatedOn": "2023-09-02 12:28:31",
            "createdOn": "2023-09-02 06:58:31",
            "additionalInfo": null
        },
        {
            "id": 3865810,
            "status": "PAYMENT",
            "subStatus": "PAYMENT",
            "actual_status": "COMPLETED",
            "updatedOn": "2023-09-02 07:02:00",
            "createdOn": "2023-09-02 06:58:31",
            "additionalInfo": null
        },
        {
            "id": 3865807,
            "status": "MEDICAL_REQUIREMENT",
            "subStatus": null,
            "actual_status": "CREATED",
            "updatedOn": "2023-09-02 12:28:31",
            "createdOn": "2023-09-02 06:58:31",
            "additionalInfo": null
        },
        {
            "id": 3865805,
            "status": "PROPOSAL",
            "subStatus": "Health_Details",
            "actual_status": "COMPLETED",
            "updatedOn": "2023-09-02 07:01:13",
            "createdOn": "2023-09-02 06:58:31",
            "additionalInfo": null
        },
        {
            "id": 3865804,
            "status": "PROPOSAL",
            "subStatus": "Nominee_Details",
            "actual_status": "COMPLETED",
            "updatedOn": "2023-09-02 06:59:39",
            "createdOn": "2023-09-02 06:58:31",
            "additionalInfo": null
        },
        {
            "id": 3823063,
            "status": "PROPOSAL",
            "subStatus": "Insured_Proposer_Details",
            "actual_status": "COMPLETED",
            "updatedOn": "2023-08-17 15:32:46",
            "createdOn": "2023-08-17 15:32:46"
        }, 
        {
            "id": 3865803,
            "status": "PROPOSAL",
            "subStatus": "Personal_Details",
            "actual_status": "COMPLETED",
            "updatedOn": "2023-09-02 06:59:15",
            "createdOn": "2023-09-02 06:58:31",
            "additionalInfo": null
        },
        {
            "id": 3865802,
            "status": "QUOTE",
            "subStatus": "QUOTE",
            "actual_status": "COMPLETED",
            "updatedOn": "2023-09-02 12:28:31",
            "createdOn": "2023-09-02 06:58:31",
            "additionalInfo": null
        },
        {
            "id": 3865808,
            "status": "ADDITIONAL_NON_MEDICAL_REQUIREMENT",
            "subStatus": 'AR',
            "actual_status": "CREATED",
            "updatedOn": "2023-09-02 12:28:31",
            "createdOn": "2023-09-02 06:58:31",
            "additionalInfo": null
        },
        {
            "id": 3865809,
            "status": "REVISED_OFFER",
            "subStatus": "CO",
            "actual_status": "CREATED",
            "updatedOn": "2023-09-07 06:48:54",
            "createdOn": "2023-09-02 06:58:31",
            "additionalInfo": "{\"id\": null, \"pt\": \"10\", \"sa\": \"SA\", \"ppt\": \"20\", \"smoker\": \"YES\", \"planName\": \"test Pan\", \"loadingType\": \":LoadingType\", \"riderStatus\": [{\"status\": \"Axctive\", \"partyRole\": \"20\", \"riderName\": \"10\"}], \"tempLoading\": \"testtemLoading\", \"medicalLoading\": null, \"revisedPremium\": 20000, \"shortfallPremium\": 100, \"counterOfferReason\": \"testC ounter Offer\", \"tempLoadingDuration\": \"testeLoaduruation\"}"
        },
        {
            "id": 3865815,
            "status": "POLICY_STATUS",
            "subStatus": "PI",
            "actual_status": "COMPLETED",
            "updatedOn": "2023-09-02 08:46:58",
            "createdOn": "2023-09-02 06:58:31",
            "additionalInfo": null
        },
        {
            "id": 3865806,
            "status": "PROPOSAL_SUBMISSION",
            "subStatus": "COMPLETED",
            "actual_status": "COMPLETED",
            "updatedOn": "2023-09-07 06:54:21",
            "createdOn": "2023-09-02 06:58:31",
            "additionalInfo": null
        },
        {
            "id": 3865812,
            "status": "QUALITY_CHECK",
            "subStatus": null,
            "actual_status": "COMPLETED",
            "updatedOn": "2023-09-02 09:05:35",
            "createdOn": "2023-09-02 06:58:31",
            "additionalInfo": null
        }
    ],
    "requiredDocuments": {
        "list": [
            {
                "name": "OWNER",
                "personName": "TESR ",
                "documentList": [
                    {
                        "mandatoryDoc": "1",
                        "category": "Age Proof",
                        "indexValue": "Age Proof",
                        "documents": {
                            "Age Proof": [
                                "PAN Card"
                            ]
                        }
                    },
                    {
                        "mandatoryDoc": "1",
                        "category": "Identity Proof",
                        "indexValue": "Identity Proof",
                        "documents": {
                            "Identity Proof": [
                                "PAN Card"
                            ]
                        }
                    },
                    {
                        "mandatoryDoc": "1",
                        "category": "Initial Payment Instrument Scan",
                        "indexValue": "Other Documents",
                        "documents": {
                            "Initial Payment Instrument Scan": [
                                "Initial Payment Cheque Scan"
                            ]
                        }
                    },
                    {
                        "mandatoryDoc": "1",
                        "category": "Permanent Address proof",
                        "indexValue": "Permanent Address Proof",
                        "documents": {
                            "Permanent Address proof": [
                                "Passport",
                                "Voters Id",
                                "Driving License",
                                "NREGA Job card signed by officer of State Government",
                                "Aadhaar Card",
                                "National Population Register",
                                "Letter issued by the Unique identification Authority of lndia"
                            ]
                        }
                    },
                    {
                        "mandatoryDoc": "3",
                        "category": "Documents",
                        "indexValue": "Cancelled Cheque Copy",
                        "documents": {
                            "Documents": [
                                "Cancelled Cheque or Bank Statement",
                                "PAN or Form 60",
                                "Recent Colour Photograph"
                            ]
                        }
                    },
                    {
                        "mandatoryDoc": "0",
                        "category": "Other Document",
                        "indexValue": "OTHERS",
                        "documents": {
                            "Other Document": [
                                "Other Document 1",
                                "Other Document 2",
                                "Other Document 3",
                                "Other Document 4",
                                "Other Document 5"
                            ]
                        }
                    }
                ]
            },
            {
                "name": "INSURER",
                "personName": "TESR ",
                "documentList": [
                    {
                        "mandatoryDoc": "1",
                        "category": "Age Proof",
                        "indexValue": "Age Proof",
                        "documents": {
                            "Age Proof": [
                                "PAN Card"
                            ]
                        }
                    },
                ]
            },

        ]
    },
    "policyDocuments": {
        "BI_TAG_NAME": "23750071864230823.pdf",
        "CDF_TAG_NAME": "3108426548CDF.pdf",
        "FNA_TAG_NAME": "3108426548FNA.pdf",
        "PDF_TAG_NAME": "3108426548_PF.pdf",
        "COVID_TAG_NAME_2": "3108426548InsuredCovid19.pdf",
        "NEW_ACR_TAG_NAME": "506-8151504_ACR.pdf",
        "NEW_COVID_TAG_NAME_2": "3108426548covid_19.pdf",
        "AGENT_CONFIDENTIAL_REPORT": "AgentConfidentialReport.pdf"
    },
    "paymentReceipts": [],
    "additionalInfoDocs": {
        "uwId": 48521,
        "proposerDocumentDetail": {
            "guid": null,
            "id": null,
            "medicalScheduling": false,
            "ServiceDocumentList": [
                {
                    "id": 1,
                    "proposalNumber": null,
                    "partyType": "OWNER",
                    "docCategoryTypeCd": "QUES",
                    "docCategoryCd": "HYPER",
                    "documentCd": "HYPER",
                    "docCategoryTypeCdValue": null,
                    "docCategoryCdValue": null,
                    "documentCdValue": "Hypertension Questionnaire",
                    "mandatoryDoc": "true",
                    "indexValue": "Medical Questionnaire",
                    "url": "owner_hyper_ques_1693909784441_front_side.pdf",
                    "side": null,
                    "documentNumber": null,
                    "isAutoGeneratedFl": "true",
                    "documentMovedStatus": false,
                    "questions": [
                        {
                            "questionId": null,
                            "questionSetCD": null,
                            "questionTypeCD": null,
                            "dataElementCD": null,
                            "answer": "testAnswer1",
                            "question": "testQuestions1",
                            "details": null,
                            "rowGuid": null,
                            "subQuestions": null,
                            "editable": null
                        },
                        {
                            "questionId": null,
                            "questionSetCD": null,
                            "questionTypeCD": null,
                            "dataElementCD": null,
                            "answer": "testAnswer2",
                            "question": "testQuestions2",
                            "details": null,
                            "rowGuid": null,
                            "subQuestions": null,
                            "editable": null
                        },
                        {
                            "questionId": null,
                            "questionSetCD": null,
                            "questionTypeCD": null,
                            "dataElementCD": null,
                            "answer": "testAnswer3",
                            "question": "testQuestions3",
                            "details": null,
                            "rowGuid": null,
                            "subQuestions": null,
                            "editable": null
                        }
                    ],
                    "questionnaire": true
                },
                {
                    "id": 2,
                    "proposalNumber": null,
                    "partyType": "OWNER",
                    "docCategoryTypeCd": "PAN",
                    "docCategoryCd": "PANAP",
                    "documentCd": "PAN",
                    "docCategoryTypeCdValue": null,
                    "docCategoryCdValue": null,
                    "documentCdValue": "PAN Card",
                    "mandatoryDoc": "true",
                    "indexValue": "Age Proof",
                    "url": null,
                    "side": null,
                    "documentNumber": null,
                    "isAutoGeneratedFl": "true",
                    "documentMovedStatus": false,
                    "questionnaire": false
                }
            ]
        },
        "primaryInsuredDocumentDetail": {
            "guid": null,
            "id": null,
            "medicalScheduling": false,
            "ServiceDocumentList": [
                {
                    "id": 3,
                    "proposalNumber": null,
                    "partyType": "INSURER",
                    "docCategoryTypeCd": "PAN",
                    "docCategoryCd": "PANAP",
                    "documentCd": "PAN",
                    "docCategoryTypeCdValue": null,
                    "docCategoryCdValue": null,
                    "documentCdValue": "PAN Card",
                    "mandatoryDoc": "true",
                    "indexValue": "Age Proof",
                    "url": null,
                    "side": null,
                    "documentNumber": null,
                    "isAutoGeneratedFl": "true",
                    "documentMovedStatus": false,
                    "questionnaire": false
                }
            ]
        },
        "jointLifeDocumentDetail": null
    },
    "instaDetails": null,
    "consentDetail": {
        "whatsAppOpt": false,
        "whatsAppCommunicationAgree": false,
        "mobileCommunicationAgree": true,
        "ecdfFormAgree": false,
        "policyDocumentOnEmailAgree": false,
        "digiLockerAgree": false,
        "proposalNumber": null,
        "proposalFormLink": null,
        "cdfFormLink": null,
        "policyDocumentLink": null,
        "accepted": null,
        "rejectedReason": null,
        "fincareConsentLink": null,
        "customerConsentLink": null,
        "agentConsentLink": null,
        "agentConsent": false,
        "tpaConsentLink": "https://dev-onboarding.bhartiaxa.com/mcustomer/app?pn=MzEwODQyNjU0OA==&et=TW9uIEF1ZyAyOCAxMDowNzowNyBVVEMgMjAyMw==",
        "refNumber": null,
        "verificationDate": null,
        "otp": null,
        "verified": null,
        "otpTimeStamp": null,
        "insta2ConsentSent": null,
        "insta2MessageSent": null,
        "customerConsentRequired": false,
        "agentConsentRequired": false,
        "customerConsentRejectedReason": null,
        "customerConsentRejected": false
    },
    "customerConsentRequired": false,
    "agentConsentRequired": false,
    "instaRequired": true,
    "proposerName": "ONEE",
    "insuredName": null
}


// consent data

export const consentForChangeData = [
    {
        id: 1,
        title: 'Proposer’s Detail',
        detail: [
            {
                id: 1,
                title: 'Pincode',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 2,
                title: 'PFP',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 3,
                title: 'Any ealth Questionnaire',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 4,
                title: 'Residential Country',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 5,
                title: 'Age proof',
                oldDetail: '',
                reviseDetail: ''
            },
            {
                id: 6,
                title: 'Fund details',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 7,
                title: 'Title',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 8,
                title: 'Name',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 9,
                title: 'Date of Birth',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 10,
                title: 'Age',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 11,
                title: 'Gender',
                oldDetail: '',
                revisedDetail: ''
            },
        ]
    },
    {
        id: 2,
        title: 'Insured’s Detail',
        detail: [
            {
                id: 1,
                title: 'Pincode',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 2,
                title: 'PFP',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 3,
                title: 'Any ealth Questionnaire',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 4,
                title: 'Residential Country',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 5,
                title: 'Age proof',
                oldDetail: '',
                reviseDetail: ''
            },
            {
                id: 6,
                title: 'Fund details',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 7,
                title: 'Title',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 8,
                title: 'Name',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 9,
                title: 'Date of Birth',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 10,
                title: 'Age',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 11,
                title: 'Gender',
                oldDetail: '',
                revisedDetail: ''
            },
        ]
    },
    {
        id: 3,
        title: 'Plan Detail',
        detail: [
            {
                id: 1,
                title: 'Plan option',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 2,
                title: 'Base Sum Assured',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 3,
                title: 'Base Premium Term',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 4,
                title: 'Base Policy Term',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 5,
                title: 'Base Modal Premium',
                oldDetail: '',
                reviseDetail: ''
            },
            {
                id: 6,
                title: 'Payement Frequency',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 7,
                title: 'Premium Payment Mode',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 8,
                title: 'Premium Payment Method',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 9,
                title: 'Existing Bharti Axa Customer',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 10,
                title: 'Employee Discount',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 11,
                title: 'Rider Name',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 12,
                title: 'Rider Sum Assured',
                oldDetail: '',
                reviseDetail: ''
            },
            {
                id: 13,
                title: 'Rider Policy Term',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 14,
                title: 'Rider Premium Term',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 15,
                title: 'Top Up Premium',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 16,
                title: 'Loading Premium',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 17,
                title: 'Payout Type',
                oldDetail: '',
                revisedDetail: ''
            },
            {
                id: 11,
                title: 'Payout Frequency',
                oldDetail: '',
                revisedDetail: ''
            }
        ]
    }
]


const PolicySubStatus = {
    "PM":"Policy Approved",
    "PI": "Policy Issued",
    "PD": "Policy declined",
    "PP": "policy postponed",
    "PR": "policy rejected",
    "PC": "Policy cancelled",
    "PW": "Policy in WIP for dispatch",
    "PT": "Policy Dispatched",
}