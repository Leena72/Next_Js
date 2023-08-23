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

export const scrollToTop = (id) => {
  const element = document.getElementById(id);
  if (element) {
    setTimeout(() => {
      element.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    }, 800);
  }
}

// image renderAAccordion

export const HomePageImage = (status, isActive) => {
  switch (status) {
    case 'QUOTE':
      return isActive ? activeImg_1 : img_1
    case 'MEDICAL_REQUIREMENT':
      return isActive ? activeImg_7 : img_7
    case 'Revised_Offer':
      return isActive ? activeImg_9 : img_9
    case 'PAYMENT_REQUIREMENT':
      return isActive ? activeImg_10 : img_10
    case 'MEDICAL_RISK_VERIFICATION':
      return isActive ? activeImg_12 : img_12
    case 'FINANCIAL_AND_MEDICAL_RISK_VERIFICATION':
      return isActive ? activeImg_13 : img_13
    case 'ADDITIONAL_NON_MEDICAL_REQUIREMENT':
      return isActive ? activeImg_8 : img_8
    case 'Quality_Check':
      return isActive ? activeImg_11 : img_11
    case 'POLICY':
      return isActive ? activeImg_15 : img_15
    case 'PAYMENT':
      return isActive ? activeImg_10 : img_10
    case 'PROPOSAL':
      return isActive ? activeImg_2 : img_22
    case 'PROPOSAL_SUBMISSION':
      return isActive ? activeImg_2 : img_22
    default:
      break;
  }
}

// date format 

export const dateFormat = (createdOn) => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  let date = createdOn.slice(0, 10)
  let reverseDate = date.split('-').reverse().join('-')
  let dd = reverseDate.slice(0, 2);
  let mmr = parseInt(reverseDate.slice(3, 5)) - 1
  let mm = monthNames[mmr];
  let yy = reverseDate.slice(6, 10)
  let time = createdOn.slice(11)
  let newDateFormat = dd + ' ' + mm + ', ' + yy + ' | ' + time
  return newDateFormat
}
