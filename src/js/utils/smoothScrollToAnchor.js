const smoothScrollToAnchor = () => {
  const links = [...document.querySelectorAll('a[href^="#"]')];
  if (!links.length) return false;

  links.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      if (this.getAttribute('href').length > 1) {
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      }


    });
  });
}

export default smoothScrollToAnchor;
