import activeImg_1 from "../Assets/images/1_active.png";
import img_1 from "../Assets/images/1.png";
import activeImg_2 from "../Assets/images/2_2active.png";
import img_2 from "../Assets/images/2_2.png";
import activeImg_7 from "../Assets/images/7_active.png";
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
        image: '',
        heading: 'Quote Generated',
        subHeading: 'Completed: 26 JUNE, 2023 | 09:06 PM',
        completed: true,
        dummyContent: 'Content here',
        contentStatus: false,
        active_icon:activeImg_1,
        img: img_1,
        content: [
            {
                id: 1,
                msg: '',
                heading: '',
                subHeading: '',
            },
        ]
    },
    {
        id: 2,
        image: '',
        heading: 'Filling Form',
        subHeading: 'Yet to start',
        completed: false,
        dummyContent: '',
        contentStatus: true,
        active_icon:activeImg_2,
        img: img_2,
        content: [
            {
                id: 1,
                msg: 'Proposer',
                heading: 'Basic detail Section',
                subHeading: 'Draft',
            },
            {
                id: 2,
                msg: 'Conditional inly for Insured-Proposer cases',
                heading: 'Insured detail Section',
                subHeading: 'Draft',
            },
            {
                id: 3,
                msg: '',
                heading: 'Nominee detail Section',
                subHeading: 'Draft',
            },
            {
                id: 4,
                msg: '',
                heading: 'Health Questionnaires Section',
                subHeading: 'Draft',
            },
        ]
    },
    {
        id: 3,
        image: '',
        heading: 'Medical Requirement',
        subHeading: 'Yet to start',
        completed: false,
        dummyContent: 'Click here to initiate the Video PIVC',
        contentStatus: false,
        active_icon:activeImg_7,
        img: img_7,
        content: [
            {
                id: 1,
                msg: '',
                heading: '',
                subHeading: '',
            },
        ]
    },
    {
        id: 4,
        image: '',
        heading: 'Add Non-Medical',
        subHeading: 'Yet to start',
        completed: false,
        dummyContent: 'Dummy Content',
        contentStatus: false,
        active_icon:activeImg_8,
        img: img_8,
        content: [
            {
                id: 1,
                msg: '',
                heading: '',
                subHeading: '',
            },
        ]
    },
    {
        id: 5,
        image: '',
        heading: 'Revised Offer',
        subHeading: 'Yet to start',
        completed: false,
        dummyContent: 'Dummy Content',
        contentStatus: false,
        active_icon:activeImg_9,
        img: img_9,
        content: [
            {
                id: 1,
                msg: '',
                heading: '',
                subHeading: '',
            },
        ]
    },
    {
        id: 6,
        image: '',
        heading: 'Payment Requirement',
        subHeading: 'Yet to start',
        completed: false,
        dummyContent: 'Dummy Content',
        contentStatus: false,
        active_icon:activeImg_10,
        img: img_10,
        content: [
            {
                id: 1,
                msg: '',
                heading: '',
                subHeading: '',
            },
        ]
    },
    {
        id: 7,
        image: '',
        heading: 'Quality Check',
        subHeading: 'Yet to start',
        completed: false,
        dummyContent: 'Dummy Content',
        contentStatus: false,
           active_icon:activeImg_11,
        img: img_11,
        content: [
            {
                id: 1,
                msg: '',
                heading: '',
                subHeading: '',
            },
        ]
    },
    {
        id: 8,
        image: '',
        heading: 'Medical Risk Verification',
        subHeading: 'Yet to start',
        completed: false,
        dummyContent: 'Dummy Content',
        contentStatus: false,
        active_icon:activeImg_12,
        img: img_12,
        content: [
            {
                id: 1,
                msg: '',
                heading: '',
                subHeading: '',
            },
        ]
    },
    {
        id: 9,
        image: '',
        heading: 'Financial and Medical Risk Verification',
        subHeading: 'Yet to start',
        completed: false,
        dummyContent: 'Dummy Content',
        contentStatus: false,
        active_icon:activeImg_13,
        img: img_13,
        content: [
            {
                id: 1,
                msg: '',
                heading: '',
                subHeading: '',
            },
        ]
    },
    {
        id: 10,
        image: '',
        heading: 'Policy Status',
        subHeading: 'Yet to start',
        completed: false,
        dummyContent: 'Dummy Content',
        contentStatus: false,
        active_icon:activeImg_15,
        img: img_15,
        content: [
            {
                id: 1,
                msg: '',
                heading: '',
                subHeading: '',
            },
        ]
    },
]

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

