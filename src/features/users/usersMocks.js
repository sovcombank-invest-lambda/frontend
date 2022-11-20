import { faker } from '@faker-js/faker'
import { getFullName } from '../fakerHelpers'

faker.locale = 'ru'

export function generateUsersMock() {
  let users = []

  for (let i = 0; i < 10; i++) {
    let img = faker.image.cats(undefined, undefined, true)
    while (img === 'https://loremflickr.com/640/480/cats?lock=58815') {
      img = faker.image.cats(undefined, undefined, true)
    }

    users.push({
      id: faker.datatype.uuid(),
      name: getFullName(),
      statistics: '-',
      requisites: '-',
      actives: '-',
      number: faker.phone.phoneNumber('+7-(###)-###-##-##'),
      avatar: img,
    })
  }

  return users
}
