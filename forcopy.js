///Decode Phone Number and Email to protect against scrappers (same method as javas.js)
(function () {
  const decode = (s) => atob(s);

  const email = decode("cnlhbmhhcnJpc29ubWV5ZXJAZ21haWwuY29t");
  const phone = decode("KDYxMCkgMzA0LTMyMjQ=");

  const emailLink = document.getElementById("email-link");
  emailLink.href = `mailto:${email}`;
  emailLink.textContent = email;

  const phoneLink = document.getElementById("phone-link");
  phoneLink.href = `tel:+1${phone.replace(/\D/g, "")}`;
  phoneLink.textContent = phone;
})();
