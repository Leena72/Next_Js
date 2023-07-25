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
        title: 'Policy Term(in Year)',
        rupeeSign: true
    },
]

// Application Staus

export const applicationData = [
    {
        id: 1,
        heading: 'Quote Generated',
        subHeading: 'Completed: 26 JUNE, 2023 | 09:06 PM',
        completed: true,
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
        heading: 'Filling Form',
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
                heading: 'Basic Document Upload',
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
        heading: 'Add Non-Medical',
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
        heading: 'Payment Requirement',
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
        heading: 'Policy Status',
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
        title: 'Alcohol Habit Questionnaire ',
        formName:'alcohol'
    },
    {
        id: 2,
        title: 'Chest Pain Questionnaire',
        formName:'chest'
    },

    {
        id: 3,
        title: 'Deformity Questionnaire',
        formName:'deformity'
    },
    {
        id: 4,
        title: 'DIABETES Questionnaire',
        formName:'diabetes'
    },
    {
        id: 5,
        title: 'Digestive Disorder Questionnaire',
        formName:'digestive'
    },
    {
        id: 6,
        title: 'Epilepsy Questionnaire',
        formName:'epilepsy'
    },
    {
        id: 7,
        title: 'Musculoskeletal Questionnaire',
        formName:'musculoskeletal'
    },
    {
        id: 8,
        title: 'Nervous Disorder Questionnaire',
        formName:'nervous'
    },
    {
        id: 9,
        title: 'Resipratory Disorder Questionnaire',
        formName:'resipratory'
    },
    {
        id: 10,
        title: 'Thyroid Disorder Questionnaire',
        formName:'thyroid'
    },
    {
        id: 11,
        title: 'Tumour Questionnaire',
        formName:'tumour'
    },
]

export const questions = {
    "alcohol": [

    ],
    "chest": [
        {
            id: '1',
            question: 'When did you suffer the ﬁrst attack of chest pain (date or at what age)?',
            answer: '',
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
            type: 'textbox',
            validation: '',
            ansBtn: true,
            subQuestions: []
        },
        {
            id: '3',
            question: 'Did the pain occur suddenly or gradually? At rest or on exertion? Did it worsen with deep inspiration?',
            answer: '',
            type: 'textbox',
            validation: '',
            ansBtn: true,
            subQuestions: []
        },
        {
            id: '4',
            question: 'How long did the chest pain last?',
            answer: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '5',
            question: 'When did you last have such symptoms or experience an attack?',
            answer: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '6',
            question: 'Were any investigations carried out (for example ECG, Echocardiogram)If so, please state',
            answer: '',
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
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
        {
            id: '8',
            question: 'Is there any additional information you can provide, with regards the chest pain which will assist in processing your proposal?',
            answer: '',
            type: 'textbox',
            validation: '',
            ansBtn: false,
            subQuestions: []
        },
    ],
    "deformity": [],
    "disbetes": [],
    "digestive": [],
    "epilepsy": [],
    "musculoskeletal": [],
    "nervous": [],
    "respiratory": [],
    "thyroid": [],
    "tumour": [],
}



// Download Document Data

export const downloadData = [
    {
        id: 1,
        title: 'Benefit Illustration',
        msg: '',
    },
    {
        id: 1,
        title: 'Financial Needs Analysis',
        msg: '',
    },
    {
        id: 1,
        title: 'COVID Questionnaire',
        msg: '',
    },
    {
        id: 1,
        title: 'Proposal Form',
        msg: '',
    },
    {
        id: 1,
        title: 'Form 60',
        msg: 'if PAN not available',
    },
    {
        id: 1,
        title: 'Payment Receipt',
        msg: '',
    },
]

