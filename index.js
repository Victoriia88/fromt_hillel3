function extractPhoneNumber(input) {
  const phoneNumberRegex =
    /^(\+?380)[- ]?(\d{2})[- ]?(\d{3})[- ]?(\d{2})[- ]?(\d{2})$/;
  const match = input.match(phoneNumberRegex);

  if (match) {
    return match.slice(1).join("").replace(/\s/g, "");
  } else {
    return null;
  }
}
