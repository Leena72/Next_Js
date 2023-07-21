export const scrollToTop=(id)=>{
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