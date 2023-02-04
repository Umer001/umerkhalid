import React from "react";
import { PhoneNumberFormat, PhoneNumberUtil } from "google-libphonenumber";
import { TextInput } from "flowbite-react";
const PhoneNumber = ({ phoneNumber, countryCode, handleChange }) => {
  const phoneUtil = PhoneNumberUtil.getInstance();
  const parsedNumber = phoneUtil.parseAndKeepRawInput(phoneNumber, countryCode);
  const formattedNumber = phoneUtil.format(
    parsedNumber,
    PhoneNumberFormat.INTERNATIONAL
  );

  return (
    <TextInput
      id="phone"
      placeholder="+92-333-XXXXXXX"
      name="phone"
      required={true}
      onChange={handleChange}
      value={formattedNumber}
    />
  );
};

export default PhoneNumber;
