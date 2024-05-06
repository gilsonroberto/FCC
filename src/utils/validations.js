export function validateName(value) {
  return value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
}

export function formatedCPF (value) {
  let cpf = value.replace(/\D/g, '')
  let formated = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

  return formated
}

export function validateCPF (strCPF) {
  let cpf = strCPF.replace(/\D/g, '')
    if (cpf === null) {
      return false
    }
    if (cpf.length !== 11) {
      return false
    }
    if (
      cpf === '00000000000' ||
      cpf === '11111111111' ||
      cpf === '22222222222' ||
      cpf === '33333333333' ||
      cpf === '44444444444' ||
      cpf === '55555555555' ||
      cpf === '66666666666' ||
      cpf === '77777777777' ||
      cpf === '88888888888' ||
      cpf === '99999999999'
    ) {
      return false
    }
    let numero = 0
    let caracter = ''
    let numeros = '0123456789'
    let j = 10
    let somatorio = 0
    let resto = 0
    let digito1 = 0
    let digito2 = 0
    let cpfAux = ''
    cpfAux = cpf.substring(0, 9)
    for (let i = 0; i < 9; i++) {
      caracter = cpfAux.charAt(i)
      if (numeros.search(caracter) === -1) {
        return false
      }
      numero = Number(caracter)
      somatorio = somatorio + numero * j
      j--
    }
    resto = somatorio % 11
    digito1 = 11 - resto
    if (digito1 > 9) {
      digito1 = 0
    }
    j = 11
    somatorio = 0
    cpfAux = cpfAux + digito1
    for (let i = 0; i < 10; i++) {
      caracter = cpfAux.charAt(i)
      numero = Number(caracter)
      somatorio = somatorio + numero * j
      j--
    }
    resto = somatorio % 11
    digito2 = 11 - resto
    if (digito2 > 9) {
      digito2 = 0
    }
    cpfAux = cpfAux + digito2
    if (cpf !== cpfAux) {
      return false
    } else {
      return true
    }
}

export function validateRG (value) {
  let rg = value.replace(/\D/g, '');

  if (rg.length >= 3 && rg.length <= 5) {
    rg = rg.replace(/(\d{2})/, '$1.');
  } else if (rg.length >= 6 && rg.length <= 8) {
    rg = rg.replace(/(\d{2})(\d{3})/, '$1.$2.');
  } else if (rg.length >= 9 && rg.length <= 10) {
    rg = rg.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2.$3-');
  }

  return rg;
}

export function validateOrgaoExpedidor (value) {
  return value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
}

export function validateUF (value) {
  return value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
}

export function validateUfEnd (value) {
  return value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
}

export function validateCep (value) {
  let cep = value.replace(/\D/g, '');
  cep = cep.replace(/(\d{5})(\d{2})/, '$1-$2');

  return cep
}

export function validateNumber (value) {
  return value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
}