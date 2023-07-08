const email = {
  autoCapitalize: 'none',
  autoCompleteType: 'email',
  autoCorrect: false,
  keyboardType: 'email-address',
  placeholder: 'E-mailadres',
  textContentType: 'emailAddress',
};

const password = {
  autoCapitalize: 'none',
  autoCompleteType: 'password',
  autoCorrect: false,
  secureTextEntry: true,
  textContentType: 'password',
  placeholder: 'Wachtwoord',
};

const newPassword = {
  ...password,
  textContentType: 'newPassword',
};

const search = {
  returnKeyType: 'search',
};

const oneTimeCode = {
  enablesReturnKeyAutomatically: true,
  keyboardType: 'number-pad',
  label: 'Bevestigingscode',
  placeholder: 'Bijvoorbeeld 552313',
  textContentType: 'oneTimeCode',
};

export function preset(type: fieldTypes) {
  switch (type) {
    case 'email': return email;
    case 'password': return password;
    case 'newPassword': return newPassword;
    case 'oneTimeCode': return oneTimeCode;
    case 'search': return search;
    default: return {};
  }
}

export type fieldTypes = 'email'|
'password'|
'newPassword'|
'oneTimeCode'|
'search';
