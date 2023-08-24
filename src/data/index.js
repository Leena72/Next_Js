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
                subHeading: 'Yet to start',
                img: img_2,
                dummyContent: 'Dummy Content',
                contentStatus: false,
                subContent: []
            },
            {
                id: 3,
                heading: 'Customer Consent',
                subHeading: 'Yet to start',
                img: img_3,
                dummyContent: '3',
                contentStatus: false,
                subContent: []
            },
            {
                id: 4,
                heading: 'Payment',
                subHeading: 'Yet to start',
                img: img_4,
                dummyContent: '3',
                contentStatus: false,
                subContent: []
            },
            {
                id: 5,
                heading: 'Document Upload',
                subHeading: 'Yet to start',
                img: img_5,
                dummyContent: '3',
                contentStatus: false,
                subContent: []
            },
            {
                id: 6,
                heading: 'Proposal Submission',
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
        heading: 'Consent for change in the application details',
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
                formName: 'ALCOHOL_HABIT_QUESTION'
            },
            {
                id: 2,
                title: 'Chest Pain Questionnaire',
                formName: 'CHEST_PAIN_QUESTION'
            },
            {
                id: 3,
                title: 'Deformity Questionnaire',
                formName: 'DEFORMITY_QUESTION'
            },
            {
                id: 4,
                title: 'DIABETES Questionnaire',
                formName: 'diabetes'
            },
            {
                id: 5,
                title: 'Digestive Disorder Questionnaire',
                formName: 'DIGESTIVE_DISORDER_QUESTION'
            },
            {
                id: 6,
                title: 'Epilepsy Questionnaire',
                formName: 'EPILEPSY_QUESTION'
            },
            {
                id: 7,
                title: 'Musculoskeletal Questionnaire',
                formName: 'MUSCULO_SKELETAL_DISORDERS_QUESTION'
            },
            {
                id: 8,
                title: 'Nervous Disorder Questionnaire',
                formName: 'NERVOUS_DISORDER_QUESTION'
            },
            {
                id: 9,
                title: 'Resipratory Disorder Questionnaire',
                formName: 'RESPIRATORY_DISORDER_QUESTION'
            },
            {
                id: 10,
                title: 'Thyroid Disorder Questionnaire',
                formName: 'THYROID_DISORDER_QUESTION'
            },
            {
                id: 11,
                title: 'Tumour Questionnaire',
                formName: 'tumour'
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

export const questionnaireList = {
    "ALCOHOL_HABIT_QUESTION": [
        {
            id: '1',
            question: '',
            answer: '',
            name: 'ques1',
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
                    name: 'subQues',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'Frequency of consumption per week',
                    answer: '',
                    name: 'subQues',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '3',
                    question: 'Frequency of consumption per day',
                    answer: '',
                    name: 'subQues',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '4',
                    question: 'Units consumed per week',
                    answer: '',
                    name: 'subQues',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '5',
                    question: 'Units consumed per day',
                    answer: '',
                    name: 'subQues',
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
            name: 'ques2',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: true,
            subQuestions: []
        },
        {
            id: '3',
            question: 'Have you ever received medical or other treatment for excessive consumption of alcohol? If so, give name and address of attending doctor or clinic/institution where treatment was received.',
            answer: '',
            name: 'ques3',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: true,
            subQuestions: []
        },
        {
            id: '4',
            question: 'Are you taking any medication presently? If ‘yes’ please provide the name and dosage of medicines.',
            answer: '',
            name: 'ques4',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: true,
            subQuestions: []
        },
        {
            id: '5',
            question: 'Have you ever been involved in any breach of the law in connection with the use of alcohol?',
            answer: '',
            name: 'ques5',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: true,
            subQuestions: []
        },
        {
            id: '6',
            question: 'Please do provide additional information, if any, with regards to your alcohol consumption habits which will assist in processing your proposal.',
            answer: '',
            name: 'ques6',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: true,
            subQuestions: []
        },

    ],
    "CHEST_PAIN_QUESTION": [
        {
            id: '1',
            question: 'When did you suffer the ﬁrst attack of chest pain (date or at what age)?',
            answer: '',
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
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'State character and severity of the pain For example burning, cramping, constricting, stabbing, crushing, vice like, dull.',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '3',
                    question: 'State character and severity of the pain For example burning, cramping, constricting, stabbing, crushing, vice like, dull.',
                    answer: '',
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
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: true,
            subQuestions: []
        },
        {
            id: '3',
            question: 'Did the pain occur suddenly or gradually? At rest or on exertion? Did it worsen with deep inspiration?',
            answer: '',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: true,
            subQuestions: []
        },
        {
            id: '4',
            question: 'How long did the chest pain last?',
            answer: '',
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
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '6',
            question: 'Were any investigations carried out (for example ECG, Echocardiogram)If so, please state',
            answer: '',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'Date when the investigation test was carried out.',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'Name and address of Doctor',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '3',
                    question: 'THe findings.',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
            ]
        },
        {
            id: '7',
            question: 'Have you ever been booked off from work due to chest pain? If so please provide details including dates and time spent off work.',
            answer: '',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '8',
            question: 'Is there any additional information you can provide, with regards the chest pain which will assist in processing your proposal?',
            answer: '',
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
            declaration: 'I hereby agree that the statements below shall form part of my proposal for insurance and I declare that such statements together with the said proposal and declaration shall be the basis of the contract between Bharti AXA Life Insurance Company Limited and myself.',
            heading: 'Underlying cause of the deformity:',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'From birth (congenital)',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'Accidental reasons',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '3',
                    question: 'Due to disease or infection',
                    answer: '',
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
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: true,
            subQuestions: []
        },
        {
            id: '3',
            question: 'When was the condition first diagnosed?',
            answer: '',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: true,
            subQuestions: []
        },
        {
            id: '4',
            question: 'Is the deformity stable or progressive?',
            answer: '',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: true,
            subQuestions: []
        },
        {
            id: '5',
            question: 'What is the degree of disability?',
            answer: '',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: true,
            subQuestions: []
        },
        {
            id: '6',
            question: '',
            answer: '',
            declaration: '',
            heading: 'What part (s) of the body are affected by the deformity? (Please do provide detailed information)',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'Are you able to squat?',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'Are you able to run?',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '3',
                    question: 'Do you have firm grip of hands?',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '4',
                    question: 'Please mention the parts of body affected by any thinning or wasting of muscles.',
                    answer: '',
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
            declaration: '',
            heading: 'Occupational details:',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'Nature of your job',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'Are you able to carry out your normal day to day activities',
                    answer: '',
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
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: true,
            subQuestions: []
        },
        {
            id: '9',
            question: 'Please do provide treatment details including name and dosage of the medicine/s.',
            answer: '',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: true,
            subQuestions: []
        },
    ],
    "diabetes": [
        {
            id: '1',
            question: '5',
            answer: '',
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
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'State the exact site of pain',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'State character of the pain eg. burning, cramping, constricting.',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '3',
                    question: 'Did the pain ever extend to the chest, throat or arms.',
                    answer: '',
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
            declaration: '',
            heading: 'Details of attacks:',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'How severe are the attacks?',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'How frequent are the attacks (daily, weekly etc)?',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '3',
                    question: 'Have you ever vomited blood, had a black stool or passed blood from the bowel?',
                    answer: '',
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
            declaration: '',
            heading: 'Did the attacks ever produce any',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'pain in the chest or arms?',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'breathlessness?',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '3',
                    question: 'Are the attacks aggravated by exercise?',
                    answer: '',
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
            declaration: '',
            heading: 'Are the attacks related to meals? If so, state',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'how long after eating do they occur?',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'whether they are relieved or aggravated following a meal?',
                    answer: '',
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
            declaration: '',
            heading: 'Has an X ray/Ultra Sonography of the stomach or other investigation ever been done? If so, please state',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'When was it done',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'Name and address of the Doctor',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '3',
                    question: 'What were the findings for example was an ulcer diagnosed',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '4',
                    question: 'Have you ever been booked off from work due to chest pain? If so please provide details including dates and time spent off work.',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
            ]
        },
        {
            id: '8',
            question: 'Is there any additional information you can provide, with regards the chest pain which will assist in processing your proposal?',
            answer: '',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
    ],
    "EPILEPSY_QUESTION": [
        {
            id: '1',
            question: 'At what age did the attacks first commence?',
            answer: '',
            declaration: 'I hereby agree that the statements below shall form part of my proposal for insurance and I declare that such statements together with the said proposal and declaration shall be the basis of the contract between Bharti AXA Life Insurance Company Limited and myself.',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '2',
            question: 'At what age did the attacks first commence?',
            answer: '',
            declaration: '',
            heading: 'Have the attack ever been described as of a particular type? For example. Grandmal, Petitmal.',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'If so, please provide complete details.',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
            ]
        },
        {
            id: '3',
            question: 'State the frequency of the attacks: In the last 12 months Duration of each attack',
            answer: '',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '4',
            question: 'When did the last attack occur?',
            answer: '',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '5',
            question: 'Do the attacks happen at day or at night? Are you aware of any specific provoking cause for your attacks? If so, please provide complete details.',
            answer: '',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '6',
            question: 'Do you lose consciousness during the attacks?',
            answer: '',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '7',
            question: 'Are you taking drugs to prevent the attacks? If so, please provide the details.',
            answer: '',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '8',
            question: 'Have you ever in the past had a head injury? If so, please describe the severity',
            answer: '',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '9',
            question: 'Was an X ray or scan of your head ever been carried out? If so, please give details of the report / investigation and name and address of the consulting doctor.',
            answer: '',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '10',
            question: 'Have you lost significant time off work due to this condition? If so, please provide details including dates and time duration taken off work.',
            answer: '',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '11',
            question: '',
            answer: '',
            declaration: '',
            heading: '',
            heading: 'Additional Information:',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'Name of the doctor in charge',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'Date of the last consultation',
                    answer: '',
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
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '7',
            question: 'Please provide details of your treatment. Please specify the names of medication (e.g. Brufen, Indocid, Naprosyn etc), dosage and how often taken. Include details of any injections:',
            answer: '',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'Currrently:',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'In Past:',
                    answer: '',
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
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '7',
            question: 'Were the episodes severe? Did they necessitate absence from work? If so, how long were you absent from work?',
            answer: '',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '8',
            question: '',
            answer: '',
            declaration: '',
            heading: 'What form of treatment was given and for what period? Please provide',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'complete details (name and dosage of medicines) with dates.',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'details of old treatment if the treatment has been changed by your consulting doctor',
                    answer: '',
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
            declaration: '',
            heading: 'Has an MRI/CT scan or other investigation ever been done? If so, please provide the following:',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'Date on which it was done',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'Name and address of the attending doctor',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '3',
                    question: 'Findings',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '4',
                    question: 'Copies of the investigation reports',
                    answer: '',
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
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '4',
            question: 'Has your chest ever been X rayed or you have undergone pulmonary function tests (PFT’s)? If so, what were the results? Please enclose the copy of above reports – if available.',
            answer: '',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '5',
            question: 'How frequent were the attacks / symptoms of the respiratory disorder?',
            answer: '',
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
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '7',
            question: 'How severe are the attacks. Have they necessitated sitting up in bed or an absence from work? Have you ever been hospitalised? If so please give full details.',
            answer: '',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '8',
            question: 'Were the attacks caused by any special circumstances or conditions? If so please give details. For example: exercise, stress, allergy etc',
            answer: '',
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
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'What medicine or drugs or inhalers are you taking to relieve the attacks?',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'Have you ever been given cortisone or other steroids?',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                }
            ]
        },
        {
            id: '10',
            question: 'Please provide additional information, if any, with regards the respiratory disorder which will assist in processing your proposal.',
            answer: '',
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
            question: 'Have you ever been diagnosed for thyroid disorder?',
            answer: '',
            declaration: 'I hereby agree that the statements below shall form part of my proposal for life insurance and I declare that such statements together with the said proposal and declaration shall be the basis of the contract between Bharti AXA Life Insurance Company Limited and myself.',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '2',
            question: 'If so, please provide details below',
            answer: '',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '3',
            question: 'What is the type of thyroid disorder. Hypothyroidism/Hyperthyroidism/ Thyroiditis/Goitre',
            answer: '',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '4',
            question: 'When were you first diagnosed with this condition?',
            answer: '',
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
            declaration: '',
            heading: 'Were any investigations carried out? For example thyroid function tests, ultrasonography, scintigraphy, etc.) If so, Please provide the following: • Date of the investigation or test • Name and address of Doctor • Details of findings',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'Date of the investigation or test',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'Name and address of Doctor',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '3',
                    question: 'Details of findings',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                }
            ]
        },
        {
            id: '6',
            question: 'Have you ever had any operation for your thyroid disorder (e.g. thyroidectomy)? If so, please provide full details with copies of any reports in your possession (date of operation, type of operation, findings etc).',
            answer: '',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '7',
            question: 'Provide treatment details (name and dosage of the medicines)',
            answer: '',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '8',
            question: 'Do you have heart related problems arising out of thyroid disorder? If so, please provide details',
            answer: '',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '9',
            question: 'Do you have visual defect, loss of appetite, diarrhoea, tremor of hands, increased perspiration due to the thyroid disorder? If so, please provide details.',
            answer: '',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '10',
            question: 'Please do provide additional information, if any, with regards the thyroid disorder which will assist in processing your proposal.',
            answer: '',
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
            declaration: '',
            heading: '',
            heading: 'Were any investigations carried out (e.g chest x-ray, blood tests, MRI/CT/PET scan, etc.)If so, please state',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: [
                {
                    id: '1',
                    question: 'Date when the investigation test was carried out.',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '2',
                    question: 'Name and address of Doctor',
                    answer: '',
                    type: 'textbox',
                    validation: '',
                    ansBtn: false,
                },
                {
                    id: '3',
                    question: 'The findings.',
                    answer: '',
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
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '7',
            question: 'Have you had an operation for the removal of the tumour/growth/lump or cyst? Or has any surgery been suggested by your consulting doctor? If ‘Yes’, kindly provide detailed report of your consulting physician pre and post operation with operation summary sheet, hospital discharge card and histopathology report',
            answer: '',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '8',
            question: 'Have you ever lost significant time off work due to this condition? If so please provide details including dates and time spent off work',
            answer: '',
            declaration: '',
            heading: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '9',
            question: 'Is there any additional information you can provide, with regards to this condition which will assist in processing your proposal?',
            answer: '',
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
        label: ''
    },
    {
        id: 2,
        title: 'Financial Needs Analysis',
        msg: '',
        downloadStatus: false,
        label: ''
    },
    {
        id: 3,
        title: 'COVID Questionnaire',
        msg: '',
        downloadStatus: true,
        label: ''
    },
    {
        id: 4,
        title: 'Proposal Form',
        msg: '',
        downloadStatus: false,
        label: ''
    },
    {
        id: 5,
        title: 'Form 60',
        msg: 'if PAN not available',
        downloadStatus: true,
        label: ''

    },
    {
        id: 1,
        title: 'Payment Receipt',
        msg: '',
        downloadStatus: false,
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
            "id": 3821155,
            "status": "QUOTE",
            "subStatus": "QUOTE",
            "actual_status": "COMPLETED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821160,
            "status": "PROPOSAL_SUBMISSION",
            "subStatus": "PENDING",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821161,
            "status": "MEDICAL_REQUIREMENT",
            "subStatus": "Waiting for Issuance",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821166,
            "status": "Revised_Offer",
            "subStatus": "Pending for Counter Offer",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821167,
            "status": "PAYMENT_REQUIREMENT",
            "subStatus": "Pending for Short Premium",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821179,
            "status": "MEDICAL_RISK_VERIFICATION",
            "subStatus": "Pending with TPA",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821180,
            "status": "FINANCIAL_AND_MEDICAL_RISK_VERIFICATION",
            "subStatus": " Pending for UW",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821156,
            "status": "PROPOSAL",
            "subStatus": "Personal_Details",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821157,
            "status": "PROPOSAL",
            "subStatus": "Nominee_Details",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821158,
            "status": "PROPOSAL",
            "subStatus": "Health_Details",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821159,
            "status": "PROPOSAL",
            "subStatus": "Insured_Proposer_Details",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821162,
            "status": "ADDITIONAL_NON_MEDICAL_REQUIREMENT",
            "subStatus": "Pending for Requirements (Med Requirement)",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821163,
            "status": "ADDITIONAL_NON_MEDICAL_REQUIREMENT",
            "subStatus": "Pending for Requirements (Non-Med Requirement)",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821164,
            "status": "ADDITIONAL_NON_MEDICAL_REQUIREMENT",
            "subStatus": "Pending for Requirements (Basic Requirement/Document)",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821165,
            "status": "ADDITIONAL_NON_MEDICAL_REQUIREMENT",
            "subStatus": "Pending for Requirements (Additional Requirement/Informations)",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821168,
            "status": "Quality_Check",
            "subStatus": "Pending for Auto UW",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821169,
            "status": "Quality_Check",
            "subStatus": "Pending for Requirement (Document required from Sales)",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821170,
            "status": "Quality_Check",
            "subStatus": "Pending for Branch QC",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821171,
            "status": "Quality_Check",
            "subStatus": "Pending for Central QC",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821172,
            "status": "Quality_Check",
            "subStatus": "Pending for Receipting (Payment acknowledgement)",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821173,
            "status": "Quality_Check",
            "subStatus": "Pending for RCU",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821174,
            "status": "Quality_Check",
            "subStatus": "Pending for Compliance/ FCU Decision",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821175,
            "status": "Quality_Check",
            "subStatus": "Pending for PIVC decision",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821176,
            "status": "Quality_Check",
            "subStatus": "Pending for cheque Clearance",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821177,
            "status": "Quality_Check",
            "subStatus": "PDQC",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821178,
            "status": "Quality_Check",
            "subStatus": "Pending for PIVC/FT fund clearance/Direct Debit clearance/NEFT clearance",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821181,
            "status": "POLICY",
            "subStatus": "Waiting for Issuance",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821182,
            "status": "POLICY",
            "subStatus": "Approved",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821183,
            "status": "POLICY",
            "subStatus": "Issued",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821184,
            "status": "POLICY",
            "subStatus": "Declined",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821185,
            "status": "POLICY",
            "subStatus": "Postponed",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821186,
            "status": "POLICY",
            "subStatus": "Rejected",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821187,
            "status": "POLICY",
            "subStatus": "Cancelled",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821188,
            "status": "POLICY",
            "subStatus": "PDQC",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
        },
        {
            "id": 3821189,
            "status": "POLICY",
            "subStatus": "Dispatched",
            "actual_status": "CREATED",
            "updatedOn": "2023-08-17 07:59:44",
            "createdOn": "2023-08-17 07:59:44"
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
            }
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
        "proposerDocumentDetail": {
            "guid": "3308301537P",
            "id": "136311",
            "medicalScheduling": false,
            "ServiceDocumentList": [
                {
                    "id": 1,
                    "proposalNumber": null,
                    "partyType": "OWNER",
                    "docCategoryTypeCd": "OTH",
                    "docCategoryCd": "OTHER",
                    "documentCd": null,
                    "docCategoryTypeCdValue": null,
                    "docCategoryCdValue": null,
                    "documentCdValue": null,
                    "mandatoryDoc": null,
                    "indexValue": "Age Proof",
                    "url": "owner_other_oth_1692695144825_front_side.pdf",
                    "side": null,
                    "documentNumber": null,
                    "isAutoGeneratedFl": "YES",
                    "documentMovedStatus": false
                }
            ]
        },
        "primaryInsuredDocumentDetail": null,
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
    }
}