import { faker } from '@faker-js/faker'
import { getRandomAddress, getFullName } from '../fakerHelpers'

faker.locale = 'ru'

export const AccountRequestsMock = [
  {
    key: faker.datatype.uuid(),
    name: 'Голубев Егор Сергеевич',
    age: 20,
    phone: faker.phone.phoneNumber('+7-(###)-###-##-##'),
    address: getRandomAddress(),
    status: 'Нет гражданства РФ',
  },
  {
    key: faker.datatype.uuid(),
    name: 'Лебедева Татьяна Сергеевна',
    age: 20,
    phone: faker.phone.phoneNumber('+7-(###)-###-##-##'),
    address: getRandomAddress(),
    status: 'Незаконная деятельность на территории РФ',
  },
  {
    key: faker.datatype.uuid(),
    name: 'Смурыгин Егор Алексеевич',
    age: 20,
    phone: faker.phone.phoneNumber('+7-(###)-###-##-##'),
    address: getRandomAddress(),
    status: 'Гражданин РФ',
  },
]

for (let i = 0; i < 7; i++) {
  AccountRequestsMock.push({
    key: faker.datatype.uuid(),
    name: getFullName(),
    age: 20,
    phone: faker.phone.phoneNumber('+7-(###)-###-##-##'),
    address: getRandomAddress(),
    status: 'Гражданин РФ',
  })
}
